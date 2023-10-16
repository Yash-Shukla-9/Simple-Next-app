import React from "react";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import css from "./footer.module.css";

const Footer = () => {
  return (
    <div className={css.container}>
      <div className="left">
        <div>@2023 All Rights Reserved</div>
      </div>

      <div className={css.right}>
        <FaFacebookSquare className="fb" />
        <ImWhatsapp className="wp" />
        <FaLinkedinIn className="linkden" />
      </div>
    </div>
  );
};
export default Footer;
