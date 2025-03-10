import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../assets/img/DSC01018.JPG";
import image2 from "../../../assets/img/DSC00386.JPG";
import image3 from "../../../assets/img/DSC01087.JPG";
import image4 from "../../../assets/img/DSC00880.JPG";

const fallbackEvents = [
  {
    id: 1,
    name: "Football Tournament",
    image: image1,
    description: "Our recent football tournament was a thrilling experience, filled with energy, teamwork, and sportsmanship.",
    location: "Calicut, Kerala",
  },
  {
    id: 2,
    name: "Study Tour",
    image: image2,
    description: "Had a fun-filled day outside the classroom! Our recent study tour was an enriching experience for our students.",
    location: "Calicut, Kerala",
  },
  {
    id: 3,
    name: "A Powerful Motivation Session",
    image: image3,
    description: "A truly uplifting session where students gained valuable insights, boosting their confidence and mindset for a brighter future.",
    location: "Calicut, Kerala",
  },
  {
    id: 4,
    name: "New Year Celebration",
    image: image4,
    description: "We had an amazing time ringing in the New Year at IQ Academy with a fun-filled celebration",
    location: "Calicut, Kerala",
  },
];

const RecentEvents = () => {
  const [events, setEvents] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/recent-events/`)
      .then((response) => {
        const eventsData = response.data.map((event) => ({
          img: `${apiUrl}${event.image}`,
          title: event.name,
          description: event.description,
          location: event.location,
        }));
        setEvents(eventsData);
      })
      .catch((error) => {
        console.error("API fetch failed, using fallback events.", error);
        setEvents(
          fallbackEvents.map((event) => ({
            img: event.image,
            title: event.name,
            description: event.description,
            location: event.location,
          }))
        );
      });
  }, [apiUrl]);

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
                minHeight: "500px",
              }}
            >
              <img
                src={event.img}
                alt={event.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "15px",
                }}
              >
                <h4>{event.title}</h4>
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
            
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecentEvents;
