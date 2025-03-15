import Button from "../../core/design-system/Button";
import TextField from "../../core/design-system/TextField";
import useForgotPassword from "../hooks/useForgotPassword";

const ForgotPasswordPage = () => {
  const { email, setEmail, handleSubmit, goToLogin } = useForgotPassword();

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 justify-center items-center">
      {/* Gambar hanya muncul di desktop */}
      <div className="hidden md:flex w-1/2 justify-center items-center p-6">
        <img 
          src="/src/assets/pc-auth.webp" 
          alt="Forgot Password Illustration" 
          className="w-3/4 md:w-2/3 rounded-lg"
        />
      </div>
      
      {/* Form Forgot Password */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-10">
        <div className="w-full max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center">Forgot Password</h2>
          <p className="text-gray-600 mb-6 text-center">Enter your email to reset your password</p>
          
          <form onSubmit={handleSubmit} className="w-full">
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" onClick={handleSubmit} className="w-full mt-4">Reset Password</Button>
          </form>
          
          <p className="mt-4 text-sm text-center">Remember your password? <button onClick={goToLogin} className="text-blue-500">Login</button></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
