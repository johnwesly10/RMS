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
import ContactMain from "./components/ContactMain";
import OurReach from './components/OurReach';
import Enquiry from "./components/Enquiry";
<<<<<<< HEAD
import ScrollToTop from "./components/ScrollToTop";
=======
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import ProjectUpload from './components/ProjectUpload';
import ProjectDetail from './components/ProjectDetail';
import ProjectGallery from './components/ProjectGallery.jsx'; // A gallery component listing all projects
>>>>>>> 9f14e13 (new update)

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
        <TopBar />
        <header className={`sticky top-0 z-50 transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
          <Navbar />
        </header>

        <main className="grow">
<<<<<<< HEAD
          <ScrollToTop>
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
          </ScrollToTop>
=======
          <Routes>
            {/* Home Page */}
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <About />
                <Testimonials />
                <Contact />
              </>
            } />

            {/* Services Pages */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/ship-repair" element={<ShipRepair />} />
            <Route path="/services/dry-docking" element={<DryDocking />} />
            <Route path="/services/marine-electrical" element={<MarineElectrical />} />
            <Route path="/services/marine-automation" element={<MarineAutomation />} />
            <Route path="/services/harbor-services" element={<HarborServices />} />
            <Route path="/services/port-agency" element={<PortAgency />} />

            {/* Other Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/serviceMain" element={<ServicesMain />} />
            <Route path="/contactus" element={<ContactMain />} />
            <Route path="/OurReach" element={<OurReach />} />
            <Route path="/enquiry" element={<Enquiry />} />

            {/* Admin Pages */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/project-uploads" element={<ProjectUpload />} />

            {/* Project Gallery & Detail Pages */}
            <Route path="/gallery" element={<ProjectGallery />} />          {/* Public gallery */}
            <Route path="/gallery/:id" element={<ProjectDetail />} />       {/* Project details */}
          </Routes>
>>>>>>> 9f14e13 (new update)
        </main>

        <Footer />
    </Router>
  );
}

export default App;
