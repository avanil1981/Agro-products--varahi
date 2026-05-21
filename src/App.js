import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ExportMarket from './pages/ExportMarket';
import DomesticMarket from './pages/DomesticMarket';
import Quality from './pages/Quality';
import Certifications from './pages/Certifications';
import Infrastructure from './pages/Infrastructure';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-cream-bg/40 font-sans text-dark-text">
        {/* Helper to reset scroll position on nav changes */}
        <ScrollToTop />

        {/* Global sticky navigation bar */}
        <Header />

        {/* Dynamic Main Content Wrapper */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/export" element={<ExportMarket />} />
            <Route path="/domestic" element={<DomesticMarket />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global dark green footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
