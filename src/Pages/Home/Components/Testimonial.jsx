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
          Testimonial
        </div>
          <h1 className="mb-5">Our Students Say!</h1>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
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
                <div className="quote-icon">"</div>
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
                <div className="testimonial-footer">
                  <img
                    className="testimonial-avatar"
                    src={testimonial.image}
                    loading="lazy"
                    alt={testimonial.name}
                  />
                  <div className="testimonial-info">
                    <h5 className="testimonial-name">{testimonial.name}</h5>
                    <p className="testimonial-profession">{testimonial.profession}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>
        {`
          .testimonial-card {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            border-radius: 20px;
            padding: 35px 30px 25px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            display: flex;
            flex-direction: column;
            height: 380px;
            position: relative;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(75, 134, 200, 0.15);
          }

          .testimonial-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(75, 134, 200, 0.15);
            border-color: rgba(75, 134, 200, 0.3);
          }

          .quote-icon {
            position: absolute;
            top: 20px;
            left: 25px;
            font-size: 80px;
            font-weight: 700;
            color: rgba(75, 134, 200, 0.15);
            line-height: 1;
            font-family: Georgia, serif;
          }

          .testimonial-content {
            flex-grow: 1;
            display: flex;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 20px;
          }

          .testimonial-text {
            font-size: 15px;
            line-height: 1.7;
            color: #555;
            font-style: italic;
            margin: 0;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .testimonial-footer {
            display: flex;
            align-items: center;
            gap: 15px;
            padding-top: 20px;
            border-top: 2px solid rgba(75, 134, 200, 0.15);
          }

          .testimonial-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid #4B86C8;
            box-shadow: 0 4px 12px rgba(75, 134, 200, 0.2);
            flex-shrink: 0;
          }

          .testimonial-info {
            text-align: left;
            flex-grow: 1;
          }

          .testimonial-name {
            margin: 0;
            font-size: 17px;
            font-weight: 600;
            color: #233968;
          }

          .testimonial-profession {
            margin: 4px 0 0;
            font-size: 13px;
            color: #4B86C8;
            font-weight: 500;
          }

          @media (max-width: 767px) {
            .testimonial-card {
              height: auto;
              min-height: 350px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default TestimonialSection;