import React from "react";
import "./EmployeeCard.scss";
import Counter from "../../components/Counter/Counter";

const EmployeeCard = (props) => {
  const { name, isActive, role } = props;

  let cardText = `${name}`;

  if (isActive === true) {
    cardText = `${name} 👋`;
  }

  return (
    <div className="employee-card">
      <h2 className="employee-card__heading"> {cardText} </h2>
      <h3 className="employee-card__heading">{role} </h3>
      <hr className="employee-card__divider"></hr>
      <Counter />
    </div>
  );
};

export default EmployeeCard;
