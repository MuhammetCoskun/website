import React from "react";
import PageHeading from "../../src/components/Layout/PageHeading";
import Box from "@mui/material/Box";
import AboutPageContent from "./AboutPageContent";

const About: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <PageHeading> me</PageHeading>
      <AboutPageContent />
    </Box>
  );
};

export default About;
