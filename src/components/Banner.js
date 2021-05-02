import React from "react";
import myPic from "../images/myPic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <section style={{ backgroundColor: "whiteSmoke", minHeight: "500px" }}>
      <div className="container text-center">
        <button className="btn btn-portfolio my-3">
          <a href="https://drive.google.com/uc?export=download&id=1wYTTnm00hV0wbckbNUE2UiX28uVFW438">
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </a>
        </button>
        <div className="row">
          <div className="col-md-6 my-5">
            <img
              className="img-fluid"
              style={{ width: "300px", height: "300px", borderRadius: "50%" }}
              src={myPic}
              alt=""
            />
          </div>
          <div className="col-md-6 my-5">
            <h3>I am Abu Naser Dipu</h3>
            <h5 style={{lineHeight: '30px'}}>a web developer, I like to do my job with passion & care. I have skill in <span className="text-success">React,Javascript, Bootstrap, Node.js, Material UI, React Bootstrap, Firebase, MongoDB HTML5, CSS3</span></h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
