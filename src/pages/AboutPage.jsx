import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAnchor, FiFlag, FiCompass, FiAward, FiShield, FiUsers, FiTrendingUp, FiClock } from 'react-icons/fi';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import './AboutPage.css';

const AboutPage = () => {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* Page Header */}
      <section className="page-header about-header" style={{ 
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
            <h1 className="page-title">About Us</h1>
            <div className="breadcrumbs">
              <a href="/">Home</a> / <span>About Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <Section
        title="Maritime Establishment in Dubai"
        subtitle="Our Story"
      >
        <div className="company-overview">
          <div className="company-content">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Auspice Bulk is a Freight Trading and Operating Enterprise based in Dubai, specializing in the global transportation of dry bulk commodities, including Mineral Ores, Fertilizers, Coal, and more. With extensive experience in Ship Ownership, Commercial Management, Cargo Operations, Vessel Operations, and Liner Services, Auspice Bulk is committed to delivering efficient, transparent, and tailored solutions to its customers.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our team of professionals, with over 50 years of cumulative experience across various sectors of the shipping industry, is dedicated to managing our customers' shipping needs and designing customized solutions that enhance trade opportunities and mitigate risks. With expertise in vessels ranging from Handy to Capesize, we ensure that Auspice Bulk consistently delivers services of the highest standard while maintaining a competitive edge in the industry.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
             Company is registered and licensed as a Freezone company under the rules & regulations of DMCCA.
            </motion.p>
          </div>
          <motion.div 
            className="company-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="about-image-container2">
            <img src="/77.jpg" alt="Auspice Bulk Operations" className="img-fluid" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Mission and Vision */}
      <Section
        title="Our Purpose"
        subtitle="Mission & Vision"
        background="light"
      >
        <div className="mission-vision-container">
          <motion.div 
            className="mission-box"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mission-icon">
              <FiFlag />
            </div>
            <h3>Our Mission</h3>
            <p>
            Our mission at Auspice Bulk is to be a trusted partner in our active segment, navigating with trust, delivering excellence, and ensuring reliability in every voyage. We are committed to providing efficient, customer-centric solutions while upholding the highest standards of safety, sustainability, and operational efficiency. We recognize that our employees are the backbone of our success, and we strive to foster a supportive, empowering, and growth-oriented environment where they can thrive. 
            </p>
          </motion.div>
          
          <motion.div 
            className="vision-box"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="vision-icon">
              <FiCompass />
            </div>
            <h3>Our Vision</h3>
            <p>
            To be the preferred choice for customers by operating a diversified fleet that delivers reliable, efficient, and innovative maritime solutions. By embracing continuous improvement in our processes, we aim to exceed customer expectations, build lasting relationships, and create long-term value for both our clients and our people.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Values and Principles */}
      <Section
        title="Our Guiding Principles"
        subtitle="Values & Ethics"
        ref={valuesRef}
      >
        <div className="values-grid">
          <motion.div 
            className="value-card"
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="value-icon">
              <FiAward />
            </div>
            <h3>Excellence</h3>
            <p>We strive for excellence in every aspect of our operations, consistently delivering high-quality services.</p>
          </motion.div>
          
          <motion.div 
            className="value-card"
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="value-icon">
              <FiShield />
            </div>
            <h3>Integrity</h3>
            <p>We conduct our business with the highest level of integrity, transparency, and ethical standards.</p>
          </motion.div>
          
          <motion.div 
            className="value-card"
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="value-icon">
              <FiUsers />
            </div>
            <h3>Client Focus</h3>
            <p>We prioritize our clients' needs, building lasting relationships through personalized service.</p>
          </motion.div>
          
          <motion.div 
            className="value-card"
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="value-icon">
              <FiTrendingUp />
            </div>
            <h3>Innovation</h3>
            <p>We embrace innovation and continuously improve our processes to deliver better solutions.</p>
          </motion.div>
          
          
          
          <motion.div 
            className="value-card"
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className="value-icon">
              <FiClock />
            </div>
            <h3>Efficiency</h3>
            <p>We optimize operations to ensure timely, cost-effective solutions without compromising quality.</p>
          </motion.div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section
        title="Our Advantage"
        subtitle="Why Choose Us"
        background="gradient"
      >
        <div className="why-choose-grid">
          <motion.div 
            className="advantage-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Industry Expertise</h3>
            <p>
              Our team brings decades of combined experience in the maritime industry, with specialized knowledge 
              in dry bulk transportation and global shipping markets.
            </p>
          </motion.div>
          
          {/* <motion.div 
            className="advantage-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>Global Network</h3>
            <p>
              We maintain an extensive network of partners, agents, and service providers across key maritime 
              hubs, enabling us to facilitate smooth operations worldwide.
            </p>
          </motion.div> */}
          
          <motion.div 
            className="advantage-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Customized Solutions</h3>
            <p>
              We understand that each client has unique requirements. Our tailored approach ensures that 
              we deliver solutions specifically designed to meet your business needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="advantage-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>Operational Excellence</h3>
            <p>
              Our rigorous operational procedures and quality management systems ensure that we maintain 
              the highest standards in all aspects of our services.
            </p>
          </motion.div>
        </div>
        
        <div className="cta-container">
          <Button 
            to="/services" 
            variant="primary" 
            size="large"
          >
            Explore Our Services
          </Button>
          <Button 
            to="/contact" 
            variant="secondary" 
            size="large"
          >
            Contact Our Team
          </Button>
        </div>
      </Section>
    </>
  );
};

export default AboutPage; 