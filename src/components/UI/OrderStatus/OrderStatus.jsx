import React from "react";
import OkIcon from "../OkIcon/OkIcon";
import ErrorIcon from "../ErrorIcon/ErrorIcon";
import ClockIcon from "../ClockIcon/ClockIcon";

const OrderStatus = ({ orderState }) => {
  const orderInfo = {
    ok: {
      icon: <OkIcon />,
      caption: "Аккаунт пополнен",
      classname: "ok",
    },
    error: {
      icon: <ErrorIcon />,
      caption: "Ошибка оплаты",
      classname: "error",
    },
    time: {
      icon: <ClockIcon />,
      caption: "Ожидается пополнение",
      classname: "clock",
    },
  };

  return (
    <div
      className={`order-status order-status--${orderInfo[orderState].classname}`}
    >
      <div className="order-status__icon">{orderInfo[orderState].icon}</div>
      <span
        className={`order-status__caption order-status__caption--${orderInfo[orderState].classname}`}
      >
        {orderInfo[orderState].caption}
      </span>
    </div>
  );
};

export default OrderStatus;
