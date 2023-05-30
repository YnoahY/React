import { useState } from "react";
import "./App.css";

function App() {
  //입력값
  const [toDo, setToDo] = useState("");
  //입력값 목록
  const [toDos, setToDos] = useState([]);

  //input의 입력값받음
  const onChange = (event) => setToDo(event.target.value);
  //input의 입력값 조정
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    //직전값 받아와 리스트화
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    /**수정 함수 사용시 옵션
     * 1. 값만 보내기 : setToDo("");
     * 2. 함수 보내기 : setToDos((currentArray) => [toDo, ...currentArray]);
     * 		1) 1번 argument로 현재 state를 보냄
     * 		2) 새로운 state return
     */
  };

  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      {/* jsx사용하려면 {}에 값 삽입 */}
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />

      {/* 화면에 배열에서 각각의 값을 component화 */}
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* map(argument, index);
					- js함수
					- 배열에서 각각의 element를 내가 원하는 값으로 변경 후 새로운 배열로 return할 때 사용
					- 배열의 모든 item에 대해 실행 후 return값이 새로운 배열에 삽입
					- 기존의 item으로 접근 불가능
					- 첫번째 argument로 현재의 item 가져올 수 있음
					- 첫번째 argument가진행 된 후 새로운 array 진행
			*/}
    </div>
  );
}

export default App;
