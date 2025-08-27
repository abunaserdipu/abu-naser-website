import React from "react";
import myPic from "../images/myphoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faNodeJs,
  faPhp,
  faLaravel,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { faDatabase, faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="portfolio-font text-center my-3">About Me</h2>
        <div className="row align-items-center">
          {/* Left: Photo + Bio */}
          <div className="col-md-6 my-5 text-center">
            <img
              className="img-fluid"
              style={{
                width: "280px",
                height: "280px",
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
              src={myPic}
              alt="Abu Naser Dipu"
            />
            <h3 className="fw-bold mt-3">
              I am <span style={{ color: "green" }}>Md. Abu Naser Dipu</span>
            </h3>
            <p style={{ lineHeight: "28px", textAlign: "justify" }}>
              I’m a <b>Full-Stack Developer</b> with over{" "}
              <b>2 years of professional experience</b> in designing and
              developing scalable web applications. I specialize in{" "}
              <b>Laravel, Next.js, React.js</b>, and <b>FilamentPHP</b>,
              building robust backends, interactive frontends, and secure
              API-driven systems.
              <br />
              Skilled in{" "}
              <b>
                API integration, billing systems, SEO optimization, and shared
                hosting deployment
              </b>
              , I aim to deliver solutions that are both technically strong and
              user-focused.
            </p>

            <div className="d-flex justify-content-center gap-3 my-3">
              <a
                href="https://drive.google.com/uc?export=download&id=1gjvpFcnKkBbfI0lfeYg0WsT5mNxv3Wbn"
                className="btn btn-portfolio"
                style={{ padding: "10px 20px" }}
              >
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </a>
              <Link
                to="/contact"
                className="btn btn-outline-success"
                style={{ padding: "10px 20px" }}
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right: Skills Icons */}
          <div className="col-md-6 my-5 text-center">
            <h3 className="mb-4">Key Skills</h3>
            <div className="row">
              <div className="col-md-4">
                <div className="card bg-success text-white my-3 p-3 shadow-sm">
                  <FontAwesomeIcon icon={faLaravel} size="3x" />
                  <p className="mt-2 fw-bold">Laravel</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-success text-white my-3 p-3 shadow-sm">
                  <FontAwesomeIcon icon={faReact} size="3x" />
                  <p className="mt-2 fw-bold">React / Next.js</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-success text-white my-3 p-3 shadow-sm">
                  <FontAwesomeIcon icon={faJs} size="3x" />
                  <p className="mt-2 fw-bold">JavaScript</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="card bg-success text-white my-3 p-3 shadow-sm">
                  <FontAwesomeIcon icon={faPhp} size="3x" />
                  <p className="mt-2 fw-bold">PHP</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-success text-white my-3 p-3 shadow-sm">
                  <FontAwesomeIcon icon={faDatabase} size="3x" />
                  <p className="mt-2 fw-bold">MySQL</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-success text-white my-3 p-3 shadow-sm">
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                  <p className="mt-2 fw-bold">Git / Deployment</p>
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
