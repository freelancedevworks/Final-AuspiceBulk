import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin } from 'react-icons/fi';
import { BsTwitterX } from "react-icons/bs";
import { HiOutlineMail, HiLocationMarker } from 'react-icons/hi';
import { useTheme } from '../../hooks/useTheme';
import './Footer.css';
import React, { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const [showEmailPopup, setShowEmailPopup] = useState(false);

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

  const emailPopupAnimation = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };

  return (
    <footer className="footer">
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
          <div className="quick-links">
            <motion.h4 
              className="footer-subtitle"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Quick Links
            </motion.h4>
            <ul className="footer-links">
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/">Home</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/about">About Us</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/services">Our Services</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/contact">Contact</Link>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="footer-col">
          <motion.h4 
            className="footer-subtitle"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Contact Us
            <HiOutlineMail className="contact-heading-icon" />
          </motion.h4>
          <address className="contact-info">
            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onHoverStart={() => setShowEmailPopup(true)}
              onHoverEnd={() => setShowEmailPopup(false)}
            >
              <div className="contact-details">
                <p className="address-title">Auspice Bulk DMCC</p>
                <p className="address-line">3703, JBC-2, Cluster V</p>
                <p className="address-line">Jumeirah Lake Towers</p>
                <p className="address-line">P.O. Box 338455</p>
                <p className="address-line">Dubai, UAE</p>
              </div>
            </motion.div>
          </address>
          
          <AnimatePresence>
            {showEmailPopup && (
              <motion.div
                className="email-popup"
                variants={emailPopupAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <div className="email-popup-content">
                  <h4>Email Address</h4>
                  <div className="email-list">
                    <p>Chartering: <a href="mailto:dry@auspicebulk.com">dry@auspicebulk.com</a></p>
                    <p>Careers: <a href="mailto:careers@auspicebulk.com">careers@auspicebulk.com</a></p>
                    <p>General: <a href="mailto:admin@auspicebulk.com">admin@auspicebulk.com</a></p>
                  </div>
                  
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
          <a 
            href="https://www.linkedin.com/company/auspicebulk/about/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a 
            href="https://twitter.com/auspicebulk" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <BsTwitterX />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 