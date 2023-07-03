import React from "react";

const OnlineCounter = ({ onlineCount }) => {
  return (
    <div className="online-counter">
      <span className="online-counter__value">{onlineCount}</span>
      <span className="online-counter__label">ОНЛАЙН</span>
    </div>
  );
};

export default OnlineCounter;
