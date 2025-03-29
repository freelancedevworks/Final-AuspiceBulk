import { useRef, forwardRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Section.css';

const Section = forwardRef(({ 
  children, 
  title, 
  subtitle, 
  centered = false, 
  className = '', 
  fullWidth = false,
  background = 'none',
  id
}, ref) => {
  const sectionRef = useRef(null);
  const isInView = useInView(ref || sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      className={`section section-${background} ${className}`}
      id={id}
      ref={ref || sectionRef}
    >
      <div className={`${fullWidth ? '' : 'container'} ${centered ? 'text-center' : ''}`}>
        {(title || subtitle) && (
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
            {title && <h2 className="section-title">{title}</h2>}
          </motion.div>
        )}
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
});

export default Section; 