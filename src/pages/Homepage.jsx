import React from 'react';
import { Link } from 'react-router-dom';
import { FaCogs, FaShieldAlt, FaClock, FaUsers, FaHammer, FaHeadset } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import StatsCounter from '../components/StatsCounter';
import ClientLogos from '../components/ClientLogos';

const Homepage = () => {
  // A consistent color palette for the entire page
  const primaryColor = 'teal'; 
  const primaryColorDark = 'teal-600';
  const primaryColorLight = 'teal-100';
  const headingColor = 'gray-800';

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsCounter />

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Features Overview */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center text-center mb-12">
      <p className="text-4xl font-black text-gray-800 mb-4 tracking-tight leading-tight">
        Why Choose Us?
      </p>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mt-4">
        We are growing dynamic organisation always ready to serve.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Precision Manufacturing Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer group">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-blue-600">
            <FaCogs className="text-2xl text-blue-800 transition-all duration-300 group-hover:text-white" />
          </div>
          <p className="text-xl font-bold mb-4 text-gray-800 transition-all duration-300 group-hover:text-blue-500">Precision Manufacturing</p>
          <p className="text-gray-700">
            State-of-the-art CNC equipment and quality control processes ensure precision in every component we manufacture.
          </p>
        </div>
      </div>

      {/* Quality Assured Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer group">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-green-600">
            <FaShieldAlt className="text-2xl text-green-800 transition-all duration-300 group-hover:text-white" />
          </div>
          <p className="text-xl font-bold mb-4 text-gray-800 transition-all duration-300 group-hover:text-green-600">Quality Assured</p>
          <p className="text-gray-700">
            ISO 9001:2015 certified with rigorous quality management systems and third-party inspections.
          </p>
        </div>
      </div>

      {/* On-Time Delivery Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer group">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-amber-600">
            <FaClock className="text-2xl text-amber-800 transition-all duration-300 group-hover:text-white" />
          </div>
          <p className="text-xl font-bold mb-4 text-gray-800 transition-all duration-300 group-hover:text-amber-600">On-Time Delivery</p>
          <p className="text-gray-700">
            Efficient project management and streamlined workflows ensure your projects are completed on schedule.
          </p>
        </div>
      </div>

      {/* Expert Team Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer group">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-purple-600">
            <FaUsers className="text-2xl text-purple-800 transition-all duration-300 group-hover:text-white" />
          </div>
          <p className="text-xl font-bold mb-4 text-gray-800 transition-all duration-300 group-hover:text-purple-600">Expert Team</p>
          <p className="text-gray-700">
            Skilled engineers and certified welders with decades of combined experience in metal fabrication.
          </p>
        </div>
      </div>

      {/* Custom Solutions Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer group">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-red-600">
            <FaHammer className="text-2xl text-red-800 transition-all duration-300 group-hover:text-white" />
          </div>
          <p className="text-xl font-bold mb-4 text-gray-800 transition-all duration-300 group-hover:text-red-600">Custom Solutions</p>
          <p className="text-gray-700">
            Tailored fabrication solutions designed to meet your specific requirements and industry standards.
          </p>
        </div>
      </div>

      {/* 24/7 Support Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer group">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-indigo-600">
            <FaHeadset className="text-2xl text-indigo-800 transition-all duration-300 group-hover:text-white" />
          </div>
          <p className="text-xl font-bold mb-4 text-gray-800 transition-all duration-300 group-hover:text-indigo-500">24/7 Support</p>
          <p className="text-gray-700">
            Round-the-clock customer support and emergency services for critical manufacturing needs.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>












Canvas


      {/* Quick Links Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className={`text-4xl !text-black font-extrabold text-${headingColor} mb-4`}>
              Explore Our Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
             Feel the difference,expertise and on time delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/factory" className="group">
              <div className="bg-white p-8 rounded-xl hover:shadow-lg transition duration-300 group-hover:scale-105">
                <i className={`fas fa-industry text-4xl text-${primaryColorDark} mb-4`}></i>
                <h3 className="text-xl font-bold mb-2 !text-gray-800">Factory & Equipment</h3>
                <p className="text-gray-600 mb-4">
                  Tour our state-of-the-art facility and advanced manufacturing equipment.
                </p>
                <span className={`text-${primaryColorDark} font-semibold group-hover:translate-x-2 inline-block transition duration-300`}>
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </span>
              </div>
            </Link>

            <Link to="/products" className="group">
              <div className="bg-white p-8 rounded-xl hover:shadow-lg transition duration-300 group-hover:scale-105">
                <i className={`fas fa-boxes text-4xl text-${primaryColorDark} mb-4`}></i>
                <h3 className="text-xl font-bold mb-2 !text-gray-800">Products & Components</h3>
                <p className="text-gray-600 mb-4">
                  Explore our capabilities of producing our industrial components and custom products.
                </p>
                <span className={`text-${primaryColorDark} font-semibold group-hover:translate-x-2 inline-block transition duration-300`}>
                  View Products <i className="fas fa-arrow-right ml-2"></i>
                </span>
              </div>
            </Link>

            <Link to="/certifications" className="group">
              <div className="bg-white p-8 rounded-xl hover:shadow-lg transition duration-300 group-hover:scale-105">
                <i className={`fas fa-certificate text-4xl text-${primaryColorDark} mb-4`}></i>
                <h3 className="text-xl font-bold mb-2 !text-gray-800">Quality Certifications</h3>
                <p className="text-gray-600 mb-4">
                  View our industry certifications and quality manufacturing standards.
                </p>
                <span className={`text-${primaryColorDark} font-semibold group-hover:translate-x-2 inline-block transition duration-300`}>
                  View Certifications <i className="fas fa-arrow-right ml-2"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
<section className="py-20 bg-gray-900 text-white">
  <div className="container mx-auto px-4 flex flex-col items-center text-center">
    <h2 className="text-4xl font-extrabold mb-8">Ready to Start Your Project?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto mt-2">
      Get in touch with our team today to discuss your manufacturing needs and receive a personalized quote.
    </p>
    {/* Button Container with Flexbox */}
    <div className="flex gap-6 justify-center mt-6">
      <Link
        to="/contact"
        className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-900"
      >
        <i className="fas fa-envelope mr-2"></i>
        Get A Quote
      </Link>
      <a
        href="tel:+1-555-123-4567"
        className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-900"
      >
        <i className="fas fa-phone mr-2"></i>
        Call Now
      </a>
    </div>
  </div>
</section>
    </div>
  );
};

export default Homepage;