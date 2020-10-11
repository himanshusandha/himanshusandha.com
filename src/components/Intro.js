import React from "react";
import "../styles/components/Intro.css";
import avtar from "../resources/avtar.png";

function Intro() {
  return (
    <React.Fragment>
      <div className="intro_base">
        <div className="intro_content">
          <h1>
            Hello{" "}
            <span role="img" aria-label="wavingHand">
              👋
            </span>{" "}
            I'm
            <br />
            Himanshu Sandha
          </h1>
          {"<Web Developer />"}
          <br />
          From India{" "}
          <span role="img" aria-label="flagIndian">
            🇮🇳
          </span>
          <br />
          exploring Javascript, React, React Native, GraphQL, Node.js
          <br />
          Founder @fregmaa
          <br />
          Ex TCS'er
          <br />
          himanshujsandha@gmail.com
        </div>
        <img src={avtar} alt="avtar" className="intro_avtar" />
      </div>
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

export default Intro;
