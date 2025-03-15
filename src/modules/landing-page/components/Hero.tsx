import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  return (
    <section id="hero">
      <div 
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/bg-landing-page.webp')" }}
      >
        {/* Hero content */}
        <div className="relative w-full h-full flex flex-col justify-center items-center text-center px-4">
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empowering our<br />
            <TypeAnimation
              sequence={["Career Journey!", 2000, "Future Goals!", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-yellow-300"
            />
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-white max-w-3xl relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Bergabunglah dengan ribuan profesional dan temukan pekerjaan impianmu dengan mudah
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
