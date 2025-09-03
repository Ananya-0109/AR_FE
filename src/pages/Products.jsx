import React, { useState } from "react";
import { FaMedal, FaCogs, FaShippingFast, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import { productsData } from "../assets/data/productsData";


const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(productsData);
    } else {
      setFilteredProducts(
        productsData.filter((product) => product.category === category)
      );
    }
  };

  const categories = [
    {
      key: "all",
      label: "All Products",
      count: productsData.length,
      icon: "fas fa-box",
    },
    {
      key: "storage",
      label: "Storage Solutions",
      count: productsData.filter((p) => p.category === "storage").length,
      icon: "fas fa-warehouse",
    },
    {
      key: "mounting",
      label: "Mounting Systems",
      count: productsData.filter((p) => p.category === "mounting").length,
      icon: "fas fa-cogs",
    },
    {
      key: "equipment",
      label: "Equipment Parts",
      count: productsData.filter((p) => p.category === "equipment").length,
      icon: "fas fa-tools",
    },
    {
      key: "custom",
      label: "Custom Solutions",
      count: productsData.filter((p) => p.category === "custom").length,
      icon: "fas fa-drafting-compass",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 flex flex-col items-center justify-center bg-gradient-to-r from-teal-900 to-slate-800 text-white text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative text-center flex flex-col items-center ">
          <span className="uppercase tracking-wide text-sm text-blue-200 ">
            
          </span>
          <p className="text-5xl font-extrabold mb-6">
            Products & Components
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Gallery showcasing bin frames, CRBs, rake arms, and more.
          </p>
        </div>
      </section>

      {/* Product Categories Filter */}
      <section className="py-10 bg-white border-b">
        <div className="container mx-auto px-4">
          <ProductFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <i className="fas fa-search text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                No Products Found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category or check back later.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 flex flex-col items-center ">
            <p className="text-4xl font-extrabold text-black mb-6">Why Choose Our Products?</p>
            <p className="text-xl !text-gray-800 max-w-3xl mx-auto">
              Every component we manufacture meets the highest standards of
              quality, durability, and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 text-blue-900 lg:grid-cols-4 gap-8 ">
            {[
              {
                icon: FaMedal,
                title: "Premium Quality",
                desc: "Made from high-grade materials with strict quality control.",
                color: "text-blue-600",
              },
              {
                icon: FaCogs,
                title: "Precision Engineering",
                desc: "CNC machined with tolerances up to ±0.001 inches.",
                color: "text-green-600",
              },
              {
                icon: FaShippingFast,
                title: "Fast Delivery",
                desc: "Quick turnaround with reliable nationwide shipping.",
                color: "text-amber-600",
              },
              {
                icon: FaTools,
                title: "Custom Solutions",
                desc: "Tailored designs to meet your exact specifications.",
                color: "text-purple-600",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${feature.color} bg-gray-100`}
                >
                  <feature.icon className="text-2xl" />
                </div>
                <p className="text-xl font-bold mb-2">{feature.title}</p>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <div className="text-center mb-16">
            <p className="text-3xl font-extrabold mb-6 text-black">
              Technical Specifications
            </p>
            <p className="text-xl !text-gray-600 max-w-3xl mx-auto">
              Our products are manufactured to meet or exceed industry standards
              and specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 text-blue-900 lg:grid-cols-3 gap-8 ">
            {[
              {
                icon: "fas fa-ruler text-blue-600 ",
                title: "Dimensional Accuracy",
                items: [
                  "Linear dimensions: ±0.005\"",
                  "Angular dimensions: ±0.5°",
                  "Surface finish: 32-125 RMS",
                  "Flatness: 0.002\" per inch",
                ],
              },
              {
                icon: "fas fa-weight-hanging text-green-600",
                title: "Material Properties",
                items: [
                  "Steel grades: A36, A572, A588",
                  "Aluminum alloys: 6061-T6, 5052",
                  "Stainless steel: 304, 316, 410",
                  "Custom alloys available",
                ],
              },
              {
                icon: "fas fa-shield-alt text-amber-600",
                title: "Testing & Certification",
                items: [
                  "Material test certificates",
                  "Dimensional inspection reports",
                  "Non-destructive testing",
                  "Third-party verification",
                ],
              },
            ].map((spec, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <p className="text-xl font-bold mb-4 flex items-center">
                  <i className={`${spec.icon} mr-3`}></i>
                  {spec.title}
                </p>
                <ul className="space-y-2 text-gray-600">
                  {spec.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center">
        <div className="absolute inset-0 bg-[url('/assets/blueprint.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl text-center py-4">
            Can't find what you're looking for? Our engineering team can design
            and manufacture components tailored to your needs.
          </p>
          <div className="flex gap-6 justify-center mt-6">
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-900"
            >
              <i className="fas fa-envelope mr-2"></i>
              Request Quote
            </a>
            <a
              href="tel:+1-555-123-4567"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-900"
            >
              <i className="fas fa-phone mr-2"></i>
              Call Engineering
            </a>
            <a
              href="/brochure.pdf"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-900"
            >
              <i className="fas fa-file-pdf mr-2"></i>
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;