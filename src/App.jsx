import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PartnersPage from './pages/PartnersPage';
import FleetPage from './pages/FleetPage';
import NewsPage from './pages/NewsPage';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/ContactPage';
// import PolicyPage from './pages/PolicyPage';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* <Route path="/policy" element={<PolicyPage />} /> */}
            <Route path="*" element={<div className="container" style={{ paddingTop: '100px' }}>404 - Page Not Found</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
