import { RouteObject } from "react-router-dom";
import NavigationRoutes from "../../routes/NavigationRoutes";
import LandingPage from "./pages/LandingPage";

const landingPageRoutes: RouteObject[] = [
  { path: NavigationRoutes.INITIAL, element: <LandingPage/> },
];

export default landingPageRoutes;