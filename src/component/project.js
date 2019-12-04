import React from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h1>this is react</h1>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>this is python</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>this is c#</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="categories-tbs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId =>
            this.setState({
              activeTab: tabId
            })
          }
          ripple
        >
          <Tab>react</Tab>
          <Tab>python</Tab>
          <Tab>C#</Tab>
        </Tabs>
        <section className="project-grid">
          <Grid className="project-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}
export default Project;
