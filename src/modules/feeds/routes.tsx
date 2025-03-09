import { RouteObject } from "react-router-dom";
import NavigationRoutes from "../../routes/NavigationRoutes";
import FeedsPage from "./pages/FeedsPage";

const feedsRoutes: RouteObject[] = [
  { path: NavigationRoutes.FEEDS, element: <FeedsPage/> },
];

export default feedsRoutes;