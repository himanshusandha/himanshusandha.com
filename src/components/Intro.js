import React, { useState, useEffect } from "react";
import "../styles/components/Intro.css";
import avtar from "../resources/avtar.png";

function Intro() {
  const exploringString = [
    <code style={{ color: "var(--secondaryTextColor)" }}>
      <div className="intro_content_lang_tag_up">{"JS"}</div>
      {"{ Javascript() => {} }"}
    </code>,
    <code style={{ color: "var(--secondaryTextColor)" }}>
      <div className="intro_content_lang_tag_up">{"useState"}</div>
      {"< React /> ⚛️"}
    </code>,
    <code style={{ color: "var(--secondaryTextColor)" }}>
      <div className="intro_content_lang_tag_up">{"native"}</div>
      {"< React Native /> ⚛️📱"}
    </code>,
    <code style={{ color: "var(--secondaryTextColor)" }}>
      <div className="intro_content_lang_tag_up">{"schema"}</div>
      {"{ GraphQL } ✡️"}
    </code>,
    <code style={{ color: "var(--secondaryTextColor)" }}>
      <div className="intro_content_lang_tag_up">{"server"}</div>
      {"< Node.js /> 🌐"}
    </code>,
  ];

  const [activeString, setActiveString] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveString((activeString + 1) % exploringString.length);
    }, 2500);
    return () => {
      clearInterval(interval);
    };
  }, [activeString, exploringString]);

  return (
    <React.Fragment>
      <div className="intro_base">
        <div className="intro_content">
          <div className="intro_content_name">
            <div className="intro_content_tag_up">{"<h1>"}</div>
            Hello{" "}
            <span role="img" aria-label="wavingHand">
              👋
            </span>{" "}
            I'm
            <br />
            Himanshu Sandha
            <div className="intro_content_tag_down">{"</h1>"}</div>
          </div>
          <div className="intro_content_tech">{"<Web Developer />"}</div>
          <div className="intro_content_location">
            From India{" "}
            <span role="img" aria-label="flagIndian">
              🇮🇳
            </span>
          </div>
          <div className="intro_content_lang">
            exploring <br />
            {exploringString[activeString]}
          </div>
          <div className="intro_content_company">
            Founder @fregmaa
            <br />
            Ex TCS'er
          </div>
          <div className="intro_content_mail">himanshujsandha@gmail.com</div>
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
