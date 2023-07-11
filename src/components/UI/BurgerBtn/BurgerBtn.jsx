import React from "react";

const BurgerBtn = ({ toggleBurgerMenu, burgerMenuIsOpen }) => {
  return (
    <button
      onClick={toggleBurgerMenu}
      className={
        burgerMenuIsOpen ? "burger-btn burger-btn--open" : "burger-btn"
      }
    ></button>
  );
};

export default BurgerBtn;
