import React from "react";
import { Link } from "react-router-dom";
import aboutimg from "../../../assets/img/abot2.jpg";

const features = [
  "Flexible Timing",
  "IT Education",
  "Student Talent Development",
  "Comprehensive Online Learning",
  "Expert Faculty",
  "Football Coaching",
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
                alt="About Us"
                style={{ objectFit: "cover", borderRadius: "20px" }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              About Us
            </h6>
            <h1 className="mb-4">IQ Education Hub</h1>
            <p className="mb-4">
              We are dedicated to providing high-quality education with modern
              teaching techniques. Our mission is to create a dynamic and engaging
              learning environment for students of all backgrounds.
            </p>
            <p className="mb-4">
              We offer an innovative curriculum, expert instructors, and a seamless
              online platform to ensure students gain knowledge and practical skills
              to excel in their careers.
            </p>

            {/* Features List */}
            <div className="row gy-2 gx-4 mb-4">
              {features.map((feature, index) => (
                <div className="col-sm-6" key={index}>
                  <p className="mb-0">
                    <i className="fa fa-check-circle text-primary me-2"></i>
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Read More Button */}
            <Link className="btn btn-primary py-3 px-5 mt-2" to="/about">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
