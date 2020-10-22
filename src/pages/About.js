import React from "react";
import "../styles/pages/About.css";
import himanshu from "../resources/himanshu.PNG";
import Github_logo from "../resources/Github_logo.svg";
import Twitter_logo from "../resources/Twitter_logo.svg";
import LinkedIn_logo from "../resources/LinkedIn_logo.svg";

function About() {
  return (
    <React.Fragment>
      <div className="about_base">
        <div className="about_base_left">
          <img src={himanshu} alt="himanshu sandha" />
          <p className="about_base_left_bigName">Himanshu sandha</p>
          <p className="about_base_left_smallName">@himanshusandha</p>
          <a
            href="https://github.com/himanshusandha"
            target="_blank"
            rel="noopener noreferrer"
            className="about_base_left_link_tag"
          >
            <img src={Github_logo} alt="Github" />
          </a>
          <a
            href="https://twitter.com/himanshusandha"
            target="_blank"
            rel="noopener noreferrer"
            className="about_base_left_link_tag"
          >
            <img src={Twitter_logo} alt="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-sandha-839819154"
            target="_blank"
            rel="noopener noreferrer"
            className="about_base_left_link_tag"
          >
            <img src={LinkedIn_logo} alt="LinkedIn" />
          </a>
        </div>
        <div className="about_base_right">
          <div className="about_base_right_title">
            Hello,{" "}
            <span role="img" aria-label="wavingHand">
              👋
            </span>{" "}
            I'm Himanshu Sandha
          </div>
          <p>
            I'm a Web developer fond of exploring web stacks to build
            performance and well designed web apps. Love to develop stupids
            stuff and dono it works{" "}
            <span role="img" aria-label="handCoveredMouth">
              🤭
            </span>{" "}
            . Love to listen music, watch web series {"&"} movies, shoot
            photo's, scroll through social apps (twitter, whatsapp).
          </p>
          <p>Tech Stack:</p>
          <p>
            ➜ Javascript
            <br />
            ➜ GraphQL
            <br />
            ➜ Node.js
            <br />
            ➜ React
            <br />
          </p>
          <p>
            Reaching me out just takes the time it takes to cook a maggie.
            <br />
            Contact through Twitter, LinkedIn, Github or just say "Hello..." on{" "}
            <a
              href="mailto:himanshujsandha@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="about_base_left_link_tag"
            >
              himanshujsandha@gmail.com
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
