import React from "react";
import "../styles/pages/About.css";
import himanshu from "../resources/himanshu.jpeg";

function About() {
  return (
    <React.Fragment>
      <div className="about_base">
        <div className="about_base_left">
          <img src={himanshu} alt="himanshu sandha" />
          <br />
          Himanshu sandha
          <br />
          @himanshusandha
        </div>
        <div className="about_base_right">
          <div>
            Hello{" "}
            <span role="img" aria-label="wavingHand">
              👋
            </span>{" "}
            I'm Himanshu Sandha
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
