import { CheckCircle, Users, Award, Clock, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Expert Team",
    description: "Our certified technicians have decades of combined experience in marine engineering."
  },
  {
    icon: <Award className="w-6 h-6 text-blue-600" />,
    title: "Certified Excellence",
    description: "ISO-certified services meeting international quality and safety standards."
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: "24/7 Support",
    description: "Round-the-clock emergency services to keep your operations running smoothly."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1591601677064-6fb2c9d4e1d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Marine equipment and team"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg w-3/4">
                <h3 className="text-2xl font-bold mb-2">15+</h3>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Leading Marine Equipment Solutions</h2>
            <p className="text-gray-600 mb-8">
              At Rehoboth Marine, we pride ourselves on delivering exceptional marine equipment services with a commitment to quality, safety, and customer satisfaction. Our team of experts is dedicated to providing innovative solutions tailored to your specific needs.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md flex items-center transition-colors">
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
