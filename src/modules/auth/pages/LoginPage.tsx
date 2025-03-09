import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const { email, setEmail, password, setPassword, handleLogin, goToRegister, goToForgotPassword } = useLogin();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <label className="block text-gray-700 dark:text-gray-300">Password</label>
            <span
              onClick={goToForgotPassword}
              className="text-blue-500 dark:text-blue-400 hover:underline cursor-pointer text-sm"
            >
              Forgot Your Password?
            </span>
          </div>
          <input
            type="password"
            className="w-full p-2 mb-5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 dark:bg-blue-600 text-white p-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
          Don't have an account?{" "}
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
