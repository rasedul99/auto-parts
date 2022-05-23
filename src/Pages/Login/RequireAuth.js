import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading";
import auth from "../../firebase.init";

const RequiredAuth = ({ children }) => {
  let location = useLocation();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
};

export default RequiredAuth;
