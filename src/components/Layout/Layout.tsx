import React from "react";
import Navigation from "./Navigation";

const Layout: React.FC = ({ children }) => {
  return (
    <div style={{ marginLeft: "100px" }}>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
