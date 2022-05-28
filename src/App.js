import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Blog from "./Pages/Blog";
import AddProduct from "./Pages/DashBoard/AddProduct";
import AddReview from "./Pages/DashBoard/AddReview";
import DashBoard from "./Pages/DashBoard/DashBoard";
import MakeAdmin from "./Pages/DashBoard/MakeAdmin";
import ManageOrders from "./Pages/DashBoard/ManageOrders";
import ManageProduct from "./Pages/DashBoard/ManageProduct";
import MyOrders from "./Pages/DashBoard/MyOrders";
import MyProfile from "./Pages/DashBoard/MyProfile";
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
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="add-review" element={<AddReview />} />
          <Route path="manage-orders" element={<ManageOrders />} />
          <Route path="manage-product" element={<ManageProduct />} />
          <Route path="make-admin" element={<MakeAdmin />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
