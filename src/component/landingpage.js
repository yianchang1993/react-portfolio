import React from "react";
import { Grid, Cell } from "react-mdl";
import url from "../img/myphoto.png";

class Landing extends React.Component {
  render() {
    return (
      <div className="land-page">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={url} alt="my photo" className="avatar-img" />
            <div className="banner-text">
              <h1>Yi-An Chang</h1>
              <hr />
              <p>Web Developement | JavaScript | React | Pyhon | C# | .NET</p>
              <hr />
              <div className="social-link">
                {/* linedin */}
                <a
                  href="https://www.linkedin.com/in/yi-an-andy-chang-53649bb3"
                  rel="noopener noreferrer "
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                {/* github */}
                <a
                  href="https://github.com/yianchang1993"
                  rel="noopener noreferrer "
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;
