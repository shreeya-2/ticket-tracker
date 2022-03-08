import React from "react";
import "./EmployeeCard.scss"
import Counter from "../../components/Counter/Counter";

const EmployeeCard = (props) => {
  return (
    <div className="employee-card">
      <h2 className="employee-card__heading">{props.name} </h2>
      <h3 className="employee-card__heading">{props.role} </h3>
      <hr className="employee-card__divider"></hr>
      <Counter />
    </div>
  );
};

export default EmployeeCard;