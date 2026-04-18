"use client";

import { useTheme } from "@/hooks/theme/useTheme";
import CommonButton from "@/components/buttons/CommonButton";


const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex">
      <CommonButton
          buttonStyle="flex items-center"
          content={
              <span className={`material-symbols-outlined  text-xl ${theme === "dark" ? 'text-white':'text-black'}`}>
                  {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
          }
          clickFunction={toggleTheme}  
      />
    </div>

  );
};

export default ThemeToggle;