import { useState, useEffect } from 'react';
import NavigationRoutes from '../../../routes/NavigationRoutes';
import { useNavigate } from 'react-router-dom';

interface UseNavbarReturn {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  isScrolled: boolean;
  closeMenu: () => void;
  goToLogin: () => void; 
  goToRegister: () => void; 
}

const useNavbar = (): UseNavbarReturn => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Toggle mobile menu
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu
  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  const goToLogin = () => {
    navigate(NavigationRoutes.LOGIN);
  };

  const goToRegister = () => {
    navigate(NavigationRoutes.REGISTER);
  };

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = (): void => {
      // Change this value based on when you want the navbar to change
      const scrollThreshold = 50;
      
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return {
    isMenuOpen,
    toggleMenu,
    isScrolled,
    closeMenu,
    goToLogin,
    goToRegister,
  };
};

export default useNavbar;