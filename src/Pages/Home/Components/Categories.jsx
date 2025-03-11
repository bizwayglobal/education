import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import cat1 from "../../../assets/img/cat-1.jpg";
import cat2 from "../../../assets/img/cat-2.jpg";
import cat3 from "../../../assets/img/cat-3.jpg";
import cat4 from "../../../assets/img/cat-4-min.jpg";

const categories = [
  { img: cat1, title: "IQ Tuition", path: "/iq" },
  { img: cat2, title: "IT", path: "/" },
  { img: cat3, title: "Digital Marketing", path: "/" },
  { img: cat4, title: "Accounting Courses", path: "/" },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Categories
          </h6>
          <h1 className="mb-5">Courses Categories</h1>
        </div>
        <div className="row g-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              className="col-lg-3 col-md-6 col-sm-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="category-card position-relative overflow-hidden rounded-3">
                <img
                  src={cat.img}
                   loading="lazy"
                  className="img-fluid w-100 h-100"
                  alt={cat.title}
                />
                <div className="category-overlay d-flex align-items-center justify-content-center flex-column">
                  <h5 className="text-white mb-3">{cat.title}</h5>
                  <button
                    className="btn btn-custom"
                    onClick={() => navigate(cat.path)}
                    style={{
                      borderRadius: "50px",
                      background: "linear-gradient(135deg, #007bff, #0056b3)",
                      color: "white",
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
