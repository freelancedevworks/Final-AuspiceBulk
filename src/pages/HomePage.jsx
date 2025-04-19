import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowRight, FiAnchor, FiNavigation, FiGlobe, FiTrendingUp } from 'react-icons/fi';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import './HomePage.css';

const HomePage = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-video-container">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="hero-video"
            poster="/55.jpg"
            preload="auto"
          >
            <source src="/69.webm" type="video/webm" />
            <source src="/69.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>
        {/* <div className="hero-waves">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div> */}
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{               
              margin: '0 auto',
              maxWidth: '800px'
            }}
          >
            <h1 className="hero-title">
              "Navigating Trust, Delivering Excellence"
            </h1>
            <p className="hero-subtitle">
              Freight Trading and Shipping Solutions across International Markets
            </p>
            <div className="hero-buttons" style={{
              justifyContent: 'center' 
            }}>
              <Button 
                to="/services" 
                variant="primary" 
                size="large"
                icon={<FiArrowRight />}
              >
                Explore Our Services
              </Button>
              <Button 
                to="/contact" 
                variant="secondary" 
                size="large"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Years of Experience</p>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Global Partners</p>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="stat-number">500K+</h3>
              <p className="stat-label">Tons Shipped Annually</p>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="stat-number">25+</h3>
              <p className="stat-label">Port Destinations</p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* About Overview Section */}
      <Section
        title="Your Trusted Maritime Partner"
        subtitle="About Auspice Bulk"
      >
        <div className="about-overview">
          <div className="about-content">
            <p>
            Auspice Bulk is a Dubai-based company specializing in Freight Trading and Shipping Operations.
            With years of experience in Commercial Shipping, we offer world-class services to clients across global markets.
            </p>
            <p>
            Our team of experts possesses extensive knowledge in vessel chartering, 
            international trade, and ship management, ensuring efficient and reliable solutions for your shipping needs
            </p>
            <Button 
              to="/about" 
              variant="primary"
              icon={<FiArrowRight />}
            >
              Learn More About Us
            </Button>
          </div>
          <div className="about-image">
            <div className="about-image-container">
              <img src="/88.jpg" alt="Maritime operations" className="img-fluid" />
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section
        title="Our Maritime Services"
        subtitle="What We Offer"
        background="light"
        centered
      >
        <div className="services-grid">
          {/* <div className="service-card">
            <div className="service-icon">
              <FiNavigation />
            </div>
            <h3 className="service-title">Ship Operations</h3>
            <p className="service-description">
              Comprehensive vessel management services ensuring safe, efficient and profitable operations.
            </p>
            <Button 
              to="/services#ship-operations" 
              variant="text-only"
              icon={<FiArrowRight />}
              iconPosition="right"
            >
              Learn More
            </Button>
          </div> */}
          
          
          
          <div className="service-card">
            <div className="service-icon">
              <FiTrendingUp />
            </div>
            <h3 className="service-title">Freight Trading</h3>
            <p className="service-description">
              Expert freight trading services leveraging market knowledge for optimal shipping solutions.
            </p>
            <Button 
              to="/services#freight-trading" 
              variant="text-only"
              icon={<FiArrowRight />}
              iconPosition="right"
            >
              Learn More
            </Button>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <FiAnchor />
            </div>
            <h3 className="service-title">Vessel Chartering</h3>
            <p className="service-description">
              Customized vessel chartering solutions for diverse cargo requirements and trade routes.
            </p>
            <Button 
              to="/services#vessel-chartering" 
              variant="text-only"
              icon={<FiArrowRight />}
              iconPosition="right"
            >
              Learn More
            </Button>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FiGlobe />
            </div>
            <h3 className="service-title">Commercial Management</h3>
            <p className="service-description">
              Strategic commercial operations of vessels to maximize revenue and minimize costs.
            </p>
            <Button 
              to="/services#commercial-management" 
              variant="text-only"
              icon={<FiArrowRight />}
              iconPosition="right"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <section className="cta-section" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.7)), url(/55.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Navigate with Auspice Bulk?</h2>
            <p className="cta-description">
            Let us get in touch to understand your shipping requirements…
            </p>
            <Button 
              to="/contact" 
              variant="primary" 
              size="large"
              icon={<FiArrowRight />}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage; 