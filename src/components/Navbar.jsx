import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import companyLogo from "../assets/company-logo.jpeg";
import companyName from "../assets/company-name.jpeg";  
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/serviceMain" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact Us", href: "/contact" },
  { name: "Our Reach", href: "/ourReach" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between  h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              {/* Logo Image */}
              <img 
                src={companyLogo}
                alt="Rehoboth Marine Logo" 
                className="h-16 w-auto object-contain"
              />
              
              {/* Company Name Image */}
              <div className="ml-6">
                <img 
                  src={companyName}
                  alt="Rehoboth Marine" 
                  className="h-16 w-auto object-contain"
                />
              </div>
               
              
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:[#F2B705]font-medium text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}

          <div className="hidden md:block">
            <Link
              to="/enquiry"
              className="bg-[#F2B705] hover:bg-[#6B3E1E] text-white font-medium px-6 py-2
               rounded-md flex items-center transition-colors"
            >
              Enquire Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#F2B705]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <button className="w-full bg-[#e1ae14] hover:bg-[#6B3E1E] text-white font-medium px-6 py-2 rounded-md flex items-center justify-center transition-colors">
                Enquire Now <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
