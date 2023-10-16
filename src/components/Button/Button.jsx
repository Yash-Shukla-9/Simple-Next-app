import Link from "next/link";
import React from "react";
import css from "./button.module.css";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={css.btn}>{text}</button>
    </Link>
  );
};

export default Button;
