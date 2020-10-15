import React from "react";
import "../../styles/components/projects/PrivateProjects.css";

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
            <div>Jay Mataji Gems</div>
            <div>React Application</div>
          </div>
          <div className="privateProjects_showcase_big_right">images</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PrivateProjects;
