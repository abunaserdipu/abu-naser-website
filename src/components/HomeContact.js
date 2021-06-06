import React from "react";
import emailjs from "emailjs-com";
import "./HomeContact.css";

const HomeContact = () => {
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
    <section className="home-contact-bg">
      <div className="container text-center">
        <h2 className="py-2">Contact</h2>
        <div data-aos="fade-left">
          <form className="py-2" onSubmit={sendEmail}>
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
      </div>
    </section>
  );
};

export default HomeContact;
