import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationRoutes from "../../../routes/NavigationRoutes";

const useRegister = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Registered successfully!");
    goToLogin();
  };

  const goToLogin = () => {
    navigate(NavigationRoutes.LOGIN);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleRegister,
    goToLogin,
  };
};

export default useRegister;
