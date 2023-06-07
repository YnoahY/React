import React from "react";

const Clock = (props) => {
  return (
    <div>
      <h1>Hi, React!</h1>
      <h2>now : {new Date().toLocaleTimeString()}</h2>
      <hr />
    </div>
  );
};

export default Clock;
