import React from 'react';
import PrjThree from "../images/projectThree.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ProjectThree = () => {
    return(
        <div>
<div className="card">
        <h5 className="my-2">Car Repair Service Provider Complete Website</h5>
        <img className="img-fluid" src={PrjThree} alt="" />
        <div className="card-body">
          <ul>
            <li>Users can take car repair services, for that they must be signed in.</li>
            <li>After signing in a user can select his services, take payment service, can give a review, see their ordered services.</li>
            <li>Admin can delete service, add service, make a new admin. Bootstrap is used for responsiveness.</li>
          </ul>
        <p>
          <span className="fw-bold">Technologies:</span> React, React Router,
          Firebase, Bootstrap, MongoDB, ImgBB.
        </p>
        <button className="btn btn-portfolio my-2">
          <a
            href="https://car-repairproject.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEye} /> Preview
          </a>
        </button>
        <br />
        <button className="btn btn-portfolio m-2">
          <a
            href="https://github.com/abunaserdipu/car-repair"
            target="_blank"
            rel="noreferrer"
          >
            Client Side Code
          </a>
        </button>
        <button className="btn btn-portfolio m-2">
          <a
            href="https://github.com/abunaserdipu/car-repair-server"
            target="_blank"
            rel="noreferrer"
          >
            Server Side Code
          </a>
        </button>
        </div>
      </div>
        </div>
    )
}

export default ProjectThree;