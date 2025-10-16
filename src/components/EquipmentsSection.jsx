import React from "react";
// You can remove react-icons imports if they are not used elsewhere in your project
// import { FaCogs, FaIndustry, FaTools, FaCut, FaHammer, FaSprayCan, FaSearch, FaPaintBrush } from "react-icons/fa";

const equipments = [
  {
    name: "10 Ton OH Crane",
    details: "4 overhead cranes with 10-ton capacity each for heavy material handling.",
    description: "Our facility houses 4 overhead cranes with a 10-ton lifting capacity each, ensuring safe and efficient handling of heavy structural components during fabrication and assembly.",
    image: "https://i.ibb.co/Lh2W1Kk/crane-hook.jpg",
  },
  {
    name: "Shot Blasting Booth",
    details: "State-of-the-art 10m × 5m blast booth for surface preparation.",
    description: "The 10m × 5m shot blasting booth is designed for superior surface cleaning, removing rust, scale, and other impurities, ensuring material readiness for further processing.",
    image: "https://i.ibb.co/wB08R9y/shot-blasting.jpg",
  },
  {
    name: "Paint Booth",
    details: "Advanced 10m × 5m booth with bottom suction paper filter for smooth coating.",
    description: "Equipped with bottom suction and paper filter technology, the paint booth ensures flawless finishing, consistent coating quality, and a dust-free environment for industrial painting.",
    image: "https://via.placeholder.com/600x400?text=Paint+Booth",
  },
  {
    name: "Plasma Machine",
    details: "3m × 16m effective cutting machine with Hypertherm power source for precision cutting.",
    description: "This machine allows for highly accurate cutting on large plates up to 16m in length. Powered by Hypertherm, it enables complex profile cutting with high precision and efficiency.",
    image: "https://via.placeholder.com/600x400?text=Plasma+Machine",
  },
  {
    name: "Bending Machine",
    details: "Tandem 10m × 1000 tons Belgium design (Deratech) for heavy-duty bending operations.",
    description: "A tandem press brake with 1000 tons capacity and 10m length, designed in Belgium by Deratech, capable of forming heavy-duty and complex bending requirements with precision.",
    image: "https://via.placeholder.com/600x400?text=Bending+Machine",
  },
  {
    name: "Roll Plate Machine",
    details: "2.1m × 10mm thick capacity, 4-roll machine from Akyapak, Turkey.",
    description: "The 4-roll plate bending machine from Akyapak (Turkey) is capable of rolling steel plates up to 2.1m wide and 10mm thick, suitable for cylindrical and conical components.",
    image: "https://via.placeholder.com/600x400?text=Roll+Plate+Machine",
  },
];

// A reusable component for the content block with card styling
const ContentCard = ({ name, description, details }) => (
  <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-center">
    <p className="text-2xl font-bold text-gray-900 mb-3">{name}</p>
    <p className="text-gray-700 leading-relaxed mb-4 text-base">{description}</p>
    <p className="text-gray-600 text-sm font-medium">{details}</p>
  </div>
);

// A reusable component for the image block
const ImageBlock = ({ src, alt }) => (
  <div className="flex items-center justify-center p-4"> {/* Added padding here */}
    <img
      src={src}
      alt={alt}
      // Smaller max-width and height adjustments for dynamic look
      className="rounded-lg shadow-xl w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover transform hover:scale-105 transition-transform duration-300"
      style={{ maxHeight: '300px' }} // Explicitly limit max height
    />
  </div>
);


const EquipmentsSection = () => {
  // Group equipments into pairs
  const equipmentPairs = [];
  for (let i = 0; i < equipments.length; i += 2) {
    equipmentPairs.push(equipments.slice(i, i + 2));
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-2">
        {/* Section Heading */}
      <div className="flex justify-center mb-16">
  <div className="max-w-3xl">
    <p className="text-4xl font-bold text-blue-800 mb-1 text-center">
      Our  Equipments
    </p>
    <p className="text-lg text-gray-600 text-justify leading-relaxed">
      Our factory is equipped with cutting-edge machinery designed to handle
      complex fabrication tasks with precision and efficiency.
    </p>
  </div>
</div>


        <div className="space-y-20 md:space-y-28"> {/* Adjusted spacing */}
          {equipmentPairs.map((pair, index) => {
            if (pair.length === 2) {
              const [item1, item2] = pair;
              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {/* Item 1: Image Left, Content Right */}
                  <ImageBlock src={item1.image} alt={item1.name} />
                  <ContentCard name={item1.name} description={item1.description} details={item1.details} />
                  
                  {/* Item 2: Content Left, Image Right */}
                  {/* On small screens, these will stack normally */}
                  <ContentCard name={item2.name} description={item2.description} details={item2.details} />
                  <ImageBlock src={item2.image} alt={item2.name} />
                </div>
              );
            }
            
            // Handle single leftover item
            if (pair.length === 1) {
                const item = pair[0];
                 return (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <ImageBlock src={item.image} alt={item.name} />
                        <ContentCard name={item.name} description={item.description} details={item.details} />
                    </div>
                 )
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default EquipmentsSection;