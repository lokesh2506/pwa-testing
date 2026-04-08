"use client";

import { useTheme } from "@/hooks/theme/useTheme";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useTheme(); // initialize theme

  return <>{children}</>;
};

export default ThemeProvider;