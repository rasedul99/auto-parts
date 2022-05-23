import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signin" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
