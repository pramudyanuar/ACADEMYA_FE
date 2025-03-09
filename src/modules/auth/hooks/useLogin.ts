// useLogin.ts
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationRoutes from "../../../routes/NavigationRoutes";

const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password") {
      navigate(NavigationRoutes.FEEDS);
    } else {
      alert("Invalid credentials");
    }
  };

  const goToRegister = () => {
    navigate(NavigationRoutes.REGISTER);
  };

  const goToForgotPassword = () => {
    navigate(NavigationRoutes.FORGOT_PASSWORD);
  };

  return { email, setEmail, password, setPassword, handleLogin, goToRegister, goToForgotPassword };
};

export default useLogin;