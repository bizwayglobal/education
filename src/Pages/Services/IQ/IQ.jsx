import React, { useState } from "react";
import restaurant from "../../../assets/img/IQ-Logo-1.png";
import restaurantImg1 from "../../../assets/img/DSC00386.JPG";
import restaurantImg2 from "../../../assets/img/DSC01087.JPG";
import restaurantImg3 from "../../../assets/img/DSC01018.JPG";
import restaurantImg4 from "../../../assets/img/DSC00880.JPG";

function IQ() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const restaurants = [
    {
      id: 1,
      name: "IQ Academy Kanthapuram",
      description: " offers expert tuition for school students, focusing on personalized learning and academic excellence..",
      location: "Kanthapuram-Poonoor",
      contact: "9207343435",
      image: restaurant,
      photos: [restaurantImg1, restaurantImg2, restaurantImg3, restaurantImg4],
    },
    {
        id: 1,
        name: "IQ Academy Elettil",
        description: " offers expert tuition for school students, focusing on personalized learning and academic excellence.",
        location: "Anapparakkal Building Elettil",
        contact: "9207343435",
        image: restaurant,
        photos: [restaurant],
      },
  ];

  const openModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRestaurant(null);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", gap: "20px" }}>
      {restaurants.map((restaurant) => (
        <div
          key={restaurant.id}
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            maxWidth: "1200px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
            padding: "20px",
            alignItems: "center",
          }}
        >
          {/* Restaurant Image */}
          <div style={{ flex: "1" }}>
            <img src={restaurant.image} alt={restaurant.name} style={{ width: "100%", height: "auto", borderRadius: "10px" }} />
          </div>

          {/* Restaurant Details */}
          <div style={{ flex: "2", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ marginBottom: "10px", fontSize: "24px", fontWeight: "bold" }}>{restaurant.name}</h2>
            <p style={{ color: "#666", marginBottom: "10px" }}>{restaurant.description}</p>
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>📍 {restaurant.location}</p>
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>📞 {restaurant.contact}</p>
            <button
              onClick={() => openModal(restaurant)}
              style={{
                marginTop: "10px",
                padding: "10px 15px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Get Photos
            </button>
          </div>
        </div>
      ))}

      {/* Modal for Photos */}
      {showModal && selectedRestaurant && (
        <div
          style={{
            position: "fixed",
            top: "10%",
            left: "0",
            width: "100%",
            height: "80%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
            padding: "20px 0",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "600px",
              width: "90%",
              position: "relative",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "10px" }}>{selectedRestaurant.name} - Photos</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
              {selectedRestaurant.photos.map((photo, index) => (
                <img key={index} src={photo} alt="Restaurant" style={{ width: "45%", height: "150px", borderRadius: "5px", objectFit: "cover" }} />
              ))}
            </div>
            <button
              onClick={closeModal}
              style={{
                marginTop: "15px",
                display: "block",
                width: "100%",
                padding: "10px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default IQ
