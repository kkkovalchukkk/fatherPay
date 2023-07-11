import React from "react";
import Nav from "../Nav";

const BurgerMenu = ({ burgerMenuIsOpen, openContactsPopup }) => {
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
          openContactsPopup={openContactsPopup}
          burgerMenuIsOpen={burgerMenuIsOpen}
        />
      </div>
    </div>
  );
};

export default BurgerMenu;
