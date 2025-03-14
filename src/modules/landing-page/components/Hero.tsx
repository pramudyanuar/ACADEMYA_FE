import React from 'react';

const Hero: React.FC = () => {
  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/bg-landing-page.webp')" }}
    >
      {/* Hero content */}
      <div className="relative w-full h-full flex flex-col justify-center items-center text-center px-4">
        {/* Overlay */}
        {/* <div 
          className="absolute inset-0 bg-blue-100 bg-opacity-20"
          aria-hidden="true"
        /> */}
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 relative">
          Empowering our<br />Career Journey!
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl relative">
          Bergabunglah dengan ribuan profesional dan temukan pekerjaan impianmu dengan mudah
        </p>
      
      </div>
    </div>
  );
};

export default Hero;
