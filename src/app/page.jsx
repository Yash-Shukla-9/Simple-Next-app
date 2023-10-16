"use client";
import React from "react";
import css from "./home.module.css";
import Image from "next/image";
import rightdiv from "../../public/rightlogo.png";
import Button from "@/components/Button/Button";

const Home = () => {
  return (
    <div className={css.conatiner}>
      <div className={css.left}>
        <div className={css.text}>
          Better desgin and <br />
          Blogs for your digital products.
        </div>

        <div className={css.desc}>
          Turning your idea into Reality. <br />
          We bring together the teams.
        </div>

        <Button text="See Our Works" url="/about" />
      </div>

      <div className={css.right}>
        <div className={css.imgdiv}>
          <Image src={rightdiv} width={500} height={500} className={css.img} />
        </div>
      </div>
    </div>
  );
};

export default Home;
