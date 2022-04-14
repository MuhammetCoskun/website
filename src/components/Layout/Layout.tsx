import React from "react";
import Seo from "./Seo/index";
import Header from "./Header";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import SimpleContainer from "../UI/SimpleContainer";

const Layout: React.FC = ({ children }) => {
  return (
    <div className={classes["page-container"]}>
      <Seo />
      <div className={classes["content-wrap"]}>
        <Header />
        <main>
          <SimpleContainer>{children}</SimpleContainer>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
