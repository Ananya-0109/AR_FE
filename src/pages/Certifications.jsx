import React from "react";

const Certifications = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
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
      <section className="py-16">
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
    </div>
  );
};

export default Certifications;
