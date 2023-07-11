import { Link } from "react-router-dom";
import React from "react";

const Nav = ({ openContactsPopup, burgerMenuIsOpen }) => {
  const toggleOpenContactsPopup = (e) => {
    e.preventDefault();
    openContactsPopup();
  };

  if (burgerMenuIsOpen) {
    return (
      <nav className="nav">
        <Link onClick={() => {
          
        }} to={"/faq"} className="nav__link">
          FAQs
        </Link>
        <Link onClick={toggleOpenContactsPopup} className="nav__link">
          Контакты
        </Link>
        <Link className="nav__link">Отзывы</Link>
      </nav>
    );
  }

  return (
    <nav className="nav">
      <Link to={"/faq"} className="nav__link">
        FAQs
      </Link>
      <Link onClick={toggleOpenContactsPopup} className="nav__link">
        Контакты
      </Link>
      <Link className="nav__link">Отзывы</Link>
    </nav>
  );
};

export default Nav;
