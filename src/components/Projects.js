import React from "react";
import { Link } from "react-router-dom";
import "./HomeProject.css";

// Placeholder images (you can use tech logos or abstract stock images)
import ApiPlatformImg from "../images/api.png";
import HotelImg from "../images/hotel.png";
import ErpImg from "../images/erp.png";
import VerifyApiImg from "../images/verification.png";
import CourierImg from "../images/courier.png";
import EnrollmentImg from "../images/enrollment.png";
import Navbar from "./Navbar";

const HomeProjects = () => {
  const projects = [
    {
      title: "API-Selling SaaS Platform (FYV – Find Your Vehicle)",
      img: ApiPlatformImg,
      tech: "Next.js, Laravel, FilamentPHP, Laravel Cashier, Authorize.Net",
      desc: "Developed a complete API-selling SaaS platform with dynamic landing pages, subscription billing, request analytics, and user/admin dashboards.",
    },
    {
      title: "Hotel Management System (Cubix Technology)",
      img: HotelImg,
      tech: "PHP (CodeIgniter), MySQL",
      desc: "Designed modules for Front Office, Restaurant, Accounts, Inventory, and Banquet, improving performance and system reliability.",
    },
    {
      title: "ERP & Telemedicine Platform (Circle Technology)",
      img: ErpImg,
      tech: "Laravel, MySQL, REST APIs, cPanel",
      desc: "Built ERP and telemedicine solutions, created documented REST APIs, and deployed applications in shared hosting environments.",
    },
    {
      title: "VerifyAPI – Verification Platform",
      img: VerifyApiImg,
      tech: "Next.js, Laravel, TailwindCSS",
      desc: "Architected a secure verification API platform with SEO-friendly pages, request handling, and billing integration.",
    },
    {
      title: "Barishal Courier Management System",
      img: CourierImg,
      tech: "Laravel, Vue.js, REST API",
      desc: "Developed courier management system with real-time order tracking, REST APIs, and executive dashboards.",
    },
    {
      title: "Vortihoi – Enrollment Management System",
      img: EnrollmentImg,
      tech: "CodeIgniter, React.js",
      desc: "Built an enrollment management system with interactive dashboards, role-based access, and secure authentication.",
    },
  ];

  return (
    <div>
      <Navbar />
        <div className="container text-center my-3">
          <h2 className="py-2 my-5">Professional Projects</h2>
          <div className="row py-2 align-items-stretch" data-aos="fade-right">
            {projects.map((project, index) => (
              <div className="col-md-4 my-3 d-flex" key={index}>
                <div className="card w-100 d-flex flex-column">
                  <img
                    className="img-fluid"
                    src={project.img}
                    alt={project.title}
                  />
                  <h5 className="my-2">{project.title}</h5>
                  <p>
                    <span className="fw-bold">Technologies:</span>{" "}
                    {project.tech}
                  </p>
                  <p className="small flex-grow-1">{project.desc}</p>
                  {/* <button className="btn btn-portfolio">
                  <Link to="/projects">Show Details</Link>
                </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default HomeProjects;
