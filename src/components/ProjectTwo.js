import React from 'react';
import PrjTwo from "../images/projectTwo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ProjectTwo = () => {
    return(
        <div>
<div className="card">
        <h5 className="my-2">Dhaka Wheel Transport Service Website</h5>
        <img className="img-fluid" src={PrjTwo} alt="" />
        <div className="card-body">
          <ul>
            <li>Users can take various types of vehicle services, for that they must be logged in.</li>
            <li>After selecting a vehicle user can see a form where a static destination was set up.</li>
            <li>Clicking the search button they can see available vehicles and their prices. Bootstrap is used for responsiveness.</li>
          </ul>
        <p>
          <span className="fw-bold">Technologies:</span> React, React Router,
          Firebase, Bootstrap, MongoDB, ImgBB.
        </p>
        <button className="btn btn-portfolio my-2">
          <a
            href="https://dhaka-wheelwithreact.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEye} /> Live Preview
          </a>
        </button>
        <br />
        <button className="btn btn-portfolio m-2">
          <a
            href="https://github.com/abunaserdipu/dhaka-wheel"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </button>
        </div>
      </div>
        </div>
    )
}

export default ProjectTwo;