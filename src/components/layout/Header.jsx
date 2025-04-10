import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';
import './Header.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  // Animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 24,
        staggerChildren: 0.09,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    exit: { y: -20, opacity: 0 }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo-container">
          {theme === 'light' ? (
            <motion.img 
              src="/Logo 2.png" 
              alt="Auspice Bulk" 
              className="logo-image" 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          ) : (
            <motion.img 
              src="/Logo 1.png" 
              alt="Auspice Bulk" 
              className="logo-image" 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          )}
        </Link>

        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>
                Services
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/partners" className={({ isActive }) => isActive ? 'active' : ''}>
                Partners
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/fleet" className={({ isActive }) => isActive ? 'active' : ''}>
                Fleet
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" className={({ isActive }) => isActive ? 'active' : ''}>
                News
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className={({ isActive }) => isActive ? 'active' : ''}>
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header-controls">
          <motion.button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </motion.button>

          <motion.button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
          >
            <motion.ul className="mobile-nav-links">
              <motion.li variants={itemVariants}>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  Home
                </NavLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  About Us
                </NavLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  Services
                </NavLink>
              </motion.li>
              {/* <motion.li variants={itemVariants}>
                <NavLink 
                  to="/partners" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  Partners
                </NavLink>
              </motion.li> */}
              <motion.li variants={itemVariants}>
                <NavLink 
                  to="/fleet" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  Fleet
                </NavLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <NavLink 
                  to="/news" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  News
                </NavLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <NavLink 
                  to="/careers" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  Careers
                </NavLink>
              </motion.li>
              {/* <motion.li variants={itemVariants}>
                <NavLink 
                  to="/policy" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  Policies
                </NavLink>
              </motion.li> */}
              <motion.li variants={itemVariants}>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  Contact
                </NavLink>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 