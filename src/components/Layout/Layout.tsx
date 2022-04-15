import React from "react";
import Seo from "./Seo/index";
import Header from "./Header";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import SimpleContainer from "../UI/SimpleContainer";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "Montserrat"].join(","),
  },
});
theme = responsiveFontSizes(theme);

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default Layout;
//TODO go full MUI
