How to Add GitHub Contribution Stats to Your React App
Want to showcase your GitHub activity in your React portfolio? In this tutorial, I'll show you how to create a React component that displays your total GitHub contributions using GitHub's GraphQL API, complete with efficient caching. Let's build something cool! 🚀

What We'll Build
We'll create a React component that:

Fetches your GitHub contributions from 2020 to present
Includes both public and private contributions
Implements client-side caching to optimize performance
Shows a loading state while fetching
Handles errors gracefully
Prerequisites
Before we start, you'll need:

A GitHub Personal Access Token (with read:user scope)
A React project set up (using Create React App, Next.js, or your preferred setup)
Basic knowledge of React hooks and async operations
Step 1: Setting Up the GitHub Token
First, create a .env file in your project root and add your GitHub token:

NEXT_PUBLIC_GITHUB_TOKEN=your_github_token_here
 
Step 2: Creating the Data Fetching Utility
Create a new file called githubApi.js:

export async function fetchGithubCommits(username) {
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const CACHE_KEY = `github-commits-${username}`;
  const CACHE_TTL = 3600; // 1 hour in seconds

  if (!GITHUB_TOKEN) {
    console.error("No GitHub token found!");
    throw new Error("GitHub token is required");
  }

  const cachedData = getCachedData(CACHE_KEY);
  if (cachedData) {
    return cachedData.value;
  }

  try {
    const currentYear = new Date().getFullYear();
    const startYear = 2020;
    let totalCommits = 0;

    for (let year = startYear; year <= currentYear; year++) {
      const query = `
        query($username: String!, $from: DateTime!, $to: DateTime!) {
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
          Authorization: `Bearer ${GITHUB_TOKEN}`,
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
      });

      const data = await response.json();
      if (data.errors) {
        throw new Error(data.errors[0].message);
      }

      const yearCommits =
        (data.data?.user?.contributionsCollection?.totalCommitContributions || 0) +
        (data.data?.user?.contributionsCollection?.restrictedContributionsCount || 0);

      totalCommits += yearCommits;
    }

    setCachedData(CACHE_KEY, totalCommits, CACHE_TTL);
    return totalCommits;
  } catch (error) {
    console.error("Error fetching GitHub commits:", error);
    throw error;
  }
}

function setCachedData(key, value, ttl) {
  const item = {
    value,
    timestamp: Date.now(),
    ttl: ttl * 1000,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function getCachedData(key) {
  try {
    const item = localStorage.getItem(key);
    if (!item) return null;

    const parsedItem = JSON.parse(item);
    const now = Date.now();

    if (now - parsedItem.timestamp > parsedItem.ttl) {
      localStorage.removeItem(key);
      return null;
    }

    return parsedItem;
  } catch {
    return null;
  }
}

export function invalidateCommitsCache(username) {
  localStorage.removeItem(`github-commits-${username}`);
}
 
Step 3: Creating the React Component
Create a new file called GitHubStats.js:

import React, { useState, useEffect } from 'react';
import { fetchGithubCommits } from './githubApi';

const GitHubStats = ({ username }) => {
  const [commits, setCommits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);
        const totalCommits = await fetchGithubCommits(username);
        setCommits(totalCommits);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  if (loading) {
    return <div>Loading GitHub stats...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="github-stats">
      <h2>GitHub Contributions</h2>
      <p>Total commits since 2020: {commits.toLocaleString()}</p>
    </div>
  );
};

export default GitHubStats;
 
Step 4: Adding Styles
Let's add some basic styling. Create GitHubStats.css:

.github-stats {
  padding: 20px;
  border-radius: 8px;
  background-color: #f6f8fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
}

.github-stats h2 {
  margin: 0 0 15px 0;
  color: #24292e;
}

.github-stats p {
  font-size: 1.2em;
  color: #586069;
}
 
Step 5: Using the Component
Now you can use the component in your app:

import GitHubStats from './GitHubStats';

function App() {
  return (
    <div className="App">
      <h1>My Developer Portfolio</h1>
      <GitHubStats username="your-github-username" />
    </div>
  );
}
 
Making it Better: Advanced Features
1. Adding a Refresh Button
Update GitHubStats.js to include a manual refresh option:

import React, { useState, useEffect } from 'react';
import { fetchGithubCommits, invalidateCommitsCache } from './githubApi';

const GitHubStats = ({ username }) => {
  // ... previous state declarations ...

  const handleRefresh = async () => {
    invalidateCommitsCache(username);
    await fetchStats();
  };

  return (
    <div className="github-stats">
      <h2>GitHub Contributions</h2>
      <p>Total commits since 2020: {commits.toLocaleString()}</p>
      <button onClick={handleRefresh} disabled={loading}>
        {loading ? 'Refreshing...' : 'Refresh Stats'}
      </button>
    </div>
  );
};
 
2. Adding Year-by-Year Breakdown
We can modify the component to show contributions per year:

const GitHubStats = ({ username }) => {
  const [yearlyStats, setYearlyStats] = useState({});
  // ... other state declarations ...

  const fetchYearlyStats = async () => {
    try {
      setLoading(true);
      setError(null);

      const currentYear = new Date().getFullYear();
      const stats = {};

      for (let year = 2020; year <= currentYear; year++) {
        const commits = await fetchGithubCommits(username, year);
        stats[year] = commits;
      }

      setYearlyStats(stats);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="github-stats">
      <h2>GitHub Contributions</h2>
      {Object.entries(yearlyStats).map(([year, count]) => (
        <p key={year}>
          {year}: {count.toLocaleString()} commits
        </p>
      ))}
    </div>
  );
};
 
Performance Tips
Caching Strategy: The current implementation caches data for an hour. Adjust the CACHE_TTL based on your needs.
Error Boundaries: Consider wrapping the component in an Error Boundary to handle unexpected errors gracefully.
Loading States: Add a skeleton loader instead of a simple "Loading..." text for better UX.
Common Issues and Solutions
CORS Issues: Make sure you're using the correct GitHub API endpoint and headers.
Token Permissions: Ensure your GitHub token has the required permissions.
Rate Limiting: Handle GitHub's API rate limits by checking the remaining rate limit in the response headers.
You now have a fully functional GitHub stats component in your React app! This implementation provides a solid foundation that you can build upon. Some ideas for enhancement:

Add more GitHub statistics (like stars, PRs, issues)
Create visual representations using charts
Add animations for loading and updates
Implement more detailed error handling
Remember to keep your GitHub token secure and never commit it to your repository. Happy coding! 🎉