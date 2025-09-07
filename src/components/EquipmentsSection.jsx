import React from "react";
import {
  FaCogs,
  FaIndustry,
  FaTools,
  FaCut,
  FaHammer,
  FaSprayCan,
  FaSearch,
  FaPaintBrush,
} from "react-icons/fa";

const equipments = [
  {
    name: "10 Ton OH Crane",
    details: "4 overhead cranes with 10-ton capacity each for heavy material handling.",
    description:
      "Our facility houses 4 overhead cranes with a 10-ton lifting capacity each, ensuring safe and efficient handling of heavy structural components during fabrication and assembly.",
    icon: <FaIndustry className="text-blue-600 text-4xl mb-3" />,
  },
  {
    name: "Shot Blasting Booth",
    details: "State-of-the-art 10m × 5m blast booth for surface preparation.",
    description:
      "The 10m × 5m shot blasting booth is designed for superior surface cleaning, removing rust, scale, and other impurities, ensuring material readiness for further processing.",
    icon: <FaSprayCan className="text-red-600 text-4xl mb-3" />,
  },
  {
    name: "Paint Booth",
    details: "Advanced 10m × 5m booth with bottom suction paper filter for smooth coating.",
    description:
      "Equipped with bottom suction and paper filter technology, the paint booth ensures flawless finishing, consistent coating quality, and a dust-free environment for industrial painting.",
    icon: <FaPaintBrush className="text-green-600 text-4xl mb-3" />,
  },
  {
    name: "Plasma Machine",
    details: "3m × 16m effective cutting machine with Hypertherm power source for precision cutting.",
    description:
      "This machine allows for highly accurate cutting on large plates up to 16m in length. Powered by Hypertherm, it enables complex profile cutting with high precision and efficiency.",
    icon: <FaCut className="text-purple-600 text-4xl mb-3" />,
  },
  {
    name: "Band Saw",
    details: "Imported from Taiwan for accurate and efficient cutting operations.",
    description:
      "The Taiwan-imported band saw is ideal for straight and angled cuts, providing fast and accurate results while reducing material waste during fabrication.",
    icon: <FaTools className="text-amber-600 text-4xl mb-3" />,
  },
  {
    name: "Bending Machine",
    details: "Tandem 10m × 1000 tons Belgium design (Deratech) for heavy-duty bending operations.",
    description:
      "A tandem press brake with 1000 tons capacity and 10m length, designed in Belgium by Deratech, capable of forming heavy-duty and complex bending requirements with precision.",
    icon: <FaHammer className="text-indigo-600 text-4xl mb-3" />,
  },
  {
    name: "Roll Plate Machine",
    details: "2.1m × 10mm thick capacity, 4-roll machine from Akyapak, Turkey.",
    description:
      "The 4-roll plate bending machine from Akyapak (Turkey) is capable of rolling steel plates up to 2.1m wide and 10mm thick, suitable for cylindrical and conical components.",
    icon: <FaCogs className="text-blue-500 text-4xl mb-3" />,
  },
  {
    name: "Drilling Machine",
    details: "Capable of drilling up to 25mm diameter holes with high precision.",
    description:
      "High-performance drilling machines capable of drilling up to 25mm diameter holes, used for structural assemblies and heavy-duty fabrication projects.",
    icon: <FaSearch className="text-gray-600 text-4xl mb-3" />,
  },
];

const EquipmentsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16 flex flex-col items-center">
          <p className="text-4xl font-bold !text-blue-900 mb-6">Our Equipments</p>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto text-center py-2">
            Our factory is equipped with cutting-edge machinery designed to handle 
            complex fabrication tasks with precision and efficiency.
          </p>
        </div>

        {/* Grid version */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {equipments.map((eq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 text-center"
            >
              <div className="flex justify-center">{eq.icon}</div>
              {/* 🔹 Force heading color & visibility */}
              <h3 className="text-xl font-bold !text-blue-700 mb-3">{eq.name}</h3>
              <p className="text-gray-700 text-sm">{eq.details}</p>
            </div>
          ))}
        </div>

        {/* Descriptive version */}
        {/* <div className="space-y-12">
          {equipments.map((eq, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold !text-blue-700 mb-4">{eq.name}</h3>
              <p className="text-gray-700 leading-relaxed">{eq.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default EquipmentsSection;
