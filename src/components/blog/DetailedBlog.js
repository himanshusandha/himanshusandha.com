import React from "react";
import "../../styles/components/blog/DetailedBlog.css";

function DetailedBlog(props) {
  return (
    <React.Fragment>
      <div className="detailedBlog_base">
        <h1 className="detailedBlog_title">{props.data.title}</h1>
        <div className="detailedBlog_tags">{props.data.tags}</div>
        <p className="detailedBlog_small">
          {props.data.author} &nbsp;&nbsp;&nbsp;&nbsp;
          <span role="img" aria-label="clock">
            &#128349;
          </span>{" "}
          {new Date(props.data.createDate).toDateString()}
        </p>
        <img
          className="detailedBlog_image"
          src={props.data.image}
          alt="blogimage"
        />
        <p>Photo by {props.data.imageSrcName}</p>
        <div className="detailedBlog_content">{props.data.body}</div>
      </div>
    </React.Fragment>
  );
}

export default DetailedBlog;
