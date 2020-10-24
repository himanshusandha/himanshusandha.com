import React from "react";
import "../styles/pages/Home.css";
import Intro from "../components/Intro";
import PrivateProjects from "../components/projects/PrivateProjects";
import BlogList from "../components/blog/BlogList";
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
      <span id="blog">
        <BlogList />
        <Link to="/blog" className="home_link_tag">
          Let's have a look at all the Blogs ➜
        </Link>
      </span>
    </React.Fragment>
  );
}

export default Home;
