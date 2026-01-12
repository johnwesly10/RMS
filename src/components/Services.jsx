import { Anchor, Settings, Shield, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Settings className="w-10 h-10 text-blue-600" />,
    title: "Engine Maintenance",
    description:
      "Comprehensive maintenance services to keep your marine engines running at peak performance.",
    link: "/services/engine-maintenance",
  },
  {
    icon: <Wrench className="w-10 h-10 text-blue-600" />,
    title: "Repair Services",
    description:
      "Expert repair solutions for all types of marine equipment and systems.",
    link: "/services/repairs",
  },
  {
    icon: <Shield className="w-10 h-10 text-blue-600" />,
    title: "Safety Inspections",
    description:
      "Thorough safety inspections to ensure compliance with maritime regulations.",
    link: "/services/safety",
  },
  {
    icon: <Anchor className="w-10 h-10 text-blue-600" />,
    title: "Docking Services",
    description:
      "Complete docking solutions including hull cleaning, painting, and maintenance.",
    link: "/services/docking",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="bg-white p-8 rounded-lg shadow-md text-center
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>

              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
