import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../assets/img/trip-min.jpg";
import image2 from "../../../assets/img/annual.jpg";
import image3 from "../../../assets/img/sports.jpg";
import image4 from "../../../assets/img/food-min.jpg";

const events = [
  {
    id: 1,
    name: "Study Tour",
    image: image1,
    date: "2025-10-25",
    time: "06:00:00",
    location: "Kozhikode",
  },
  {
    id: 2,
    name: "Annual Day",
    image: image2,
    date: "2025-12-12",
    time: "09:00:00",
    location: "Elettil Vattoli",
  },
  {
    id: 3,
    name: "Sports Day",
    image: image3,
    date: "2025-09-15",
    time: "06:00:00",
    location: "Calicut, Kerala",
  },
  {
    id: 4,
    name: "Food Expo",
    image: image4,
    date: "2025-08-05",
    time: "06:00:00",
    location: "Calicut, Kerala",
  },
].map((event, index) => ({
  img: event.image,
  date: new Date(event.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }),
  time:
    event.time.slice(0, 5) +
    " to " +
    (parseInt(event.time.slice(0, 2)) + 2).toString().padStart(2, "0") +
    event.time.slice(2, 5),
  title: event.name,
  location: event.location,
  delay: `${index * 0.2}s`,
}));

const UpcomingEvents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6
            style={{
              display: "inline-block",
              background: "white",
              color: "#007bff",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            Events
          </h6>
          <h1 style={{ marginBottom: "30px" }}>Upcoming Events</h1>
        </div>

        <Slider {...settings} className="row g-4 justify-content-center">
          {events.map((event, index) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={event.delay}
              key={index}
            >
              <div
                className="event-item bg-light"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  margin: "0 15px",
                  height: "100%",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img
                    className="img-fluid"
                    src={event.img}
                    alt={event.title}
                     loading="lazy"
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "10px 10px 0 0",
                    }}
                  />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    flexGrow: "1",
                  }}
                >
                  <h5 style={{ marginBottom: "15px" }}>{event.title}</h5>
                  <p style={{ marginBottom: "5px", color: "#555" }}>
                    <i
                      className="fa fa-calendar text-primary me-2"
                      style={{ marginRight: "8px" }}
                    ></i>
                    {event.date}
                  </p>
                  <p style={{ marginBottom: "5px", color: "#555" }}>
                    <i
                      className="fa fa-clock text-primary me-2"
                      style={{ marginRight: "8px" }}
                    ></i>
                    {event.time}
                  </p>
                  <p style={{ marginBottom: "15px", color: "#555" }}>
                    <i
                      className="fa fa-map-marker-alt text-primary me-2"
                      style={{ marginRight: "8px" }}
                    ></i>
                    {event.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default UpcomingEvents;
