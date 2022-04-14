import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "Montserrat"].join(","),
  },
});

const ProjectCard: React.FC<{
  title: string;
  techs: string;
  codeLink: string;
  appLink: string;
}> = ({ title, techs, codeLink, appLink }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 500, minWidth: "40%", m: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <strong>{title}</strong> {/* {title}*/}
          </Typography>
          <Typography variant="body1" color="text.primary">
            {techs}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            sx={{
              my: 2,
              color: "#712B75",
              ":hover": {
                color: "#712B75",
              },
            }}
          >
            <strong>CODE</strong> {/* {codeLink}*/}
          </Button>
          <Button
            size="small"
            sx={{
              my: 2,
              color: "#712B75",
              ":hover": {
                color: "#712B75",
              },
            }}
          >
            <strong>APP</strong> {/* {appLink}*/}
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default ProjectCard;
