import { NavLink } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink className="nav__link">FAQs</NavLink>
      <NavLink className="nav__link">Контакты</NavLink>
      <NavLink className="nav__link">Отзывы</NavLink>
    </nav>
  );
};

export default Nav;
