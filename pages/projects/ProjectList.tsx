import React from "react";
import ProjectCard from "../../src/components/UI/ProjectCard";
import Box from "@mui/material/Box";

const dummyProject = {
  id: "dummy-id",
  title: "DUMMY_APP",
  techs: "React, NextJS, TypeScript",
  codeLink: "www.codelink.com",
  appLink: "www.applink.com",
};

const ProjectList: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <ProjectCard {...dummyProject} />
      <ProjectCard {...dummyProject} />
      <ProjectCard {...dummyProject} />
      <ProjectCard {...dummyProject} />
    </Box>
  );
};

export default ProjectList;
//TODO map real array
