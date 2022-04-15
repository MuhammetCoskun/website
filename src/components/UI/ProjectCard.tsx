import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProjectCard: React.FC<{
  title: string;
  techs: string;
  codeLink: string;
  appLink: string;
}> = ({ title, techs, codeLink, appLink }) => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        minWidth: "40%",
        boxShadow: 3,
        ml: 0,
        mr: 4,
        my: 2,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" sx={{ fontWeight: "600" }}>
          {title}
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
          <strong>CODE</strong> {/* {codeLink with Link}*/}
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
          <strong>APP</strong> {/* {appLink with Link}*/}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
