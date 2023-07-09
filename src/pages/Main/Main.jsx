import React, { useState } from "react";
import StatsList from "../../components/StatsList";
import StatBlock from "../../components/StatBlock";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import Payment from "../../components/Payment";
import Footer from "../../components/UI/Footer";

const Main = ({
  username,
  paymentValue,
  paymentType,
  confirm,
  togglePaymentValue,
  toggleUsername,
  setPaymentType,
  setConfirm,
}) => {
  const [userNameInputError, setUserNameInputError] = useState(false);
  const [paymentInputError, setPaymentInputError] = useState(false);
  const [checkboxInputError, setCheckboxInputError] = useState(false);
  const [paymentError, setPaymentError] = useState(false);

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
          <div className="main__heading-field">
            <h2 className="subheading main__heading">Пополнение Steam</h2>
            <StatsList>
              <StatBlock value={"210420"} label={"ПОПОЛНЕНИЙ"} />
              <StatBlock value={97420} label={"КЛИЕНТОВ"} />
            </StatsList>
          </div>
          <form className="payment-form" onSubmit={submitForm}>
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
                  <Link className="payment-form__fieldset-link" to={"/faq"}>
                    Где его взять?
                  </Link>
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
              </div>
              <fieldset className="payment-form__fieldset payment-form__fieldset--checkbox">
                <input
                  type="checkbox"
                  name="rights"
                  id="rights-input"
                  tabIndex={3}
                  className="payment-form__checkbox-input"
                  onInput={(e) => {
                    setCheckboxInputError(false);
                    setConfirm(e.target.checked);
                  }}
                  style={{ display: "none" }}
                />
                <label
                  for="rights-input"
                  className={
                    checkboxInputError
                      ? "payment-form__checkbox payment-form__checkbox--error"
                      : "payment-form__checkbox"
                  }
                ></label>
                <label
                  htmlFor="rights-input"
                  className="payment-form__checkbox-label"
                >
                  Я подтверждаю, что указал свой логин Steam, а не никнейм
                </label>
              </fieldset>
              <Button tabIndex={4} type="submit" caption="Оплатить" />
            </div>
            <Payment
              setPaymentError={setPaymentError}
              paymentError={paymentError}
              setPaymentType={setPaymentType}
              paymentType={paymentType}
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Main;
