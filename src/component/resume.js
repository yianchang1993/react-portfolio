import React from "react";
import { Grid, Cell } from "react-mdl";
import imgurl from "../img/photo.square.jpg";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skill";

class Resume extends React.Component {
  state = {
    edu: [
      {
        start: "2017",
        end: "2019",
        School: "Queensland University of Technology",
        schoolDiscript: "Master of Information Technology / Computer Science"
      },
      {
        start: "2011",
        end: "2015",
        School: "Fu Jen Catholic University",
        schoolDiscript: "Bachelor of Electrical Engineering"
      }
    ],
    experience: [
      {
        start: "2016",
        end: "2017",
        Company: "Compal Inc",
        jobDiscription: "Software Engineer"
      }
    ],
    skills: [
      { skill: "JavaScript", progress: 90 },
      { skill: "React", progress: 90 },
      { skill: "Python", progress: 70 },
      { skill: "C#", progress: 60 },
      { skill: "C", progress: 80 }
    ]
  };
  render() {
    return (
      <div className="all">
        <Grid>
          <div className="resume-left-col">
            <article className="resume-left-content">
              <div>
                <img src={imgurl} alt="avatar" />
              </div>
              <div className="resume-name">
                <h2>Yi-An (Andy) Chang</h2>
                <h4 style={{ color: "grey" }}>Programmer</h4>
              </div>
              <hr />
              <div className="paragraph">
                <p>
                  Having the passion of software development, I developed web
                  development skill including React framework and ASP.Net MVC.
                  Currently working on making hotel webpage using React. I also
                  worked on MVC project which was making a stock management
                  website. I am always eager to learn. I believe working in the
                  development team in your company could also help my growth
                  rapidly.
                </p>
              </div>
              <hr />
              <h5>Email:</h5>
              <p>andysamguy@gmail.com</p>
              <h5>Linkedin:</h5>
              <p>https://www.linkedin.com/in/yi-an-andy-chang-53649bb3</p>
            </article>
          </div>
          <div className="resume-right-col">
            <article className="resume-right-content">
              <h2>Education</h2>
              {this.state.edu.map((item, index) => {
                return (
                  <div key={index}>
                    <Education
                      start={item.start}
                      end={item.end}
                      School={item.School}
                      schoolDiscript={item.schoolDiscript}
                    />
                  </div>
                );
              })}
              <h2>Experience</h2>
              {this.state.experience.map((item, index) => {
                console.log(item);
                return (
                  <div key={index}>
                    <Experience
                      start={item.start}
                      end={item.end}
                      Company={item.Company}
                      jobDiscription={item.jobDiscription}
                    />
                  </div>
                );
              })}

              <h2 style={{ marginTop: "1em" }}>Skills</h2>
              <div className="skill">
                {this.state.skills.map((item, key) => {
                  return (
                    <div key={key}>
                      <Skills skill={item.skill} progress={item.progress} />
                    </div>
                  );
                })}
              </div>
            </article>
          </div>
        </Grid>
      </div>
    );
  }
}
export default Resume;
