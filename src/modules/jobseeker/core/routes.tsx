import { RouteObject } from "react-router-dom";
import PrivateRoute from "../../../routes/PrivateRoutes";
import NavigationRoutes from "../../../routes/NavigationRoutes";
import FeedsPage from "./pages/FeedsPostPage";

const jobseekerRoutes: RouteObject[] = [
  {
    path: NavigationRoutes.JOBSEEKER,
    element: <PrivateRoute allowedRoles={["jobseeker"]} />,
    children: [
      { path: "", element: <FeedsPage /> },
    ],
  },
];

export default jobseekerRoutes;
