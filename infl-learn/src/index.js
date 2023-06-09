import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Library from "./section_03/Library";
import Clock from "./section_04/Clock";
import CommentList from "./section_05/CommentList";
import NotificationList from "./section_06/NotificationList";
import Accommodate from "./section_07/Accommodate";
import ConfirmButtons from "./section_08/ConfirmButtons";
import LandingPage from "./section_09/LandingPage";
import AttendanceBook from "./section_10/AttemdanceBook";
import SingUp from "./section_11/SignUp";
import Calculator from "./section_12/Calculator";
import ProfileCard from "./section_13/ProfileCard";
import DarkOrLight from "./section_14/DarkOrLight";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Library />n
    <Clock />
    <CommentList />
    <NotificationList />
    <Accommodate />
    <ConfirmButtons />
    <LandingPage />
    <AttendanceBook />
    <SingUp />
    <Calculator />
    <ProfileCard />*/}
    <DarkOrLight />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
