import React from 'react';

const IndustryCards = () => {
  const industries = [
    {
      id: 1,
      name: "Construction",
      description: "Structural steel, building components, and construction hardware for commercial and residential projects.",
      icon: "fas fa-building",
      projects: "500+",
      specialties: ["Structural Steel", "Building Frames", "Construction Hardware", "Architectural Elements"]
    },
    {
      id: 2,
      name: "Manufacturing",
      description: "Custom components and assemblies for manufacturing operations, machinery, and production equipment.",
      icon: "fas fa-industry",
      projects: "300+",
      specialties: ["Machine Components", "Production Line Parts", "Custom Assemblies", "Precision Parts"]
    },
    {
      id: 3,
      name: "Transportation",
      description: "Heavy-duty components for trucks, trailers, rail systems, and transportation infrastructure.",
      icon: "fas fa-truck",
      projects: "250+",
      specialties: ["Vehicle Components", "Trailer Parts", "Rail Systems", "Infrastructure"]
    },
    {
      id: 4,
      name: "Energy",
      description: "Equipment and components for power generation, renewable energy, and utility infrastructure.",
      icon: "fas fa-bolt",
      projects: "150+",
      specialties: ["Power Equipment", "Renewable Energy", "Utility Components", "Grid Infrastructure"]
    },
    {
      id: 5,
      name: "Agriculture",
      description: "Farm equipment components, storage solutions, and agricultural machinery parts.",
      icon: "fas fa-tractor",
      projects: "200+",
      specialties: ["Farm Equipment", "Storage Systems", "Machinery Parts", "Processing Equipment"]
    },
    {
      id: 6,
      name: "Marine",
      description: "Marine-grade fabrication for shipbuilding, offshore platforms, and maritime infrastructure.",
      icon: "fas fa-ship",
      projects: "100+",
      specialties: ["Ship Components", "Offshore Structures", "Marine Hardware", "Port Equipment"]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {industries.map((industry) => (
        <div
          key={industry.id}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
        >
          {/* Industry Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
              <i className={`${industry.icon} text-2xl text-blue-600 group-hover:text-blue-700 transition-colors duration-300`}></i>
            </div>
            <p className="text-xl font-bold text-gray-900 mb-2">{industry.name}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
          </div>

          {/* Projects Count */}
          <div className="text-center mb-6">
            <div className="text-2xl font-bold text-blue-600 mb-1">{industry.projects}</div>
            <div className="text-sm text-gray-500">Projects Completed</div>
          </div>

          {/* Specialties */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-900 mb-3">Our Specialties:</p>
            <div className="flex flex-wrap gap-2">
              {industry.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 group-hover:bg-blue-100 text-gray-700 group-hover:text-blue-800 text-xs rounded-full transition-colors duration-300"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Learn More Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
            <i className="fas fa-arrow-right mr-2"></i>
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
};

export default IndustryCards;