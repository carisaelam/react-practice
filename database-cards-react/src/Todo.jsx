import React from "react";

export default function Todo() {
  const [text, setText] = React.useState("");

  const [count, setCount] = React.useState(0);

  function handleAllChanges(e) {
    setText(e.target.value);
    setCount(e.target.value.length);
  }

  return (
    <div className="todo__container">
      <h1>To Do</h1>
      <input onChange={handleAllChanges} type="text" />
      <p className="typed__text">{text}</p>
      <p className="character__count">{count}</p>
    </div>
  );
}
