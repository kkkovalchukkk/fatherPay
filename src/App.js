import { useState } from "react";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";

import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Main from "./pages/Main";
import TransactionBar from "./components/TransactionBar";

import "./App.css";
import Faq from "./pages/Faq/Faq";
import PopupWindow from "./components/PopupWindow/PopupWindow";
import Socials from "./components/UI/Socials";
import Button from "./components/UI/Button";
import Order from "./pages/Order";

import loginPopupImg from "./assets/img/login-popup-img.png";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [onlineCount, setOnlineCount] = useState(9999);
  const [username, setUsername] = useState("");
  const [paymentValue, setPaymentValue] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [isOrder, setIsOrder] = useState(false);
  const [orderStatus, setOrderStatus] = useState("time");

  const [popupWindowIsOpen, setPopupWindowIsOpen] = useState(false);
  const [contactsPopupIsOpen, setContactsPopupIsOpen] = useState(false);
  const [politicsPopupIsOpen, setPoliticsPopupIsOpen] = useState(false);
  const [rightsPopupIsOpen, setRightsPopupIsOpen] = useState(false);
  const [loginPopupIsOpen, setLoginPopupIsOpen] = useState(false);

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
  const closePopupWindowByClickOnOverlay = (e) => {
    if (e.target.className === "popup-window popup-window--active") {
      hideContactsPopup();
    }
  };
  const closePopupByEsc = (e) => {
    if (e.key === "Escape") {
      hideContactsPopup();
    }
  };
  const showPopupWindow = () => {
    window.addEventListener("click", closePopupWindowByClickOnOverlay);
    window.addEventListener("keydown", closePopupByEsc);
    setPopupWindowIsOpen(true);
  };
  const hidePopupWindow = () => {
    window.removeEventListener("click", closePopupWindowByClickOnOverlay);
    window.removeEventListener("keydown", closePopupByEsc);
    setPopupWindowIsOpen(false);
    setContactsPopupIsOpen(false);
    setPoliticsPopupIsOpen(false);
    setRightsPopupIsOpen(false);
    setLoginPopupIsOpen(false);
  };
  const openContactsPopup = () => {
    showPopupWindow();
    setContactsPopupIsOpen(true);
  };
  const hideContactsPopup = () => {
    hidePopupWindow();
    setContactsPopupIsOpen(false);
  };
  const openPoliticsPopup = () => {
    showPopupWindow();
    setPoliticsPopupIsOpen(true);
  };
  const hidePoliticsPopup = () => {
    hidePopupWindow();
    setPoliticsPopupIsOpen(false);
  };
  const openRightsPopup = () => {
    showPopupWindow();
    setRightsPopupIsOpen(true);
  };
  const hideRightsPopup = () => {
    hidePopupWindow();
    setRightsPopupIsOpen(false);
  };
  const openLoginPopup = () => {
    showPopupWindow();
    setLoginPopupIsOpen(true);
  };
  const hideLoginPopup = () => {
    hidePopupWindow();
    setLoginPopupIsOpen(false);
  };

  return (
    <div className="app">
      <HashRouter>
        <PopupWindow popupWindowIsOpen={popupWindowIsOpen}>
          <div
            className={
              contactsPopupIsOpen
                ? "popup popup--contacts popup--active"
                : "popup popup--contacts"
            }
          >
            <div className="popup__header">
              <h3 className="popup__heading">Контакты</h3>
              <button
                className="popup__close-btn"
                onClick={hideContactsPopup}
              ></button>
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
          <div
            className={
              politicsPopupIsOpen
                ? "popup popup--politics popup--active"
                : "popup popup--politics"
            }
          >
            <div className="popup__header">
              <h3 className="popup__heading">Политика конфиденциальности</h3>
              <button
                className="popup__close-btn"
                onClick={hidePoliticsPopup}
              ></button>
            </div>
            <ol className="popup__ordered-list">
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">1 ВВЕДЕНИЕ</h4>
                <div className="popup__ordered-list-item-text-content">
                  <p className="popup__ordered-list-item-text">
                    Используя и / или посещая любой раздел веб-сайта
                    https://steampay.ru («Веб-сайт»); или открывая учетную
                    запись на Сайте, вы соглашаетесь соблюдать Политику
                    конфиденциальности. В настоящей Политике конфиденциальности
                    описывается, как мы собираем, используем, обрабатываем
                    и раскрываем вашу информацию, включая личную информацию,
                    в связи с вашим доступом к этому Веб-сайту и его
                    использованием.
                  </p>
                  <p className="popup__ordered-list-item-text">
                    Для целей этой политики использование слов «мы», «нас» или
                    «наш» относится к компании, которая несет ответственность
                    за вашу информацию в соответствии с настоящей Политикой
                    конфиденциальности. Пожалуйста, см. Раздел 9 для получения
                    контактных данных.
                  </p>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  2 ИНФОРМАЦИЯ, КОТОРУЮ МЫ СОБИРАЕМ
                </h4>
                <div className="popup__ordered-list-item-text-content">
                  <p className="popup__ordered-list-item-text">
                    Мы собираем вашу личную информацию, которая может быть
                    использована для идентификации наших клиентов и партнеров,
                    включая, помимо прочего, имя и фамилию, дату рождения,
                    данные банковского счета, домашний или другой физический
                    адрес, адрес электронной почты, номер телефона. , информация
                    о доставке, платежная информация, история транзакций,
                    предпочтения использования веб-сайта и отзывы о веб-сайте
                    или другая контактная информация, которая является личной
                    информацией («Персональная информация»).
                  </p>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  2.1 ЛИЧНАЯ ИНФОРМАЦИЯ, КОТОРУЮ ВЫ ПРЕДОСТАВЛЯЕТЕ НАМ
                </h4>
                <div className="popup__ordered-list-item-text-content">
                  <p className="popup__ordered-list-item-text">
                    Мы можем попросить вас предоставить Нам вашу личную
                    информацию. В некоторых случаях мы можем запросить у вас
                    информацию посредством опросов или конкурсов. Участие в этих
                    опросах или конкурсах полностью осуществляется
                    на добровольной основе, и, с этой точки зрения, вы вправе
                    принять решение о раскрытии такой информации. Информация,
                    которую мы запрашиваем, может быть связана с контактной
                    информацией (например, имя, почтовый адрес и номер телефона)
                    и демографической информацией (например, почтовый индекс или
                    возраст).
                  </p>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  3 ЛИЧНАЯ ИНФОРМАЦИЯ, КОТОРУЮ МЫ СОБИРАЕМ О ВАС
                </h4>
                <div className="popup__ordered-list-item-text-content">
                  <p className="popup__ordered-list-item-text">
                    Спасибо, что соглашаетесь на обработку вашей личной
                    информации. Мы можем выполнять наши обычные функции.
                    Мы хотели бы сообщить вам, что мы используем вашу личную
                    информацию в следующих целях:
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    С вашего согласия (и до его отзыва). Например, вы могли дать
                    свое согласие на получение маркетинговых информационных
                    сообщений;
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.2
                  </span>
                  <p className="popup__ordered-list-item-text">
                    В необходимом объеме и для выполнения договорных
                    обязательств, что означает следующие действия:
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.2.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Обработка ваших онлайн-транзакций;
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.2.2
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Предоставление клиентской поддержки.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.3
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Где это соответствует Нашим законным деловым интересам. что
                    означает следующие действия:
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.3.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Повышение качества и соответствия ряда услуг, а также
                    продвижение Нашей службы поддержки клиентов;
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.3.2
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Действия, направленные на удовлетворение определенных
                    требований бизнеса;
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.3.3
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Действия, предпринимаемые для рабочих целей Веб-сайта;
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.3.4
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Проведение проверок безопасности и идентификации,
                    проверяющих действий;
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.3.5
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Предоставление информации о наших рекламных акциях, а также
                    информации, касающейся услуг.
                  </p>
                </div>
                <p className="popup__ordered-list-item-text">
                  Если упоминаются наши законные интересы в отношении обработки
                  вашей личной информации, пожалуйста, свяжитесь с нами, чтобы
                  уточнить информацию, относящуюся к нашей оценке воздействия
                  на вас.
                </p>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  4 СКОЛЬКО МЫ ХРАНИМ ВАШУ ИНФОРМАЦИЮ
                </h4>
                <div className="popup__ordered-list-item-text-content">
                  <p className="popup__ordered-list-item-text">
                    После закрытия вашей учетной записи Личная информация вашей
                    учетной записи будет храниться нами не более 1 года после
                    даты ее закрытия. Согласно финансовой информации, которая
                    собирается в рамках Нашего сотрудничества, такой как выплата
                    комиссионных и т. Д., Эта информация будет храниться
                    примерно 10 лет после закрытия счета в соответствии с Нашими
                    юридическими обязательствами в отношении мошенничества,
                    борьбы с отмыванием денег, и вопросы налогообложения.
                    Мы заверяем вас, что информация надежно хранится до конца
                    периода хранения, после которого информация будет
                    соответственно удалена и / или уничтожена.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    4.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Обратите внимание, что у вас есть права в отношении вашей
                    личной информации, которые включают:
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    4.1.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Право на получение информации о том, как Мы используем
                    информацию, а также о ваших правах в этом отношении. Эта
                    информация должна быть предоставлена ясным, прозрачным
                    и понятным образом. И чтобы реализовать это право с вашей
                    стороны
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    4.1.2
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Право на исправление имеющейся у нас информации о вас, если
                    такая информация противоречит к факту;
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    4.1.3
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Право на доступ и изучение вашей Личной информации, которой
                    Мы располагаем;
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    4.1.4
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Право на удаление, ограничение или «приостановку»
                    использования вашей Личной информации (в исключительных
                    случаях);
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    4.1.5
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Право запрашивать вашу личную информацию в цифровом формате,
                    включая, помимо прочего, цель передачи такой информацию
                    третьему лицу.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    4.1.6
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Право на возражение позволяет вам остановить или запретить
                    Нам обрабатывать вашу Личную информацию в отношении всех
                    Личная информация, которую мы храним о вас или только
                    о определенной информации. Это также может относиться только
                    к конкретной цели, для которой мы обрабатываем данные. Ваши
                    Права в отношении автоматического принятия решений
                    и профилирования не позволяют Нам принимать исключительно
                    автоматизированные решения, в том числе основанные
                    на профилировании, которые имеют юридические или аналогичные
                    существенные последствия для отдельных лиц. Поэтому мы будем
                    информировать вас обо всех случаях, когда мы используем
                    такой подход, а именно для целей признания случаев
                    мошенничества или уклонения от уплаты налогов. Если
                    вы заинтересованы в реализации вышеупомянутых прав,
                    пожалуйста, свяжитесь с Нами по следующим адресам
                    электронной почты: help@steam.ru Ваш запрос должен содержать
                    следующую информацию:
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    4.1.7
                  </span>
                  <p className="popup__ordered-list-item-text">Ваше имя;</p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    4.1.8
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Контактная информация;
                  </p>
                </div>
                <p className="popup__ordered-list-item-text">
                  Если вы не удовлетворены Нашим ответом или считаете, что Наше
                  использование вашей информации не соответствует закону
                  о защите данных, вы можете подать жалобу в соответствующий
                  регулирующий орган в вашей юрисдикции в отношении
                  конфиденциальности данных.
                </p>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  5 ВАШЕ СОГЛАСИЕ НА ОБРАБОТКУ ДАННЫХ И ЕЕ ОТЗЫВ
                </h4>
                <div className="popup__ordered-list-item-text-content">
                  <p className="popup__ordered-list-item-text">
                    Согласно GDPR, согласие должно даваться в положительной
                    и утвердительной форме лицами, которые делятся своими
                    личными данными с организациями. Согласно Европейской
                    директиве о защите данных, суть концепции «согласия»
                    заключается в следующем: «любое свободно данное конкретное
                    и осознанное указание своего желания, которым субъект данных
                    выражает свое согласие с обрабатываемыми личными данными,
                    относящимися к нему».
                  </p>
                  <p className="popup__ordered-list-item-text">
                    После предоставления вашей личной информации на нашем
                    веб-сайте вы должны принять условия соглашения. Что касается
                    маркетинговой информации и сообщений, вы оставляете за собой
                    право отказаться от таких сообщений. Обратите внимание, что
                    вы можете отказаться от маркетинга в любое время, если
                    вы не заинтересованы в получении наших маркетинговых
                    информационных сообщений.
                  </p>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  6 БЕЗОПАСНОСТЬ
                </h4>
                <div className="popup__ordered-list-item-text-content">
                  <p className="popup__ordered-list-item-text">
                    Обратите внимание, что Наша компания полностью осознает
                    важность информационной безопасности и методов, необходимых
                    для защиты информации. Мы храним всю полученную от вас
                    Персональную информацию в защищенной базе данных в нашей
                    защищенной сети и с помощью активного ведущего программного
                    обеспечения безопасности. Мы предпринимаем шаги для
                    обеспечения того, чтобы наши дочерние компании, агенты,
                    партнеры и поставщики также использовали надлежащий уровень
                    безопасности.
                  </p>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  7 АВТОМАТИЧЕСКОЕ ПРИНЯТИЕ РЕШЕНИЙ И ПРОФИЛИРОВАНИЕ
                </h4>
                <div className="popup__ordered-list-item-text-content">
                  <p className="popup__ordered-list-item-text">
                    Примите к сведению, что мы предпринимаем многочисленные
                    действия, чтобы соответствовать правилам борьбы с отмыванием
                    денег (AML), финансированием терроризма, мошенничеством
                    и другой незаконной деятельностью. Для этого Мы используем
                    современное программное обеспечение, которое отслеживает
                    и информирует нас о подозрительных или мошеннических
                    транзакциях и действиях. Если соответствующие транзакции
                    отмечены флажком, мы передаем их в необходимые регулирующие
                    и правоохранительные органы. Учетные записи с подозрительной
                    и мошеннической деятельностью могут быть приостановлены и /
                    или заблокированы Нашей стороной..
                  </p>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  8 МЕЖДУНАРОДНЫЕ ПЕРЕВОДЫ
                </h4>
                <div className="popup__ordered-list-item-text-content">
                  <p className="popup__ordered-list-item-text">
                    Мы храним личную информацию на наших серверах. Личная
                    информация, собранная на Веб-сайте, также может храниться и
                    обрабатываться в любой стране, в которой мы или Наши
                    партнеры, поставщики или агенты имеют объекты. Мы
                    предпринимаем шаги для обеспечения того, чтобы наши агенты,
                    партнеры и поставщики соблюдали Наши стандарты
                    конфиденциальности, несмотря на их местонахождение.
                  </p>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  9 СВЯЗЬ С НАМИ И ПОДАЧА ЖАЛОБЫ
                </h4>
                <div className="popup__ordered-list-item-text-content">
                  <p className="popup__ordered-list-item-text">
                    Пожалуйста, не стесняйтесь обращаться к нам, если у вас есть
                    какие-либо вопросы или жалобы в отношении настоящей Политики
                    конфиденциальности или того, как Мы обрабатываем вашу Личную
                    информацию, используя следующие данные:
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    9.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    электронная почта:{" "}
                    <a
                      href="mailto:help@steampay.ru"
                      className="popup__ordered-list-item-text-link"
                    >
                      help@steampay.ru
                    </a>
                  </p>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  10 ИЗМЕНЕНИЙ В НАСТОЯЩЕЙ ПОЛИТИКЕ КОНФИДЕНЦИАЛЬНОСТИ
                </h4>
                <div className="popup__ordered-list-item-text-content">
                  <p className="popup__ordered-list-item-text">
                    Настоящим Мы хотели бы сообщить вам, что Мы постоянно
                    пересматриваем и обновляем настоящую Политику
                    конфиденциальности в любое время, когда происходят
                    значительные изменения в том, как Мы используем личную
                    информацию, а также чтобы наша обработка информации
                    соответствовала действующему законодательству.
                  </p>
                  <p className="popup__ordered-list-item-text">
                    В случае каких-либо изменений в Политике
                    конфиденциальности Мы также можем связаться с вами, чтобы
                    уведомить вас о любых существенных изменениях, если
                    мы сочтем их важными и необходимыми.
                  </p>
                  <p className="popup__ordered-list-item-text">
                    Настоящая Политика конфиденциальности изначально была
                    создана и опубликована в марте 2023 года.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <div
            className={
              rightsPopupIsOpen
                ? "popup popup--rights popup--active"
                : "popup popup--rights"
            }
          >
            <div className="popup__header">
              <h3 className="popup__heading">Пользовательское соглашение</h3>
              <button
                onClick={hideRightsPopup}
                className="popup__close-btn"
              ></button>
            </div>
            <p className="popup__text">
              <span className="popup__text--red">ВНИМАНИЕ:</span> Пожалуйста,
              ознакомьтесь с настоящим пользовательским соглашением до начала
              использования сайта https://steampay.ru и его программных средств.
              Использование функций на сайте будет означать ваше согласие с
              условиями настоящего пользовательского соглашения. Если Вы не
              согласны с условиями настоящего пользовательского соглашения, не
              исползуйте функции на сайте https://steampay.ru и не используйте
              его программные средства
            </p>
            <ol className="popup__ordered-list">
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  1 Термины и определения
                </h4>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    1.1
                  </span>
                  <div className="popup__ordered-list-item-text">
                    <p>
                      В настоящем пользовательском соглашении, если из текста
                      прямо не вытекает иное, следующие термины будут иметь
                      указанные ниже значения:
                    </p>
                    <div>
                      <h5 className="popup__ordered-list-item-defenition">
                        «Steam», «служба Steam»
                      </h5>
                      <p className="popup__ordered-list-item-text">
                        Онлайновая услуга, предлагаемая корпорацией Valve,
                        являющейся правообладателем объектов Инвентаря.
                      </p>
                    </div>
                    <div>
                      <h5 className="popup__ordered-list-item-defenition">
                        «Владелец»
                      </h5>
                      <p className="popup__ordered-list-item-text">
                        Владелец сайта https://steampay.ru
                      </p>
                    </div>
                    <div>
                      <h5 className="popup__ordered-list-item-defenition">
                        «Пользователь»
                      </h5>
                      <p className="popup__ordered-list-item-text">
                        Физическое лицо, имеющее аккаунт Steam, заключившее с
                        Владельцем Соглашение.
                      </p>
                    </div>
                    <div>
                      <h5 className="popup__ordered-list-item-defenition">
                        «Сайт»
                      </h5>
                      <p className="popup__ordered-list-item-text">
                        Составные произведения, представляющие собой
                        совокупность информации, текстов, графических элементов,
                        дизайна, изображений, фото и видеоматериалов, программ
                        для ЭВМ, иных результатов интеллектуальной деятельности,
                        за исключением Инвентаря, содержащихся в информационной
                        системе, обеспечивающей доступность такой информации в
                        сети Интернет в пределах доменной зоны steampay.ru .
                      </p>
                    </div>
                    <div>
                      <h5 className="popup__ordered-list-item-defenition">
                        «Соглашение»
                      </h5>
                      <p className="popup__ordered-list-item-text">
                        Настоящее пользовательское соглашение.
                      </p>
                    </div>
                    <div>
                      <h5 className="popup__ordered-list-item-defenition">
                        «Стороны»
                      </h5>
                      <p className="popup__ordered-list-item-text">
                        Владелец и Пользователь.
                        <br />
                        Все остальные термины и определения, встречающиеся в
                        тексте Соглашения, толкуются Сторонами в соответствии с
                        законодательством и сложившимися в сети Интернет
                        обычными правилами толкования соответствующих терминов.
                        Названия заголовков (статей) Соглашения предназначены
                        исключительно для удобства пользования текстом
                        Соглашения и буквального юридического значения не имеют.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  2 Заключение Соглашения
                </h4>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    2.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Текст Соглашения, постоянно размещенный в сети Интернет по
                    сетевому адресу https://steampay.ru/agreement и доступный
                    при регистрации (авторизации) на Сайте, содержит все
                    существенные условия Соглашения и является предложением
                    Владельца заключить Соглашение с любым полностью
                    дееспособным третьим лицом, использующим Сайт, на указанных
                    в тексте Соглашения условиях. Таким образом, текст
                    Соглашения является публичной офертой в соответствии с
                    законодательством.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    2.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Текст Соглашения, постоянно размещенный в сети Интернет по
                    сетевому адресу https://steampay.ru/agreement и доступный
                    при регистрации (авторизации) на Сайте, содержит все
                    существенные условия Соглашения и является предложением
                    Владельца заключить Соглашение с любым полностью
                    дееспособным третьим лицом, использующим Сайт, на указанных
                    в тексте Соглашения условиях. Таким образом, текст
                    Соглашения является публичной офертой в соответствии с
                    законодательством.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    2.2
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Надлежащим акцептом настоящей оферты считается
                    последовательное осуществление третьим лицом, следующих
                    действий:
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    2.2.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Ознакомление с условиями Соглашения;
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    2.2.2
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Проставление символа в специальном поле под заголовком «Я
                    принимаю условия пользовательского соглашения»
                  </p>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  3 Предмет Соглашения
                </h4>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Владелец предоставляет Пользователю безвозмездную простую
                    (неисключительную) лицензию на использование Сайта и его
                    программных средств по их прямому назначению, как то
                    предусмотрено явными пользовательскими функциями Сайта и
                    Личного кабинета;
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.2
                  </span>
                  <p className="popup__ordered-list-item-text popup__ordered-list-item-text--bold">
                    Пользователю запрещается:
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.2.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Обходить технические ограничения, установленные на Сайте.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.2.2
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Изучать технологию, декомпилировать или дизассемблировать
                    Сайт, за исключением случаев, прямо предусмотренных
                    законодательством;
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.2.3
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Создавать копии экземпляров Сайта, а также их внешнего
                    оформления (дизайна);
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.2.4
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Изменять Сайт, каким бы то ни было способом;
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    3.2.5
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Осуществлять указанные выше действия в отношении любой части
                    Сайта.
                  </p>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  4 Функции Сайта
                </h4>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    4.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Пользователь посредством Сайта имеет возможность пополнять
                    свой личный аккаунт Steam.
                  </p>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  5 Персональные данные
                </h4>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    5.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Пользователь дает свое согласие Владельцу на обработку
                    информации, в том числе, персональных данных Пользователя,
                    предоставленных при использовании Сайта, а именно данных,
                    указанные в аккаунте Пользователя в Steam.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    5.2
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Обработка персональных данных означает запись,
                    систематизацию, накопление, хранение, уточнение (обновление,
                    изменение), извлечение, использование, передачу
                    (распространение, предоставление, доступ), в том числе
                    трансграничную, обезличивание, блокирование, удаление,
                    уничтожение персональных данных, не подпадающих под
                    специальные категории, на обработку которых, согласно
                    действующему законодательству, требуется письменное согласие
                    Пользователя.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    5.3
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Обработка персональных данных производится в целях
                    исполнения Сторонами обязательств по Соглашению, регистрации
                    Пользователя на Сайте, приобретения лицензии на
                    использование Кейса, получения Инвентаря, направления на
                    адрес электронной почты Пользователя сообщений
                    информационного и иного характера.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    5.4
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Пользователь может в любое время отозвать согласие на
                    обработку персональных данных, направив Владельцу
                    соответствующее письменное уведомление на адрес, указанный в
                    пункте 1.1 Соглашения, заказным письмом с уведомлением о
                    вручении. При этом Пользователь понимает, что такой отзыв
                    означает прекращение действия Соглашения. Владелец вправе
                    продолжить обработку персональных данных Пользователя в
                    предусмотренных законом случаях.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    5.5
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Дополнительные или иные положения в отношении обработки
                    персональных данных могут содержаться в соответствующем
                    документе, размещенном или размещаемом на Сайте. В случае,
                    противоречия положений такого документа положениям
                    настоящего раздела применяются положения документа.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    5.6
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Пользователь дает согласие на получение рекламных материалов
                    от Владельца, его аффилированных лиц либо от иных лиц по
                    поручению Владельца на адрес электронной почты, указанный
                    Пользователем при регистрации в аккаунте Steam. Согласие на
                    получение рекламных материалов может быть отозвано
                    Пользователем в любое время путем направления Владельцу
                    соответствующего письменного уведомления на адрес, указанный
                    в пункте 9.3.1 Соглашения, либо путем совершения действий,
                    указанных в сообщениях (электронных письмах), содержащих
                    такие материалы.
                  </p>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  6 Ограничение ответственности
                </h4>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    6.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Владелец не отвечает за убытки Пользователя, возникшие в
                    результате неправомерных действий третьих лиц, в том числе
                    связанных с неправомерным доступом к Личному кабинету.
                    Владелец не несет ответственность за убытки, причиненные
                    Пользователю в результате разглашения третьим лицам учетных
                    данных, необходимых для доступа к Личному кабинету,
                    произошедшего не по вине Владельца.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    6.2
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Сайт и его программные средства предоставляются «Как есть».
                    На Пользователе лежит риск использования Сайта. Владелец,
                    операторы проводной и беспроводной связи, по сетям которых
                    предоставляется доступ к Сайту, аффилированные лица,
                    поставщики, агенты Владельца не предоставляют каких бы то ни
                    было гарантий в отношении Сайта.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    6.3
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Владелец не гарантирует, что Сайт соответствует требованиям
                    Пользователя, что доступ к Сайту будет предоставляться
                    непрерывно, быстро, надежно и без ошибок.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    6.4
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Владелец не гарантирует, что Сайт соответствует требованиям
                    Пользователя, что доступ к Сайту будет предоставляться
                    непрерывно, быстро, надежно и без ошибок.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    6.5
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Владелец вправе уступать права и переводить долги, по всем
                    обязательствам, возникшим из Соглашения. Настоящим
                    Пользователь дает свое согласие на уступку прав и перевод
                    долга любым третьим лицам. О состоявшейся уступке прав и/или
                    переводе долга Владелец информирует Пользователя, размещая
                    соответствующую информацию на Сайте.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    6.6
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Размер убытков, которые могут быть возмещены Владельцем
                    Пользователю, в любом случае ограничен суммой в размере
                    первой транзакции пользователя.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    6.7
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Пользователем условий Соглашения Владелец вправе в
                    одностороннем порядке отказаться от исполнения Соглашения и
                    прекратить доступ Пользователя к Личному кабинету. В случае
                    если такое нарушение причинило ущерб третьим лицам,
                    ответственность за них полностью лежит на Пользователе.
                  </p>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  7 Порядок разрешения споров
                </h4>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    7.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Владелец не отвечает за убытки Пользователя, возникшие в
                    результате неправомерных действий третьих лиц, в том числе
                    связанных с неправомерным доступВсе споры, разногласия и
                    претензии, которые могут возникнуть в связи с исполнением,
                    расторжением или признанием недействительным Соглашения,
                    Стороны будут стремиться решить путем переговоров. Сторона,
                    у которой возникли претензии и/или разногласия, направляет
                    другой Стороне сообщение с указанием возникших претензий
                    и/или разногласий в соответствии с пунктом 9.1 Соглашения.ом
                    к Личному кабинету. Владелец не несет ответственность за
                    убытки, причиненные Пользователю в результате разглашения
                    третьим лицам учетных данных, необходимых для доступа к
                    Личному кабинету, произошедшего не по вине Владельца.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    7.2
                  </span>
                  <p className="popup__ordered-list-item-text">
                    В случае если ответ на сообщение не будет получен
                    направившей сообщение Стороной в течение 30 (тридцати)
                    рабочих дней с даты направления соответствующего сообщения,
                    либо если Стороны не придут к соглашению по возникшим
                    претензиям и/или разногласиям, спор подлежит разрешению в
                    судебном порядке по месту нахождения Владельца.
                  </p>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  8 Заключительные положения
                </h4>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    8.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Настоящим Стороны подтверждают, что при исполнении
                    (изменении, дополнении, прекращении) Соглашения, а также при
                    ведении переписки по указанным вопросам, допускается
                    использование аналогов собственноручной подписи Сторон.
                    Стороны подтверждают, что все уведомления, сообщения,
                    соглашения и документы в рамках исполнения Сторонами
                    обязательств, возникших из Соглашения, подписанные аналогами
                    собственноручной подписи Сторон, имеют юридическую силу и
                    обязательны для исполнения Сторонами. Под аналогами
                    собственноручной подписи понимаются уполномоченные адреса
                    электронной почты и учетные данные к Личному кабинету.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    8.2
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Стороны признают, что все уведомления, сообщения,
                    соглашения, документы и письма, направленные с
                    использованием уполномоченных адресов электронной почты и
                    Личного кабинета, считаются направленными и подписанными
                    Сторонами, кроме случаев, когда в таких письмах прямо не
                    указано обратное.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    8.3
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Уполномоченным адресом электронной Владельца является:{" "}
                    <a
                      href="mailto:help@steampay.ru"
                      className="popup__ordered-list-item-text-link"
                    >
                      help@steampay.ru
                    </a>
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    8.4
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Стороны обязуются обеспечивать конфиденциальность сведений и
                    информации, необходимых для доступа к уполномоченному адресу
                    электронной почты, не допускать разглашение такой информации
                    и передачу третьим лицам. Стороны самостоятельно определяют
                    порядок ограничения доступа к такой информации.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    8.5
                  </span>
                  <p className="popup__ordered-list-item-text">
                    При использовании уполномоченных адресов электронной почты,
                    до момента получения от второй Стороны информации о
                    нарушения режима конфиденциальности, все действия и
                    документы, совершенные и направленные с помощью
                    уполномоченного адреса электронной почты второй Стороны,
                    даже если такие действия и документы были совершены и
                    направлены иными лицами, считаются совершенными и
                    направленными такой второй Стороной. В этом случае права и
                    обязанности, а также ответственность наступают у такой
                    второй Стороны.
                  </p>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  9 Изменение условий Соглашения
                </h4>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    9.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Владелец вправе в одностороннем порядке изменять условия
                    Соглашения, при этом такие изменения вступают в силу в
                    момент опубликования новой версии Соглашения в сети Интернет
                    по адресу https://steampay.ru/agreement
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    9.2
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Продолжение использования функций Сайта будет означать
                    согласие Пользователя с условиями новой версии Соглашения.
                    Если Пользователь не согласен с условиями новой версии
                    Соглашения, он прекращает пользоваться Сайтом.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    9.3
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Во всем остальном, что не урегулировано Соглашением, Стороны
                    руководствуются действующим законодательством.
                  </p>
                </div>
              </li>
              <li className="popup__ordered-list-item">
                <h4 className="popup__ordered-list-item-heading">
                  10 Политика оплаты и возврата
                </h4>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    10.1
                  </span>
                  <p className="popup__ordered-list-item-text popup__ordered-list-item-text--bold">
                    Покупки:
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    10.1.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    В рамках Сайта вы можете приобрести ограниченную,
                    персональную, непередаваемую, отзывную, исключительную, не
                    подлежащую сублицензированию лицензию на использование
                    цифровых объектов: (а) "виртуальная валюта", включая, но не
                    ограничиваясь, виртуальные деньги, выраженные в виде баланса
                    на личном аккаунте STEAM, которые предназначены для
                    Использования на площадке STEAM.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    10.1.2
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Все передаваемые лицензии на приобретенную виртуальную
                    валюту доступны экстерриториально (по всему миру) на весь
                    период использования исключительных прав в соответствии с
                    законодательством применимого права, если иное не указано в
                    условиях приобретения таких виртуальных валют.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    10.1.3
                  </span>
                  <p className="popup__ordered-list-item-text">
                    За исключением случаев, прямо разрешенных Сайтом, вы не
                    можете продавать, погашать или иным образом отчуждать
                    Виртуальную валюту любому физическому или юридическому лицу,
                    включая, без ограничений, других пользователей Сайта и любых
                    третьих лиц.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    10.2
                  </span>
                  <p className="popup__ordered-list-item-text popup__ordered-list-item-text--bold">
                    Осуществление платежей и возвратов:
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    10.2.1
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Вы соглашаетесь оплатить все сборы и применимые налоги,
                    банковские комиссии и другие платежные услуги третьих лиц,
                    как на вашей стороне, так и на стороне любого, кто
                    использует ваш зарегистрированный аккаунт.
                  </p>
                </div>
                <div className="popup__ordered-list-subitem">
                  <span className="popup__ordered-list-subitem-counter">
                    10.2.2
                  </span>
                  <p className="popup__ordered-list-item-text">
                    Пользователь может запросить возврат средств в случае, если
                    средства не поступили на аккаунт STEAM в течении 10
                    календарных дней. Во всех остальных случаях средства не
                    подлежат возврату. Возврат может быть осуществлен с
                    удержанием комиссий платежных систем. Мы рекомендуем
                    обратиться в нашу Службу Поддержки, если у вас возникли
                    какие-либо проблемы, требующие возврата платежа.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <div
            className={
              loginPopupIsOpen
                ? "popup popup--login popup--active"
                : "popup popup--login"
            }
          >
            <div className="popup__header">
              <h3 className="popup__heading">Где взять логин?</h3>
              <button
                onClick={hideRightsPopup}
                className="popup__close-btn"
              ></button>
            </div>
            <p className="popup__text">1. Зайдите в аккаунт Steam.</p>
            <p className="popup__text">
              2. В правом верхнем углу нажмите на свой никнейм, далее в меню
              выберите «Об аккаунте».
            </p>
            <p className="popup__text">
              3. На открывшейся странице будет указан ваш уникальный логин (не
              никнейм).
            </p>
            <a href="#" className="popup__link">
              ЛИБО ПЕРЕЙДИТЕ СРАЗУ НА ДАННУЮ СТРАНИЦУ STEAM
            </a>
            <img src={loginPopupImg} alt="" className="popup__img" />
            <Button caption="Понятно" onClick={hideLoginPopup} />
          </div>
        </PopupWindow>
        {!isOrder && (
          <Header
            openContactsPopup={openContactsPopup}
            onlineCount={onlineCount}
          />
        )}
        {!isOrder && <TransactionBar />}
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute
                  element={Main}
                  isOrder={isOrder}
                  username={username}
                  paymentValue={paymentValue}
                  paymentType={paymentType}
                  confirm={confirm}
                  togglePaymentValue={togglePaymentValue}
                  toggleUsername={toggleUsername}
                  setPaymentType={setPaymentType}
                  setConfirm={setConfirm}
                  openLoginPopup={openLoginPopup}
                  setIsOrder={setIsOrder}
                />
              }
            />
            <Route
              path="/faq"
              element={<ProtectedRoute element={Faq} isOrder={isOrder} />}
            />
            <Route
              path="/order"
              element={
                <Order
                  setIsOrder={setIsOrder}
                  orderStatus={orderStatus}
                  isOrder={isOrder}
                  username={username}
                  paymentValue={paymentValue}
                />
              }
            />
          </Routes>
        </main>
        {!isOrder && (
          <Footer
            openPoliticsPopup={openPoliticsPopup}
            openRightsPopup={openRightsPopup}
          />
        )}
      </HashRouter>
    </div>
  );
}

export default App;
