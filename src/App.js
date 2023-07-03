import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Main from "./pages/Main";
import TransactionBar from "./components/TransactionBar";

import "./App.css";

function App() {
  const [onlineCount, setOnlineCount] = useState(9999);
  const [username, setUsername] = useState("");
  const [paymentValue, setPaymentValue] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [confirm, setConfirm] = useState(false);

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
        <Header onlineCount={onlineCount} />
        <TransactionBar />
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
