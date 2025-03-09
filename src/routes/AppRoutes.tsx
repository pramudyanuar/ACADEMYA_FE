import { useRoutes } from "react-router-dom";
import authRoutes from "../modules/auth/routes";
import feedsRoutes from "../modules/feeds/routes";

const AppRoutes = () => {
  return useRoutes([...authRoutes, ...feedsRoutes]);
};

export default AppRoutes;
