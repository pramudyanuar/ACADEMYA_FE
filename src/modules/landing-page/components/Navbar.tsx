import React from 'react';
import useNavbar from '../hooks/useNavbar';

const Navbar: React.FC = () => {
  const { isMenuOpen, toggleMenu, isScrolled, goToLogin, goToRegister } = useNavbar();

  return (
    <nav className={`fixed top-0 w-full z-10 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className={`text-2xl font-bold ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}>Jobs!</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-center space-x-8">
              <a 
                href="#" 
                className={`px-3 py-2 rounded-md font-medium ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
                }`}
              >
                Home
              </a>
              <a 
                href="#" 
                className={`px-3 py-2 rounded-md font-medium ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
                }`}
              >
                Job Vacancy
              </a>
              <a 
                href="#" 
                className={`px-3 py-2 rounded-md font-medium ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
                }`}
              >
                About Us
              </a>
              <a 
                href="#" 
                className={`px-3 py-2 rounded-md font-medium ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
                }`}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center bg-gradient-to-r from-blue-900 to-blue-500 rounded-full p-1 h-10">
              <button
                className="px-4 h-full text-white font-semibold rounded-full bg-transparent"
                onClick={goToLogin}>
                Login
              </button>
              <button
                className="px-4 h-full text-blue-900 font-semibold rounded-full bg-white"
                onClick={goToRegister}>
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile menu button - ONLY VISIBLE ON MOBILE */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle based on state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-opacity-95`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Home</a>
          <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Job Vacancy</a>
          <a href="#career" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">About Us</a>
          <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Contact</a>
        </div>
        <div className="pt-4 pb-3 border-t border-white border-opacity-25">
          <div className="flex items-center justify-center space-x-4 px-5">
            <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium block w-full text-center">Login</a>
            <a href="#" className="bg-white text-blue-600 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 block w-full text-center">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;