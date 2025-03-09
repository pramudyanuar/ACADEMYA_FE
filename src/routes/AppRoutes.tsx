import { useRoutes } from "react-router-dom";
import authRoutes from "../modules/auth/routes";

const AppRoutes = () => {
  return useRoutes([...authRoutes]);
};

export default AppRoutes;
