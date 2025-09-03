import React from 'react';
import ClientGrid from '../components/ClientGrid';
import IndustryCards from '../components/IndustryCards';
import TestimonialSlider from '../components/TestimonialSlider';

const Clients = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Clients & Industries</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We proudly serve leading companies across diverse industries, delivering quality solutions that drive success.
          </p>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans multiple sectors, providing specialized solutions for each industry's unique requirements.
            </p>
          </div>
          <IndustryCards />
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Trusted by Industry Leaders</h2>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results. See how we've helped our clients achieve their manufacturing goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <i className="fas fa-building text-3xl text-blue-600 mb-3"></i>
                <h3 className="text-xl font-bold">Construction Sector</h3>
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
                <h3 className="text-xl font-bold">Manufacturing OEM</h3>
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
                <h3 className="text-xl font-bold">Transportation</h3>
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
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued clients have to say about our services.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than a supplier - we're your strategic manufacturing partner committed to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Long-term Partnership</h3>
              <p className="text-gray-600">
                Building lasting relationships with consistent quality and reliable service delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">
                Flexible production capabilities that grow with your business needs and market demands.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation Support</h3>
              <p className="text-gray-600">
                Engineering expertise to help optimize designs and improve product performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Reliable Delivery</h3>
              <p className="text-gray-600">
                On-time delivery with transparent communication throughout the project lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  );
};

export default Clients;