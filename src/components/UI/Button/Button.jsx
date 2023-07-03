import React from "react";

const Button = ({ type = "button", caption = "Оплатить", tabIndex = "" }) => {
  return (
    <button tabIndex={tabIndex} type={type} className="btn">
      {caption}
    </button>
  );
};

export default Button;
