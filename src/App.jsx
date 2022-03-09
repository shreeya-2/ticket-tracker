import React, {useState} from 'react';
import './App.scss';
import team from "./data/team";
import wave from "./assets/images/wave (3).png";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import Nav from "./components/Nav/Nav"


const App = () => {

  // const [user, setUser]  = useState({
  //   firstName: "John",
  //   lastName: "Doe",
  // });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const firstName = event.target[0].value;
  //   const lastName = event.target[1].value;
  //   console.log(firstName, lastName);
  //   setUser({
  //     firstName: firstName,
  //     lastName: lastName,
  //   });  
  // };

  const createEmployeeCard = team.map((employee) => {
    return <EmployeeCard name={employee.name} role={employee.role} />
  });
  

  return (
    <div className="app">
      <img className="app__header--img" src={wave} alt=""/>
      <Nav /> 
      < section className="app__content">
       {createEmployeeCard} 
       </section>
    </div>
  );
}

export default App;
