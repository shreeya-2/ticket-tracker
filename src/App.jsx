import React from 'react';
import './App.scss';
import team from "./data/team";
import wave from "./assets/images/wave (3).png";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import Nav from "./components/Nav/Nav"


const App = () => {
  const createEmployeeCard = team.map((employee) => {
    return <EmployeeCard name={employee.name} role={employee.role} />
  });

  return (
    <div className="app">
      <img className="app__header--img" src={wave} alt=""/>
      <header className="app__header">
      <Nav />
        <h1 className="app__heading">Welcome,</h1>
        <h2 className="app__subheading"> Name</h2>
      </header> 
      < section className="app__content">
       {createEmployeeCard} 
       </section>
    </div>
  );
}

export default App;
