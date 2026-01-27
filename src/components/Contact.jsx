import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We'll get back to you soon!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-14 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Get In Touch</h2>
          <div className="w-16 h-1 sm:w-20 bg-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Have questions or need a quote? Contact us today and our team will get back to you as soon as possible.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-5 sm:p-6 lg:p-8 rounded-lg shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-md transition-colors flex items-center justify-center text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900">Contact Information</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Feel free to reach out to us for any inquiries or to schedule a consultation with our team of experts.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Our Location</h4>
                  <p className="text-sm sm:text-base text-gray-600">No.518, Sony building, Jumbo Electronics above,<br />Near Asharaf DG metro station, Bur Dubai,<br />United Arab Emirates</p>
                  <a
                    href="https://maps.google.com/maps?q=No.%20518%2C%20Sony%20building%2C%20Jumbo%20Electronics%20above%2C%20Near%20Asharaf%20DG%20metro%20station%2C%20Bur%20Dubai%2C%20United%20Arab%20Emirates+(Rehoboth%20Marine)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    Open in Google Maps
                    <ArrowUpRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Phone Number</h4>
                  <p className="text-sm sm:text-base text-gray-600">+971 50 762 5477</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Email Address</h4>
                  <p className="text-sm sm:text-base text-gray-600">suthan@rehobothmarine.ae</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Working Hours</h4>
                  <p className="text-sm sm:text-base text-gray-600">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm sm:text-base text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
