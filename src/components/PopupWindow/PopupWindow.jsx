import React from "react";

const PopupWindow = ({ children, popupWindowIsOpen }) => {
  return (
    <div
      className={
        popupWindowIsOpen ? "popup-window popup-window--active" : "popup-window"
      }
    >
      {children}
    </div>
  );
};

export default PopupWindow;
