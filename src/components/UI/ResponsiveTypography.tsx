import * as React from "react";
import { Variant } from "@mui/material/styles/createTypography";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

let theme = createTheme({
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "Montserrat"].join(","),
  },
});
theme = responsiveFontSizes(theme);

const ResponsiveTypography: React.FC<{ variant: Variant }> = ({
  variant,
  children,
}) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant={variant}>{children}</Typography>
      </ThemeProvider>
    </div>
  );
};
export default ResponsiveTypography;
//TODO Pass Typography props to ResponsiveTypography
