import {
  Settings,
  Ship,
  Wrench,
  Anchor,
  Zap,
  Briefcase,
  MapPin,
  Navigation
} from "lucide-react";

import { Link } from "react-router-dom";

const services = [
  {
    icon: <Wrench className="w-10 h-10 text-blue-600" />,
    title: "Ships & Boats Repair",
    description:
      "Expert repair and maintenance services for all types of vessels, ensuring peak performance and safety at sea with our certified technicians.",
    link: "/services/ship-repair",
  },
  {
    icon: <Ship className="w-10 h-10 text-blue-600" />,
    title: "Dry Docking Services",
    description:
      "Comprehensive dry docking solutions with state-of-the-art facilities and experienced teams for all your maintenance needs.",
    link: "/services/dry-docking",
  },
  {
    icon: <Zap className="w-10 h-10 text-blue-600" />,
    title: "Marine Electrical Systems",
    description:
      "Professional installation, maintenance, and repair of marine electrical systems for yachts and commercial vessels.",
    link: "/services/marine-electrical",
  },
  {
    icon: <Settings className="w-10 h-10 text-blue-600" />,
    title: "Marine Automation",
    description:
      "Advanced automation solutions for modern vessels, enhancing safety, efficiency, and operational performance.",
    link: "/services/marine-automation",
  },
  {
    icon: <Anchor className="w-10 h-10 text-blue-600" />,
    title: "Harbor & Marina Services",
    description:
      "Comprehensive harbor and marina support including maintenance, security, and operational services for smooth maritime activities.",
    link: "/services/harbor-services",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    title: "Port Agency Services",
    description:
      "Efficient port agency services ensuring smooth operations and compliance with all port regulations and requirements.",
    link: "/services/port-agency"
  }
];

const locations = [
  {
    name: "Dubai Maritime City",
    description: "State-of-the-art maritime facility offering comprehensive ship repair and maintenance services.",
    icon: <MapPin className="w-6 h-6 text-blue-600" />
  },
  {
    name: "Port Rashid",
    description: "Premier port location providing top-tier marine services and facilities for commercial vessels.",
    icon: <Navigation className="w-6 h-6 text-blue-600" />
  },
  {
    name: "Dubai Marina",
    description: "Luxury yachting hub with premium services for private yachts and marine vessels.",
    icon: <Anchor className="w-6 h-6 text-blue-600" />
  },
  {
    name: "Dubai Marina & Harbors",
    description: "Comprehensive marine services for both commercial and recreational vessels in Dubai's premier harbors.",
    icon: <Ship className="w-6 h-6 text-blue-600" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Services Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium mb-2 block">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Marine Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Delivering excellence in maritime services with cutting-edge technology and expert teams across Dubai's key marine locations.
          </p>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-white p-8 rounded-xl shadow-lg text-center
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-100"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              <span className="inline-block mt-4 text-blue-600 font-medium text-sm">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        {/* Locations Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-medium mb-2 block">OUR LOCATIONS</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Strategic Marine Hubs in Dubai
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Serving clients across Dubai's premier maritime locations with convenient access and world-class facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  {location.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{location.name}</h3>
                <p className="text-gray-600 text-sm">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
