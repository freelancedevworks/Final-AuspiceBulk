import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiRadio, FiMail, FiArrowRight, FiLinkedin } from 'react-icons/fi';
import Section from '../components/ui/Section';
// import Button from '../components/ui/Button';
import './NewsPage.css';

const NewsPage = () => {
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
      <section className="page-header news-header" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/55.png)', 
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
          >
            <h1 className="page-title">News & Updates</h1>
            <div className="breadcrumbs">
              <a href="/">Home</a> / <span>News</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stay Tuned Section */}
      <Section>
        <div className="stay-tuned-container">
          <motion.div
            className="radio-animation"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="radio-icon-container">
              <FiRadio className="radio-icon" />
              <motion.div 
                className="signal-wave"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.3, 0.6]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="signal-wave"
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0.2, 0.4]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.2
                }}
              />
              <motion.div 
                className="signal-wave"
                animate={{ 
                  scale: [1, 1.6, 1],
                  opacity: [0.2, 0.1, 0.2]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.4
                }}
              />
            </div>
          </motion.div>
          
          <motion.h2
            className="stay-tuned-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            STAY TUNED
          </motion.h2>
          
          <motion.p
            className="stay-tuned-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our news section is coming soon
          </motion.p>
          
          <motion.p
            className="stay-tuned-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            We're currently developing our news platform to bring you the latest updates
            from Auspice Bulk and the maritime industry. Stay tuned for company announcements,
            industry news.
          </motion.p>
        </div>
      </Section>

      {/* News Categories Preview */}
      <Section
        background="light"
        title="Content Preview"
        subtitle="What to Expect"
      >
        <div className="news-categories">
          <motion.div 
            className="news-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="category-icon company-updates"></div>
            <h3>Company Updates</h3>
            <p>
            Stay informed about Auspice Bulk's latest developments, new partnerships, and strategic initiatives. Follow our journey as we expand our services and fleet.
            </p>
          </motion.div>
          
          {/* <motion.div 
            className="news-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="category-icon market-insights"></div>
            <h3>Market Insights</h3>
            <p>
              Gain valuable insights into dry bulk shipping markets, commodity trends, and 
              trade flow analysis from our experienced team of maritime professionals.
            </p>
          </motion.div> */}
          
          <motion.div 
            className="news-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="category-icon industry-news"></div>
            <h3>Industry News</h3>
            <p>
            Stay updated on the latest developments in the maritime industry, including regulatory changes, technological advancements, and sustainability initiatives.
            </p>
          </motion.div>
          
          <motion.div 
            className="news-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="category-icon event-coverage"></div>
            <h3>Event Coverage</h3>
            <p>
            Follow our participation in industry conferences, trade shows, and networking events. Get insights from key maritime gatherings and expert panels.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="linkedin-follow-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>For more updates, follow us on LinkedIn</h3>
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
      </Section>

      {/* Newsletter Section */}
      {/* <Section
        background="gradient"
        title="Stay Updated"
        subtitle="Newsletter"
      >
        <div className="newsletter-container">
          <motion.div
            className="newsletter-icon"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FiMail />
          </motion.div>
          
          <motion.h3
            className="newsletter-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Subscribe to Our Newsletter
          </motion.h3>
          
          <motion.p
            className="newsletter-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Be the first to receive our news articles, market insights, and company updates.
            Our newsletter delivers valuable content straight to your inbox.
          </motion.p>
          
          {!subscribed ? (
            <motion.form
              className="newsletter-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="form-input-container">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="submit-button">
                  Subscribe <FiArrowRight />
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
              <p>Thank you for subscribing to our newsletter!</p>
              <p>You will receive our latest updates directly to your inbox.</p>
            </motion.div>
          )}
          
          <motion.div
            className="alternative-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>For media inquiries or press information, please contact our communications team:</p>
            <Button 
              to="mailto:media@auspicebulk.com"
              variant="light"
            >
              media@auspicebulk.com
            </Button>
          </motion.div>
        </div>
      </Section> */}
    </>
  );
};

export default NewsPage; 