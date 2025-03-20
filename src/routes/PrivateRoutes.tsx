import { useEffect, useRef } from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavigationRoutes from "../routes/NavigationRoutes";
import { toast } from "react-hot-toast";

interface PrivateRouteProps {
  allowedRoles: string[];
}

const PrivateRoute = ({ allowedRoles }: PrivateRouteProps) => {
  // const isAuthenticated = !!localStorage.getItem("token");
  // const userRole = localStorage.getItem("role");
  const isAuthenticated = true;
  const userRole = "jobseeker";
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!isAuthenticated && !hasShownToast.current) {
      toast.error("Silakan login terlebih dahulu!");
      hasShownToast.current = true;
    } 
  }, [isAuthenticated]);

  if (!isAuthenticated) return <Navigate to={NavigationRoutes.LOGIN} />;
  if (!allowedRoles.includes(userRole || "")) {
    toast.error("Akses ditolak! Anda tidak memiliki izin.");
    return <Navigate to={NavigationRoutes.LOGIN} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
