import { Link } from 'react-router-dom';
import { FiLinkedin, FiInstagram } from 'react-icons/fi';
import { BsTwitterX } from "react-icons/bs";
import { HiOutlineMail, HiLocationMarker, HiPhone } from 'react-icons/hi';
import { useTheme } from '../../hooks/useTheme';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="footer">
      <div className="footer-waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              {theme === 'light' ? (
                <img src="/assets/Logo 2.png" alt="Auspice Bulk" className="footer-logo-image" />
              ) : (
                <img src="/assets/Logo 1.png" alt="Auspice Bulk" className="footer-logo-image" />
              )}
            </div>
            <p className="footer-description">
              A leading Dubai-based company specializing in freight trading and commercial ship operations across global markets.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="https://www.instagram.com/auspicebulk/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="https://x.com/auspicebulk" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <BsTwitterX />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/fleet">Fleet</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-subtitle">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services#commercial-management">Commercial Management</Link></li>
              {/* <li><Link to="/services#ship-operations">Ship Operations</Link></li> */}
              <li><Link to="/services#freight-trading">Freight Trading</Link></li>
              <li><Link to="/services#vessel-chartering">Vessel Chartering</Link></li>
              {/* <li><Link to="/services#cargo-solutions">Cargo Solutions</Link></li> */}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-subtitle">Contact Us</h4>
            <address className="contact-info">
              <div className="contact-item">
                <HiLocationMarker className="contact-icon" />
                <span>Regd. Office: 37th Floor, JBC 2, Cluster V, Jumeirah Lake Towers, Dubai, UAE</span>
              </div>
              <div className="contact-item">
                <HiPhone className="contact-icon" />
                <span>Tel: +9714 374 5700 | Mob: +97152 227 6257</span>
              </div>
              <div className="contact-item">
                <HiOutlineMail className="contact-icon" />
                <span>Email: admin@auspicebulk.com</span>
              </div>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Auspice Bulk. All Rights Reserved.
          </p>
          <p className="legal-info">
            Company is registered and licensed as a Freezone company under the rules & regulations of DMCCA
          </p>
          {/* <div className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 