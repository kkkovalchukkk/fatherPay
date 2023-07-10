import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, isOrder, ...props }) => {
  return isOrder ? <Navigate to={"/order"} /> : <Component {...props} />;
};

export default ProtectedRoute;
