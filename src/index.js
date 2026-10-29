import React, {Children} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//  import App from './App';
//  import TodolistApp from './01/TodoListApp';
// import Library from "./03/enhanced_css/Library";
// import "./03/enhanced_css/Book.css";
//import Clock from "./04/Clock";
import reportWebVitals from './reportWebVitals'
//import ConfirmButton from "./08/ConfirmButton";
//import ConfirmButton2 from "./08/ConfirmButton2";
//mport MessageSender from "./08/MessageSender";
//import App from "./09/Rendering3";
//import LoginControl from "./09/ex2/Element3";
//import Mailbox from "./09/ex3/InLine";
//import LogInControl from "./09/ex3/LogInControl";
//import MainPage from "./09/ex4/MainPage";
import LandingPage from "./09/finalex/LandingPage";
//import MyButton from "./08/MyButton";
//import Toggle2 from "./08/Toggle2";
//import MyButton from "./08/MyButton";
//import MyButton2 from "./08/MyButton2";
//mport Toggle from "./08/Toggle";
//import ConfirmDialog from "./04/ConfirmDialog";
//import ConfirmDialogList from "./04/ConfirmDialogList";
//import WelcomeList from "./05/exam01/WelcomeList";
//import BookList from "./05/exam02/BookList";
//import UserInfoList from "./05/exam04/UserInfoList";
//import NotificationList from "./06/NotificationList";
//import Hook2 from "./07/Hook2useState";
//import Hook3useEffect from "./07/01/useEffect";
//import TextInputWithFocusButton from "./07/02/TextInputWithFocusButton";
//import Accommodate from "./07/Accommodate";

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
    root.render(
        <React.StrictMode>
            <LandingPage/>
        </React.StrictMode>
        );
    }, 1000
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
