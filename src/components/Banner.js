import React from "react";
import myPic from "../images/myphoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import ParticlesBg from "particles-bg";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <section style={{ minHeight: "100vh" }} className="banner-bg">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-7 my-5">
            <div className="banner">
              <h2>
                <span style={{ color: "rgb(251, 238, 193)" }}>
                  Abu Naser Dipu
                </span>{" "}
              </h2>
              <h3 style={{ color: "rgb(141, 135, 65)" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Developer",
                      "Laravel & Next.js Developer",
                      "React & Inertia.js Specialist",
                      "API & Database Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
              <h5>
                I am a{" "}
                <span style={{ color: "rgb(251, 238, 193)" }}>
                  Full Stack Developer
                </span>{" "}
                with <strong>2+ years of professional experience</strong> in
                building scalable and user-friendly web applications. I
                specialize in{" "}
                <span style={{ color: "rgb(251, 238, 193)" }}>
                  Next.js, React.js, Laravel, Inertia.js, Tailwind CSS,
                  Filament, MySQL
                </span>{" "}
                and have hands-on experience in{" "}
                <span style={{ color: "rgb(251, 238, 193)" }}>
                  API Development, UI/UX Optimization, and Full Project
                  Lifecycle Delivery
                </span>
                .
              </h5>

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
          </div>
          <div className="col-md-5 my-5">
            <div className="banner-img">
              <img
                className="img-fluid shadow"
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  border: "6px solid white",
                  borderRadius: "50%",
                }}
                src={myPic}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <ParticlesBg type="polygon" bg={true} />
    </section>
  );
};

export default Banner;
