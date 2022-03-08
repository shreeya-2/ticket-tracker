import React from 'react';
import './App.scss';
import team from "./data/team";
import background from "./assets/images/abstract-gradient.png";
import EmployeeCard from "./components/EmployeeCard/EmployeCard";

const App = () => {
  const createEmployeeCard = team.map((employee) => {
    return <EmployeeCard name={employee.name} role={employee.role} />
  });

  return (
    <div className="App">
      <header className="app-header"> 
        <img className="app-header__img" src={background} alt=""/>
        <h1 className="app-heading">Ticket Tracker</h1>
      </header>
      <section className="app-content">
        <div> 
          {createEmployeeCard}
        </div>
      </section>    
    </div>
  );
}

export default App;
