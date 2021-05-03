import React from "react";
import myPic from "../images/myPic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import ParticlesBg from "particles-bg";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <section style={{ minHeight: "100vh" }}>
      <div className="container text-center">
        <button className="btn btn-portfolio my-3">
          <a href="https://drive.google.com/uc?export=download&id=1wYTTnm00hV0wbckbNUE2UiX28uVFW438">
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </a>
        </button>
        <div className="row">
          <div className="col-md-6 my-5">
            <h3>
              I am{" "}
              <Typewriter
                options={{
                  strings: [
                    "Abu Naser Dipu",
                    "Web Developer",
                    "Full Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
            <h5>
              I like to do my job with passion & care. I have skill in{" "}
              <span className="text-success">
                React,Javascript, Bootstrap, Node.js, Material UI, React
                Bootstrap, Firebase, MongoDB HTML5, CSS3
              </span>
            </h5>
          </div>
          <div className="col-md-6 my-5">
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
          </div>
        </div>
      </div>

      <ParticlesBg type="circle" bg={true} />
    </section>
  );
};

export default Banner;
