import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import imgUrl from "../img/Mycontact.png";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Yi-An (Andy) Chang</h2>
            <img src={imgUrl} alt="avatar" style={{ height: "180px" }}></img>
            <div className="contact-paragraph">
              <p style={{ width: "75%", margin: "auto", paddingTop: "3em" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
                convallis.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Aenan convallis.Aenan convallis.Lorem ipsum dolor sit
                amet,
              </p>
            </div>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                {/* <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="Ture" />
                    {""} Phone:
                  </ListItemContent>
                </ListItem> */}

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fas fa-envelope" aria-hidden="Ture" />
                    {""} Email: andysamguy @gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fab fa-skype" aria-hidden="Ture" />
                    {""} Skype: andysamguy
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
