import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="relative py-32 flex flex-col items-center justify-center bg-gradient-to-r from-teal-900 to-slate-800 text-white text-center px-6 overflow-hidden">
  {/* Overlay effect for depth */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* Content */}
  <motion.div
    className="relative z-10 max-w-4xl mx-auto"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <p className="text-6xl md:text-6xl font-extrabold mb-4 tracking-tight py-5">
      About Us
    </p>
    <p className="text-lg md:text-xl text-gray-200 leading-relaxed px-10">
      With over three decades of excellence in metal fabrication, we've
      established ourselves as a premier manufacturer specializing in
      precision industrial components and custom solutions.
    </p>
  </motion.div>
</section>
      

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                alt="Factory Overview"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
            <motion.div
              className="md:text-left text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
             <p className="text-4xl font-extrabold mb-6 !text-blue-900">OUR STORY</p>

              <p className="text-xl text-gray-800 mb-4 text-justify leading-relaxed py-6">
               A R industries is part of company run by industrialist & entrepreneur Mr.Umesh Patil who has interest in construction & now in  fabrication industry
A R industries is located in KIADB industrial area in Gauribidanur adjacent to National Highway
It has close proximity to many industries, construction equipment companies &  peripheral ring road

              </p>
              <p className="text-xl text-gray-800 mb-6 text-justify leading-relaxed">
                Today, we operate state-of-the-art facilities equipped with
                cutting-edge technology, including CNC plasma cutting machines,
                overhead cranes, automated welding stations, and advanced paint
                booths.
              </p>
              <p></p>
              <div className="grid grid-cols-2 gap-4">
  <div className="text-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
    <i className="fas fa-award text-3xl text-blue-600 mb-2"></i>
    <div className="font-bold text-gray-800 hover:text-teal-600">ISO Certified</div>
  </div>
  <div className="text-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
    <i className="fas fa-shield-alt text-3xl text-blue-600 mb-2"></i>
    <div className="font-bold text-gray-800 hover:text-teal-600">Safety First</div>
  </div>
</div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div class="text-center mb-16">
  <p class="text-4xl  font-black mb-6 !text-blue-900 py-5">Our Vision & Mission</p>
  <p class="text-lg md:text-xl text-black leading-relaxed">
    Driving innovation and excellence in industrial manufacturing
    through commitment to quality and customer satisfaction.
  </p>
</div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <i className="fas fa-eye text-4xl text-blue-600 mb-4"></i>
                <h3 className="text-2xl font-bold !text-blue-800">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 text-justify leading-relaxed">
                To be the premier choice for innovative metal fabrication
                solutions globally, setting industry standards for quality,
                reliability, and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <i className="fas fa-bullseye text-4xl text-blue-600 mb-4"></i>
                <h3 className="text-2xl font-bold !text-blue-800">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 text-justify leading-relaxed">
                Delivering exceptional quality products through advanced
                manufacturing techniques, continuous innovation, and unwavering
                commitment to customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <Timeline />

      {/* ... Leadership & Values Sections stay the same (you can also wrap them in motion.div for smooth fade-ins) ... */}
    </div>
  );
};

export default AboutUs;
