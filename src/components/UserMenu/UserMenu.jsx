import React, { useState } from "react";
import "./UserMenu.scss";

const UserMenu = ({ handleClick, handleSubmit }) => {
  return (
    <div className="user-menu">
      <img
        src="https://api.iconify.design/akar-icons/cross.svg?color=white"
        className="user-menu__cross"
        alt="Close menu"
        onClick={handleClick}
      />
      <div className="user-menu__content">
        <img
          src="https://api.iconify.design/bxs/user-circle.svg?color=white"
          className="user-menu__profile"
          alt="User profile"
        />
        <h2 className="user-menu__title"> User Login</h2>
        <form className="user-menu__form" onSubmit={handleSubmit}>
          <label for="first_name" className="user-menu__form--label">
            First name:
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="user-menu__form--input"
          />
          <label for="last_name" className="user-menu__form--label">
            Last name:
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="user-menu__form--input"
          />
          <input
            type="submit"
            value="Login"
            className="user-menu__button"
            handleSubmit={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default UserMenu;
