import React from "react";
import Nav from "../../Nav";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper footer__wrapper">
        <Nav />
        <div className="footer__right-group">
          <button type="button" className="footer__copyrights-link">
            Политика конфиденциальности
          </button>
          <button type="button" className="footer__copyrights-link">
            Пользовательское соглашение
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
