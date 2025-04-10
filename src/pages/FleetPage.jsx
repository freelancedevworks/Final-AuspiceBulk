import { motion } from 'framer-motion';
import { FiClock } from 'react-icons/fi';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import './FleetPage.css';

const FleetPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="page-header fleet-header" style={{ 
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
            style={{ marginTop: '-30px' }} // Added negative margin to move up
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">Our Fleet</h1>
            <div className="breadcrumbs">
              <a href="/">Home</a> / <span>Fleet</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <Section>
        <div className="fleet-coming-soon">
          <motion.div
            className="coming-soon-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <div className="vessel-silhouette-container">
              <motion.div 
                className="vessel-silhouette"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              />
              
              <div className="water-container">
                <motion.div 
                  className="water"
                  animate={{ 
                    backgroundPositionX: ['0%', '100%'],
                  }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "linear"
                  }}
                />
              </div>
            </div> */}
            
            <motion.h2
              className="coming-soon-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              "Arriving Soon"
            </motion.h2>
            
            <motion.div
              className="progress-indicator"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <motion.div 
                className="progress-bar"
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
              ></motion.div>
              <div className="progress-text">75% Complete</div>
            </motion.div>
            
            {/* <motion.p
              className="coming-soon-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              We are currently curating comprehensive information about our fleet of vessels. Soon, you will be able to explore our diverse range of ships, their specifications, and current deployment status.
            </motion.p> */}
          </motion.div>
        </div>
      </Section>

      {/* Teaser Content */}
      <Section
        title="Fleet Overview"
        subtitle="Preview"
        background="light"
      >
        <div className="fleet-teaser">
          {/* <motion.div
            className="teaser-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Auspice Bulk operates and manages a diverse fleet of dry bulk vessels, ranging from 
              Handysize to Capesize. Our vessels are equipped with the latest technology to ensure 
              efficient, safe, and environmentally responsible operations.
            </p>
            <p>
              Our fleet information section will soon feature detailed vessel specifications, 
              deployment maps, and real-time status updates.
            </p>
          </motion.div> */}
          
          <div className="vessel-categories">
            <motion.div 
              className="vessel-category"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Handysize</h3>
              <p>Versatile vessels ideal for smaller ports and specialized cargo</p>
            </motion.div>
            
            <motion.div 
              className="vessel-category"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Supramax/Ultramax</h3>
              <p>Optimal balance of capacity and port accessibility</p>
            </motion.div>
            
            <motion.div 
              className="vessel-category"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Panamax/Kamsarmax</h3>
              <p>Versatile segment for diverse bulk cargo needs</p>
            </motion.div>
            
            <motion.div 
              className="vessel-category"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3>Capesize</h3>
              <p>Maximum capacity for high-volume cargo transportation</p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ETA Section */}
      {/* <Section
        background="gradient"
      >
        <div className="eta-section">
          <motion.div
            className="clock-icon"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FiClock />
          </motion.div>
          
          <motion.h2
            className="eta-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Approximate Launch: Q3 2025
          </motion.h2>
          
          <motion.p
            className="eta-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our fleet information section is currently under development. 
            We're working diligently to bring you detailed insights into our vessels.
          </motion.p>
          
          <motion.div
            className="eta-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              to="/contact" 
              variant="light"
              size="large"
            >
              Contact for Fleet Information
            </Button>
          </motion.div>
        </div>
      </Section> */}
    </>
  );
};

export default FleetPage; 