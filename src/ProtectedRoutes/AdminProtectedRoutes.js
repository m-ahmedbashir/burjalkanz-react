import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const AdminProtectedRoutes = () => {
  const { authUser } = useAuthContext();
  return authUser && authUser.email ? <Outlet /> : <Navigate to={"/login"} />;
};

export default AdminProtectedRoutes;
