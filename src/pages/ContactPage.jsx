import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import './ContactPage.css';

const ContactPage = () => {
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, amount: 0.3 });
  const mapRef = useRef(null);
  const mapInView = useInView(mapRef, { once: true, amount: 0.3 });
  const contactDetailsRef = useRef(null);
  const contactDetailsInView = useInView(contactDetailsRef, { once: true, amount: 0.3 });


  

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID|| "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setFormStatus({
          submitting: false,
          submitted: true,
          error: null
        });
        e.target.reset();
        
        setTimeout(() => {
          setFormStatus({
            submitting: false,
            submitted: false,
            error: null
          });
        }, 5000);
      }
    } catch (error) {
      console.error('Email sending error:', error);
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="page-header contact-header" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/55.jpg)', 
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
            <h1 className="page-title">Contact Us</h1>
            <div className="breadcrumbs">
              <a href="/">Home</a> / <span>Contact</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <Section
        title="Get in Touch"
        subtitle="Our Information"
        className="contact-section"
      >
        <div className="contact-grid">
          <div className="contact-info">
            <motion.div 
              className="contact-info-intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="intro-text">
                We are here to discuss your Freight Requirement and Ship Management queries.
              </p>
            </motion.div>
            
            <div className="contact-details" ref={contactDetailsRef}>
              <motion.div 
                className="contact-detail-item"
                initial={{ opacity: 0, y: 20 }}
                animate={contactDetailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="contact-icon">
                  <FiMapPin />
                </div>
                <div className="contact-text">
                  <h4 className="detail-title">Office Address</h4>
                  <p className="detail-text">Auspice Bulk DMCC</p>
                  <p className="detail-text">3703, JBC -2, Cluster V</p>
                  <p className="detail-text">Jumeirah Lake Towers</p>
                  <p className="detail-text">P.O. Box 338455</p>
                  <p className="detail-text">Dubai, UAE</p>
                </div>
              </motion.div>
              
              {/* <motion.div 
                className="contact-detail-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="contact-icon">
                  <FiPhone />
                </div>
                <div className="contact-text">
                  <h4>Phone Number</h4>
                  <p>+971 4 37457000</p>
                  <p>+971 5 22276257</p>

                </div>
              </motion.div> */}
              
              <motion.div 
                className="contact-detail-item"
                initial={{ opacity: 0, y: 20 }}
                animate={contactDetailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="contact-icon">
                  <FiMail />
                </div>
                <div className="contact-text">
                  <h4 className="detail-title">Email Address</h4>
                  <p className="detail-text">
                    <span className="email-label">Chartering:</span>
                    <a href="mailto:dry@auspicebulk.com" className="contact-email">dry@auspicebulk.com</a>
                  </p>
                  <p className="detail-text">
                    <span className="email-label">Careers:</span>
                    <a href="mailto:careers@auspicebulk.com" className="contact-email">careers@auspicebulk.com</a>
                  </p>
                  <p className="detail-text">
                    <span className="email-label">General:</span>
                    <a href="mailto:admin@auspicebulk.com" className="contact-email">admin@auspicebulk.com</a>
                  </p>
                </div>
              </motion.div>
              
              {/* <motion.div 
                className="contact-detail-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="contact-icon">
                  <FiClock />
                </div>
                <div className="contact-text">
                  <h4>Business Hours</h4>
                  <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                  <p>Friday - Saturday: Closed</p>
                </div>
              </motion.div> */}
            </div>
          </div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            ref={formRef}
          >
            <h3 className="form-title">Send us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name" 
                  placeholder="Your name" 
                  required 
                  disabled={formStatus.submitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email" 
                  placeholder="Your email" 
                  required 
                  disabled={formStatus.submitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Message subject" 
                  required 
                  disabled={formStatus.submitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Your message" 
                  required 
                  disabled={formStatus.submitting}
                ></textarea>
              </div>
              
              <div className="form-submit">
                {formStatus.error && (
                  <div className="form-error">
                    {formStatus.error}
                  </div>
                )}
                {formStatus.submitted ? (
                  <div className="form-success">
                    <FiCheck /> Message sent successfully!
                  </div>
                ) : (
                  <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    icon={<FiSend />}
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <Section
        title="Our Location"
        subtitle="Find Us"
        background="light"
        ref={mapRef}
      >
        <motion.div 
          className="map-container"
          initial={{ opacity: 0, y: 30 }}
          animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <div className="interactive-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1446292873587!2d55.13532091511586!3d25.079181683952752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b6ca1f88afb%3A0xb7d9095b0ef47aec!2sJumeirah%20Lakes%20Towers%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1652345678901!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Auspice Bulk office location"
            ></iframe>
          </div>
        </motion.div>
      </Section>

      {/* Business Inquiries Section */}
      <Section
        title="Business Opportunities"
        // subtitle="Work With Us"
        background="gradient"
      >
        <div className="business-inquiries">
          <motion.p 
            className="inquiries-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Interested in partnering with Auspice Bulk for your shipping needs? We're always open 
            to new business relationships and opportunities in the maritime industry.
          </motion.p>
          
          <div className="inquiry-types">
            <motion.div 
              className="inquiry-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Shipping Services</h3>
              <p>
              Looking for reliable dry bulk transportation? Contact our commercial team to discuss your cargo requirements.
              </p>
            </motion.div>
            
            <motion.div 
              className="inquiry-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Partnerships</h3>
              <p>
                Interested in strategic partnerships or business collaborations? Reach out to our 
                business development team to explore potential opportunities.
              </p>

            </motion.div>
  
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage; 