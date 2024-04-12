import React, { useState } from "react";

export default function SeatingChart() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className="seating__chart">
      <div className="seating__chart__container">
        <div className="seating__chart__row row__G">
          <h2 className="seating__chart__row--label">G</h2>
          <div className="seating__chart__row--section">
            <i className="fa-solid fa-couch selected"></i>
            <i className="fa-solid fa-couch selected"></i>
            <i className="fa-solid fa-couch selected"></i>
            <i className="fa-solid fa-couch selected"></i>
          </div>
          <div className="seating__chart__row--section">
            <i className="fa-solid fa-couch available"></i>
            <i className="fa-solid fa-couch available"></i>
            <i className="fa-solid fa-couch available"></i>
            <i className="fa-solid fa-couch available"></i>
          </div>
        </div>
        <div className="seating__chart__row row__F">
          <h2 className="seating__chart__row--label">F</h2>
          <div className="seating__chart__row--section">
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
          </div>
          <div className="seating__chart__row--section">
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
          </div>
        </div>
        <div className="seating__chart__row row__E">
          <h2 className="seating__chart__row--label">E</h2>
          <div className="seating__chart__row--section">
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
          </div>
          <div className="seating__chart__row--section">
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
          </div>
        </div>
        <div className="seating__chart__row row__D">
          <h2 className="seating__chart__row--label">D</h2>
          <div className="seating__chart__row--section">
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
          </div>
          <div className="seating__chart__row--section">
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
          </div>
        </div>
        <div className="seating__chart__row row__C">
          <h2 className="seating__chart__row--label">C</h2>
          <div className="seating__chart__row--section">
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
          </div>
          <div className="seating__chart__row--section">
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
          </div>
        </div>
        <div className="seating__chart__row row__B">
          <h2 className="seating__chart__row--label">B</h2>
          <div className="seating__chart__row--section">
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
          </div>
          <div className="seating__chart__row--section">
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
          </div>
        </div>
        <div className="seating__chart__row row__A">
          <h2 className="seating__chart__row--label">A</h2>
          <div className="seating__chart__row--section">
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
          </div>
          <div className="seating__chart__row--section">
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
            <i className="fa-solid fa-couch booked"></i>
          </div>
        </div>
      </div>
      <div className="screen__image__container">
        <img
          src="https://i.ibb.co/4Ts9KGN/screen.png"
          alt=""
          className="screen__image"
        />
      </div>
    </div>
  );
}
