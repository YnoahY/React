import userEvent from "@testing-library/user-event";
import { func } from "prop-types";
import { useState, useEffect } from "react";

//component는 jsx부르는 function
function Hello() {
  function byFn() {
    console.log("bye! :(");
  }
  function hiFn() {
    console.log("created :)");
    //cleanup function
    return byFn;
  }
  // useEffect(() => {
  //   //cleanup function
  //   return () => console.log("destroyed :(");
  // }, []);
  // useEffect(hiFn, []);

  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);

  //위와 동일
  // useEffect(function () {
  //   console.log("hi :)");
  //   return function () {
  //     console.log("bye :(");
  //   };
  // }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
