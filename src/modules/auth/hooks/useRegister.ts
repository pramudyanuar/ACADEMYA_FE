import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationRoutes from "../../../routes/NavigationRoutes";

const useRegister = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("job_seeker");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRegister = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!agreeTerms) {
      alert("You must agree to the terms before registering.");
      return;
    }

    alert(`Registered successfully as ${role}!`);
    goToLogin();
  };

  const goToLogin = () => {
    navigate(NavigationRoutes.LOGIN);
  };

  return {
    fullName,
    setFullName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    role,
    setRole,
    agreeTerms,
    setAgreeTerms,
    handleRegister,
    goToLogin,
  };
};

export default useRegister;
