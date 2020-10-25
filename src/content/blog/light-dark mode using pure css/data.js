import React from "react";
import image from "./image.png";

export const data = {
  html_url: "/blog/light-dark-mode-using-pure-css",
  title: "Light-Dark mode using pure css",
  author: "Himanshu Sandha",
  createDate: new Date("24 October 2020"),
  subTitle: "Toogling through light and dark mode in react using pure css",
  image: image,
  imageSrcName: "Himanshu Sandha",
  tags: tags(),
  body: body(),
};

function tags() {
  return (
    <React.Fragment>
      <div>css3</div>
      <div>css variables</div>
      <div>light mode</div>
      <div>dark mode</div>
    </React.Fragment>
  );
}

function body() {
  return (
    <React.Fragment>
      <p>
        While building the web apps in current time user's prefer to have dark
        mode for the web apps they use, so for a developer it becomes important
        to have dark mode in his/her web app to attract the user's to use the
        app.
      </p>
      <p>
        There are many ways to implement dark mode with light mode and toogle
        between them as per user's need. If you are finding a way to implement
        the same in your web project and want it to be through pure css you have
        landed to the right place.
      </p>
      <p>
        Firstly, we would create css variables in the base css file for{" "}
        <code>
          <strong>html</strong>
        </code>{" "}
        attribute
      </p>
    </React.Fragment>
  );
}
