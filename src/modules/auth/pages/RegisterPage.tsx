import useRegister from "../hooks/useRegister";

const RegisterPage = () => {
  const {
    fullName, setFullName,
    email, setEmail,
    phoneNumber, setPhoneNumber,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    role, setRole,
    agreeTerms, setAgreeTerms,
    handleRegister, goToLogin
  } = useRegister();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Gambar (Tetap di tempatnya) */}
      <div className="hidden md:flex w-1/2 justify-center items-center p-6">
        <img 
          src="/src/assets/pc-auth.webp" 
          alt="Creative Process" 
          className="w-3/4 md:w-2/3 rounded-lg"
        />
      </div>
      
      {/* Form Register (Scrollable) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-10 overflow-y-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700">Sign Up</h2>
        <p className="text-gray-600 mb-6">Sign up to get started with Jobs!</p>
        
        <form onSubmit={handleRegister} className="w-full max-w-sm">
          {/* Full Name */}
          <label className="block text-gray-700 mb-1">Full Name</label>
          <input 
            type="text" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 border rounded mb-4" 
          />

          {/* Email */}
          <label className="block text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-4" 
          />

          {/* Phone Number */}
          <label className="block text-gray-700 mb-1">Phone Number</label>
          <input 
            type="tel" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 border rounded mb-4" 
          />

          {/* Password */}
          <label className="block text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-4" 
          />

          {/* Confirm Password */}
          <label className="block text-gray-700 mb-1">Confirm Password</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded mb-4" 
          />

          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">I am a</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  value="job_seeker" 
                  checked={role === "job_seeker"}
                  onChange={() => setRole("job_seeker")}
                  className="mr-2"
                />
                Job seeker
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  value="recruiter" 
                  checked={role === "recruiter"}
                  onChange={() => setRole("recruiter")}
                  className="mr-2"
                />
                Recruiter
              </label>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start mb-4">
            <input 
              type="checkbox" 
              checked={agreeTerms} 
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mr-2 mt-1"
            />
            <label className="text-sm text-gray-600">
              I have read and agree to StaffMerge’s  
              <a href="#" className="text-blue-500"> Privacy Policy</a>, 
              <a href="#" className="text-blue-500"> Terms of Use</a>, and 
              <a href="#" className="text-blue-500"> Cookies Policy</a>.
            </label>
          </div>

          {/* Register Button */}
          <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded">
            CREATE YOUR ACCOUNT
          </button>
        </form>

        <p className="mt-4 text-sm">
          Already have an account?  
          <button onClick={goToLogin} className="text-blue-500"> Login</button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
