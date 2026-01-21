import { Link } from 'react-router-dom';

const ServiceTemplate = ({ title, description, features, image, icon: Icon }) => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Parallax Effect */}
            <div
                className="relative h-96 bg-cover bg-center bg-fixed flex items-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image || 'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'})`
                }}
            >
                <div className="container mx-auto px-6 text-center text-white">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-600/80 backdrop-blur-sm mb-6">
                        <Icon className="w-10 h-10" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        {description}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <div className="inline-block">
                                    <span className="text-blue-600 font-medium">OUR SERVICES</span>
                                    <h2 className="text-3xl font-bold text-gray-900 mt-2">
                                        Comprehensive {title} Solutions
                                    </h2>
                                    <div className="w-16 h-1 bg-blue-600 mt-4"></div>
                                </div>

                                <p className="text-gray-600 text-lg leading-relaxed">
                                    We provide industry-leading {title.toLowerCase()} services with a focus on quality,
                                    safety, and customer satisfaction. Our experienced team is dedicated to
                                    delivering exceptional results for every project.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {features.map((feature, index) => (
                                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                            <p className="text-gray-600 text-sm">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>


                            </div>

                            <div className="relative">
                                <div className="w-full aspect-square overflow-hidden rounded-2xl">
                                    <img
                                        src={image}
                                        alt="img"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-2xl -z-10"></div>
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-100 rounded-2xl -z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceTemplate;