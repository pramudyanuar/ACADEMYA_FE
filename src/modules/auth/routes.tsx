import { RouteObject } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import NavigationRoutes from "../../routes/NavigationRoutes";

const authRoutes: RouteObject[] = [
  { path: NavigationRoutes.LOGIN, element: <LoginPage /> },
  { path: NavigationRoutes.REGISTER, element: <RegisterPage /> },
  { path: NavigationRoutes.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
];

export default authRoutes;