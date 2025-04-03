import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLinkedin, FiInstagram } from 'react-icons/fi';
import { BsTwitterX } from "react-icons/bs";
import { HiOutlineMail, HiLocationMarker } from 'react-icons/hi';
import { useTheme } from '../../hooks/useTheme';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

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
                <img src="/assets/Logo 2.png" alt="Auspice Bulk" className="footer-logo-image" />
              ) : (
                <img src="/assets/Logo 1.png" alt="Auspice Bulk" className="footer-logo-image" />
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
                whileHover={{ 
                  x: 5, 
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.15)" 
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <HiLocationMarker className="contact-icon" />
                </motion.span>
                <span>Regd. Office: 37th Floor, JBC 2, Cluster V, Jumeirah Lake Towers, Dubai, UAE</span>
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
              href="https://linkedin.com" 
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
              href="https://www.instagram.com/auspicebulk/?utm_source=ig_web_button_share_sheet" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              variants={socialIconAnimation}
              whileHover="hover"
              whileTap="tap"
            >
              <FiInstagram />
            </motion.a>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 