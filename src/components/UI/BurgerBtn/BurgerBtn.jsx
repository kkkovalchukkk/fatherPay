import React from "react";

const BurgerBtn = ({ setBurgerMenuIsOpen, burgerMenuIsOpen }) => {
  const closeMenuByClickOnOverlay = (e) => {
    if (e.target.className === "burger-window burger-window--active") {
      setBurgerMenuIsOpen(false);
    }
  };

  const toggleBurgerMenu = () => {
    if (burgerMenuIsOpen) {
      setBurgerMenuIsOpen(false);
      window.removeEventListener("click", closeMenuByClickOnOverlay);
    } else {
      setBurgerMenuIsOpen(true);
      window.addEventListener("click", closeMenuByClickOnOverlay);
    }
  };

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
