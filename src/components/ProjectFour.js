import React from "react";
import prjFour from "../images/projectFour.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ProjectFour = () => {
  return (
    <div>
      <div className="card">
        <h5 className="my-2">Shooting Championship Players Website</h5>
        <img className="img-fluid" src={prjFour} alt="" />
        <div className="card-body">
          <ul>
            <li>From this website, any organization can hire players.</li>
            <li>
              Click add player button they can see player price and players'
              total price.
            </li>
            <li>
              After one player was added anyone could not add this player.
            </li>
          </ul>
          <p>
            <span className="fw-bold">Technologies:</span> Javascript, Bootstrap,
            CSS3, HTML5.
          </p>
          <button className="btn btn-portfolio my-2">
            <a
              href="https://laughing-banach-bd85de.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEye} /> Live Preview
            </a>
          </button>
          <br />
          <button className="btn btn-portfolio m-2">
            <a
              href="https://github.com/abunaserdipu/shooting-championship"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectFour;
