import React from "react";
import classes from "./HomePageContent.module.css";

const HomePageContent: React.FC = () => {
  return (
    <div className={classes["main-body"]}>
      <div>
        <h1>
          <strong>Hi, I am Muhammet Coskun!</strong>
        </h1>
        <p>Front-end developer.</p>
      </div>
    </div>
  );
};

export default HomePageContent;
