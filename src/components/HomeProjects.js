import React from "react";
import ProjectOne from "../images/projectOne.png";
import ProjectTwo from "../images/projectTwo.png";
import ProjectThree from "../images/projectThree.png";
import { Link } from "react-router-dom";
import "./HomeProject.css";

const HomeProjects = () => {
  return (
    <section className="home-project-bg">
      <div className="container text-center">
        <h2 className="py-2">Projects</h2>
        <div className="row py-2" data-aos="fade-right">
          <div className="col-md-4 my-3">
            <div className="card" style={{ height: "100%" }}>
              <img className="img-fluid" src={ProjectOne} alt="" />
              <h5 className="my-2">
                Daily Products Selling Full Stack Website
              </h5>
              <p>
                <span className="fw-bold">Technologies:</span> ReactJS,
                Bootstrap, ExpressJS, NodeJS, React Router, Firebase, MongoDB.
              </p>
              <button className="btn btn-portfolio">
                <Link to="/projects">Show Details</Link>
              </button>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div className="card" style={{ height: "100%" }}>
              <img className="img-fluid" src={ProjectThree} alt="" />
              <h5 className="my-2">
                Car Repair Service Provider Complete Website
              </h5>
              <p>
                <span className="fw-bold">Technologies:</span> ReactJS,
                Bootstrap, Stripe, ExpressJS, NodeJS, Firebase, MongoDB.{" "}
              </p>
              <button className="btn btn-portfolio">
                <Link to="/projects">Show Details</Link>
              </button>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div className="card" style={{ height: "100%" }}>
              <img className="img-fluid" src={ProjectTwo} alt="" />
              <h5 className="my-2">Dhaka Wheel Transport Service Website</h5>
              <p>
                <span className="fw-bold">Technologies:</span> ReactJS, React
                Router, Firebase, Bootstrap, MongoDB.
              </p>
              <button className="btn btn-portfolio">
                <Link to="/projects">Show Details</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
