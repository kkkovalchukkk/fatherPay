import React from "react";
import Nav from "../Nav";

const BurgerMenu = ({
  burgerMenuIsOpen,
  openContactsPopup,
  toggleBurgerMenu,
}) => {
  return (
    <div
      className={
        burgerMenuIsOpen
          ? "burger-window burger-window--active"
          : "burger-window"
      }
    >
      <div className="burger-menu">
        <Nav
          toggleBurgerMenu={toggleBurgerMenu}
          openContactsPopup={openContactsPopup}
          burgerMenuIsOpen={burgerMenuIsOpen}
        />
      </div>
    </div>
  );
};

export default BurgerMenu;
