import aboutImage from "../assets/ship-aboutus.png";
import { Users, Award, Clock, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Delivering excellence in marine services with a commitment to quality, safety, and customer satisfaction.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src={aboutImage}
                alt="Marine services at Rehoboth Marine"
                className="rounded-lg shadow-xl w-full h-auto"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg w-3/4">
                <h3 className="text-2xl font-bold mb-2">15+</h3>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
    Leading Marine Solutions Provider
  </h2>

  <p className="text-gray-600 mb-6">
    At <b>Rehoboth Marine Services LLC</b>, we are a trusted provider of end-to-end marine and offshore solutions,
    delivering reliable, efficient, and cost-effective services to ship owners, operators, and port authorities.
    Our expertise spans ship repair and maintenance, dry docking, marine electrical systems, automation,
    harbor support, and port agency services. We are driven by a commitment to operational excellence,
    safety, and long-term client partnerships.
  </p>

  <p className="text-gray-600 mb-6">
    With a deep understanding of the maritime industry’s evolving needs, we combine advanced technology
    with skilled craftsmanship to ensure vessels operate at peak performance. From routine maintenance
    to complex technical projects, our team ensures timely delivery without compromising quality.
  </p>

  <p className="text-gray-600 mb-8">
    Our certified professionals bring decades of hands-on experience and operate in full compliance
    with international maritime standards. Backed by ISO-certified processes and a strong safety culture,
    Rehoboth Marine is dedicated to keeping your fleet seaworthy, efficient, and future-ready.
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default About;