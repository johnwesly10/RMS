import { Wrench, Anchor, Zap, Settings, Ship, Briefcase } from "lucide-react";

const services = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Ship Repair",
    description: "Comprehensive repair and maintenance services for all types of vessels, ensuring safety and reliability at sea.",
  },
  {
    icon: <Anchor className="w-8 h-8" />,
    title: "Dry Docking",
    description: "Professional dry docking services including hull cleaning, painting, and underwater repairs.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Marine Electrical",
    description: "Expert installation and maintenance of marine electrical systems and navigation equipment.",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Marine Automation",
    description: "Advanced automation solutions for modern vessels to enhance operational efficiency.",
  },
  {
    icon: <Ship className="w-8 h-8" />,
    title: "Harbor Services",
    description: "Comprehensive harbor support including berthing, mooring, and cargo handling.",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Port Agency",
    description: "Efficient port agency services ensuring smooth operations and regulatory compliance.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">What We Offer</span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Marine Services
          </h2>
          <div className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive solutions for all your maritime needs
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
            >
              <div className="absolute -top-6 left-6 w-14 h-14 rounded-lg bg-[#C9A24D] text-white flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                {service.icon}
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
