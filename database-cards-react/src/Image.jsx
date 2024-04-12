import React from "react";

export default function Image() {
  const num = Math.floor(Math.random() * 200);
  const imgURL = `https://picsum.photos/id/${num}/100`;
  <img src={imgURL} alt="" />;

  return <img className='card__image' src={imgURL} />;
}
