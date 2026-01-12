import { MapPin, Ship, Globe, Anchor } from "lucide-react";

const stats = [
  {
    icon: <Globe className="w-10 h-10 text-blue-600" />,
    value: "20+",
    label: "Ports Covered",
  },
  {
    icon: <Ship className="w-10 h-10 text-blue-600" />,
    value: "100+",
    label: "Vessels Served",
  },
  {
    icon: <Anchor className="w-10 h-10 text-blue-600" />,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: <MapPin className="w-10 h-10 text-blue-600" />,
    value: "5+",
    label: "Regions Served",
  },
];

const regions = [
  "Chennai Port",
  "Mumbai Port",
  "Kochi Port",
  "Visakhapatnam Port",
  "Tuticorin Port",
  "Kandla Port",
  "Paradip Port",
];

const OurReach = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Reach
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our operations extend across key maritime regions and ports,
            enabling us to deliver reliable marine services wherever our
            clients operate.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-3xl font-bold text-gray-900">
                {item.value}
              </h3>
              <p className="text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Regions */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Major Ports & Regions Served
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {regions.map((region, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-gray-700"
              >
                <MapPin className="w-5 h-5 text-blue-600" />
                {region}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurReach;
