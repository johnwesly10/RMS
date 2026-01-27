import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import companyLogo from "../assets/company-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/serviceMain" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "/contact" },
    { name: "Our Reach", href: "/ourReach" },
  ];

  const services = [
    { name: "Ship Repair", href: "/services/ship-repair" },
    { name: "Dry Docking", href: "/services/dry-docking" },
    { name: "Marine Electrical", href: "/services/marine-electrical" },
    { name: "Marine Automation", href: "/services/marine-automation" },
    { name: "Harbor Services", href: "/services/harbor-services" },
    { name: "Port Agency", href: "/services/port-agency" },
  ];

  return (
    // FULL WIDTH BACKGROUND (FIX)
    <footer className="bg-gray-900 text-gray-300">
      {/* CONTENT WRAPPER */}
      <div className="pt-12 sm:pt-14 lg:pt-16 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

            {/* Company Info */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <img
                    src={companyLogo}
                    alt="Rehoboth Marine Logo"
                    className="h-10 w-auto sm:h-12 lg:h-14 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Rehoboth Marine</h3>
                  <p className="text-sm text-gray-400">Equipment & Services</p>
                </div>
              </div>

              <p className="mb-6 text-gray-400 text-sm leading-relaxed">
                Providing top-tier marine equipment services with a commitment to excellence,
                safety, and customer satisfaction.
              </p>

              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <li key={i}>
                    <Link to={service.href} className="text-gray-400 hover:text-white transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start">
                  <MapPin className="mr-3 mt-1 text-blue-400" size={18} />
                  <span>
                    No.518, Sony building, Jumbo Electronics above,<br />
                    Near Asharaf DG metro station, Bur Dubai,<br />
                    United Arab Emirates
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 text-blue-400" size={18} />
                  +971 50 762 5477
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 text-blue-400" size={18} />
                  suthan@rehobothmarine.ae
                </li>
                <li className="flex items-center">
                  <Clock className="mr-3 text-blue-400" size={18} />
                  Mon - Sat: 8:00 AM - 6:00 PM
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 text-center sm:text-left">
              © {currentYear} Rehoboth Marine. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-3 sm:mt-0 text-sm text-gray-500">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
