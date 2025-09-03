import React from 'react';
// import EquipmentCard from '../components/EquipmentCard';
import EquipmentsSection from "../components/EquipmentsSection";

import FactoryGallery from '../components/FactoryGallery';
import { equipmentData } from '../assets/data/equipmentData';

const Factory = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
     {/* Header Section */}
<section className="py-20 bg-gradient-to-r from-teal-900 to-slate-800 text-white flex flex-col items-center justify-center text-center">
  <div className="container mx-auto px-4 flex flex-col items-center">
    <h1 className="text-5xl font-bold mb-6 py-7">Factory & Capabilities</h1>
    <p className="text-xl max-w-3xl mx-auto">
      Our state-of-the-art manufacturing facility spans 100,000 square feet and houses cutting-edge equipment operated by skilled professionals.
    </p>
  </div>
</section>


      {/* Factory Overview Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">100K</div>
              <div className="text-gray-600">Sq Ft Facility</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Skilled Workers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-gray-600">Operations</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">ISO</div>
              <div className="text-gray-600">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Gallery */}
      <FactoryGallery />
      <EquipmentsSection />

      {/* Equipment Section */}
      {/* <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 !text-blue-600">
        Our Manufacturing Equipment
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl text-center">
        Advanced machinery and precision tools that enable us to deliver
        exceptional quality and efficiency.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {equipmentData.map((equipment) => (
        <EquipmentCard key={equipment.id} equipment={equipment} />
      ))}
    </div>
  </div>
</section> */}

      {/* Manufacturing Processes */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 !text-blue-900">
        Manufacturing Processes
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl text-center">
        From raw materials to finished products, our comprehensive manufacturing
        processes ensure quality at every step.
      </p>
    </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-cut text-4xl text-blue-600 mb-3"></i>
                <p className="text-2xl font-bold text-black">Cutting & Shaping</p>
              </div>
              <p className="text-gray-600 mb-4">
                Precision plasma cutting, laser cutting, and CNC machining for accurate component sizing.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Plasma cutting up to 6" thick</li>
                <li>• CNC machining ±0.001" tolerance</li>
                <li>• Waterjet cutting for complex shapes</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-fire text-4xl text-red-600 mb-3"></i>
               <p className="text-2xl font-bold text-black">Welding & Joining</p>
              </div>
              <p className="text-gray-600 mb-4">
                Expert welding services using MIG, TIG, and Arc welding processes with certified welders.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AWS certified welders</li>
                <li>• All position welding capabilities</li>
                <li>• Structural and pressure vessel welding</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-hammer text-4xl text-amber-600 mb-3"></i>
                <p className="text-2xl font-bold text-black">Forming & Bending</p>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced press brakes and forming equipment for precise metal shaping and bending operations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 300-ton press brake capacity</li>
                <li>• 12-foot forming length</li>
                <li>• Complex angle forming</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-spray-can text-4xl text-green-600 mb-3"></i>
                <p className="text-2xl font-bold text-black">Surface Finishing</p>
              </div>
              <p className="text-gray-600 mb-4">
                Professional powder coating and painting services in our automotive-grade paint booth.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Powder coating capabilities</li>
                <li>• Liquid paint applications</li>
                <li>• Custom color matching</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-tools text-4xl text-purple-600 mb-3"></i>
                <p className="text-2xl font-bold text-black">Assembly & Integration</p>
              </div>
              <p className="text-gray-600 mb-4">
                Complete assembly services with precision fitting and integration of complex components.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mechanical assembly</li>
                <li>• Hardware installation</li>
                <li>• Sub-assembly services</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-search text-4xl text-indigo-600 mb-3"></i>
                <p className="text-2xl font-bold text-black">Quality Control</p>
              </div>
              <p className="text-gray-600 mb-4">
                Rigorous inspection and testing procedures to ensure every product meets specifications.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• CMM dimensional inspection</li>
                <li>• Non-destructive testing</li>
                <li>• Material verification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 flex flex-col items-center ">
            <h2 className="text-4xl font-bold mb-6 !text-blue-900">Production Capabilities</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our facility is equipped to handle projects of all sizes, from prototype development to full-scale production runs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center !text-blue-600">
  <i className="fas fa-ruler-combined text-3xl !text-blue-800 mr-3"></i>
  Dimensional Capabilities
</h3>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-gray-800">Maximum Length</div>
                  <div className="text-gray-600">40 feet</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Maximum Width</div>
                  <div className="text-gray-600">20 feet</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Maximum Thickness</div>
                  <div className="text-gray-600">6 inches</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Weight Capacity</div>
                  <div className="text-gray-600">50 tons</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
             <h3 className="text-2xl font-bold mb-6 flex items-center !text-blue-600">
  <i className="fas fa-chart-line text-3xl !text-blue-800 mr-3"></i>
  Production Metrics
</h3>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-gray-800">Daily Capacity</div>
                  <div className="text-gray-600">500+ components</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Lead Time</div>
                  <div className="text-gray-600">2-4 weeks typical</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Rush Orders</div>
                  <div className="text-gray-600">24-48 hours</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Quality Rate</div>
                  <div className="text-gray-600">99.8% accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Factory;