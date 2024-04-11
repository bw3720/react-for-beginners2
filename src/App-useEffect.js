import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run always");
  useEffect(() => {
    //useEffect : state가 변경되도 한번만 실행되게 함.
    //React.memo() ==> state에 변화가 생겨 re-render 될때 변화가 있는 컴포넌트만 re render 함
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keword' changes");
  }, [keyword]);
  // 상단의 useEffect 와 다르게 배열에 값을 추가함으로서 그값이 변할때 코드가 실행된다는 뜻

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1> {counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
