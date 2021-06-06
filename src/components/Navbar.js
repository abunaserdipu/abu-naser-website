import React from "react";
import { Link } from "react-router-dom";
import icon from "../images/solvent.png";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-success fixed-top transparent"
      >
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            <img
              className="img-fluid"
              style={{
                width: '30px'
              }}
              src={icon}
              alt=""
            /> Abu Naser Dipu
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link me-4, fw-bold" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link me-4, fw-bold"
                  aria-current="page"
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-4, fw-bold" aria-current="page" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link me-4, fw-bold"
                  aria-current="page"
                  to="/resume"
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-4, fw-bold" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link me-4, fw-bold"
                  aria-current="page"
                  to="/contact"
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
