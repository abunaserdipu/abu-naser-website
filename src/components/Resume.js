import React from "react";
import Skill from "./Skill";
import Navbar from "./Navbar";

const Resume = () => {
  const leftSkills = [
    {
      name: "HTML5",
      percentage: "95%",
    },
    {
      name: "Bootstrap",
      percentage: "90%",
    },
    {
      name: "React",
      percentage: "80%",
    },
    {
      name: "MongoDB",
      percentage: "50%",
    },
  ];
  const rightSkills = [
    {
      name: "CSS3",
      percentage: "90%",
    },
    {
      name: "Javascript",
      percentage: "70%",
    },
    {
      name: "Firebase",
      percentage: "50%",
    },
    {
      name: "Heroku",
      percentage: "30%",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="text-center">
          <button className="btn btn-portfolio my-3">
            <a
              href="https://drive.google.com/uc?export=download&id=1wYTTnm00hV0wbckbNUE2UiX28uVFW438"
            >
              Download Resume
            </a>
          </button>
        </div>
        <h2 className="portfolio-font my-5 text-center">Resume</h2>
        <h3 className="my-3 fw-bold">Skills</h3>
        <div className="row text-center">
          <div className="col-md-6 my-3">
            {leftSkills.map((skill) => (
              <Skill skill={skill}></Skill>
            ))}
          </div>
          <div className="col-md-6 my-3">
            {rightSkills.map((skill) => (
              <Skill skill={skill}></Skill>
            ))}
          </div>
        </div>
        <h3 className="my-3 fw-bold">My Projects</h3>
        <div className="row">
            <div className="col-md-4">
              <p>31 March 2021 - 02 April 2021</p>
            </div>
            <div className="col-md-8">
              <h6 style={{color: 'green'}}>Daily Products Full Stack Website</h6>
              <ul>
                <li>MongoDB is used as a database and images stored in imgBB.</li>
                <li>Client site deployed in firebase and server site deployed in Heroku.</li>
                <li>Bootstrap is used for makes the website responsive.</li>
              </ul>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
              <p>19 March 2021 - 21 March 2021</p>
            </div>
            <div className="col-md-8">
              <h6 style={{color: 'green'}}>Dhaka Wheel Transport Service</h6>
              <ul>
                <li>Login system applied by using firebase authentication, the user must be logged in for taking service. Bootstrap is used for makes the website responsive.</li>
                <li>React Router used to go from one page to another it helps to avoid loading complexity.</li>
                <li>Private Route used for the secure specific page.</li>
              </ul>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
              <p>15 April 2021 - 19 April 2021</p>
            </div>
            <div className="col-md-8">
              <h6 style={{color: 'green'}}>Car Repair Service Complete Website</h6>
              <ul>
                <li>Admin can add new services and remove services from the homepage.</li>
                <li>Logged in users can order services, gave the review, and see their ordered services.</li>
                <li>International payment method stripe used for payment.</li>
              </ul>
            </div>
        </div>
        <h3 className="my-3 fw-bold">Educational Qualifications</h3>
        <div className="row">
          <div className="col-md-4">
            <p>2015-2021</p>
          </div>
          <div className="col-md-8">
            <h6 style={{color: 'green'}}>BBA(Honours) in Management</h6>
            <p className="fw-bold">Dhaka College</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
