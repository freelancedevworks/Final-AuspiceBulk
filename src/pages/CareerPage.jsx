import { motion } from 'framer-motion';
import { FiBriefcase, FiMail } from 'react-icons/fi';
import Section from '../components/ui/Section';
import './CareerPage.css';

const CareerPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="page-header career-header" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/3.jpg)', 
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
              At Auspice Bulk, we're always looking for talented individuals to join our global team. 
              We value expertise, dedication, and innovative thinking in the maritime industry.
            </p>
          </motion.div>
          
          <motion.div
            className="career-contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="contact-icon">
              <FiMail />
            </div>
            <div className="contact-text">
              <h4>Get in Touch</h4>
              <p>For career inquiries, please contact our HR department:</p>
              <a href="mailto:hr@auspicebulk.com" className="career-email">hr@auspicebulk.com</a>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default CareerPage; 