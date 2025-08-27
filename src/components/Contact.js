import React from "react";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ztokxki",
        "template_iousmx6",
        e.target,
        "user_XuUrWKIVmosthTjYxlpBv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <Navbar />
      <div className="container" data-aos="fade-left">
        <h2 className="portfolio-font mt-5 mb-3 p-3 text-center">Contact Me</h2>
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6 my-5">
            <form onSubmit={sendEmail}>
              <input
                className="form-control"
                type="text"
                placeholder="Your Name"
                name="name"
                required
              />
              <br />
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <br />
              <input
                className="form-control"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <br />
              <textarea
                className="form-control"
                name="message"
                cols="30"
                rows="10"
                placeholder="Your Message"
                required
              ></textarea>
              <br />
              <input
                className="btn btn-success"
                type="submit"
                value="Send Mail"
              />
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 my-5">
            <div className="card bg-dark text-white p-4">
              <h5>
                <FontAwesomeIcon icon={faMobile} /> Phone / WhatsApp
              </h5>
              <a
                href="https://wa.me/8801521327682"
                target="_blank"
                rel="noopener noreferrer"
                className="text-success fw-bold"
              >
                +8801521327682
              </a>
            </div>

            <div className="card bg-dark text-white my-2 p-4">
              <h5>
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </h5>
              <a
                href="mailto:mdabunaserdipu@gmail.com"
                className="text-success"
              >
                mdabunaserdipu@gmail.com
              </a>
            </div>

            <div className="card bg-dark text-white my-2 p-4">
              <h5>
                <FontAwesomeIcon icon={faHome} /> Address
              </h5>
              Mirpur-2, Dhaka-1216
            </div>

            {/* Social Icons */}
            <div className="d-flex justify-content-start gap-3 my-3">
              <a
                href="https://github.com/abunaserdipu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-3"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://linkedin.com/in/abunaserdipu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-3"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://wa.me/8801521327682"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-3"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
