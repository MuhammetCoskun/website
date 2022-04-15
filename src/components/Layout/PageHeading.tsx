import React from "react";
import usePageTitle from "../../hooks/usePageTitle";
import Typography from "@mui/material/Typography";

const PageHeading: React.FC = ({ children }) => {
  const pageTitle = usePageTitle();
  return (
    <Typography variant="h3" sx={{ my: 5, fontWeight: "600" }}>
      {pageTitle} {children}
    </Typography>
  );
};

export default PageHeading;
