import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/**
 * document에 있는 id를 가져오는 함수(document.getElementById)를 이용하여 id="root"인 요소를 가져옴
 * (위치 : public 폴더 - index.html - <body>의 <div id="root">)
 *
 * 가져온 id를 ReactDom으로 만들어준 후 const root에 대입
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

//root를 렌더 -> ()내부의 컴포넌트를 렌더링 해 html로 보여줌
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//웹 퍼포먼스 측정을 위한 JS 라이브러리
reportWebVitals();

/**"react-router-dom";
 * BrowserRouter : 보편적인 라우팅 처리 방법
 *
 */
