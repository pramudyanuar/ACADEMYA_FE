import { RouteObject } from "react-router-dom";
import NavigationRoutes from "../../routes/NavigationRoutes";
import FeedsPage from "./pages/FeedsPostPage";
import PrivateRoute from "../../routes/PrivateRoutes";

const feedsRoutes: RouteObject[] = [
  {
    path: NavigationRoutes.FEEDS,
    element: <PrivateRoute />,
    children: [
      { path: "", element: <FeedsPage /> },
    ],
  },
];

export default feedsRoutes;
