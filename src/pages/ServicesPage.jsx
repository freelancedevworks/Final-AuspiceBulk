import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGlobe, FiPackage, FiSend, FiTrendingUp } from 'react-icons/fi';
import Section from '../components/ui/Section';
import './ServicesPage.css';

const ServicesPage = () => {
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* Page Header */}
      <section className="page-header services-header" style={{ 
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
            style={{ marginTop: '-30px' }} // Added negative margin to move up
          >
            <h1 className="page-title">Our Services</h1>
            <div className="breadcrumbs">
              <a href="/">Home</a> / <span>Services</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <Section
        title="Maritime Expertise"
        subtitle="What We Offer"
      >
        <div className="services-overview">
          <motion.div
            className="overview-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>
            Auspice Bulk provides comprehensive shipping and freight trading services, emphasizing in dry bulk transportation. Our experienced team offers end-to-end solutions designed to optimize your maritime operations, and maximize efficiency.
            </p>
            <p>
            Our services are tailored to meet the unique needs of each client, with a steadfast commitment to reliability, transparency, and excellence in every aspect of our work.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Ship Operations */}
      {/* <Section
        title="Ship Operations"
        subtitle="Operational Excellence"
        background="light"
        id="ship-operations"
      >
        <div className="service-detail-grid">
          <motion.div 
            className="service-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="service-image-container">
              <div className="image-placeholder"></div>
            </div>
          </motion.div>
          
          <div className="service-content">
            <motion.div 
              className="service-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p>
                Our ship operations services ensure that vessels are managed efficiently, safely, and in 
                compliance with all relevant regulations. We handle the technical and operational aspects 
                of vessel management to optimize performance and minimize downtime.
              </p>
            </motion.div>
            
            <div className="service-features">
              <motion.div 
                className="service-feature"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="feature-icon">
                  <FiNavigation />
                </div>
                <div className="feature-content">
                  <h4>Voyage Planning</h4>
                  <p>Optimal route planning, port selection, and scheduling to ensure efficient voyages.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="service-feature"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="feature-icon">
                  <FiAnchor />
                </div>
                <div className="feature-content">
                  <h4>Technical Management</h4>
                  <p>Comprehensive technical oversight to maintain vessel safety and operational efficiency.</p>
                </div>
              </motion.div>
              
         
                <div className="feature-icon">
                  <FiMapPin />
                </div>
                <div className="feature-content">
                  <h4>Port Operations</h4>
                  <p>Efficient handling of port calls, including loading/unloading coordination and documentation.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="service-feature"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="feature-icon">
                  <FiDatabase />
                </div>
                <div className="feature-content">
                  <h4>Operational Reporting</h4>
                  <p>Comprehensive reporting on vessel performance, fuel consumption, and operational metrics.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section> */}

{/* Commodities Section */}
<Section
        title="Dry Bulk Expertise"
        subtitle="Commodities We Handle"
        background="light"
        
      >
        <div className="commodities-grid">
          <motion.div 
            className="commodity-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3>Mineral Ores</h3>
            <p>Metallurgical flux, Iron ore, bauxite, manganese, and other mineral commodities transported with expertise.</p>
          </motion.div>
          
          <motion.div 
            className="commodity-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3>Coal</h3>
            <p>Coking, Thermal and metallurgical coal shipments managed with attention to cargo-specific requirements.</p>
          </motion.div>
          
          <motion.div 
            className="commodity-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3>Fertilizers</h3>
            <p>Urea, Phosphates, potash, and other agricultural inputs transported safely and efficiently.</p>
          </motion.div>
          
          <motion.div 
            className="commodity-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3>Agricultural Products</h3>
            <p>Grains, sugar, and other agricultural commodities shipped with proper handling procedures.</p>
          </motion.div>
          
          <motion.div 
            className="commodity-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3>Steel Products</h3>
            <p>Steel coils, plates, and other metal products transported with specialized care.</p>
          </motion.div>
          
          {/* <motion.div 
            className="commodity-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <h3>Forest Products</h3>
            <p>Timber, pulp, and other forest-derived commodities shipped with proper storage considerations.</p>
          </motion.div> */}
        </div>
      </Section>


      {/* Commercial Management */}
      <Section
        title="Commercial Management"
        subtitle="Strategic Shipping"
        id="commercial-management"
        
      >
        <div className="service-detail-grid reverse">
          <div className="service-content">
            <motion.div 
              className="service-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p>
                Our commercial management services focus on maximizing vessel profitability through 
                strategic planning, market analysis, and revenue optimization. We handle all commercial 
                aspects of vessel operation to ensure optimal financial performance.
              </p>
            </motion.div>
            
            <div className="service-features">
              <motion.div 
                className="service-feature"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="feature-icon">
                  <FiGlobe />
                </div>
                <div className="feature-content">
                  <h4>Market Analysis</h4>
                  <p>Continuous monitoring of shipping markets to identify opportunities and optimize chartering decisions.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="service-feature"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="feature-icon">
                  <FiSend />
                </div>
                <div className="feature-content">
                  <h4>Freight Trading</h4>
                  <p>Expert negotiation of freight contracts to secure optimal terms and rates for our clients.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="service-feature"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="feature-icon">
                  <FiPackage />
                </div>
                <div className="feature-content">
                  <h4>Cargo Procurement</h4>
                  <p>Identifying and securing suitable cargoes to maximize vessel utilization and profitability.</p>
                </div>
              </motion.div>
              <motion.div 
                className="service-feature"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="feature-icon">
                  <FiTrendingUp />
                </div>
                <div className="feature-content">
                  <h4>Revenue Optimization</h4>
                  <p>Strategic vessel positioning and charter selection to maximize revenue and minimize ballast time.</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="service-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="service-image-container">
              <img src="/4.jpg" alt="Commercial shipping management" className="img-fluid" />
            </div>
          </motion.div>
        </div>
      </Section>
    

      

      {/* Vessel Types */}
      {/* <Section
        title="Our Fleet Expertise"
        subtitle="Vessel Types"
        background="light" 
      >
        <div className="vessel-types-container">
          <div className="vessel-content">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Auspice Bulk has expertise in managing and operating various vessel sizes and types within 
              the dry bulk segment. Our team's experience spans across different vessel categories, 
              allowing us to select the optimal vessel type for specific cargo requirements and trade routes.
            </motion.p>
          </div>
          
          <div className="vessel-types-grid">
            <motion.div 
              className="vessel-type"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Handysize</h3>
              <p>10,000 - 40,000 DWT</p>
              <div className="vessel-image handysize"></div>
            </motion.div>
            
            <motion.div 
              className="vessel-type"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Supramax/Ultramax</h3>
              <p>50,000 - 65,000 DWT</p>
              <div className="vessel-image supramax"></div>
            </motion.div>
            
            <motion.div 
              className="vessel-type"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Panamax/Kamsarmax</h3>
              <p>65,000 - 85,000 DWT</p>
              <div className="vessel-image panamax"></div>
            </motion.div>
            
            <motion.div 
              className="vessel-type"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Capesize</h3>
              <p>120,000+ DWT</p>
              <div className="vessel-image capesize"></div>
            </motion.div>
          </div>
        </div>
      </Section> */}

      {/* Service Inquiry Form */}
      {/* <Section
        title="Request Our Services"
        subtitle="Get in Touch"
        background="gradient"
        ref={formRef}
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/assets/6.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white'
        }}
      >
        <motion.div 
          className="service-form-container"
          initial={{ opacity: 0, y: 30 }}
          animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <form className="service-inquiry-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" required />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service of Interest</label>
              <select id="service" name="service" required>
                <option value="">Select a service</option>
                <option value="Ship Operations">Ship Operations</option>
                <option value="Commercial Management">Commercial Management</option>
                <option value="Freight Trading">Freight Trading</option>
                <option value="Vessel Chartering">Vessel Chartering</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Inquiry Details</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <div className="form-submit">
              <Button 
                variant="light" 
                size="large"
                type="submit"
              >
                Submit Inquiry
              </Button>
            </div>
          </form>
        </motion.div>
      </Section> */}
    </>
  );
};

export default ServicesPage; 