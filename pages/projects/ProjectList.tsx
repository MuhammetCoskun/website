import React from "react";
import ProjectCard from "../../src/components/UI/ProjectCard";
import classes from "./ProjectList.module.css";

const dummyProject = {
  id: "dummy-id",
  title: "DUMMY_APP",
  techs: "React, NextJS, TypeScript",
  codeLink: "www.codelink.com",
  appLink: "www.applink.com",
};

const ProjectList: React.FC = () => {
  return (
    <div className={classes.container}>
      <ProjectCard {...dummyProject} />
      <ProjectCard {...dummyProject} />
      <ProjectCard {...dummyProject} />
      <ProjectCard {...dummyProject} />
    </div>
  );
};

export default ProjectList;
//TODO map real array
