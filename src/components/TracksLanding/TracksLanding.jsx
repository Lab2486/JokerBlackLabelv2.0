import React from "react";
import TrackCard from "../TrackCard/TrackCard";
import "./TracksLanding.css";

function TracksLanding() {
  const mockImagenes = [
    "https://f4.bcbits.com/img/a0172221191_16.jpg",
    "https://f4.bcbits.com/img/a1543935304_16.jpg",
    "https://f4.bcbits.com/img/a4073176033_16.jpg",
    "https://f4.bcbits.com/img/a3410050518_16.jpg",
    "https://f4.bcbits.com/img/a1366723079_16.jpg",
    "https://f4.bcbits.com/img/a0736995282_16.jpg",
    "https://f4.bcbits.com/img/a0832422060_16.jpg",
    "https://f4.bcbits.com/img/a4054462522_16.jpg",
  ];
  return (
    <div className="TracksLandingContainer">
      <div className="titleContainer">
        <h1 className="trackLTitle">Tracks</h1>
      </div>
      <div className="CardContainer">
        <TrackCard imagenes={mockImagenes} />
      </div>
    </div>
  );
}

export default TracksLanding;
