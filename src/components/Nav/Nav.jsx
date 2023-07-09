import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to={"/faq"} className="nav__link">
        FAQs
      </Link>
      <Link className="nav__link">Контакты</Link>
      <Link className="nav__link">Отзывы</Link>
    </nav>
  );
};

export default Nav;
