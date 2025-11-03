import React, { useState } from "react";
import type { Trip } from "../types/Trip";
import Modal from "./Modal";
import "./TripCard.scss";

interface TripCardProps {
  trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="trip-card">
        <img src={trip.image} alt={trip.name} />
        <div className="trip-info">
          <h3>{trip.name}</h3>
          <p className="rating">⭐ {trip.rating}</p>
          <p>{trip.description}</p>
          <button onClick={() => setIsOpen(true)}>More Info</button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={trip.name}
        content={trip.long_description}
      />
    </>
  );
};

export default TripCard;
