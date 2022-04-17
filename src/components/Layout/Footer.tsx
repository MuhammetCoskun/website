import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import classes from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={classes["main-footer"]}>
      <div className={classes.container}>
        <div className={classes.row}>
          <a
            href="https://github.com/MuhammetCoskun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammet-co%C5%9Fkun-398961221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
        <div className={classes.row}>
          <p>&copy; Muhammet Coskun {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
//TODO go full MUI
