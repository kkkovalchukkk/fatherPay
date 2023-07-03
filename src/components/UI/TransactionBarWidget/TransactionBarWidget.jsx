import React from "react";

const TransactionBarWidget = ({ username = "Vasiliy Negr", value = 5000 }) => {
  return (
    <div className="transaction-bar__widget">
      <span className="transaction-bar__widget-username">{username}</span>
      <p className="transaction-bar__widget-text">
        пополнил на{" "}
        <span className="transaction-bar__widget-text-value">{value}</span> ₽
      </p>
    </div>
  );
};

export default TransactionBarWidget;
