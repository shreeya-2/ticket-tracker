import React from "react";
import "./Nav.scss";

const Nav= (handleClick) => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src = "https://api.iconify.design/emojione-monotone/letter-n.svg?color=white" alt="logo"/>
      <img 
        className = "navbar-userMenu" 
        onClick={handleClick}
        src = "https://api.iconify.design/bxs/user-circle.svg?color=white"
        alt="user-login" 
      />
    </div>
  );
};    

export default Nav; 