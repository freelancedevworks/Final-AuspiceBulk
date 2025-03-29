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

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo-container">
          {theme === 'light' ? (
            <img src="/assets/Logo 2.png" alt="Auspice Bulk" className="logo-image" />
          ) : (
            <img src="/assets/Logo 1.png" alt="Auspice Bulk" className="logo-image" />
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
            <li>
              <NavLink to="/partners" className={({ isActive }) => isActive ? 'active' : ''}>
                Partners
              </NavLink>
            </li>
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
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>

          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-links">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/partners" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  Partners
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/fleet" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  Fleet
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/news" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/careers" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/policy" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  Policies
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={toggleMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 