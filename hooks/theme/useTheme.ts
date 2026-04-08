"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current: Theme = stored || (systemDark ? "dark" : "light") || "dark";
    document.documentElement.classList.toggle("dark", current === "dark");

    setTheme(current);
  }, []);

  const setAppTheme = (newTheme: Theme) => {
    document.documentElement.classList.toggle("dark", newTheme === "dark");

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const toggleTheme = () => {
    if (!theme) return;
    setAppTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme, setTheme: setAppTheme };
};