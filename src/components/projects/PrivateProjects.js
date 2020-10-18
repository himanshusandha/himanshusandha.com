import React from "react";
import "../../styles/components/projects/PrivateProjects.css";
import JayMatajiGems_image from "../../resources/JayMatajiGems_image.png";
import React_logo from "../../resources/React_logo.svg";
import GraphQL_logo from "../../resources/GraphQL_logo.svg";
import MongoDB_logo from "../../resources/MongoDB_logo.svg";
import Sass_logo from "../../resources/Sass_logo.svg";
import Supermix_image from "../../resources/Supermix_image.png";

function PrivateProjects() {
  return (
    <React.Fragment>
      <div className="privateProjects_base">
        <div className="privateProjects_title">
          <div className="privateProjects_title_tag_up">{"<h1>"}</div>
          PROJECTS
          <div className="privateProjects_title_tag_down">{"</h1>"}</div>
        </div>
        <div className="privateProjects_showcase_big">
          <div className="privateProjects_showcase_big_left">
            <div className="privateProjects_showcase_big_left_app_name">
              Jay Mataji Gems
            </div>
            <div>React Application</div>
            <div className="privateProjects_showcase_big_left_tech_tag">
              <div>
                <img src={React_logo} alt="React_logo" /> React
              </div>
              <div>
                <img src={GraphQL_logo} alt="GraphQL_logo" /> GraphQL
              </div>
              <div>
                <img src={MongoDB_logo} alt="MongoDB_logo" /> MongoDB
              </div>
              <div>
                <img src={Sass_logo} alt="Sass_logo" /> Sass
              </div>
            </div>
            <div>
              Jay Mataji Gems is a responsive web application built on React.
            </div>
            <div className="privateProjects_showcase_big_left_hr" />
          </div>
          <div className="privateProjects_showcase_big_right">
            <img src={JayMatajiGems_image} alt="Jay Mataji Gems" />
          </div>
        </div>
        <div className="privateProjects_showcase_big_medium">
          <div className="privateProjects_showcase_big">
            <div className="privateProjects_showcase_big_left">
              <div className="privateProjects_showcase_big_left_app_name">
                Supermix - The Smart Mix
              </div>
              <div>React based Website</div>
              <div className="privateProjects_showcase_big_left_tech_tag">
                <div>
                  <img src={React_logo} alt="React_logo" /> React
                </div>
              </div>
              <div>
                Visit:{" "}
                <a
                  href="https://supermix.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Supermix ➜
                </a>
              </div>
              <div>Supermix is a responsive website built on React.</div>
              <div className="privateProjects_showcase_big_left_hr" />
            </div>
            <div className="privateProjects_showcase_big_right">
              <img src={Supermix_image} alt="Supermix" />
            </div>
          </div>
          <div className="privateProjects_showcase_big_medium_moreCome">
            And much more to come.......
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PrivateProjects;
