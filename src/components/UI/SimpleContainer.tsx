import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const SimpleContainer: React.FC = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters={true}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-between",
            my: 5,
          }}
        >
          {children}
        </Box>
      </Container>
    </>
  );
};
export default SimpleContainer;
