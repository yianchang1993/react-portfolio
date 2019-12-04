import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./App.css";
import Main from "./component/main";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div>
      <Layout fixedHeader>
        <Header
          className="header-color"
          title={
            <span>
              <strong>Yi-An Chang </strong>
            </span>
          }
        >
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About</Link>
            <Link to="/project">Project</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Yi-An Chang">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About</Link>
            <Link to="/project">Project</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Main />
        <Content />
      </Layout>
    </div>
  );
}

export default App;
