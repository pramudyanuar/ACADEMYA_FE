// pages/ForgotPassword.tsx
import Button from "../../core/design-system/Button";
import TextField from "../../core/design-system/TextField";
import { useForgotPassword } from "../hooks/useForgotPassword";

const ForgotPassword: React.FC = () => {
  const { email, setEmail, handleSubmit, goToLogin } = useForgotPassword();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Forgot Password</h2>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">Enter your email to reset your password.</p>
        <form onSubmit={handleSubmit} className="mt-4">
          <TextField label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button type="submit">Send Reset Link</Button>
        </form>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
          Remember your password?{' '}
          <span
            onClick={goToLogin}
            className="text-blue-500 dark:text-blue-400 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;