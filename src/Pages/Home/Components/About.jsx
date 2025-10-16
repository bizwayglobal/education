import React from "react";
import { Link } from "react-router-dom";
import aboutimg from "../../../assets/img/abot2-min.jpg";

const features = [
  "100+ Skill-Based Programs",
  "100% Practical Training",
  "Job-Guaranteed Courses",
  "Internship-to-Job Pathway",
  "Online & Offline Learning",
  "Expert Industry Mentors",
];

const AboutUs = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          {/* Image Section */}
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: "400px" }}
          >
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src={aboutimg}
                loading="lazy"
                alt="About IQUE Education Hub - Skilversity"
                style={{ objectFit: "cover", borderRadius: "20px" }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <div
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #4B86C8 0%, #5b9bd5 100%)",
                color: "white",
                padding: "8px 24px",
                borderRadius: "50px",
                fontSize: "0.875rem",
                fontWeight: "600",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                marginBottom: "1rem",
                boxShadow: "0 4px 12px rgba(75, 134, 200, 0.3)",
              }}
            >
              About Us
            </div>
            <h1 className="mb-4" style={{ color: "black" }}>
              IQUE Education Hub - Skilversity
            </h1>
            <p>
              <strong>Learn. Lead. Earn. </strong>
              At <strong> Skilversity</strong>, education goes beyond books. You
              don’t just study — you practice, perform, and progress. Our Global
              Skilversity model connects <strong>talent → opportunity </strong>
              and helps you grow from Student to CEO.
            </p>

            {/* Features List */}
            <div className="row gy-2 gx-4 mb-4">
              {features.map((feature, index) => (
                <div className="col-sm-6" key={index}>
                  <p className="mb-0">
                    <i
                      className="fa fa-check-circle me-2"
                      style={{ color: "#4B86C8" }}
                    ></i>
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Read More Button */}
            <Link
              className="btn py-3 px-5 mt-2"
              to="/about"
              style={{
                backgroundColor: "#4B86C8",
                color: "white",
                border: "none",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#233968";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 4px 12px rgba(75, 134, 200, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#4B86C8";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
