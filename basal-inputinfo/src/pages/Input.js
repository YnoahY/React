import React, { useState } from "react";

const Input = () => {
  const [txtValue, setTxtValue] = useState("");

  const Change = (e) => {
    setTxtValue(e.target.value);
    //e.target.value(매개변수.target.value) : input의 value가 change이벤트 발생 시 마다 setTxtValue에 삽입 -> setTxtValue => txtValue
  };

  //input value에 변수 연결
  return (
    <div>
      {/* value로 입력값 useState와 연결 */}
      <input type="text" value={txtValue} onChange={Change} />
      <br />
      {/* 화면상 출력 */}
      <p>{txtValue}</p>
    </div>
  );
};

export default Input;

/**onChange={onChange} == onChange함수={함수명}
 * input의 value에  useState로 생성한 변수 {}로 맵핑 할 것
 *
 */
