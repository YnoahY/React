import React from "react";

const students = [
  { id: 1, name: "nolla" },
  { id: 2, name: "amilly" },
  { id: 3, name: "noi" },
  { id: 4, name: "jully" },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
