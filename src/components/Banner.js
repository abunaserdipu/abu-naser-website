import React from "react";
import myPic from "../images/myPic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import ParticlesBg from "particles-bg";
import Typewriter from "typewriter-effect";
import "./Banner.css";

const Banner = () => {
  return (
    <section style={{ minHeight: "100vh" }} className="banner-bg">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 my-5">
            <div className="banner">
              <h3>
                <span style={{ color: "green" }}>Abu Naser Dipu</span>{" "}
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Web Developer",
                      "MERN Stack Developer",
                      "Javascript Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
              <h5>
                I like to do my job with passion & care. I have skill in{" "}
                <span style={{ color: "slateBlue" }}>
                  ReactJS,Javascript, Bootstrap, ExpressJS, Node.js, Material
                  UI, React Bootstrap, Firebase, MongoDB, HTML5, CSS3
                </span>
                .
              </h5>

              <button className="btn btn-portfolio my-3">
                <a href="https://drive.google.com/uc?export=download&id=1SyNRXt3L8pmyIFKkxocDXxeNYdYDlsTQ">
                  <FontAwesomeIcon icon={faDownload} /> Download Resume
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-6 my-5">
            <div className="banner-img">
              <img
                className="img-fluid"
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  border: "5px solid white",
                  // borderRadius: "50%",
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
