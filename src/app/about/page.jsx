import Image from "next/image";
import React from "react";
import css from "./about.module.css";
import aboutimg from "../../../public/about-us.png";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={css.container}>
      <div className="img">
        <Image src={aboutimg} width={800} height={400} />
      </div>
      <div className={css.textcontainer}>
        <div className={css.text1}>
          <h1 className={css.head}>What we do</h1>
          <p className={css.desc}>
            At our company, we are dedicated to providing top-quality products
            and services to our customers. With a team of experts in their
            respective fields, we strive to meet your needs and exceed your
            expectations. Our services include:
          </p>
          <ul className={css.list}>
            <li>Product Development</li>
            <li>Consulting Services</li>
            <li>Customer Support</li>
            <li>Quality Assurance</li>
          </ul>
        </div>

        <div className={css.text1}>
          <h1 className={css.head}>What are we</h1>
          <p className={css.desc}>
            We are a forward-thinking organization committed to innovation and
            excellence. Our mission is to make a positive impact on the world by
            delivering cutting-edge solutions and pushing the boundaries of
            what's possible. Our core values include:
          </p>
          <ul className={css.list}>
            <li>Innovation</li>
            <li>Sustainability</li>
            <li>Customer-Centric Approach</li>
            <li>Team Collaboration</li>
          </ul>
          <Button url="/contact" text="Contact us" />
        </div>
      </div>
    </div>
  );
};

export default About;
