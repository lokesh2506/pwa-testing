import { useEffect, useState } from "react";

const formatDayAgo = (dateString: string): string => {
  const now = new Date();
  const past = new Date(dateString);

  // ❌ invalid date safeguard
  if (isNaN(past.getTime())) return "invalid date";

  // normalize time (remove time part)
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const pastDate = new Date(past.getFullYear(), past.getMonth(), past.getDate());

  const diffInDays = Math.floor(
    (today.getTime() - pastDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays < 0) return "today"; // future fallback
  if (diffInDays === 0) return "today";
  if (diffInDays === 1) return "1 day ago";
  if (diffInDays < 365) return `${diffInDays} days ago`;

  const years = Math.floor(diffInDays / 365);
  return `${years} year${years > 1 ? "s" : ""} ago`;
};

export const useTimeAgo = (dateString: string) => {
  const [timeAgo, setTimeAgo] = useState(() =>
    formatDayAgo(dateString)
  );

  useEffect(() => {
    // update once per day (midnight safe enough)
    const interval = setInterval(() => {
      setTimeAgo(formatDayAgo(dateString));
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [dateString]);

  return timeAgo;
};