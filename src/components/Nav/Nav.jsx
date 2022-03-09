import React, {useState} from "react";
import "./Nav.scss";
import UserMenu from "../UserMenu/UserMenu";

const Nav= ({handleClick}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleUserClick = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <div className="navbar">
      <img className="navbar-logo" src = "https://api.iconify.design/emojione-monotone/letter-n.svg?color=white" alt="logo"/>
      
      {showUserMenu && (
        <UserMenu handleClick={handleUserClick}/>
      )}
      <img 
        className = "navbar-userMenu" 
        onClick={handleUserClick}
        src = "https://api.iconify.design/bxs/user-circle.svg?color=white"
        alt="user-login" 
      />
    </div>
  );
};    

export default Nav; 