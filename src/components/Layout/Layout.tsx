import React from "react";
import Navigation from "./Navigation";

const Layout: React.FC = ({ children }) => {
  return (
    <div style={{ margin: "0 10%" }}>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
