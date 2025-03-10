import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const services = [
  {
    icon: "fa-futbol",
    title: "Football Coaching",
    description:
      "Enhance your football skills with professional coaching and training sessions.",
  },
  {
    icon: "fa-chalkboard-teacher",
    title: "Expert Teachers",
    description:
      "Learn from experienced educators who provide personalized guidance and mentorship.",
  },
  {
    icon: "fa-clock",
    title: "Flexible Timing",
    description:
      "Choose convenient class schedules that fit your routine and learning preferences.",
  },
  {
    icon: "fa-laptop-code",
    title: "IT Education",
    description:
      "Gain hands-on experience in coding, software development, and digital skills with expert-led courses.",
  },
];

const Services = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <motion.div
          className="row g-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-3 col-sm-6 col-6 d-flex align-items-stretch"
            >
              <motion.div
                className="service-item text-center pt-3 d-flex flex-column w-100"
                animate={{
                  x: [-5, 5, -5], // Horizontal wave effect
                  y: [-3, 3, -3], // Vertical bounce effect
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3, // Sequential effect
                }}
              >
                <div className="p-4 flex-grow-1 d-flex flex-column">
                  <i
                    className={`fa fa-3x ${service.icon} mb-4`}
                    style={{ color: "#0d6efd" }}
                  ></i>
                  <h5 className="mb-3">{service.title}</h5>
                  <p className="flex-grow-1 description">
                    {service.description}
                  </p>
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
