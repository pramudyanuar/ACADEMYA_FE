import { useRoutes } from "react-router-dom";
import authRoutes from "../modules/auth/routes";
import landingPageRoutes from "../modules/landing-page/routes";
import jobseekerRoutes from "../modules/jobseeker/core/routes";

const AppRoutes = () => {
  return useRoutes([...authRoutes, ...jobseekerRoutes, ...landingPageRoutes]);
};

export default AppRoutes;
