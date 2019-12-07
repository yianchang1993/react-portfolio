import React from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends React.Component {
  render() {
    return (
      <div className="skill-body">
        <Grid>
          <Cell col={12}>
            <div className="skills-details">
              <h6>{this.props.skill}</h6>
              <div>
                <ProgressBar
                  style={{ width: "80%" }}
                  progress={this.props.progress}
                />
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Skills;
