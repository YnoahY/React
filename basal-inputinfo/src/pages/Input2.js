import React, { useState } from "react";

const Input2 = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", tel: "" });

  //object 분해 기법 : 아래의 return에 있는 name, email, tel 사용하기 위해서
  const { name, email, tel } = inputs;

  const change = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    //!= inputs[id] = value;
    setInputs({
      // ... : 깊은 복사
      ...inputs, // == name: "", email: "", tel: ""
      [id]: value,
    });
  };

  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={change} />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" id="email" value={email} onChange={change} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={tel} onChange={change} />
      </div>

      {/* 화면 표현 */}
      <p>이름 : {name}</p>
      <p>이메일 : {email}</p>
      <p>전화번호 : {tel}</p>
    </div>
  );
};

export default Input2;

/**여러개의 props에 대해 정의할 때
 * const [name, setName] = useState({key:value, ...}); 로 useState작성 후 value에 key값 입력하여 연결
 */
