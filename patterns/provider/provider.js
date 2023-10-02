/*
 * provider pattern is very specific to react.
 * instead of prop drilling when one prop is passed to nested children
 * A context-provider is cleaner way to pass props to children
 
    ** Pros: **
        - The Provider pattern/Context API makes it possible to pass data to many components, without having to manually pass it through each component layer.

    ** Cons: **
        - In some cases, overusing the Provider pattern can result in performance issues. All components that consume the context re-render on each state change.
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
