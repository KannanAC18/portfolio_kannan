import React, { createContext, useState } from "react";
import { Theme, ThemeContextProps } from "../interface";

//Create context
export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

//Provide the context
const ThemeContextProvider = ({ children }: any) => {
  const savedTheme = (localStorage.getItem("theme") as Theme) || null;
  const [theme, setTheme] = useState<Theme>(savedTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"; // Toggle logic
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save to local storage
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//Consuming the context
export default ThemeContextProvider;
