import React from "react";
import "./Counter.scss"

const Counter = () => {
  return (
    <div className="counter">
      <p>Completed Tasks</p>
      <p className="counter-total">2</p>
      <button className="counter-button">-</button>
      <button className="counter-button">+</button>
    </div>
  );
};

export default Counter;