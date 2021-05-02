import React from "react";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";

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
      <div className="container">
        <h2 className="portfolio-font mt-5 mb-3 text-center">Contact me</h2>
        <div className="row">
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
          <div className="col-md-6 my-5">
            <div className="card bg-dark text-white p-4">
              <h5>Phone</h5>
              01521327682
            </div>
            <div className="card bg-dark text-white my-2 p-4">
              <h5>Email</h5>
              abunaserdipu582@gmail.com
              <br />
              abunaserdipu0@gmail.com
            </div>
            <div className="card bg-dark text-white my-2 p-4">
              <h5>Address</h5>
              C.B-132, Puraton Kachukhet <br />
              Dhaka -1206
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
