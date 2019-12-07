import React from "react";
import { Grid, Cell } from "react-mdl";
class Education extends React.Component {
  render() {
    return (
      <div className="edu-body">
        <Grid>
          <Cell col={4}>
            <div className="edu-duration">
              <p>
                {this.props.start}-{this.props.end}
              </p>
            </div>
          </Cell>
          <Cell col={8}>
            <div className="school-names">
              <h4>{this.props.School}</h4>
              <p>{this.props.schoolDiscript}</p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Education;
