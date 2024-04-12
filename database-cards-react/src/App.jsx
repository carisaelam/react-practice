import React from "react";
import Card from "./Card.jsx";
import Boxes from "./Boxes.jsx";
import Todo from "./Todo.jsx";
import Accordian from "./Accordian.jsx";
import Toggle from './Toggle.jsx'

export default function App(props) {
  return (
    <main>
      {/* <Boxes isLit={true} handleClick={props.toggle} /> */}
      {/* <div className="card__container">
        <Card />
      </div> */}
      {/* <Todo /> */}
      {/* <Accordian /> */}
      <Toggle />

    </main>
  );
}
