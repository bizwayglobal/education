import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import cat1 from "../../../assets/img/cat-1.jpg";
import cat2 from "../../../assets/img/cat-2.png";
import cat3 from "../../../assets/img/cat-7.jpg";
import cat4 from "../../../assets/img/caat4.jpg";
import cat5 from "../../../assets/img/cat-5.jpg";

const categories = [
  {
    img: cat1,
    title: "Academic Tuition",
    path: "/iq",
    description:
      "Comprehensive tuition programs for Upper Primary, High School, and Higher Secondary students following State and CBSE syllabus.",
    courses: 12,
  },
  {
    img: cat2,
    title: "LSS USS ABACUS Special Coaching",
    path: "/",
    description:
      "Specialized coaching for LSS, USS, and ABACUS programs designed to strengthen logical reasoning and mental agility.",
    courses: 24,
  },
  {
    img: cat3,
    title: "Certificate & Diploma Courses",
    path: "/",
    description:
      "Industry-aligned certificate and diploma programs that build practical skills and enhance career opportunities.",
    courses: 18,
  },
  {
    img: cat4,
    title: "Advanced Diploma Programs",
    path: "/",
    description:
      "Hands-on advanced diploma programs developed with industry experts, offering practical experience and placement support.",
    courses: 15,
  },
  {
    img: cat5,
    title: "Career & Placement Flow",
    path: "/",
    description:
      "Comprehensive career and placement support that connects students with job opportunities after training.",
    courses: 15,
  },
];

const CategoryCard = ({ category, isHovered, onHover }) => {
  return (
    <motion.div className="px-2" style={{ minWidth: "100%" }}>
      <motion.div
        className="border-0 shadow overflow-hidden bg-white h-100 d-flex flex-column"
        style={{
          borderRadius: "24px",
          height: "480px",
          transition: "all 0.4s ease",
        }}
        whileHover={{
          y: -12,
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.08)",
        }}
        onHoverStart={() => onHover(true)}
        onHoverEnd={() => onHover(false)}
      >
        <div
          className="position-relative overflow-hidden card-image-mobile"
          style={{ height: "200px", borderRadius: "24px 24px 0 0" }}
        >
          <motion.img
            src={category.img}
            loading="lazy"
            className="w-100 h-100"
            alt={category.title}
            style={{
              objectFit: "cover",
              transition: "transform 0.6s ease",
            }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
          />
          <motion.div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ background: "rgba(255, 255, 255, 0.2)" }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <div
          className="p-4 position-relative d-flex flex-column justify-content-between card-content-mobile"
          style={{ height: "260px" }}
        >
          <style>{`
            @media (max-width: 767px) {
              .card-image-mobile {
                height: 240px !important;
              }
              .card-content-mobile {
                height: 280px !important;
              }
            }
          `}</style>

          <motion.h3
            className="fs-5 fw-bold mb-2"
            style={{ transition: "color 0.3s ease" }}
            animate={{ color: isHovered ? "#4B86C8" : "#000" }}
          >
            {category.title}
          </motion.h3>

          <p
            className="text-muted mb-3 small flex-grow-1"
            style={{
              fontSize: "0.9rem",
              lineHeight: "1.6",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
            }}
          >
            {category.description}
          </p>

          <div className="pt-3 border-top mt-auto"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CourseCategoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setCardsPerView(1);
      } else if (window.innerWidth < 768) {
        setCardsPerView(2);
      } else if (window.innerWidth < 992) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, categories.length - cardsPerView);

  useEffect(() => {
    if (!isPaused && categories.length > cardsPerView) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, cardsPerView, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const cardWidth = 100 / cardsPerView;

  return (
    <section className="py-5 bg-white position-relative overflow-hidden">
      <div
        className="position-absolute bottom-0 start-0 rounded-circle"
        style={{
          width: "16rem",
          height: "16rem",
          background: "rgba(0, 123, 255, 0.05)",
          filter: "blur(80px)",
        }}
      />
      <div className="container position-relative" style={{ zIndex: 10 }}>
        <div className="text-center mb-5">
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
            Our Programs
          </div>
          <h2 className="display-5 fw-bold mb-4">Course Categories</h2>
          <p className="text-muted fs-6 mx-auto" style={{ maxWidth: "42rem" }}>
            Explore a wide range of programs designed to help you reach your
            academic and career goals with expert guidance.
          </p>
        </div>

        <div
          className="position-relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel */}
          <div
            className="overflow-hidden carousel-container"
            style={{ margin: "0 -8px" }}
          >
            <style>{`
              @media (max-width: 767px) {
                .carousel-container {
                  margin: 0 8px !important;
                }
              }
            `}</style>

            <motion.div
              className="d-flex"
              animate={{ x: `-${currentIndex * cardWidth}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {categories.map((category, index) => (
                <div
                  key={index}
                  style={{
                    minWidth: `${cardWidth}%`,
                    maxWidth: `${cardWidth}%`,
                  }}
                >
                  <CategoryCard
                    category={category}
                    isHovered={hoveredCard === index}
                    onHover={(hovered) =>
                      setHoveredCard(hovered ? index : null)
                    }
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Dots */}
          {categories.length > cardsPerView && (
            <div className="d-flex d-md-none justify-content-center mt-4 gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="rounded-circle border-0 p-0"
                  style={{
                    width: currentIndex === idx ? "24px" : "8px",
                    height: "8px",
                    background: currentIndex === idx ? "#4B86C8" : "#ccc",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          )}

          {/* Mobile Navigation Buttons */}
          {categories.length > cardsPerView && (
            <div className="d-flex d-md-none justify-content-center mt-3 gap-3">
              <button
                onClick={prevSlide}
                className="btn btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                style={{
                  width: "40px",
                  height: "40px",
                  border: "none",
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="btn btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                style={{
                  width: "40px",
                  height: "40px",
                  border: "none",
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseCategoriesSection;
