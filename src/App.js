import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTopControlller from "./components/ScrollToTopControlller";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
