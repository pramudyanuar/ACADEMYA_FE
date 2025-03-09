import { useForgotPassword } from "../hooks/useForgotPassword";

export default function ForgotPassword() {
  const { email, setEmail, handleSubmit, goToLogin } = useForgotPassword();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
          Forgot Password
        </h2>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
          Enter your email to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="mt-4">
          <div>
            <label className="block text-gray-600 dark:text-gray-300 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
          >
            Send Reset Link
          </button>
        </form>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
          Remember your password?{" "}
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
}
