import React, { useEffect, useState } from 'react';

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(true);

  const clientLogos = [
    { name: 'ConstructCorp', icon: 'fas fa-building' },
    { name: 'ManuTech', icon: 'fas fa-industry' },
    { name: 'Heavy Equipment Co', icon: 'fas fa-truck' },
    { name: 'Energy Solutions', icon: 'fas fa-bolt' },
    { name: 'Marine Works', icon: 'fas fa-ship' },
    { name: 'Transport Systems', icon: 'fas fa-train' },
    { name: 'AgriTech', icon: 'fas fa-tractor' },
    { name: 'Global Logistics', icon: 'fas fa-warehouse' },
    { name: 'Steel Works Inc', icon: 'fas fa-hammer' },
    { name: 'Precision Parts', icon: 'fas fa-cog' },
    { name: 'Industrial Solutions', icon: 'fas fa-tools' },
    { name: 'Manufacturing Plus', icon: 'fas fa-wrench' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 100);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-10">
        <div className="flex flex-col items-center text-center py-12">
  <h2 className="text-3xl font-extrabold !text-gray-900 mb-4">
    Trusted by Industry Leaders
  </h2>
  <p className="text-lg text-gray-700 max-w-2xl mx-auto">
    We've built lasting partnerships with companies across diverse industries who trust us with their critical manufacturing needs.
  </p>
</div>
        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Logos Container */}
          <div className={`flex space-x-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-70'}`}>
            {/* First Set */}
            <div className="flex space-x-8 animate-scroll">
              {clientLogos.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 min-w-[200px]"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className={`${client.icon} text-xl text-gray-600`}></i>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">{client.name}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Duplicate Set for Seamless Loop */}
            <div className="flex space-x-8 animate-scroll">
              {clientLogos.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 min-w-[200px]"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className={`${client.icon} text-xl text-gray-600`}></i>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">{client.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Active Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">15</div>
            <div className="text-gray-600">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Client Retention</div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;