import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ClientGrid from '../components/ClientGrid';
import IndustryCards from '../components/IndustryCards';
import TestimonialSlider from '../components/TestimonialSlider';

const Clients = () => {
  const location = useLocation();

  // Scroll to section if there's a hash
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const yOffset = -80; // height of fixed navbar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="relative py-32 flex flex-col items-center justify-center bg-gradient-to-r from-teal-900 to-slate-800 text-white text-center px-6 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6">Our Clients & Industries</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We proudly serve leading companies across diverse industries, delivering quality solutions that drive success.
          </p>
        </div>
      </section>

      {/* Industries Served */}
      <section id="industries" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <p className="text-4xl text-blue-900 font-bold mb-6">Industries We Serve</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto py-5">
              Our expertise spans multiple sectors, providing specialized solutions for each industry's unique requirements.
            </p>
          </div>
          <IndustryCards />
        </div>
      </section>

      {/* Client Logos */}
      <section id="clients" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 py-5">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <p className="text-4xl text-blue-900 font-bold mb-6">Trusted by Industry Leaders</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built lasting partnerships with companies who value quality, reliability, and innovation.
            </p>
          </div>
          <ClientGrid />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <p className="text-4xl text-blue-900 font-bold mb-6">Success Stories</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results. See how we've helped our clients achieve their manufacturing goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Story Cards */}
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <i className="fas fa-building text-3xl text-blue-600 mb-3"></i>
                <p className="text-xl text-blue-900 font-bold">Construction Sector</p>
              </div>
              <p className="text-gray-600 mb-4">
                Delivered 2,000+ structural components for a major infrastructure project, completing 3 weeks ahead of schedule.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-blue-600 font-semibold">Project Value: $2.5M</span>
                <span className="text-gray-500">2023</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <i className="fas fa-industry text-3xl text-green-600 mb-3"></i>
                <p className="text-xl text-blue-900 font-bold">Manufacturing OEM</p>
              </div>
              <p className="text-gray-600 mb-4">
                Developed custom production line components that increased client's manufacturing efficiency by 40%.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-green-600 font-semibold">Efficiency Gain: 40%</span>
                <span className="text-gray-500">2023</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <i className="fas fa-truck text-3xl text-amber-600 mb-3"></i>
                <p className="text-xl text-blue-900 font-bold">Transportation</p>
              </div>
              <p className="text-gray-600 mb-4">
                Manufactured specialized vehicle components that reduced maintenance costs by 30% for a major fleet operator.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-amber-600 font-semibold">Cost Reduction: 30%</span>
                <span className="text-gray-500">2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <p className="text-4xl text-blue-900 font-bold mb-6">What Our Clients Say</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued clients have to say about our services.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
};

export default Clients;
