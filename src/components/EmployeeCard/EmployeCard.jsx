import React from "react";
import "./EmployeeCard.scss"

const EmployeeCard = (props) => {
  return (
    <div className="employee-card">
      <h2 className="employee-card__heading">{props.name} </h2>
      <h3 className="employee-card__heading">{props.role} </h3>
    </div>
  );
};

export default EmployeeCard;