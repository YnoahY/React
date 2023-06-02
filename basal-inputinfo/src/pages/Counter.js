import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
    // == num = num + 1;
  };

  const decrease = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <button onClick={increase}> + 1 </button>
      <button onClick={decrease}> - 1 </button>
      <p>{num}</p>
    </div>
  );
};

export default Counter;

/**
 **State == 상태
 * 	컴포넌트에서 동적으로 변경 되는 값
 *
 **useState
 *	state 관리, 처리 하는 함수
 *
 *const [변수명, set변수명함수] = useState(초기값);
 * 	배열구조
 * 	변수명 : 초기값을 기본값으로 갖는 변수
 * 	set변수명함수 : 변수명을 변경 시킬 수 있는 setter함수
 *
 *
 */

/**함수 실행
 * JSX태그 내부에 정의
 *
 * 변수 표현 : {}
 */
