import React from "react";

export default function Toggle() {
  const [isOn, setIsOn] = React.useState(false);

  function toggle() {
    setIsOn(!isOn);
  }

  const backgroundColor = isOn ? "lightgreen" : "lightcoral";
  const style = {
    backgroundColor: backgroundColor,
    padding: "10px 20px",
    borderRadius: "5px",
    textAlign: "center",
  };

  return (
    <div style={style} className="toggle__container">
      <h1>Toggle</h1>
      <p className="state__text">{isOn === true ? "yes" : "no"}</p>
      <button onClick={toggle}>toggleit</button>
    </div>
  );
}
