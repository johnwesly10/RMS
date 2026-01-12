import { Phone, Mail, ClipboardList } from "lucide-react";

const Enquiry = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Service Enquiry
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or need a quotation? Fill out the enquiry form
            below and our team will get back to you shortly.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2
                           focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company / Organization
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full border border-gray-300 rounded-md px-4 py-2
                           focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2
                           focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <input
                type="number"
                placeholder="+91 XXXXX XXXXX"
                className="w-full border border-gray-300 rounded-md px-4 py-2
                           focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            {/* Service Type */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service Interested In
              </label>
              <select
                className="w-full border border-gray-300 rounded-md px-4 py-2
                           focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="">Select a service</option>
                <option>Technical Management</option>
                <option>Ship Repair & Dry Dock</option>
                <option>Marine Propulsion Systems</option>
                <option>Coastal Cargo Operations</option>
                <option>Yacht Operations</option>
                <option>Certification & Port Services</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enquiry Details
              </label>
              <textarea
                rows="5"
                placeholder="Please describe your requirement..."
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2
                           focus:ring-2 focus:ring-blue-600 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold
                           px-10 py-3 rounded-md transition"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Phone className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-gray-700 font-medium">Call Us</p>
            <p className="text-gray-600">+91 99999 99999</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Mail className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-gray-700 font-medium">Email</p>
            <p className="text-gray-600">info@yourmarineservices.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <ClipboardList className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-gray-700 font-medium">Quick Response</p>
            <p className="text-gray-600">Within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
