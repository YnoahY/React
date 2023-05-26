import { useState, useEffect } from "react";

function App() {
  //const[value, modifyFunction] = useState();
  const [counter, setValue] = useState(0);
  const [keyword, setKeword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);

  const onChange = (event) => setKeword(event.target.value);

  //useEffect : 코드 한번만 실행, []안에는 변화시 실행되는 조건 변수 삽입
  //useEffect(() => {실행시키고싶은 코드,dependency:react가 지켜봐야 할 것들 -> dependency변화시 코드 실행});
  useEffect(() => {
    console.log("i run only once.");
  }, []); //지켜 볼 대상 없어서 1회만 실행
  //keyword 변화시 실행

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("search for...", keyword);
    }
    console.log("i run when 'keywork' changes.");
  }, [keyword]);
  //keyword => useState에 있음 -> setKeyword란 function으로 변화함 -> setKeyword => onChange라는 function에 의해 호출 -> onChange()는 input 변화 시 호출
  //counter 변화시 실행
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);
  //keywork, counter 중 1개만 변해도 실행
  useEffect(() => {
    console.log("I run when keyword & counter change.");
  }, [keyword, counter]);

  return (
    <div>
      {/* value == state와 연결 */}
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
