import React from "react";
import "./EmployeeCard.scss";
import Counter from "../../components/Counter/Counter";
<components />

const EmployeeCard = (props) => {
  return (
    <div className="employee-card">
      <h2 className="employee-card__heading">{props.name} </h2>
      <h3 className="employee-card__heading">{props.role} </h3>
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default EmployeeCard;