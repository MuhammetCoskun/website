import React from "react";
import ProjectCard from "../../src/components/UI/ProjectCard";
import classes from "./Projects.module.css";

const dummyProject = {
  id: "dummy-id",
  title: "DUMMY_APP",
  techs: "React, NextJS, TypeScript",
  codeLink: "www.codelink.com",
  appLink: "www.applink.com",
};
const Projects: React.FC = () => {
  return (
    <>
      <h1>
        <strong>My Projects</strong>
      </h1>
      <div className={classes.container}>
        <ProjectCard {...dummyProject} />
        <ProjectCard {...dummyProject} />
        <ProjectCard {...dummyProject} />
        <ProjectCard {...dummyProject} />
      </div>
    </>
  );
};

export default Projects;
