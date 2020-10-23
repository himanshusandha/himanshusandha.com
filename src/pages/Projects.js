import React from "react";
import PrivateProjects from "../components/projects/PrivateProjects";
import OpenSourceProjects from "../components/projects/OpenSourceProjects";

function Projects() {
  return (
    <React.Fragment>
      <PrivateProjects />
      <OpenSourceProjects />
    </React.Fragment>
  );
}

export default Projects;
