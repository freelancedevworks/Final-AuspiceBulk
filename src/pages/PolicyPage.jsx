import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiLock, FiFileText, FiBook } from 'react-icons/fi';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import './PolicyPage.css';

const PolicyPage = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  return (
    <>
      {/* Page Header */}
      <section className="page-header policy-header" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/3.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
        <div className="container">
          <motion.div
            className="page-header-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">Policies & Compliance</h1>
            <div className="breadcrumbs">
              <a href="/">Home</a> / <span>Policies</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Navigation */}
      <Section className="policy-nav-section">
        <div className="policy-nav-container">
          <motion.div 
            className="policy-nav"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button 
              className={`policy-nav-item ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => setActiveTab('privacy')}
            >
              <FiShield className="policy-icon" />
              <span>Privacy Policy</span>
            </button>
            
            <button 
              className={`policy-nav-item ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => setActiveTab('terms')}
            >
              <FiFileText className="policy-icon" />
              <span>Terms of Service</span>
            </button>
            
            <button 
              className={`policy-nav-item ${activeTab === 'data' ? 'active' : ''}`}
              onClick={() => setActiveTab('data')}
            >
              <FiLock className="policy-icon" />
              <span>Data Security</span>
            </button>
            
            <button 
              className={`policy-nav-item ${activeTab === 'compliance' ? 'active' : ''}`}
              onClick={() => setActiveTab('compliance')}
            >
              <FiBook className="policy-icon" />
              <span>Compliance</span>
            </button>
          </motion.div>
        </div>
      </Section>

      {/* Policy Content */}
      <Section className="policy-content-section">
        <div className="policy-content-container">
          {activeTab === 'privacy' && (
            <motion.div
              className="policy-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="policy-header">
                <FiShield className="policy-header-icon" />
                <h2>Privacy Policy</h2>
                <p>Last Updated: June 2023</p>
              </div>
              
              <div className="policy-placeholder">
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 1, delay: 0.1 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '95%' }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                
                <h3 className="placeholder-heading">Information We Collect</h3>
                
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '95%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '88%' }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '92%' }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
                
                <h3 className="placeholder-heading">How We Use Your Information</h3>
                
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 1, delay: 0.9 }}
                />
              </div>
              
              <div className="policy-contact">
                <p>For privacy-related inquiries, please contact:</p>
                <Button to="mailto:privacy@auspicebulk.com">
                  privacy@auspicebulk.com
                </Button>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'terms' && (
            <motion.div
              className="policy-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="policy-header">
                <FiFileText className="policy-header-icon" />
                <h2>Terms of Service</h2>
                <p>Last Updated: June 2023</p>
              </div>
              
              <div className="policy-placeholder">
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '93%' }}
                  transition={{ duration: 1, delay: 0.1 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '97%' }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                
                <h3 className="placeholder-heading">Service Agreement</h3>
                
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                
                <h3 className="placeholder-heading">User Responsibilities</h3>
                
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '95%' }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </div>
              
              <div className="policy-contact">
                <p>For terms-related inquiries, please contact:</p>
                <Button to="mailto:legal@auspicebulk.com">
                  legal@auspicebulk.com
                </Button>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'data' && (
            <motion.div
              className="policy-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="policy-header">
                <FiLock className="policy-header-icon" />
                <h2>Data Security</h2>
                <p>Last Updated: June 2023</p>
              </div>
              
              <div className="policy-placeholder">
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '88%' }}
                  transition={{ duration: 1, delay: 0.1 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '95%' }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                
                <h3 className="placeholder-heading">Security Measures</h3>
                
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '92%' }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                
                <h3 className="placeholder-heading">Data Breach Protocol</h3>
                
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '88%' }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </div>
              
              <div className="policy-contact">
                <p>For data security inquiries, please contact:</p>
                <Button to="mailto:security@auspicebulk.com">
                  security@auspicebulk.com
                </Button>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'compliance' && (
            <motion.div
              className="policy-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="policy-header">
                <FiBook className="policy-header-icon" />
                <h2>Compliance</h2>
                <p>Last Updated: June 2023</p>
              </div>
              
              <div className="policy-placeholder">
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '95%' }}
                  transition={{ duration: 1, delay: 0.1 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                
                <h3 className="placeholder-heading">Regulatory Framework</h3>
                
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '88%' }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '95%' }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                
                <h3 className="placeholder-heading">Compliance Certifications</h3>
                
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '92%' }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.div
                  className="placeholder-line"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </div>
              
              <div className="policy-contact">
                <p>For compliance inquiries, please contact:</p>
                <Button to="mailto:compliance@auspicebulk.com">
                  compliance@auspicebulk.com
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section
        background="gradient"
        className="policy-cta-section"
      >
        <div className="policy-cta-container">
          <motion.h2
            className="policy-cta-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Have Questions About Our Policies?
          </motion.h2>
          
          <motion.p
            className="policy-cta-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our legal and compliance teams are here to help you understand our policies
            and compliance standards. Get in touch with us for any clarification.
          </motion.p>
          
          <motion.div
            className="policy-cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button to="/contact" variant="light">
              Contact Us
            </Button>
            <Button to="mailto:info@auspicebulk.com" variant="outline-light">
              Email Us Directly
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default PolicyPage; 