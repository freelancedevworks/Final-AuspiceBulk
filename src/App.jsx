import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
// import PartnersPage from './pages/PartnersPage';
import FleetPage from './pages/FleetPage';
import NewsPage from './pages/NewsPage';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/ContactPage';
// import PolicyPage from './pages/PolicyPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/globals.css';

// Wrap Routes with AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* <Route path="/partners" element={<PartnersPage />} /> */}
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/policy" element={<PolicyPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
