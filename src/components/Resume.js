import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-3">
        <h2 className="portfolio-font my-5 p-3 text-center">Resume</h2>

        {/* Experience Section */}
        <h3 className="my-3 fw-bold">Professional Experience</h3>

        {/* FYV */}
        <div className="row my-3">
          <div className="col-md-4">
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} /> Jul 2025 – Aug 2025
            </p>
          </div>
          <div className="col-md-8">
            <h6 style={{ color: "green" }}>
              Full Stack Developer | FYV – Find Your Vehicle
            </h6>
            <ul>
              <li>
                Developed an API-selling SaaS platform with Next.js frontend and
                Laravel + Filament backend.
              </li>
              <li>
                Implemented API key generation, request rate limiting, and usage
                analytics.
              </li>
              <li>
                Integrated Authorize.Net with Laravel Cashier for subscription
                billing & automated invoices.
              </li>
              <li>
                Built admin & user dashboards in Filament for managing plans,
                usage, and billing.
              </li>
            </ul>
          </div>
        </div>

        {/* Cubix Technology */}
        <div className="row my-3">
          <div className="col-md-4">
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} /> Sep 2024 – Feb 2025
            </p>
          </div>
          <div className="col-md-8">
            <h6 style={{ color: "green" }}>
              Executive (Software Development) | Cubix Technology
            </h6>
            <ul>
              <li>
                Developed Hotel Management Software (HMS) using CodeIgniter &
                MySQL.
              </li>
              <li>
                Designed modules including Front Office, Restaurant, Accounts,
                Inventory, and Banquet.
              </li>
              <li>
                Debugged and optimized features to improve system performance &
                reliability.
              </li>
            </ul>
          </div>
        </div>

        {/* Circle Technology */}
        <div className="row my-3">
          <div className="col-md-4">
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} /> Nov 2023 – Aug 2024
            </p>
          </div>
          <div className="col-md-8">
            <h6 style={{ color: "green" }}>
              Junior Software Engineer | Circle Technology Ltd.
            </h6>
            <ul>
              <li>
                Developed ERP and Telemedicine applications using Laravel &
                MySQL.
              </li>
              <li>
                Created and documented REST APIs with Postman for seamless
                integration.
              </li>
              <li>
                Deployed & maintained apps on cPanel hosting ensuring uptime and
                availability.
              </li>
            </ul>
          </div>
        </div>

        {/* Internship */}
        <div className="row my-3">
          <div className="col-md-4">
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} /> Apr 2023 – Jun 2023
            </p>
          </div>
          <div className="col-md-8">
            <h6 style={{ color: "green" }}>
              Intern Backend Developer | SunburstHost
            </h6>
            <ul>
              <li>
                Built a portfolio website with admin panel & mailing system.
              </li>
              <li>
                Enhanced Hospital Management System with multi-role
                authentication (doctor, nurse, patient, pharmacist).
              </li>
            </ul>
          </div>
        </div>

        {/* Freelance & Projects */}
        <h3 className="my-3 fw-bold">Freelance & Projects</h3>
        <ul>
          <li>
            <b>VerifyAPI Development:</b> Built secure verification platform
            (Next.js + Laravel) with billing & SEO optimization.
          </li>
          <li>
            <b>Business Portfolio Websites:</b> Developed SEO-optimized
            CMS-backed websites for business clients.
          </li>
          <li>
            <b>IsDB Hospital (Raw PHP):</b> Added modules for authentication,
            booking, and prescriptions.
          </li>
          <li>
            <b>Barishal Courier (Laravel + Vue.js):</b> Courier management
            system with API & real-time tracking.
          </li>
          <li>
            <b>Vortihoi (CI + React):</b> Enrollment management with dashboards
            and role-based access control.
          </li>
        </ul>

        {/* Education */}
        <h3 className="my-3 fw-bold">Education</h3>
        <div className="row my-2">
          <div className="col-md-4">
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} /> 2023
            </p>
          </div>
          <div className="col-md-8">
            <h6 style={{ color: "green" }}>
              IsDB-BISEW Diploma in Web Application Development with PHP &
              Frameworks
            </h6>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-4">
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} /> 2023
            </p>
          </div>
          <div className="col-md-8">
            <h6 style={{ color: "green" }}>Masters in Management</h6>
            <p className="fw-bold">Dhaka College (CGPA 3.08)</p>
          </div>
        </div>

        {/* Resume Download */}
        <div className="text-center">
          <button className="btn btn-portfolio my-3">
            <a
              href="https://drive.google.com/file/d/1gjvpFcnKkBbfI0lfeYg0WsT5mNxv3Wbn/view?usp=sharing"
              style={{ borderRadius: "30px", padding: "10px 20px" }}
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
