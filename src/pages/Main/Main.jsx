import React, { useState } from "react";
import StatsList from "../../components/StatsList";
import StatBlock from "../../components/StatBlock";
import { useNavigate } from "react-router-dom";
import Payment from "../../components/Payment";
import Button from "../../components/UI/Button";
import PaymentFormFooterMenu from "../../components/PaymentFormFooterMenu/PaymentFormFooterMenu";
// import PaymentForm from "../../components/PaymentForm/PaymentForm";

const Main = ({
  username,
  screenWidth,
  paymentValue,
  paymentType,
  confirm,
  togglePaymentValue,
  toggleUsername,
  setPaymentType,
  setConfirm,
  openLoginPopup,
  setIsOrder,
}) => {
  const [userNameInputError, setUserNameInputError] = useState(false);
  const [paymentInputError, setPaymentInputError] = useState(false);
  const [checkboxInputError, setCheckboxInputError] = useState(false);
  const [paymentError, setPaymentError] = useState(false);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    !username && setUserNameInputError(true);
    !paymentValue && setPaymentInputError(true);
    !confirm && setCheckboxInputError(true);
    !paymentType && setPaymentError(true);

    if (username && paymentValue && confirm && paymentType) {
      const data = {
        username,
        paymentValue,
        confirm,
        paymentType,
      };
      console.log(data);
      setIsOrder(true);
      navigate("/order");
      return data;
    }
  };

  const addPaymentValue = (e) => {
    setPaymentInputError(false);
    togglePaymentValue(
      +paymentValue + Number.parseFloat(e.target.textContent.replace(/ /g, ""))
    );
  };

  return (
    <>
      <section className="main">
        <div className="wrapper main__wrapper">
          <div className="heading-group">
            <h2 className="subheading main__heading">Пополнение Steam</h2>
            <StatsList>
              <StatBlock value={"210420"} label={"ПОПОЛНЕНИЙ"} />
              <StatBlock value={97420} label={"КЛИЕНТОВ"} />
            </StatsList>
          </div>
          <form onSubmit={submitForm} className="row">
            <div className="payment-form">
              <div className="payment-form__col">
                <div className="payment-form__group">
                  <h3 className="payment-form__heading">Заполните данные</h3>
                  <fieldset className="payment-form__fieldset">
                    <input
                      tabIndex={1}
                      type="text"
                      name="login"
                      onInput={(e) => {
                        setUserNameInputError(false);
                        toggleUsername(e.target.value);
                      }}
                      value={username}
                      placeholder="Ваш логин"
                      className={
                        userNameInputError
                          ? "payment-form__input payment-form__input--error"
                          : "payment-form__input"
                      }
                    />
                    <button
                      className="payment-form__fieldset-link"
                      onClick={openLoginPopup}
                      type="button"
                    >
                      Где его взять?
                    </button>
                  </fieldset>
                  <fieldset className="payment-form__fieldset">
                    <input
                      tabIndex={2}
                      type="text"
                      name="payment"
                      className={
                        paymentInputError
                          ? "payment-form__input payment-form__input--payment-icon payment-form__input--error"
                          : "payment-form__input payment-form__input--payment-icon"
                      }
                      onInput={(e) => {
                        setPaymentInputError(false);
                        togglePaymentValue(e.target.value);
                      }}
                      value={paymentValue}
                      placeholder="500 ₽"
                    />
                  </fieldset>
                  <div className="payment-form__price-menu">
                    <button
                      type="button"
                      className="payment-form__price-menu-btn"
                      onClick={addPaymentValue}
                      datatype=""
                    >
                      100 ₽
                    </button>
                    <button
                      type="button"
                      className="payment-form__price-menu-btn"
                      onClick={addPaymentValue}
                      datatype=""
                    >
                      500 ₽
                    </button>
                    <button
                      type="button"
                      className="payment-form__price-menu-btn"
                      onClick={addPaymentValue}
                      datatype=""
                    >
                      1 000 ₽
                    </button>
                    <button
                      type="button"
                      className="payment-form__price-menu-btn"
                      onClick={addPaymentValue}
                      datatype=""
                    >
                      2 000 ₽
                    </button>
                  </div>
                  {screenWidth > 960 && (
                    <PaymentFormFooterMenu
                      setCheckboxInputError={setCheckboxInputError}
                      setConfirm={setConfirm}
                      checkboxInputError={checkboxInputError}
                    />
                  )}
                </div>
              </div>
            </div>
            <Payment
              setPaymentError={setPaymentError}
              paymentError={paymentError}
              setPaymentType={setPaymentType}
              paymentType={paymentType}
              screenWidth={screenWidth}
              setCheckboxInputError={setCheckboxInputError}
              setConfirm={setConfirm}
              checkboxInputError={checkboxInputError}
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Main;
