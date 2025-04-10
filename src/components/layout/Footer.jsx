import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLinkedin, FiInstagram } from 'react-icons/fi';
import { BsTwitterX } from "react-icons/bs";
import { HiOutlineMail, HiLocationMarker } from 'react-icons/hi';
import { useTheme } from '../../hooks/useTheme';
import './Footer.css';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  // Set footer background color based on theme
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      '--footer-bg',
      theme === 'light' ? 'rgba(25, 96, 134, 0.97)' : '#0a2d42'
    );
    
    // Set popup gradient colors based on theme
    document.documentElement.style.setProperty(
      '--popup-gradient-start',
      theme === 'light' ? 'rgba(50, 120, 170, 0.95)' : 'rgba(0, 60, 120, 0.95)'
    );
    
    document.documentElement.style.setProperty(
      '--popup-gradient-end',
      theme === 'light' ? 'rgba(70, 90, 140, 0.98)' : 'rgba(20, 20, 50, 0.98)'
    );
  }, [theme]);

  const footerAnimation = {
    hover: { 
      scale: 1.05, 
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const socialIconAnimation = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.15, 
      rotate: 5,
      transition: { type: "spring", stiffness: 500, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <motion.div 
              className="footer-logo"
              whileHover="hover"
              whileTap="tap"
              variants={footerAnimation}
            >
              {theme === 'light' ? (
                <img src="/Logo 2.png" alt="Auspice Bulk" className="footer-logo-image" />
              ) : (
                <img src="/Logo 1.png" alt="Auspice Bulk" className="footer-logo-image" />
              )}
            </motion.div>
            <p className="footer-description">
              An experienced Dubai-based company specializing in freight trading and commercial ship operations across global markets.
            </p>
          </div>

          <div className="footer-col">
            <motion.h4 
              className="footer-subtitle"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Contact Us
            </motion.h4>
            <address className="contact-info">
              <motion.div 
                className="contact-item"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.span
                  whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <HiLocationMarker className="contact-icon" />
                </motion.span>
                <div className="contact-details">
                  <p>Auspice Bulk DMCC</p>
                  <p>P.O. Box 338455</p>
                  <div className="address-popup">
                    <p>Auspice Bulk DMCC</p>
                    <p>3703, JBC -2, Cluster V</p>
                    <p>Jumeirah Lake Towers</p>
                    <p>P.O. Box 338455</p>
                    <p>Dubai, UAE</p>
                  </div>
                </div>
              </motion.div>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <motion.p 
            className="copyright"
            whileHover={{ color: "#fff" }}
          >
            &copy; {currentYear} Auspice Bulk. All Rights Reserved.
          </motion.p>
          <div className="social-links-bottom">
            <motion.a 
              href="https://x.com/auspicebulk" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
              variants={socialIconAnimation}
              whileHover="hover"
              whileTap="tap"
            >
              <BsTwitterX />
            </motion.a>
            
            <motion.a 
              href="https://www.linkedin.com/company/auspicebulk/about/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              variants={socialIconAnimation}
              whileHover="hover"
              whileTap="tap"
            >
              <FiLinkedin />
            </motion.a>
            
            <motion.a 
              href="https://www.instagram.com/auspicebulk/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              variants={socialIconAnimation}
              whileHover="hover"
              whileTap="tap"
            >
              <FiInstagram />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 