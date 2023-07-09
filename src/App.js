import { useState } from "react";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";

import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Main from "./pages/Main";
import TransactionBar from "./components/TransactionBar";

import "./App.css";
import Faq from "./pages/Faq/Faq";
import PopupWindow from "./components/PopupWindow/PopupWindow";
import Socials from "./components/UI/Socials/Socials";

function App() {
  const [onlineCount, setOnlineCount] = useState(9999);
  const [username, setUsername] = useState("");
  const [paymentValue, setPaymentValue] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [popupWindowIsOpen, setPopupWindowIsOpen] = useState(false);

  const togglePaymentValue = (value) => {
    const regex = /^(?!0)\d*$/;
    if (regex.test(value)) {
      setPaymentValue(value);
    }
  };

  const toggleUsername = (name) => {
    const russianLettersRegex = /[а-яА-Я]/g;

    if (!russianLettersRegex.test(name)) setUsername(name);
  };
  return (
    <div className="app">
      <BrowserRouter>
        <PopupWindow popupWindowIsOpen={popupWindowIsOpen}>
          <div className="popup popup--contacts">
            <div className="popup__header">
              <h3 className="popup__heading">Контакты</h3>
              <button className="popup__close-btn"></button>
            </div>
            <p className="popup__text">
              PLAYFUL LABS LIMITED Registration No. 3193523
            </p>
            <p className="popup__text">
              Suite C, Level 7, World Trust Tower, 50 Stanley Street, Central,
              Hong Kong
            </p>
            <h4 className="popup__subheading">Техническая поддержка:</h4>
            <a href="mailto:help@steampay.ru" className="popup__link">
              help@steampay.ru
            </a>
            <h4 className="popup__subheading">Написать нам в соц. сетях:</h4>
            <Socials />
          </div>
        </PopupWindow>
        <Header onlineCount={onlineCount} />
        <TransactionBar />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  username={username}
                  paymentValue={paymentValue}
                  paymentType={paymentType}
                  confirm={confirm}
                  togglePaymentValue={togglePaymentValue}
                  toggleUsername={toggleUsername}
                  setPaymentType={setPaymentType}
                  setConfirm={setConfirm}
                />
              }
            />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
