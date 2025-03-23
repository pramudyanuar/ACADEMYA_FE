import Button from "../../core/design-system/Button";
import TextField from "../../core/design-system/TextField";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const { email, setEmail, password, setPassword, handleLogin, goToRegister, goToForgotPassword } = useLogin();

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 justify-center items-center">
      {/* Gambar hanya muncul di desktop */}
      <div className="hidden md:flex w-1/2 justify-center items-center p-6">
        <img 
          src="/src/assets/pc-auth.webp" 
          alt="Creative Process" 
          className="w-3/4 md:w-2/3 rounded-lg"
        />
      </div>
      
      {/* Form Login */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-10">
        <div className="w-full max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center">Jobs!</h2>
          <p className="text-gray-600 mb-6 text-center">Sign up to get started with Jobs!</p>
          
          <form onSubmit={handleLogin} className="w-full">
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isPassword={true}
            />
            
            <div className="flex justify-between items-center text-sm mb-4">
              <button type="button" onClick={goToForgotPassword} className="text-blue-500">Forgot Password?</button>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
            </div>
            
            <Button onClick={handleLogin} className="w-full bg-blue-700 text-white py-2 rounded">LOGIN</Button>
          </form>
          
          <p className="mt-4 text-sm text-center">Don't have an account? <button onClick={goToRegister} className="text-blue-500">Sign Up</button></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
