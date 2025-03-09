import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div style={{ backgroundColor: "#f0f8ff", minHeight: "100vh", padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "#333", fontSize: "2rem" }}>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
