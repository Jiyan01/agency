import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({children}) {
  const [theme, setTheme] = useState("day");

  function toggleTheme() {
    setTheme(theme === "day" ? "night" : "day");
  }

  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

