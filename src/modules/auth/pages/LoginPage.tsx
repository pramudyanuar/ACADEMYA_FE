// pages/LoginPage.tsx
import Button from "../../core/design-system/Button";
import TextField from "../../core/design-system/TextField";
import useLogin from "../hooks/useLogin";

const LoginPage: React.FC = () => {
  const { email, setEmail, password, setPassword, handleLogin, goToRegister, goToForgotPassword } = useLogin();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Login</h2>
        <form onSubmit={handleLogin}>
          <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className="mb-4 flex justify-between items-center">
            <label className="block text-gray-700 dark:text-gray-300">Password</label>
            <span
              onClick={goToForgotPassword}
              className="text-blue-500 dark:text-blue-400 hover:underline cursor-pointer text-sm"
            >
              Forgot Your Password?
            </span>
          </div>
          <TextField label="" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit">Login</Button>
        </form>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
          Don't have an account?{' '}
          <span
            onClick={goToRegister}
            className="text-blue-500 dark:text-blue-400 hover:underline cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;