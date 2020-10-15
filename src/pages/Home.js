import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import PrivateProjects from "../components/projects/PrivateProjects";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Intro />
      <span id="projects">
        <PrivateProjects />
      </span>
    </React.Fragment>
  );
}

export default Home;
