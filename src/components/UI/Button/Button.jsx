import React from "react";

const Button = ({
  type = "button",
  caption = "Оплатить",
  tabIndex = "",
  onClick = () => console.log("clicked"),
}) => {
  return (
    <button onClick={onClick} tabIndex={tabIndex} type={type} className="btn">
      {caption}
    </button>
  );
};

export default Button;
