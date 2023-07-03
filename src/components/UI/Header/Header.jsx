import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../Logo";
import HeaderCounter from "../../OnlineCounter";
import Socials from "../Socials";
import Nav from "../../Nav";

const Header = ({ onlineCount }) => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <div className="header__logo-group">
          <NavLink className="header__logo-link" to={"/"}>
            <Logo />
          </NavLink>
          <HeaderCounter onlineCount={onlineCount} />
        </div>
        <div className="header__group">
          <Nav />
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
