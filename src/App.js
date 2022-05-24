import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import MyPortfolio from "./Pages/MyPortfolio";
import NotFound from "./Pages/NotFound";
import Purchase from "./Pages/Purchase";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="portfolio" element={<MyPortfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
