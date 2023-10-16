"use client";
import React, { useContext } from "react";
import css from "./Dark.module.css";
import { BsSunFill } from "react-icons/bs";
import { BiSolidMoon } from "react-icons/bi";
import { ThemeContext } from "@/context/ThemeContext";

const Darkmode = () => {
  const { toggleTheme, mode } = useContext(ThemeContext);

  return (
    <div className={css.container} onClick={toggleTheme} role="button">
      <div className={css.sun}>
        <BsSunFill />
      </div>
      <div className={css.night}>
        <BiSolidMoon />
      </div>
      <div
        className={css.ball}
        style={mode === "light" ? { left: "4px" } : { right: "4px" }}
      ></div>
    </div>
  );
};

export default Darkmode;
