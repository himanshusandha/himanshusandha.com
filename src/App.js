import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTopControlller from "./components/ScrollToTopControlller";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import DetailedBlog from "./components/blog/DetailedBlog";
import dataObject from "./content/blog/index";

function App() {
  return (
    <Router>
      <ScrollToTopControlller />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        {dataObject.map((fieldValue, idx) => {
          return (
            <Route path={fieldValue.data.html_url} key={idx}>
              <DetailedBlog data={fieldValue.data} />
            </Route>
          );
        })}
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
