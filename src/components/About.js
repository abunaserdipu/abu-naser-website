import React from "react";
import myPic from "../images/myPic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faNodeJs,
  faBootstrap,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="portfolio-font text-center my-3">About Me</h2>
        <div className="row">
          <div className="col-md-6 my-5 text-center">
            <img
              className="img-fluid"
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              src={myPic}
              alt=""
            />
            <h3 className="fw-bold">
              I am <span style={{ color: "green" }}>MD. Abu Naser Dipu</span>
            </h3>
            <p style={{ lineHeight: "30px" }}>
              I am a web developer. I can provide clean code user-friendly
              functionality. I also make the website more interactive and
              responsive by using Bootstrap, Material UI, React Bootstrap.
            </p>
            <button className="btn btn-portfolio my-3">
              <a href="https://drive.google.com/uc?export=download&id=1SyNRXt3L8pmyIFKkxocDXxeNYdYDlsTQ">
                <FontAwesomeIcon icon={faDownload} /> Download Resume
              </a>
            </button>
          </div>
          <div className="col-md-6 my-5 justify-content-center text-center">
            <h3>My Skills</h3>
            <div className="row">
              <div className="col-md-4">
                <div className="card bg-success my-3">
                  <p style={{ fontSize: "50px" }}>
                    <FontAwesomeIcon icon={faReact} />
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-success my-3">
                  <p style={{ fontSize: "50px" }}>
                    <FontAwesomeIcon icon={faJs} />
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-success my-3">
                  <p style={{ fontSize: "50px" }}>
                    <FontAwesomeIcon icon={faNodeJs} />
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card bg-success my-3">
                  <p style={{ fontSize: "50px" }}>
                    <FontAwesomeIcon icon={faBootstrap} />
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-success my-3">
                  <p style={{ fontSize: "50px" }}>
                    <FontAwesomeIcon icon={faHtml5} />
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-success my-3">
                  <p style={{ fontSize: "50px" }}>
                    <FontAwesomeIcon icon={faCss3Alt} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
