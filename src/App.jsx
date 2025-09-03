import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';

// Pages
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Factory from './pages/Factory';
import Products from './pages/Products';
import Clients from './pages/Clients';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/factory" element={<Factory />} />
            <Route path="/products" element={<Products />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Floating Components */}
        <WhatsAppButton />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;