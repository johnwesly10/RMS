import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ShipRepair from "./pages/services/ShipRepair";
import DryDocking from "./pages/services/DryDocking";
import MarineElectrical from "./pages/services/MarineElectrical";
import MarineAutomation from "./pages/services/MarineAutomation";
import HarborServices from "./pages/services/HarborServices";
import PortAgency from "./pages/services/PortAgency";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServicesMain from "./components/ServicesMain";
import ContactMain from "./components/ContactMain"
import OurReach from './components/OurReach';
import Enquiry from "./components/Enquiry";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <header className={`sticky top-0 z-50 transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
          <Navbar />
        </header>
        
        <main className="grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <About />
                <Testimonials />
                <Contact />
              </>
            } />
            <Route path="/services" element={<Services />} />
            <Route path="/services/ship-repair" element={<ShipRepair />} />
            <Route path="/services/dry-docking" element={<DryDocking />} />
            <Route path="/services/marine-electrical" element={<MarineElectrical />} />
            <Route path="/services/marine-automation" element={<MarineAutomation />} />
            <Route path="/services/harbor-services" element={<HarborServices />} />
            <Route path="/services/port-agency" element={<PortAgency />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/serviceMain" element={<ServicesMain />} />
            <Route path="/contactus" element={<ContactMain />} />
            <Route path="/ourReach" element={<OurReach />} />
            <Route path="/enquiry" element={<Enquiry />} />
          </Routes>
        </main>
         
        <Footer />
      </div>
    </Router>
  );
}

export default App;
