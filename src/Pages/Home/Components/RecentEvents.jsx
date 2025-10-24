import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import image1 from "../../../assets/img/DSC01018-min.JPG";
import image2 from "../../../assets/img/DSC00386-min.JPG";
import image3 from "../../../assets/img/DSC01087-min.JPG";
import image4 from "../../../assets/img/DSC00880-min.JPG";
import image5 from '../../../assets/img/quiz.jpg';
import image6 from '../../../assets/img/deepvali.jpg';
const events = [
  {
    id: 1,
    name: "Football Tournament",
    image: image1,
    description:
      "Our recent football tournament was a thrilling experience, filled with energy, teamwork, and sportsmanship.",
    location: "Calicut, Kerala",
  },
  {
    id: 2,
    name: "Study Tour",
    image: image2,
    description:
      "Had a fun-filled day outside the classroom! Our recent study tour was an enriching experience for our students.",
    location: "Calicut, Kerala",
  },
  {
    id: 3,
    name: "A Powerful Motivation Session",
    image: image3,
    description:
      "A truly uplifting session where students gained valuable insights, boosting their confidence and mindset for a brighter future.",
    location: "Calicut, Kerala",
  },
  {
    id: 4,
    name: "New Year Celebration",
    image: image4,
    description:
      "We had an amazing time ringing in the New Year at IQ Academy with a fun-filled celebration.",
    location: "Calicut, Kerala",
  },
  {
    id: 5,
    name: " Quiz Competition",
    image: image6,
    description:
      "Students showcased their knowledge and quick thinking in our exciting quiz competition. A day full of learning and fun!",
    location: "Calicut, Kerala",
  },
  {
    id: 6,
    name: "Deepavali Celebration",
    image: image5,
    description:
      "We celebrated Deepavali with vibrant lights, sweets, and joy all around spreading happiness and festive spirit across the campus.",
    location: "Calicut, Kerala",
  },
];

const RecentEvents = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    
    <div style={{ padding: "60px 20px", background: "" }}>
      
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
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
          Gallery
        </div>
        <h1 style={{  fontWeight: "700", color: "#212529", marginTop: "10px" }}>
          Recent Events
        </h1>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} style={{ padding: "0 15px" }}>
              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease-in-out",
                  height: "580px",
                  display: "flex",
                  flexDirection: "column",
                  margin: "0 10px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.08)";
                }}
              >
                {/* Image Section with Overlay */}
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img
                    src={event.image}
                    alt={event.name}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "280px",
                      objectFit: "cover",
                      transition: "transform 0.4s ease-in-out",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      right: "0",
                      bottom: "0",
                      background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.3))",
                    }}
                  />
                </div>

                {/* Content Section */}
                <div style={{ padding: "24px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <h4
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: "600",
                      color: "#212529",
                      marginBottom: "12px",
                      lineHeight: "1.4",
                    }}
                  >
                    {event.name}
                  </h4>
                  
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#6c757d",
                      lineHeight: "1.6",
                      marginBottom: "16px",
                      flexGrow: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {event.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "14px",
                      color: "#495057",
                      marginBottom: "20px",
                      paddingTop: "12px",
                      borderTop: "1px solid #e9ecef",
                    }}
                  >
                    <span style={{ marginRight: "6px" }}>📍</span>
                    <span style={{ fontWeight: "500" }}>{event.location}</span>
                  </div>

                  {/* Button Section */}
                  <Link
                    to="/about"
                    style={{
                      textDecoration: "none",
                      display: "inline-block",
                      width: "100%",
                    }}
                  >
                    <button
                      style={{
                        background: "#4B86C8",
                        border: "none",
                        padding: "12px 24px",
                        cursor: "pointer",
                        borderRadius: "8px",
                        transition: "all 0.3s ease-in-out",
                        width: "100%",
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "600",
                        letterSpacing: "0.3px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#4B86C8";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#4B86C8";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      View Details →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecentEvents;