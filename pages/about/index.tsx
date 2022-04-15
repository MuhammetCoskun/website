import React from "react";
import Image from "next/image";
import * as image from "./mami.jpeg";
import PageHeading from "../../src/components/Layout/PageHeading";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          flexDirection: "row",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do //
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut //
            enim ad minim veniam, quis nostrud exercitation ull
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            justifyContent: "center",
            textAlign: "center",
            my: 2,
          }}
        >
          <Image
            src={image}
            alt="mami"
            width="250"
            height="300"
            style={{ borderRadius: "50%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
