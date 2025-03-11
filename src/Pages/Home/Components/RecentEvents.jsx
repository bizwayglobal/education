import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import image1 from "../../../assets/img/DSC01018-min.JPG";
import image2 from "../../../assets/img/DSC00386-min.JPG";
import image3 from "../../../assets/img/DSC01087-min.JPG";
import image4 from "../../../assets/img/DSC00880-min.JPG";

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
];

const RecentEvents = () => {
  const settings = {
    dots: true,
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
    <div style={{ padding: "50px 0" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h6
          style={{
            display: "inline-block",
            background: "white",
            color: "#007bff",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          Gallery
        </h6>
        <h1>Recent Events</h1>
      </div>

      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index}>
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                textAlign: "center",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "600px", // Ensure all cards are the same size
              }}
            >
              {/* Image Section */}
              <img
                src={event.image}
                alt={event.name}
                 loading="lazy"
                style={{
                  width: "100%",
                  height: "300px", // Ensures uniform image size
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              {/* Content Section */}
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "15px",
                }}
              >
                <h4>{event.name}</h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#555",
                    marginBottom: "10px",
                    flexGrow: 1,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {event.description}
                </p>
                <p>
                  <strong>📍 Location:</strong> {event.location}
                </p>
              </div>

              {/* Button Section */}
              <div style={{ marginTop: "auto" }}>
                <button
                  style={{
                    background: "#007bff",
                    border: "none",
                    padding: "8px 12px",
                    cursor: "pointer",
                    borderRadius: "5px",
                    transition: "background 0.3s ease-in-out",
                  }}
                >
                  <Link
                    to="/about"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    View Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecentEvents;
