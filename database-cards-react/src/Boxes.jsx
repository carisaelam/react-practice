import React, { useState } from "react";
import boxData from "./Boxdata.js";

export default function Boxes(props) {
  const [litSquares, setLitSquares] = useState({});

  const toggle = (id) => {
    setLitSquares((prevLitSquares) => ({
      ...prevLitSquares,
      [id]: !prevLitSquares[id],
    }));
  };

  const squares = boxData.boxData.map((square) => {
    const isLit = litSquares[square.id] || false;
    const styles = isLit
      ? { backgroundColor: "red" }
      : { backgroundColor: "green" };

    return (
      <div
        className="square"
        onClick={() => toggle(square.id)}
        key={square.id}
        name={square.name}
        style={styles}
      ></div>
    );
  });

  return <div className="box__container">{squares}</div>;
}
