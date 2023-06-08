import React, { useState } from "react";

function SingUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");

  const handleChangename = (event) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSumbit = (event) => {
    alert(`이름 : ${name}, 성별 : ${gender}`);
    event.prevnentDefault();
  };

  return (
    <form onSubmit={handleSumbit}>
      <label>
        이름:
        <input type="text" value={name} onChange={handleChangename} />
      </label>
      <br />
      <label>
        성별:
        <select value={gender} onChange={handleChangeGender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>
      <button type="sumbit">제출</button>
    </form>
  );
}

export default SingUp;
