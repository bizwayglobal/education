import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import carousal1 from "../../../assets/img/graduation.jpg";
import carousal2 from "../../../assets/img/about4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
  };

  return (
    <>
      <style>
        {`
          .header-carousel {
            position: relative;
            overflow: hidden;
          }

          .slick-slide {
            position: relative;
          }

          .carousel-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              135deg,
              rgba(0, 0, 0, 0.75) 0%,
              rgba(0, 0, 0, 0.45) 50%,
              rgba(0, 0, 0, 0.3) 100%
            );
            display: flex;
            align-items: center;
            z-index: 2;
          }

          .carousel-img {
            width: 100%;
            height: 600px;
            object-fit: cover;
            transition: transform 8s ease-out;
          }

          .slick-slide.slick-active .carousel-img {
            transform: scale(1.1);
          }

          .text-content {
            position: relative;
            z-index: 3;
          }

          .carousel-title {
            font-size: 1.1rem;
            font-weight: 700;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #FFD700;
            text-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
            margin-bottom: 1rem;
          }

          .carousel-heading {
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 1.2;
            color: #ffffff;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            margin-bottom: 1.5rem;
          }

          .carousel-description {
            font-size: 1.25rem;
            color: #f0f0f0;
            line-height: 1.8;
            margin-bottom: 2rem;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
          }

          .btn-explore {
            background: linear-gradient(135deg, #4B86C8 0%, #233968 100%);
            border: none;
            padding: 14px 36px;
            font-weight: 600;
            font-size: 1rem;
            border-radius: 50px;
            color: white;
            transition: all 0.4s ease;
            box-shadow: 0 8px 20px rgba(75, 134, 200, 0.4);
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .btn-explore:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(75, 134, 200, 0.7);
            background: linear-gradient(135deg, #5a96d8 0%, #2d4578 100%);
          }

          .btn-enroll {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.8);
            padding: 14px 36px;
            font-weight: 600;
            font-size: 1rem;
            border-radius: 50px;
            color: white;
            transition: all 0.4s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .btn-enroll:hover {
            background: rgba(255, 255, 255, 0.95);
            color: #233968;
            border-color: white;
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(255, 255, 255, 0.3);
          }

          .slick-dots {
            bottom: 30px;
            z-index: 10;
          }

          .slick-dots li button:before {
            font-size: 12px;
            color: white;
            opacity: 0.5;
          }

          .slick-dots li.slick-active button:before {
            color: #FFD700;
            opacity: 1;
          }

          .decorative-line {
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, #FFD700 0%, transparent 100%);
            margin: 1rem 0;
            border-radius: 2px;
          }

          @media (max-width: 768px) {
            .carousel-img {
              height: 500px;
            }

            .carousel-heading {
              font-size: 2.2rem;
            }

            .carousel-description {
              font-size: 1rem;
            }

            .carousel-title {
              font-size: 0.9rem;
              letter-spacing: 2px;
            }

            .btn-explore,
            .btn-enroll {
              padding: 12px 28px;
              font-size: 0.9rem;
              display: block;
              width: 100%;
              margin-bottom: 1rem;
            }

            .btn-explore {
              margin-right: 0 !important;
            }
          }

          @media (max-width: 576px) {
            .carousel-img {
              height: 450px;
            }

            .carousel-heading {
              font-size: 1.8rem;
            }
          }
        `}
      </style>

      <div className="header-carousel container-fluid p-0 mb-5">
        <Slider {...settings}>
          {[
            {
              img: carousal1,
              title: "Beyond Certificates, Beyond Degrees",
              subtitle: "Welcome to IQ Education Hub Skilversity",
              text: "Where students become interns, interns become professionals, and skills turn into careers. Join 100+ job-guaranteed programs designed for real-world success.",
            },
            {
              img: carousal2,
              title: "Learn • Intern • Work • Grow",
              subtitle: "100% Practical, 100% Job-Ready",
              text: "Bridge the gap between education and employment with hands-on training, real internships, and guaranteed career placement.",
            },
          ].map((slide, index) => (
            <div key={index} className="slick-slide position-relative">
              <img
                className="carousel-img"
                src={slide.img}
                loading="lazy"
                alt={slide.title}
              />
              <div className="carousel-overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-10 col-lg-7 text-content">
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <h5 className="carousel-title">{slide.title}</h5>
                        <div className="decorative-line"></div>
                      </motion.div>

                      <motion.h1
                        className="carousel-heading"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        {slide.subtitle}
                      </motion.h1>

                      <motion.p
                        className="carousel-description"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        {slide.text}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      >
                        <Link to="/courses" className="btn btn-explore me-3">
                          Explore Courses
                        </Link>
                        <a
                          href="https://wa.me/919544243435"
                          className="btn btn-enroll"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Enroll Now
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;