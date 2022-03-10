import React, { useState } from "react";
import "./App.scss";
import team from "./data/team";
import wave from "./assets/images/wave (3).png";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import Nav from "./components/Nav/Nav";

const App = () => {
  const [user, setUser] = useState({
    firstName: "Alima",
    lastName: "Miller",
  });

  const createEmployeeCard = team.map((employee) => {
    return (
      <EmployeeCard
        name={employee.name}
        role={employee.role}
        isActive={`${user.firstName} ${user.lastName}` === employee.name}
      />
    );
  });

  return (
    <div className="app">
      <img className="app__header--img" src={wave} alt="" />
      <Nav user={user} />
      <section className="app__content">{createEmployeeCard}</section>
    </div>
  );
};

export default App;
