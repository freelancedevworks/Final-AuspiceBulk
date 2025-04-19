import { motion } from 'framer-motion';
import { FiBriefcase, FiMail, FiLinkedin } from 'react-icons/fi';
import Section from '../components/ui/Section';
import './CareerPage.css';

const CareerPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="page-header career-header" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/55.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        paddingTop: '60px',
        paddingBottom: '60px'
      }}>
        <div className="container">
          <motion.div
            className="page-header-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginTop: '-30px' }}
          >
            <h1 className="page-title">Careers</h1>
            <div className="breadcrumbs">
              <a href="/">Home</a> / <span>Careers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Opportunities */}
      <Section
        title="Join Our Team"
        subtitle="Career Opportunities"
      >
        <div className="career-content">
          <motion.div
            className="career-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="career-icon">
              <FiBriefcase />
            </div>
            <p className="career-text">
            At Auspice Bulk, we are always seeking talented individuals to join our team. We welcome expertise, dedication, and innovative thinking.
            </p>
          </motion.div>
          
          <motion.div
            className="career-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="career-icon">
              <FiMail />
            </div>
            <h4>Get in Touch</h4>
            <p className="career-text">For career inquiries, please contact our HR department:</p>
            <a href="mailto:careers@auspicebulk.com" className="career-email">careers@auspicebulk.com</a>
          </motion.div>
          
          <motion.div
            className="career-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="career-icon">
              <FiLinkedin />
            </div>
            <h4>Connect With Us</h4>
            <p className="career-text">Follow our company page for the latest opportunities and updates:</p>
            <motion.a 
              href="https://www.linkedin.com/company/auspicebulk/about/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="linkedin-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FiLinkedin className="linkedin-icon" />
              <span>Connect on LinkedIn</span>
            </motion.a>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default CareerPage; 