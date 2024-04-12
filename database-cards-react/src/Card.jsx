import React from "react";
import data from "./data.js";
import Image from "./Image.jsx";

export default function Card() {
  const card = data.data.map((item) => {
    return (
      <div key={item.phone} className="card">
        <h2 className="card__name">{item.name}</h2>
        <Image />
        <h3 className="card__phone">{item.phone}</h3>
        <h4 className="card__email">
          <i className="open__envelope fa-regular fa-envelope"></i>
          {item.email}
        </h4>
        <p className="card__text">{item.text}</p>
      </div>
    );
  });

  return card;
}
