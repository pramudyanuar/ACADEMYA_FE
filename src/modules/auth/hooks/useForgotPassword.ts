
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationRoutes from "../../../routes/NavigationRoutes";

export function useForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
  };

  const goToLogin = () => {
    navigate(NavigationRoutes.LOGIN);
  };

  return {
    email,
    setEmail,
    handleSubmit,
    goToLogin,
  };
}

export default useForgotPassword;