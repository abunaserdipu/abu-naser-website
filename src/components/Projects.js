import React from "react";
import Navbar from "./Navbar";
import ProjectTwo from "./ProjectTwo";
import ProjectOne from "./ProjectOne";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";
import ProjectFive from "./ProjectFive";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="portfolio-font my-5 text-center">Projects</h2>
        <div className="row text-center">
          <div className="col-md-4 my-3">
          <ProjectOne />
          </div>
          <div className="col-md-4 my-3">
            <ProjectTwo />
          </div>
          <div className="col-md-4 my-3">
            <ProjectThree />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4 my-3">
          <ProjectFour />
          </div>
          <div className="col-md-4 my-3">
            <ProjectFive />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
