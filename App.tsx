import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { CallButton } from './components/layout/CallButton';
import { LoadingScreen } from './components/ui/LoadingScreen';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Industries } from './pages/Industries';
import { Blog } from './pages/Blog';
import { Testimonials } from './pages/Testimonials';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';

// Scroll to top helper on route transitions
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* Premium Loader Screen */}
      <LoadingScreen />

      <div className="flex flex-col min-h-screen bg-surface">
        {/* Navigation */}
        <Navbar />

        {/* Content Viewport */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating CTAs */}
        <WhatsAppButton />
        <CallButton />
      </div>
    </Router>
  );
};

export default App;
