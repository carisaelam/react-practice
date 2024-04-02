import React from "react";
import Hero from "./Components/Hero";
import SeatingOptions from "./Components/SeatingOptions";
import SeatingChart from "./Components/SeatingChart";
import Order from "./Components/Order";

export default function App() {
  return (
    <div className="main">
      <Hero />
      <SeatingOptions />
      <SeatingChart />
      <Order />
    </div>
  );
}
