import { func } from "prop-types";
import { useState, useEffect } from "react";

function Hello() {
  function hiFn() {
    console.log("created!! :)");
    return byFn;
  }

  function byFn() {
    console.log("bye :(");
  }
  //아래의 useEffect 와 같음. 펑션 작성방법만 다름.
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);

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
  const onClick = () => setShowing((pre) => !pre);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
