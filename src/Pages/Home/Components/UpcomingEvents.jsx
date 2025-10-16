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
    dots: false,
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
          Events
        </div>
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
                className="event-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0 15px",
                  height: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                  overflow: "hidden",
                  background: "white",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img
                    className="img-fluid event-img"
                    src={event.img}
                    alt={event.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: "24px",
                    flexGrow: "1",
                  }}
                >
                  <h5 style={{ 
                    marginBottom: "16px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#1e293b"
                  }}>
                    {event.title}
                  </h5>
                  <p style={{ 
                    marginBottom: "8px", 
                    color: "#64748b",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <i className="fa fa-calendar" style={{ color: "#4B86C8", width: "16px" }}></i>
                    {event.date}
                  </p>
                  <p style={{ 
                    marginBottom: "8px", 
                    color: "#64748b",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <i className="fa fa-clock" style={{ color: "#4B86C8", width: "16px" }}></i>
                    {event.time}
                  </p>
                  <p style={{ 
                    marginBottom: "0", 
                    color: "#64748b",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <i className="fa fa-map-marker-alt" style={{ color: "#4B86C8", width: "16px" }}></i>
                    {event.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <style>{`
          .event-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(6, 187, 204, 0.15) !important;
          }
          
          .event-item:hover .event-img {
            transform: scale(1.05);
          }

          .slick-dots li button:before {
            color: #4B86C8;
          }

          .slick-dots li.slick-active button:before {
            color: #4B86C8;
          }

          .text-primary {
            color: #4B86C8 !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default UpcomingEvents;