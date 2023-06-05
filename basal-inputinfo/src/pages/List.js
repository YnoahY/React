import React from "react";
//배열 데이터 처리

const User = ({ userData }) => {
  return (
    <tr>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  );
};

//서버로 부터 받아온 데이터
const UserList = () => {
  const users = [
    { name: "Abel", email: "Abel@email.com" },
    { name: "Bianca", email: "Bianca@email.com" },
    { name: "Catherine", email: "Catherine@email.com" },
    { name: "Dana", email: "Dana@email.com" },
    { name: "Ella", email: "Ella@email.com" },
  ];
  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <User userData={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
