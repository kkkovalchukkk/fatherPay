import React, { useEffect } from "react";
import Logo from "../../components/UI/Logo";
import OrderStatus from "../../components/UI/OrderStatus";
import { useNavigate } from "react-router-dom";
import Socials from "../../components/UI/Socials";

const Order = ({
  orderStatus,
  isOrder,
  setIsOrder,
  username,
  paymentValue,
}) => {
  useEffect(() => {
    setIsOrder(true);
  }, []);

  const navigate = useNavigate();

  if (!isOrder) {
    navigate("/");
  }
  return (
    <section className="order">
      <div className="wrapper order__wrapper">
        <div className="order-block">
          <div className="order-block__header">
            <div className="order-block__logo">
              <Logo />
            </div>
            <OrderStatus orderState={orderStatus} />
          </div>
          <div className="order-block__body">
            <div className="order-block__login">
              Логин Steam:{" "}
              <span className="order-block__login-value">{username}</span>
            </div>
            <span className="order-block__price">
              {new Intl.NumberFormat("ru-RU").format(paymentValue)} ₽
            </span>
          </div>
        </div>
        <div className="order__footer">
          <p className="order__footer-text">
            Пожалуйста, свяжитесь с нами, если у вас возникнут какие-либо
            проблемы
          </p>
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Order;
