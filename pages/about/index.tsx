import React from "react";
import Image from "next/image";
import * as image from "./mami.jpeg";
import classes from "./about.module.css";

const About: React.FC = () => {
  return (
    <div className={classes.about}>
      <div className={classes.container}>
        <div className={classes.row}>
          <h1>
            <strong>About me,</strong>
          </h1>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ull.
            </p>
          </div>
          <div className={classes.col}>
            <Image
              src={image}
              alt="mami"
              width="250"
              height="300"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
