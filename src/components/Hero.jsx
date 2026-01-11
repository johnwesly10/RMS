import { Check, ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-shipyard.jpg";

const features = [
  "Advanced Maintenance Programs",
  "ISO-Certified Testing & Inspection",
  "Precision in Every Operation",
];

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Marine equipment and boats"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Innovating Engine
            <br />
            <span className="text-blue-300">Performance</span> & Reliability
          </h1>

          <div className="space-y-4 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-900 hover:bg-gray-100 font-medium px-8 py-3 rounded-md flex items-center justify-center transition-colors">
              Our Services <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md flex items-center justify-center transition-colors border border-white/20">
              Contact us <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4">
        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
          ←
        </button>
        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
          →
        </button>
      </div>

      {/* Bottom Services */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="text-center text-white">
              <h3 className="text-lg font-medium">Technical Services</h3>
              <p className="text-sm text-blue-100">Expert solutions for your marine needs</p>
            </div>
            <div className="text-center text-white">
              <h3 className="text-lg font-medium">Onboard Services</h3>
              <p className="text-sm text-blue-100">Comprehensive care while you're at sea</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
