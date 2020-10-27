import React from "react";
import image from "./image.png";
import Code from "../../../components/Code";
import light_mode_image from "./light_mode_demo.png";
import dark_mode_image from "./dark_mode_demo.png";

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
        <span className="detailedBlog_content_highlight">html</span> tag whose
        values would be reused further everywhere(if need in nesting) in styling
        for light mode.
      </p>
      <Code
        data={
          <>
            <span className="code_base_comment">{`// index.css`}</span>
            <span>html {`{`}</span>
            <span>
              {"  "}--primaryBackgroundColor: #f5f6f7;
              <span className="code_base_comment">
                {"  "}
                {`// Light mode background color [white shade]`}
              </span>
            </span>
            <span>
              {"  "}--primaryTextColor: #424242;
              <span className="code_base_comment">
                {"  "}
                {`// Light mode text color [black shade]`}
              </span>
            </span>
            <span>{`}`}</span>
          </>
        }
      />
      <p>
        In above style code we have created css3 feature variables which we
        would assign in{" "}
        <span className="detailedBlog_content_highlight">body</span> style tag
        so that whenever user toogle the theme it takes value of respective html
        tag style.
      </p>
      <p>
        Now we would create the major part of styling i.e the dark mode
        variables under{" "}
        <span className="detailedBlog_content_highlight">html.dark</span> style
        tag
      </p>
      <Code
        data={
          <>
            <span className="code_base_comment">{`// index.css`}</span>
            <span>html {`{`}</span>
            <span>
              {"  "}--primaryBackgroundColor: #f5f6f7;
              <span className="code_base_comment">
                {"  "}
                {`// Light mode background color [white shade]`}
              </span>
            </span>
            <span>
              {"  "}--primaryTextColor: #424242;
              <span className="code_base_comment">
                {"  "}
                {`// Light mode text color [black shade]`}
              </span>
            </span>
            <span>{`}`}</span>
            <span />
            <span className="code_base_highlight">html.dark {`{`}</span>
            <span className="code_base_highlight">
              {"  "}--primaryBackgroundColor: #3c3c3c;
              <span className="code_base_comment">
                {"  "}
                {`// Dark mode background color [black shade]`}
              </span>
            </span>
            <span className="code_base_highlight">
              {"  "}--primaryTextColor: #f2f2f2;
              <span className="code_base_comment">
                {"  "}
                {`// Dark mode text color [white shade]`}
              </span>
            </span>
            <span className="code_base_highlight">{`}`}</span>
          </>
        }
      />
      <p>
        The <span className="detailedBlog_content_highlight">.dark</span> is the
        className which we would add to root element via JS when user needs dark
        mode and remove when user needs light mode. By adding className to root
        element all the styling code wherever the vaiables are used it will take
        dark mode variable values.
      </p>
      <p>
        Now we would assign this variables to the styling attributes in{" "}
        <span className="detailedBlog_content_highlight">body</span> tag.
      </p>
      <Code
        data={
          <>
            <span className="code_base_comment">{`// index.css`}</span>
            <span>html {`{`}</span>
            <span>
              {"  "}--primaryBackgroundColor: #f5f6f7;
              <span className="code_base_comment">
                {"  "}
                {`// Light mode background color [white shade]`}
              </span>
            </span>
            <span>
              {"  "}--primaryTextColor: #424242;
              <span className="code_base_comment">
                {"  "}
                {`// Light mode text color [black shade]`}
              </span>
            </span>
            <span>{`}`}</span>
            <span />
            <span>html.dark {`{`}</span>
            <span>
              {"  "}--primaryBackgroundColor: #3c3c3c;
              <span className="code_base_comment">
                {"  "}
                {`// Dark mode background color [black shade]`}
              </span>
            </span>
            <span>
              {"  "}--primaryTextColor: #f2f2f2;
              <span className="code_base_comment">
                {"  "}
                {`// Dark mode text color [white shade]`}
              </span>
            </span>
            <span>{`}`}</span>
            <span />
            <span className="code_base_highlight">body {`{`}</span>
            <span className="code_base_highlight">
              {"  "}background-color: var(--primaryBackgroundColor);
            </span>
            <span className="code_base_highlight">
              {"  "}color: var(--primaryTextColor);
            </span>
            <span className="code_base_highlight">
              {"  "}text-align: center;
            </span>
            <span className="code_base_highlight">{`}`}</span>
          </>
        }
      />
      <p>
        This will help to change the color's of background and text at complete
        project level.
      </p>
      <p>
        <strong>Tip:</strong> You can have more variables declared and reuse it
        anywhere other that body style tag too.
      </p>
      <p>
        Final step is to create a button which onClick calls a function who
        adds/remove the{" "}
        <span className="detailedBlog_content_highlight">.dark</span> className
        in/from root element respectively.
      </p>
      <Code
        data={
          <>
            <span className="code_base_comment">{`// App.js`}</span>
            <span>{`import React from "react";`}</span>
            <span>{`import "./index.css";`}</span>
            <span />
            <span>{`function App() {`}</span>
            <span>{`  const toogleTheme = () => {`}</span>
            <span>{`    document.documentElement.classList.toggle("dark");`}</span>
            <span>{`  }`}</span>
            <span />
            <span>{`  return (`}</span>
            <span>{`    <React.Fragment>`}</span>
            <span>{`      <h1>React Demo to toogle light mode and dark mode</h1>`}</span>
            <span>{`      <button onClick={toogleTheme}>Toogle</button>`}</span>
            <span>{`    </React.Fragment>`}</span>
            <span>{`  );`}</span>
            <span>{`}`}</span>
            <span />
            <span>{`export default App;`}</span>
            <span />
          </>
        }
      />
      <br />
      <p>Final result:</p>
      <img
        src={light_mode_image}
        alt="lightModeImage"
        style={{
          width: "100%",
          border: "0.2rem solid var(--borderColor)",
          borderRadius: "1rem",
        }}
      />
      <img
        src={dark_mode_image}
        alt="darkModeImage"
        style={{
          width: "100%",
          border: "0.2rem solid var(--borderColor)",
          borderRadius: "1rem",
        }}
      />
    </React.Fragment>
  );
}
