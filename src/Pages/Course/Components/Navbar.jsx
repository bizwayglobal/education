import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import iqlogo from "../../../assets/img/IQ-Logo-1.png";
import whatsappico from "../../../assets/img/whatsapp.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow fixed-top p-0">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            <img
              src={iqlogo}
              alt="eLEARNING"
              className="me-3"
              style={{ width: "80px", height: "auto" }}
            />
          </h2>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/courses" className="nav-item nav-link active">
              Courses
            </Link>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <a
            href="https://wa.me/919544243435"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >
            Join Now <i className="fa fa-arrow-right ms-3"></i>
          </a>
        </div>
      </nav>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/919544243435"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img src={whatsappico} alt="WhatsApp" style={{ width: "70px" }} />
      </a>

      <style jsx>{`
        .whatsapp-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          transition: transform 0.3s ease-in-out;
        }
        .whatsapp-button:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Navbar;
