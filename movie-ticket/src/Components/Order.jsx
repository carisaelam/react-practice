import React from "react";

export default function Order() {
  let currentDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[currentDate.getMonth()];
  let hour = currentDate.getHours();
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();

  return (
    <div className="order__container">
      <div className="order__titles">
        <p className="order__titles--date">Date</p>
        <p className="order__titles--tickets">Tickets</p>
        <p className="order__titles--total">TOTAL</p>
      </div>
      <div className="order__info">
        <p className="order__info--date">{`${month} ${day}, ${year}`}</p>
        <p className="order__info--tickets">3</p>
        <p className="order__info--total">$15.95</p>
      </div>
      <button className="order__button"><i className="fa-solid fa-arrow-right"></i> Next</button>
    </div>
  );
}
