"use client";

import { useCallback, useEffect, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";

const CACHE_KEY_PREFIX = "github-commits-v3-";
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

interface ContributionDay {
  date: string;
  contributionCount: number;
  weekday: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface GithubStatsData {
  username: string;
  totalCommits: number;
  yearly: Record<string, number>;
  calendar: {
    totalContributions: number;
    weeks: ContributionWeek[];
  };
}

function readCache(username: string): GithubStatsData | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(`${CACHE_KEY_PREFIX}${username}`);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as {
      value: GithubStatsData;
      timestamp: number;
    };

    if (Date.now() - parsed.timestamp > CACHE_TTL_MS) {
      window.localStorage.removeItem(`${CACHE_KEY_PREFIX}${username}`);
      return null;
    }

    return parsed.value;
  } catch {
    return null;
  }
}

function writeCache(username: string, value: GithubStatsData) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(
    `${CACHE_KEY_PREFIX}${username}`,
    JSON.stringify({ value, timestamp: Date.now() }),
  );
}

function clearCache(username: string) {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(`${CACHE_KEY_PREFIX}${username}`);
}

function levelColorClass(count: number) {
  if (count <= 0) return "bg-neutral-200 dark:bg-neutral-800";
  if (count < 3) return "bg-amber-300 dark:bg-amber-900";
  if (count < 6) return "bg-amber-400 dark:bg-amber-700";
  if (count < 10) return "bg-amber-500 dark:bg-amber-500";
  return "bg-amber-600 dark:bg-amber-300";
}

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00Z`).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function ContributionHeatmap({ weeks }: { weeks: ContributionWeek[] }) {
  return (
    <div className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="inline-flex gap-[3px]">
        {weeks.map((week, weekIndex) => {
          const slots: (ContributionDay | null)[] = Array(7).fill(null);
          week.contributionDays.forEach((day) => {
            slots[day.weekday] = day;
          });

          const firstDay = week.contributionDays[0];
          const prevFirstDay = weeks[weekIndex - 1]?.contributionDays[0];
          const currentMonth = firstDay
            ? new Date(`${firstDay.date}T00:00:00Z`).getUTCMonth()
            : null;
          const prevMonth = prevFirstDay
            ? new Date(`${prevFirstDay.date}T00:00:00Z`).getUTCMonth()
            : null;
          const showMonthLabel =
            currentMonth !== null && currentMonth !== prevMonth;

          return (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              <span className="mb-0.5 block h-3 text-[10px] leading-3 text-neutral-500 dark:text-neutral-400">
                {showMonthLabel && currentMonth !== null
                  ? MONTH_LABELS[currentMonth]
                  : ""}
              </span>
              {slots.map((day, i) =>
                day ? (
                  <div
                    key={i}
                    title={`${day.contributionCount} contribution${
                      day.contributionCount === 1 ? "" : "s"
                    } on ${formatDate(day.date)}`}
                    className={`h-[10px] w-[10px] rounded-sm transition-colors ${levelColorClass(day.contributionCount)}`}
                  />
                ) : (
                  <div key={i} className="h-[10px] w-[10px]" aria-hidden="true" />
                ),
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const GithubStats = ({ username }: { username: string }) => {
  const [data, setData] = useState<GithubStatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(
    async (skipCache = false) => {
      setLoading(true);
      setError(null);

      if (!skipCache) {
        const cached = readCache(username);
        if (cached) {
          setData(cached);
          setLoading(false);
          return;
        }
      }

      try {
        const response = await fetch("/api/github-stats");
        const json = await response.json();

        if (!response.ok) {
          throw new Error(json.error || "Failed to fetch GitHub stats.");
        }

        setData(json);
        writeCache(username, json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong.");
      } finally {
        setLoading(false);
      }
    },
    [username],
  );

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const handleRefresh = () => {
    clearCache(username);
    fetchStats(true);
  };

  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 p-5 shadow-sm dark:shadow-none outline-none transition-colors hover:border-neutral-300 dark:hover:border-neutral-700">
      <div className="flex items-center justify-between gap-3">
        {loading ? (
          <div
            className="h-4 w-40 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800"
            aria-hidden="true"
          />
        ) : error ? (
          <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
        ) : (
          <p className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
            {data?.calendar.totalContributions.toLocaleString()} contributions
            in the last 8 months
          </p>
        )}
        <button
          type="button"
          onClick={handleRefresh}
          disabled={loading}
          aria-label="Refresh GitHub stats"
          className="shrink-0 rounded-md border border-neutral-300 dark:border-neutral-700 p-2 text-neutral-600 dark:text-neutral-300 transition-colors hover:border-neutral-400 dark:hover:border-neutral-500 hover:text-neutral-900 dark:hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FiRefreshCw className={loading ? "animate-spin" : ""} aria-hidden="true" />
        </button>
      </div>

      <div className="mt-3">
        {loading ? (
          <div
            className="h-[100px] w-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-800"
            aria-hidden="true"
          />
        ) : error || !data?.calendar ? null : (
          <>
            <ContributionHeatmap weeks={data.calendar.weeks} />
            <div className="mt-2 flex items-center justify-end gap-1 text-[10px] text-neutral-600 dark:text-neutral-400">
              <span>Less</span>
              <span className="h-[10px] w-[10px] rounded-sm bg-neutral-200 dark:bg-neutral-800" />
              <span className="h-[10px] w-[10px] rounded-sm bg-amber-300 dark:bg-amber-900" />
              <span className="h-[10px] w-[10px] rounded-sm bg-amber-400 dark:bg-amber-700" />
              <span className="h-[10px] w-[10px] rounded-sm bg-amber-500 dark:bg-amber-500" />
              <span className="h-[10px] w-[10px] rounded-sm bg-amber-600 dark:bg-amber-300" />
              <span>More</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GithubStats;
