import React from "react";
import "./Counter.scss";
import { useState } from "react";

const Counter = () => {
  const [Counter, setCounter] = useState(0);

  // take away from the counter
  const handleDecrement = () => {
    if (Counter > 0) {
      setCounter(Counter - 1);
    }
  };

  // add to the counter
  const handleIncrement = () => {
    setCounter(Counter + 1);
  };

  return (
    <div className="counter__container">
      <p className="counter__heading">Completed Tickets</p>
      <div className="counter">
        <button className="counter__button" onClick={handleDecrement}>
          -
        </button>
        <p className="counter__total"> {Counter} </p>
        <button className="counter__button" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
