"use client";

import { createContext, useState } from "react";
import { ThemeConsumer } from "styled-components";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setmode] = useState("dark");

  const toggleTheme = () => {
    setmode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
