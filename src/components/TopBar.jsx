import { Phone, Mail, Clock, Twitter, Facebook, Instagram } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-blue-900 text-white py-2 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-300" />
            <span>Call us: 00971553995722</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-300" />
            <span>Email us: rehobothmarine@gmail.com</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-300" />
            <span>Opening Hours: Mon - Sat: 8am - 6pm</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a href="#" className="text-white hover:text-blue-300 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-blue-300 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-blue-300 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
