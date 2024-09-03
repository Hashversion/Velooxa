"use client";

import { useEffect, useState } from "react";
import s from "./theme-button.module.scss";
import { useTheme } from "next-themes";

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button className={s.btn} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "dark" : "light"}
      </button>
    </>
  );
};
