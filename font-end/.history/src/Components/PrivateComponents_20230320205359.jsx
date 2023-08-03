import React from "react";
import { Navigate, Outlet } from "react-router-dom";
function PrivateComponents() {
  return <Outlet />;
}

export default PrivateComponents;
