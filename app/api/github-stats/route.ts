import { NextResponse } from "next/server";

// Cache the response for an hour so we don't hammer GitHub's API on every
// page load. This also means the GITHUB_TOKEN never has to leave the server.
export const revalidate = 3600;

interface ContributionsCollection {
  totalCommitContributions: number;
  restrictedContributionsCount: number;
}

interface GraphQLResponse {
  data?: {
    user?: {
      contributionsCollection: ContributionsCollection;
    } | null;
  };
  errors?: { message: string }[];
}

interface ContributionDay {
  date: string;
  contributionCount: number;
  weekday: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface CalendarGraphQLResponse {
  data?: {
    user?: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: ContributionWeek[];
        };
      };
    } | null;
  };
  errors?: { message: string }[];
}

const START_YEAR = 2020;

async function fetchYearCommits(username: string, token: string, year: number) {
  const query = `
    query ($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          totalCommitContributions
          restrictedContributionsCount
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        username,
        from: `${year}-01-01T00:00:00Z`,
        to: `${year}-12-31T23:59:59Z`,
      },
    }),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`GitHub API responded with status ${response.status}`);
  }

  const json: GraphQLResponse = await response.json();

  if (json.errors?.length) {
    throw new Error(json.errors[0].message);
  }

  const collection = json.data?.user?.contributionsCollection;

  return (
    (collection?.totalCommitContributions ?? 0) +
    (collection?.restrictedContributionsCount ?? 0)
  );
}

async function fetchContributionCalendar(username: string, token: string) {
  const to = new Date();
  const from = new Date(to);
  from.setUTCMonth(from.getUTCMonth() - 9);

  const query = `
    query ($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                weekday
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        username,
        from: from.toISOString(),
        to: to.toISOString(),
      },
    }),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`GitHub API responded with status ${response.status}`);
  }

  const json: CalendarGraphQLResponse = await response.json();

  if (json.errors?.length) {
    throw new Error(json.errors[0].message);
  }

  return (
    json.data?.user?.contributionsCollection.contributionCalendar ?? {
      totalContributions: 0,
      weeks: [],
    }
  );
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME || "dexter-ifti";

  if (!token) {
    return NextResponse.json(
      { error: "GitHub token is not configured on the server." },
      { status: 500 },
    );
  }

  try {
    const currentYear = new Date().getFullYear();
    const years = Array.from(
      { length: currentYear - START_YEAR + 1 },
      (_, i) => START_YEAR + i,
    );

    const [yearlyCounts, calendar] = await Promise.all([
      Promise.all(years.map((year) => fetchYearCommits(username, token, year))),
      fetchContributionCalendar(username, token),
    ]);

    const yearly = years.reduce<Record<number, number>>((acc, year, i) => {
      acc[year] = yearlyCounts[i];
      return acc;
    }, {});

    const totalCommits = yearlyCounts.reduce((sum, count) => sum + count, 0);

    return NextResponse.json({ username, totalCommits, yearly, calendar });
  } catch (error) {
    console.error("Error fetching GitHub commits:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch GitHub stats.",
      },
      { status: 502 },
    );
  }
}
