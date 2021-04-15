import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const initialTheme = localStorage.theme || "light";

  const [theme, setTheme] = useState(initialTheme);

  const colorTheme = theme === "light" ? "dark" : "light";
  useEffect(() => {
    const root = window.document.documentElement;

    const body = window.document.body;
    body.classList.add(`${theme === "dark" ? "bg-gray-900" : "bg-white"}`);
    body.classList.remove(`${theme === "light" && "bg-gray-900"}`);

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};
