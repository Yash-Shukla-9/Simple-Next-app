import React from "react";
import css from "./contact.module.css";
import Image from "next/image";
import contactimg from "../../../public/calling.png";
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div className={css.conatiner}>
      <h1 className={css.head}>Let's Keep in Touch</h1>
      <div className={css.content}>
        <div className={css.imgcon}>
          <Image src={contactimg} fill={true} className={css.img} />
        </div>

        <form className={css.form}>
          <input type="text" placeholder="Name" className={css.input} />
          <input type="text" placeholder="Email" className={css.input} />

          <textarea
            className={css.textarea}
            cols="30"
            placeholder="message"
            rows="10"
          ></textarea>

          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
