import React from "react";
import "../styles/pages/Home.css";
import Intro from "../components/Intro";
import PrivateProjects from "../components/projects/PrivateProjects";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <Intro />
      <span id="projects">
        <PrivateProjects />
        <Link to="/projects" className="home_link_tag">
          Let's have a look at all the Projects ➜
        </Link>
      </span>
    </React.Fragment>
  );
}

export default Home;
