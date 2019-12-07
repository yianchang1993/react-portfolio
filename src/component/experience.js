import React from "react";
import { Grid, Cell } from "react-mdl";
class Experience extends React.Component {
  render() {
    return (
      <div className="exp-body">
        <Grid>
          <Cell col={4}>
            <div className="exp-duration">
              <p>
                {this.props.start}-{this.props.end}
              </p>
            </div>
          </Cell>
          <Cell col={8}>
            <div className="exp-names">
              <h4>{this.props.Company}</h4>
              <p>{this.props.jobDiscription}</p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Experience;
