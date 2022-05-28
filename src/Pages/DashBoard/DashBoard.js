import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hook/useAdmin";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="flex ">
      <div>
        {" "}
        <ul class="menu w-56 bg-primary text-secondary-content p-2 box">
          <li>
            <Link to="/dashboard/my-profile">My Profile</Link>
          </li>
          {admin ? (
            <>
              <li>
                <Link to="/dashboard/manage-orders">Manage All Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/add-product">Add A Product</Link>
              </li>
              <li>
                <Link to="/dashboard/make-admin">Make Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/manage-product">Manage Product</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/my-orders">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/add-review">Add Review</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
