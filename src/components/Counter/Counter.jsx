import React from "react";
import "./Counter.scss"
import { useState } from "react";

const Counter = () => {
  const [ticketCounter, setTicketCounter] = useState(0);

  // take away from the counter
  const handleDecrement = () => {
    if (ticketCounter > 0) {
     setTicketCounter(ticketCounter - 1);
    }
  };

  // add to the counter
  const handleIncrement = () => {
    setTicketCounter(ticketCounter + 1);
  };

  return (
    <div className="counter">
      <p className="counter__heading">Completed Tasks</p>
      <p className="counter__total"> {ticketCounter} </p> 
      <button className="counter__button" onClick={handleDecrement}>-</button>
      <button className="counter__button" onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;