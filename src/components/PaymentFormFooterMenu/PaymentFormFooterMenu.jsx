import React from "react";
import Button from "../UI/Button/Button";

const PaymentFormFooterMenu = ({
  setCheckboxInputError,
  setConfirm,
  checkboxInputError,
}) => {
  return (
    <div className="payment-form__footer-menu">
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
        <label htmlFor="rights-input" className="payment-form__checkbox-label">
          Я подтверждаю, что указал свой логин Steam, а не никнейм
        </label>
      </fieldset>
      <Button tabIndex={4} type="submit" caption="Оплатить" />
    </div>
  );
};

export default PaymentFormFooterMenu;
