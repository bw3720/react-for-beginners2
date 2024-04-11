import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* /:id  의 명칭에 따라 받는 값의 이름이 정해짐 */}
        <Route path="/movie/:id" element={<Detail />} /> 
      </Routes>
    </Router>
  );
}

export default App;
