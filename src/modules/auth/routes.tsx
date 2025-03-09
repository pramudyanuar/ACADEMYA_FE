import { RouteObject } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";

const authRoutes: RouteObject[] = [
  { path: "/auth/sign-in", element: <LoginPage /> },
  // { path: "/register", element: <RegisterPage /> },
];

export default authRoutes;