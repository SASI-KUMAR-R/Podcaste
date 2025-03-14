import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/FunctionComponents/Navbar";
import SignUp from "./Components/FunctionComponents/SignUp";
import Home from "./Components/FunctionComponents/Home";
import Login from "./Components/FunctionComponents/Login";
import Pod from "./Components/FunctionComponents/Pod";
import Detail from "./Components/FunctionComponents/Detail";
import ANNOUNCEMENT from "./Components/FunctionComponents/IMP";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pod" element={<Pod />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/announ" element={<ANNOUNCEMENT />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
