import React from "react";
import { RouteObject } from "react-router-dom";
import AuthComponent from "../components/AuthComponent";

const AuthRoutes: RouteObject[] = [
  {
    path: "auth",
    element: <AuthComponent />,
  },
];

export default AuthRoutes;