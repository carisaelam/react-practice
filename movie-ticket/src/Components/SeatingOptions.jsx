import React from "react";

export default function SeatingOptions() {
  return (
    <div className="seating__options">
      <div className="seating__options__container">
        <div className="seating__option">
          <i className="fa-solid fa-couch available"></i>
          <p className="seating__options__text">Available</p>
        </div>
        <div className="seating__option">
          <i className="fa-solid fa-couch booked"></i>
          <p className="seating__options__text">Booked</p>
        </div>
        <div className="seating__option">
          <i className="fa-solid fa-couch selected"></i>
          <p className="seating__options__text">Selected</p>
        </div>
      </div>
    </div>
  );
}
