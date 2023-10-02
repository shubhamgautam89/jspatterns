/*
 * provider pattern is very specific to react.
 * instead of prop drilling when one prop is passed to nested children
 * A context-provider is cleaner way to pass props to children
 */
import React, { useContext, useState } from "react";

const themes = {};

export const ThemeContext = useContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function App() {
  <div>
    <ThemeProvider>{/* consumer children will come here.*/}</ThemeProvider>
  </div>;
}
