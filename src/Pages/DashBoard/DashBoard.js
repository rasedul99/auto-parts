import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="flex">
      <div>
        {" "}
        <ul class="menu w-56 bg-primary text-secondary-content p-2 box">
          <li>
            <Link to="/dashboard/my-orders">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/add-review">Add Review</Link>
          </li>
          <li>
            <Link to="/dashboard/my-profile">My Profile</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default DashBoard;
