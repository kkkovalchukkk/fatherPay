import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";
import HeaderCounter from "../../OnlineCounter";
import Socials from "../Socials";
import Nav from "../../Nav";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

const Header = ({
  onlineCount,
  openContactsPopup,
  toggleBurgerMenu,
  burgerMenuIsOpen,
}) => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <div className="header__logo-group">
          <Link className="header__logo-link" to={"/"}>
            <Logo />
          </Link>
          <HeaderCounter onlineCount={onlineCount} />
        </div>
        <div className="header__group">
          <Nav openContactsPopup={openContactsPopup} />
          <Socials />
          <BurgerBtn
            burgerMenuIsOpen={burgerMenuIsOpen}
            toggleBurgerMenu={toggleBurgerMenu}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
