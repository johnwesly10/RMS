import {
  Settings,
  Truck,
  Ship,
  BatteryCharging,
  Coffee,
  FileCheck
} from "lucide-react";

import { Link } from "react-router-dom";

const services = [
  {
    icon: <Settings className="w-10 h-10 text-blue-600" />,
    title: "Technical Management & Manning",
    description:
      "Comprehensive ship maintenance, crew management, and technical operations to ensure optimal vessel performance and safety compliance.",
    link: "/services/technical-management",
  },
  {
    icon: <Truck className="w-10 h-10 text-blue-600" />,
    title: "Coastal Cargo Operations",
    description:
      "Efficient coastal transportation with our dedicated fleet serving major ports with reliable and cost-effective solutions.",
    link: "/services/coastal-cargo",
  },
  {
    icon: <Ship className="w-10 h-10 text-blue-600" />,
    title: "Ship Building & Dry Docking",
    description:
      "Professional ship building and dry dock services with modern facilities, quality assurance, and experienced teams.",
    link: "/services/ship-building-dry-docking",
  },
  {
    icon: <BatteryCharging className="w-10 h-10 text-blue-600" />,
    title: "Marine Propulsion & Hybrid Systems",
    description:
      "Advanced marine propulsion battery systems and hybrid solution integration for eco-friendly maritime operations.",
    link: "/services/marine-propulsion",
  },
  {
    icon: <Coffee className="w-10 h-10 text-blue-600" />,
    title: "Floating Restaurant & Yacht Operations",
    description:
      "Luxury yacht and floating restaurant experiences with premium dining, entertainment, and event hosting services.",
    link: "/services/yacht-operations",
  },
 {
  icon: <FileCheck className="w-10 h-10 text-blue-600" />,
  title: "Certification & Port Services",
  description:
    "Streamlined digital certification and compliance services to meet international maritime standards.",
}
 

];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Professional Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A complete range of maritime services designed to meet your ship
            management, vessel operations, and marine solutions needs.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="bg-white p-8 rounded-lg shadow-md text-center
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
