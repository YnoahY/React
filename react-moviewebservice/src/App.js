import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Movie from "./components/Movie";

//Route 순서 주의 : Home이 Detail보다 위에 있으면 url상관 없이 home화면 뜸
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          {/* /movie/:id 에서 id는 변수명 */}
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

//react-router-dom : 컴포넌트 모음집
//Router : user가 있는 url에 따라 user에게 보일 router(==url)렌더링
//				: 동적(url에 변수 삽입 가능) url도 지원
//Switch : Router찾음 -> 찾은 후 렌더링, 한번에 하나의 router 렌더링하기 위함
//Link : 브라우저 새로고침 없이 다른 페이지로 이동 가능한 컴포넌트

/* react-router-dom 5버전 -> 버전6 바뀐 부분

1. Switch컴포넌트가 Routes컴포넌트로 대체되었습니다.
Switch -> Routes

2. Route컴포넌트 사이에 자식 컴포넌트를 넣지 않고, element prop에 자식 컴포넌트를 할당하도록 바뀌었습니다.
Route path="/" element={< Home / >}

react-router-dom 6버전 문서
https://reactrouter.com/docs/en/v6/getting-started/overview */
