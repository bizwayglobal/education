import React from "react";
import aboutimg from "../../../assets/img/about3-min.jpg";
import vision from "../../../assets/img/vision.jpg";
import mission from "../../../assets/img/mission-min.jpg";

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
          <div className="col-lg-6" style={{ minHeight: "500px" }}>
            <div style={{ position: "relative", height: "100%" }}>
              <img
                className="img-fluid"
                loading="lazy"
                src={aboutimg}
                alt="About Us"
                style={{
                  width: "100%",
                  maxHeight: "430px",
                  height: "430px",
                  objectFit: "cover",
                  borderRadius: "30px",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6">
          <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3 mb-3 mt-3">
                      About Us
                    </h6>
                  </div>
            <h1 style={{ marginBottom: "20px" }}>IQ Education Hub</h1>
            <p style={{ marginBottom: "20px" }}>
              IQ Education Hub is committed to delivering{" "}
              <strong>high-quality education</strong> through modern teaching
              techniques and a learner-centered approach. Our goal is to foster
              a <strong>dynamic and engaging learning environment</strong> for
              students of all backgrounds.
            </p>
            <p style={{ marginBottom: "20px" }}>
              Our diverse range of programs caters to students at different
              academic levels, from foundational courses to specialized training
              in IT, digital marketing, and academic tuition for +1 and +2
              students.
            </p>

            {/* Features List */}
            <div className="row gy-2 gx-4 mb-4">
              {features.map((feature, index) => (
                <div className="col-sm-6" key={index}>
                  <p style={{ marginBottom: "0" }}>
                    <i
                      className="fa fa-check-circle"
                      style={{ color: "#0d6efd", marginRight: "8px" }}
                    ></i>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extended About Us Section */}
        <div className="my-5">
          <div className="row justify-content-center">
            {/* Vision Section */}
            <div className="col-lg-10 card-style p-4">
              <div className="row">
                <div className="col-md-5">
                  <img src={vision} alt="Vision" style={imgStyle} />
                </div>
                <div className="col-md-7">
                  <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3 mb-3 mt-3">
                      Our Vision
                    </h6>
                  </div>
                  <p>
                    Our <strong>vision</strong> is to make{" "}
                    <strong>quality education accessible to all</strong>,
                    empowering students with the skills they need to succeed in
                    their careers.
                  </p>
                  <p>
                    Our <strong>mission</strong> is to provide an{" "}
                    <strong>inclusive learning environment</strong> where
                    students receive <strong>personalized guidance</strong> from
                    expert faculty members.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="col-lg-10 card-style p-4">
              <div className="row flex-row-reverse">
                <div className="col-md-5">
                  <img src={mission} alt="Mission" style={imgStyle} />
                </div>
                <div className="col-md-7">
                  <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3 mb-3 mt-3">
                      Our Mission
                    </h6>
                  </div>
                  <p>
                    We embrace{" "}
                    <strong>innovative teaching methodologies</strong>,
                    including{" "}
                    <strong>
                      interactive sessions, live projects, and hands-on
                      practicals
                    </strong>
                    , to ensure students gain real-world skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Inline Styles */}
        <style>{`
          .card-style {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            margin-bottom: 20px;
          }

          .card-style:hover {
            transform: translateY(-5px);
            box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.15);
          }

          .img-fluid {
            max-height: 250px;
            object-fit: cover;
            width: 100%;
            border-radius: 12px;
          }
        `}</style>
      </div>
    </div>
  );
};

// Inline Styles
const imgStyle = {
  width: "100%",
  maxHeight: "250px",
  objectFit: "cover",
  borderRadius: "12px",
};

export default AboutUs;