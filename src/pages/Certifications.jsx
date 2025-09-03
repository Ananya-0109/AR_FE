import React from 'react';
import CertificationCard from '../components/CertificationCard';
import { certificationsData } from '../assets/data/certificationsData';

const Certifications = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Certifications & Quality Standards</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our commitment to excellence is demonstrated through rigorous quality standards and industry certifications that ensure reliable, high-quality products.
          </p>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.8%</div>
              <div className="text-gray-600">Quality Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">8+</div>
              <div className="text-gray-600">Certifications</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-600 mb-2">30+</div>
              <div className="text-gray-600">Years Certified</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Inspection Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-recognized certifications that validate our commitment to quality, safety, and environmental responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificationsData.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Management System */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Quality Management System</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive QMS ensures consistent quality from raw materials to final delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-center mb-4">
                <i className="fas fa-clipboard-check text-4xl text-blue-600 mb-3"></i>
                <h3 className="text-xl font-bold">Incoming Inspection</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Material certification verification</li>
                <li>• Dimensional checking of raw materials</li>
                <li>• Chemical composition analysis</li>
                <li>• Supplier audit compliance</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-center mb-4">
                <i className="fas fa-cogs text-4xl text-green-600 mb-3"></i>
                <h3 className="text-xl font-bold">In-Process Control</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Real-time process monitoring</li>
                <li>• Statistical process control</li>
                <li>• Work instruction compliance</li>
                <li>• Operator certification verification</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-center mb-4">
                <i className="fas fa-search text-4xl text-amber-600 mb-3"></i>
                <h3 className="text-xl font-bold">Final Inspection</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Dimensional accuracy verification</li>
                <li>• Surface finish inspection</li>
                <li>• Functional testing protocols</li>
                <li>• Documentation compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Testing & Inspection Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced testing equipment and methods to ensure product integrity and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <i className="fas fa-microscope text-blue-600 mr-3"></i>
                Non-Destructive Testing
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span>Ultrasonic Testing (UT)</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span>Magnetic Particle Testing (MT)</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span>Dye Penetrant Testing (PT)</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span>Radiographic Testing (RT)</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <i className="fas fa-ruler-combined text-green-600 mr-3"></i>
                Dimensional Inspection
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span>Coordinate Measuring Machine (CMM)</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span>Optical Comparators</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span>Surface Roughness Testing</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span>Hardness Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industry Standards Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We adhere to the highest industry standards and regulatory requirements across all sectors we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <i className="fas fa-building text-3xl text-blue-600 mb-4"></i>
              <h3 className="text-lg font-bold mb-2">Construction</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>AISC Standards</div>
                <div>AWS D1.1 Welding</div>
                <div>ASTM Materials</div>
              </div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <i className="fas fa-car text-3xl text-green-600 mb-4"></i>
              <h3 className="text-lg font-bold mb-2">Automotive</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>TS 16949</div>
                <div>PPAP Requirements</div>
                <div>FMEA Standards</div>
              </div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <i className="fas fa-plane text-3xl text-amber-600 mb-4"></i>
              <h3 className="text-lg font-bold mb-2">Aerospace</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>AS9100 Ready</div>
                <div>NADCAP Approval</div>
                <div>Military Standards</div>
              </div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <i className="fas fa-leaf text-3xl text-purple-600 mb-4"></i>
              <h3 className="text-lg font-bold mb-2">Environmental</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>ISO 14001</div>
                <div>RoHS Compliance</div>
                <div>REACH Regulation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Continuous Improvement</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're committed to ongoing enhancement of our processes, systems, and capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Performance Monitoring</h3>
              <p className="text-gray-300">
                Regular audits and performance reviews to maintain the highest standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-graduation-cap text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Training Programs</h3>
              <p className="text-gray-300">
                Ongoing employee development and certification programs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation Investment</h3>
              <p className="text-gray-300">
                Continuous investment in new technologies and process improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Quality You Can Trust</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with a manufacturer who takes quality seriously. Request our quality manual and certification documents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              <i className="fas fa-download mr-2"></i>
              Request Quality Manual
            </a>
            <a
              href="tel:+1-555-123-4567"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition duration-300"
            >
              <i className="fas fa-phone mr-2"></i>
              Speak with QA Manager
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;