import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";

//메뉴 클릭 시 Link to의 경로와 일치하는 Route path의 Route에서 element 속성에 할당 된 컴포넌트를 실행, 해당 컴포넌트로 화면 전환
function App() {
  //JSX
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> |{" "}
        <Link to="/input2">Input2</Link> | <Link to="/list">List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/input" element={<Input />}></Route>
        <Route path="/input2" element={<Input2 />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </div>
  );
}

export default App;

/**JSX문법
 * class => className

 **React는 SPA(singe page application) : 하나의 페이지
 * 화면 전체가 아닌 필요한 부분만 JS이용해서 교체하는 식
 * 클라이언트 단에서 처리
 * 빠른 속도
 */

/**Route(Routing) 처리
 * 메뉴 클릭시 원하는 컴포넌트를 맵핑 후 보여줌
 * 브라우저 url 변경 시(화면전환시) 마다 보여줄 컴포넌트 맵핑 후 렌더링 함
 **모듈 설치 필요
 * 현재 프로젝트 경로에 설치 할 것
 * 명령어 : npm install react-router-dom@6
 * package.json에서 확인 가능

 **Link
 * 	a태그와 동일, elements에선 a태그로 표기됨
 * 	to="/" : 브라우저에서 접근할 주소 설정 => "/"는 home

 **Routes
 * 	화면 전환 정의
 * 	Route의 묶음

 **Route
 * 	브라우저 패스가 바뀔 때 마다 어떤 컴포넌트를 맵핑해서 보여줄지 정의
 * 	path : 경로
 * 	element = {컴포넌트태그}
 */
