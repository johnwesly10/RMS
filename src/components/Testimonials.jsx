import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "Fleet Manager, Oceanic Shipping",
    content: "Rehoboth Marine has been our trusted partner for over 5 years. Their technical expertise and quick response times are unmatched in the industry.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Operations Director, Blue Water Yachts",
    content: "The team's attention to detail and commitment to quality is exceptional. They've helped us maintain our fleet in top condition.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO, Pacific Marine Services",
    content: "Professional, reliable, and always available when we need them. Their 24/7 support has been invaluable to our operations.",
    rating: 5
  }
];

const Testimonials = () => {
  const renderStars = (count) => {
    return Array(count).fill(0).map((_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from our satisfied clients about their experience with our services.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
