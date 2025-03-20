import { useEffect, useRef } from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavigationRoutes from "../routes/NavigationRoutes";
import { toast } from "react-hot-toast";

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  const hasShownToast = useRef(false); // Mencegah toast muncul dua kali

  useEffect(() => {
    if (!isAuthenticated && !hasShownToast.current) {
      toast.error("Silakan login terlebih dahulu!");
      hasShownToast.current = true; // Set agar tidak muncul lagi
    }
  }, [isAuthenticated]);

  return isAuthenticated ? <Outlet /> : <Navigate to={NavigationRoutes.LOGIN} />;
};

export default PrivateRoute;
