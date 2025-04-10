import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiBell, FiChevronRight } from 'react-icons/fi';
import Section from '../components/ui/Section';
import './PartnersPage.css';

const PartnersPage = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
      // In a real app, you would send this to your backend
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="page-header partners-header" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/3.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        paddingTop: '60px',  // Reduced from default padding
        paddingBottom: '60px' // Reduced from default padding 
      }}>
        <div className="container">
          <motion.div
            className="page-header-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginTop: '-30px' }} // Added negative margin to move up
          >
            <h1 className="page-title">Our Partners</h1>
            <div className="breadcrumbs">
              <a href="/">Home</a> / <span>Partners</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Secured Section */}
      <Section
        title="Content Secured"
        subtitle="Partner Information"
      >
        <div className="secured-content">
          <motion.div
            className="lock-animation"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="lock-container">
              <FiLock className="lock-icon" />
              <motion.div 
                className="lock-wave"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.2, 0.5]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="lock-wave"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>
          
          <div className="secured-content-info">
            <motion.h2
              className="secured-content-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Partner Information is Secured
            </motion.h2>
            
            <motion.p
              className="secured-content-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our partner information is currently available only to authorized personnel. We maintain the confidentiality 
              of our business relationships to ensure the highest level of trust and security.
            </motion.p>
            
            <motion.p
              className="secured-content-info-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              If you're interested in becoming a partner or want to learn more about our existing partnerships, 
              please contact us directly through our <a href="/contact">contact page</a>.
            </motion.p>
          </div>
        </div>
      </Section>

      {/* Maritime Partners Background */}
      {/* <Section
        background="light"
      >
        <div className="maritime-partners-info">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Global Maritime Network
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Auspice Bulk has established strategic partnerships with key players across the global shipping industry. 
            Our network includes vessel owners, charterers, port operators, and other maritime service providers.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            These partnerships enable us to offer comprehensive solutions and ensure smooth operations 
            across international waters and ports. Our partners share our commitment to excellence, 
            reliability, and sustainable practices in maritime operations.
          </motion.p>

          <div className="ship-animation-container">
            <motion.div 
              className="ship-element"
              animate={{ 
                x: [0, '100%', '100%', '0%', '0%'],
                y: [0, 0, 0, 0, 0]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear"
              }}
            />
            <div className="wave-element wave1"></div>
            <div className="wave-element wave2"></div>
            <div className="wave-element wave3"></div>
          </div>
        </div>
      </Section> */}

      {/* Notify Me Section */}
      {/* <Section
        title="Stay Informed"
        subtitle="Partner Updates"
        background="gradient"
      >
        <div className="notify-me-container">
          <motion.div
            className="notification-icon"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FiBell />
          </motion.div>
          
          <motion.h3
            className="notify-me-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Want to be notified when we update our Partners page?
          </motion.h3>
          
          <motion.p
            className="notify-me-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Subscribe to receive notifications about our partnerships and company updates.
          </motion.p>
          
          {!subscribed ? (
            <motion.form
              className="notify-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="form-input-container">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="submit-button">
                  Notify Me <FiChevronRight />
                </button>
              </div>
              <p className="privacy-note">We respect your privacy and will not share your email with third parties.</p>
            </motion.form>
          ) : (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>Thank you for subscribing! We'll notify you when updates are available.</p>
            </motion.div>
          )}
        </div>
      </Section> */}
    </>
  );
};

export default PartnersPage; 