import React from "react";

const Certifications = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-32 flex flex-col items-center justify-center bg-gradient-to-r from-teal-900 to-slate-800 text-white text-center px-6 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <p className="text-5xl font-bold mb-4">Certifications</p>
          <p className="text-lg max-w-3xl mx-auto">
            Our certifications reflect our commitment to quality, safety, and
            compliance with international standards.
          </p>
        </div>
      </section>

      {/* ISO Certification */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-3xl font-bold text-blue-900 mb-4">
              ISO Certification
            </p>
            <p className="text-gray-700 mb-4">
              We are ISO 9001:2015 certified, ensuring our quality management
              system meets global standards. This certification highlights our
              focus on customer satisfaction, process improvement, and
              efficiency.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Standardized processes</li>
              <li>Continuous improvement</li>
              <li>Customer satisfaction</li>
            </ul>
          </div>
          <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg shadow">
            <span className="text-gray-500">[ISO Certificate Image Here]</span>
          </div>
        </div>
      </section>

      {/* Factory License */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg shadow">
            <span className="text-gray-500">
              [Factory License Certificate Image Here]
            </span>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-900 mb-4">
              Factory License
            </p>
            <p className="text-gray-700">
              Our factory is licensed by regulatory authorities, ensuring full
              compliance with local laws and operational safety standards.
              This allows us to maintain transparent and reliable operations.
            </p>
          </div>
        </div>
      </section>

      {/* QA & Safety */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <p className="text-3xl font-bold text-blue-900 mb-6">
            Quality Assurance & Safety Standards
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            We prioritize quality and safety across all our processes. Our
            dedicated quality team ensures every product undergoes rigorous
            testing and inspection before delivery.
          </p>
          <div className="grid md:grid-cols-3 gap-8 py-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <i className="fas fa-shield-alt text-blue-600 text-3xl mb-4"></i>
              <p className="text-xl text-blue-900 font-bold mb-2">Strict QA Process</p>
              <p className="text-gray-600">
                Every product goes through stringent quality checks.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <i className="fas fa-user-check text-green-600 text-3xl mb-4"></i>
              <p className="text-xl text-blue-900 font-bold mb-2">Dedicated Safety</p>
              <p className="text-gray-600">
                Safety-first approach for our employees and products.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <i className="fas fa-certificate text-amber-600 text-3xl mb-4"></i>
              <p className="text-xl font-bold  text-blue-900 mb-2">International Standards</p>
              <p className="text-gray-600">
                Compliance with global safety and QA benchmarks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
