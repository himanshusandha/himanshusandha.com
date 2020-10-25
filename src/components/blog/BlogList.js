import React from "react";
import "../../styles/components/blog/BlogList.css";
import dataObject from "../../content/blog/index";
import { Link } from "react-router-dom";

function BlogList() {
  return (
    <React.Fragment>
      <div className="blogList_base">
        <div className="blogList_title">
          <div className="blogList_title_tag_up">{"<h1>"}</div>
          BLOG
          <div className="blogList_title_tag_down">{"</h1>"}</div>
        </div>
        <div className="blogList_list">
          {dataObject.map((fieldValue, idx) => {
            return (
              <div key={idx}>
                <div className="blogList_list_individual">
                  <Link
                    to={fieldValue.data.html_url}
                    className="blogList_list_individual_left"
                  >
                    <p className="blogList_list_individual_left_title">
                      {fieldValue.data.title}
                    </p>
                    <p className="blogList_list_individual_left_small">
                      {fieldValue.data.author} &nbsp;&nbsp;&nbsp;&nbsp;
                      <span role="img" aria-label="clock">
                        &#128349;
                      </span>{" "}
                      {new Date(fieldValue.data.createDate).toDateString()}
                    </p>
                    <p className="blogList_list_individual_left_subTitle">
                      {fieldValue.data.subTitle}
                    </p>
                    <p>Read ➜</p>
                  </Link>
                  <img
                    src={fieldValue.data.image}
                    alt="logo"
                    className="blogList_list_individual_right"
                  />
                </div>
                <div className="blogList_list_individual_hr" />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default BlogList;
