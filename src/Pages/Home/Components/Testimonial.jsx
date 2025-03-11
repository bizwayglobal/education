import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import test1 from "../../../assets/img/user-min.png";
import test2 from "../../../assets/img/user-min.png";
import test3 from "../../../assets/img/user-min.png";
import test4 from "../../../assets/img/user-min.png";

const testimonials = [
  {
    name: "Abdul Basith",
    profession: "Class 9 Student",
    image: test1,
    text: "The coaching classes helped me improve my understanding of complex subjects. The teachers are supportive and explain concepts in an easy way.",
  },
  {
    name: "Shanid",
    profession: "Class 10 Student",
    image: test2,
    text: "Thanks to the structured approach and practice tests, I performed well in my board exams. The study materials were excellent!",
  },
  {
    name: "Ayisha",
    profession: "Class 8 Student",
    image: test3,
    text: "The classes were incredibly helpful. The teachers provided valuable tips, and the mock tests boosted my confidence.",
  },
  {
    name: "Vyshnav",
    profession: "Class 9 Student",
    image: test4,
    text: "I highly recommend the Coaching. The interactive teaching methods and problem-solving sessions helped me a lot.",
  },
];

const TestimonialSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Students Say!</h1>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <img
                  className="border rounded-circle p-2 mx-auto mb-3"
                  src={testimonial.image}
                   loading="lazy"
                  alt={testimonial.name}
                />
                <h5 className="mb-0">{testimonial.name}</h5>
                <p>{testimonial.profession}</p>
                <div className="testimonial-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>
        {`
          .testimonial-card {
            background: white;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            height: 350px; /* Ensuring uniform card size */
            text-align: center;
          }

          .testimonial-card img {
            width: 80px;
            height: 80px;
            object-fit: cover;
          }

          .testimonial-text {
            flex-grow: 1;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            font-size: 14px;
            color: #555;
            padding: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default TestimonialSection;
