import { useRoutes } from "react-router-dom";
import authRoutes from "../modules/auth/routes";
import feedsRoutes from "../modules/feeds/routes";
import landingPageRoutes from "../modules/landing-page/routes";

const AppRoutes = () => {
  return useRoutes([...authRoutes, ...feedsRoutes, ...landingPageRoutes]);
};

export default AppRoutes;
