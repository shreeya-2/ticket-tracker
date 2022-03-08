import React from 'react';
import './App.scss';
import team from "./data/team";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import wave from "./assets/images/wave (3).png";

const App = () => {
  const createEmployeeCard = team.map((employee) => {
    return <EmployeeCard name={employee.name} role={employee.role} />
  });

  return (
    <div className="app">
      <img className="app__header--img" src={wave} alt=""/>
      <header className="app__header">
        <h1 className="app__heading">Welcome,</h1>
        <h2 className="app__subheading"> Lundy Consultancy Team</h2>
      </header> 
       {createEmployeeCard}   
    </div>
  );
}

export default App;
