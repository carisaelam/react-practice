import React from "react";

export default function Hero() {
  return (
    <div className="hero">
        <div className="hero__arrow"><i className="fa-solid fa-arrow-left"></i></div>
      <div className="hero__text__container">
        <h2 className="hero__title">Guardians of the Galaxy</h2>
        <div className="hero__text"><i className="fa-solid fa-location-dot"></i> Cineplex Entertainment, Toronto ON</div>
      </div>
      <div className="overlay"></div>
      <img
        src="https://ichef.bbci.co.uk/images/ic/1200x675/p061d1pl.jpg"
        alt="movie poster image"
      />
    </div>
  );
}
