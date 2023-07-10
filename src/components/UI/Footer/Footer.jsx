import React from "react";
import Nav from "../../Nav";

const Footer = ({ openPoliticsPopup, openRightsPopup }) => {
  return (
    <footer className="footer">
      <div className="wrapper footer__wrapper">
        <Nav />
        <div className="footer__right-group">
          <button
            onClick={openPoliticsPopup}
            type="button"
            className="footer__copyrights-link"
          >
            Политика конфиденциальности
          </button>
          <button
            onClick={openRightsPopup}
            type="button"
            className="footer__copyrights-link"
          >
            Пользовательское соглашение
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
