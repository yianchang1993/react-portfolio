import React from "react";
import LandingPage from "./landingpage";
import AboutMe from "./about";
import Contact from "./contact";
import Project from "./project";
import resume from "./resume";

import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage}></Route>
      <Route exact path="/aboutme" component={AboutMe}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/project" component={Project}></Route>
      <Route exact path="/resume" component={resume}></Route>
    </Switch>
  );
};
export default Main;
