import React, { useState } from "react";
import "./Nav.scss";
import UserMenu from "../UserMenu/UserMenu";

const Nav = ({ handleClick, user, setUser }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleUserClick = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target[0].value.toLowerCase();
    const lastName = event.target[1].value.toLowerCase();
    setUser({
      firstName: firstName,
      lastName: lastName,
    });
    setShowUserMenu(!showUserMenu);
  };

  return (
    <div className="nav">
      <div className="nav-menu">
        <img
          className="nav-menu__logo"
          src="https://api.iconify.design/emojione-monotone/letter-n.svg?color=white"
          alt="logo"
        />

        {showUserMenu && (
          <UserMenu handleClick={handleUserClick} handleSubmit={handleSubmit} />
        )}

        <img
          className="nav-menu__user"
          onClick={handleUserClick}
          src="https://api.iconify.design/bxs/user-circle.svg?color=white"
          alt="user login"
        />
      </div>

      <div className="nav-header">
        <h1 className="nav-header__greeting">Welcome,</h1>
        <h2 className="nav-header__username" handleSubmit={handleSubmit}>
          {user.firstName} {user.lastName}
        </h2>
      </div>
    </div>
  );
};

export default Nav;
