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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="header-carousel container-fluid p-0 mb-5">
      <Slider {...settings}>
        {[{ img: carousal1, title: "Unlock Your Potential", subtitle: "Elevate Your Learning Experience", text: "Gain knowledge from expert educators and thrive in your career." },
          { img: carousal2, title: "Learn Anytime, Anywhere", subtitle: "Your Future Starts Here", text: "Join our dynamic learning community and achieve your goals." }]
          .map((slide, index) => (
            <div key={index} className="slick-slide position-relative">
              <img
                className="img-fluid w-100"
                src={slide.img}
                loading="lazy"
                alt="Education"
                style={{ height: "600px", objectFit: "cover" }}
              />
              <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-lg-6 text-content">
<motion.h5
  className="text-primary text-uppercase mb-3 carousel-title-mobile"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
>
  {slide.title}
</motion.h5>

<motion.h1
  className="display-3 text-white fw-bold carousel-subtitle-mobile"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.3 }}
>
  {slide.subtitle}
</motion.h1>

                      <motion.p
                        className="fs-5 text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                      >
                        {slide.text}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.9 }}
                      >
                        <Link to="/courses" className="btn btn-primary btn-lg me-3">
                          Explore Course
                        </Link>
                        <a
                          href="https://wa.me/9544243435"
                          className="btn btn-light btn-lg"
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
  );
};

export default Carousel;
