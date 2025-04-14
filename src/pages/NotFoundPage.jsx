import { motion } from 'framer-motion';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import Button from '../components/ui/Button';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <motion.div 
        className="not-found-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="not-found-title"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          404
        </motion.h1>
        <motion.h2 
          className="not-found-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Page Not Found
        </motion.h2>
        <motion.p 
          className="not-found-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          The page you're looking for might have been moved or doesn't exist.
        </motion.p>
        <motion.div 
          className="not-found-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button 
            to="/"
            variant="primary"
            icon={<FiHome />}
          >
            Back to Home
          </Button>
          <Button 
            onClick={() => window.history.back()}
            variant="secondary"
            icon={<FiArrowLeft />}
          >
            Go Back
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage; 