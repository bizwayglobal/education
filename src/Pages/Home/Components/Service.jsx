import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const services = [
  {
    icon: "fa-book-open",
    title: "100+ Skill-Based Programs",
    description:
      "Technology, Business, Language, Arts & More - comprehensive courses designed for real-world success.",
  },
  {
    icon: "fa-hands-helping",
    title: "100% Practical Training",
    description:
      "Learn by doing, not just reading. Hands-on experience with every course module.",
  },
  {
    icon: "fa-briefcase",
    title: "Internship-to-Job Pathway",
    description:
      "Real work experience at Bizway Future LLP - bridge the gap between learning and earning.",
  },
  {
    icon: "fa-certificate",
    title: "Job-Guaranteed Courses",
    description:
      "Build a career, not just a certificate. We're committed to your professional success.",
  },
  {
    icon: "fa-globe",
    title: "Online & Offline Learning",
    description:
      "Flexible, global-standard training that adapts to your schedule and learning style.",
  },
];

const Services = () => {
  return (
    <div
      className="container-xxl py-5"
      style={{

        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(75, 134, 200, 0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(75, 134, 200, 0.03) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      ></div>

      <div className="container position-relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
      <div style={{ 
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
          boxShadow: "0 4px 12px rgba(75, 134, 200, 0.3)"
        }}>
       Our Features
        </div>
          </div>

             <h1 style={{  fontWeight: "700", color: "#212529", marginTop: "10px" }}>
       What Makes Us Different
        </h1>

          <motion.p
            className="text-muted fs-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Empowering students with industry-relevant skills and guaranteed career pathways
          </motion.p>
        </motion.div>

        {/* First Row - 3 Cards */}
        <motion.div
          className="row g-4 mb-4 justify-content-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <motion.div
                className="service-item text-center d-flex flex-column w-100 rounded-4 overflow-hidden"
                style={{
                  backgroundColor: "#fff",
                  border: "2px solid transparent",
                  position: "relative",
                  cursor: "pointer",
                }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  boxShadow: "0 20px 50px rgba(75, 134, 200, 0.6)",
                  borderColor: "#4B86C8",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "5px",
                    background: "linear-gradient(135deg, #4B86C8 0%, #233968 100%)",
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="p-4 flex-grow-1 d-flex flex-column">
                  <motion.div
                    className="mb-4 mx-auto d-flex align-items-center justify-content-center"
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "20px",
                      background: "linear-gradient(135deg, #e3f0fb 0%, #c5daf3 100%)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(135deg, #4B86C8 0%, #233968 100%)",
                        opacity: 0,
                      }}
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.i
                      className={`fa ${service.icon}`}
                      style={{
                        fontSize: "2.5rem",
                        color: "#4B86C8",
                        position: "relative",
                        zIndex: 1,
                      }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    ></motion.i>
                  </motion.div>

                  <h5 className="mb-3 fw-bold" style={{ color: "#000" }}>
                    {service.title}
                  </h5>
                  <p className="flex-grow-1 text-muted" style={{ lineHeight: "1.7" }}>
                    {service.description}
                  </p>

                  <motion.div
                    className="mt-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span
                      style={{
                        color: "#4B86C8",
                        fontWeight: "600",
                        fontSize: "0.9rem",
                      }}
                    >
                      Learn More <i className="fa fa-arrow-right ms-2"></i>
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Second Row - 2 Cards Centered */}
        <motion.div
          className="row g-4 justify-content-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {services.slice(3, 5).map((service, index) => (
            <div key={index + 3} className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <motion.div
                className="service-item text-center d-flex flex-column w-100 rounded-4 overflow-hidden"
                style={{
                  backgroundColor: "#fff",
                  border: "2px solid transparent",
                  position: "relative",
                  cursor: "pointer",
                }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  boxShadow: "0 20px 50px rgba(75, 134, 200, 0.6)",
                  borderColor: "#4B86C8",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.45 }}
                viewport={{ once: true }}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "5px",
                    background: "linear-gradient(135deg, #4B86C8 0%, #233968 100%)",
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="p-4 flex-grow-1 d-flex flex-column">
                  <motion.div
                    className="mb-4 mx-auto d-flex align-items-center justify-content-center"
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "20px",
                      background: "linear-gradient(135deg, #e3f0fb 0%, #c5daf3 100%)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(135deg, #4B86C8 0%, #233968 100%)",
                        opacity: 0,
                      }}
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.i
                      className={`fa ${service.icon}`}
                      style={{
                        fontSize: "2.5rem",
                        color: "#4B86C8",
                        position: "relative",
                        zIndex: 1,
                      }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    ></motion.i>
                  </motion.div>

                  <h5 className="mb-3 fw-bold" style={{ color: "#4B86C8" }}>
                    {service.title}
                  </h5>
                  <p className="flex-grow-1 text-muted" style={{ lineHeight: "1.7" }}>
                    {service.description}
                  </p>

                  <motion.div
                    className="mt-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span
                      style={{
                        color: "#4B86C8",
                        fontWeight: "600",
                        fontSize: "0.9rem",
                      }}
                    >
                      Learn More <i className="fa fa-arrow-right ms-2"></i>
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;