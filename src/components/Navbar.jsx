import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaArrowRight } from 'react-icons/fa';

const NAV_ITEMS = [
  {
    label: 'Home',
    to: '/',
    dropdown: [
      { label: 'Hero Banner', to: '/#hero' },
      { label: 'Production Visuals', to: '/#production' },
      { label: 'Client Logos', to: '/#clients' },
      { label: 'CTAs', to: '/#cta' },
      { label: 'Google Maps', to: '/#location' },
    ],
  },
  {
    label: 'About Us',
    to: '/about',
    dropdown: [
      { label: 'Company Background', to: '/about#background' },
      { label: 'Group Info', to: '/about#group' },
      { label: 'Vision/Mission', to: '/about#vision' },
      { label: 'Timeline', to: '/about#timeline' },
    ],
  },
  {
    label: 'Factory & Capabilities',
    to: '/factory',
    dropdown: [
      { label: 'Images', to: '/factory#images' },
      { label: 'Equipment List', to: '/factory#equipment' },
      { label: 'OH Cranes', to: '/factory#ohcranes' },
      { label: 'Plasma', to: '/factory#plasma' },
      { label: 'Paint Booth', to: '/factory#paintbooth' },
    ],
  },
  {
    label: 'Products',
    to: '/products',
    dropdown: [
      { label: 'Bin Frames', to: '/products/binframes' },
      { label: 'CRBs', to: '/products/crbs' },
      { label: 'Rake Arms', to: '/products/rakearms' },
      { label: 'Gallery', to: '/products/gallery' },
    ],
  },
  {
    label: 'Clients',
    to: '/clients',
    dropdown: [
      { label: 'Logos', to: '/clients#logos' },
      { label: 'Industries Served', to: '/clients#industries' },
      { label: 'Testimonials', to: '/clients#testimonials' },
    ],
  },
  {
    label: 'Certification',
    to: '/certifications',
    dropdown: [
      { label: 'ISO', to: '/certifications#iso' },
      { label: 'Factory License', to: '/certifications#license' },
      { label: 'QA & Safety', to: '/certifications#qa' },
    ],
  },
  {
    label: 'Career',
    to: '/career',
    dropdown: [
      { label: 'Job Openings', to: '/career#openings' },
      { label: 'Apply Now', to: '/career#apply' },
    ],
  },
  
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (label) => setOpenDropdown(label);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#232f3e] text-white shadow-xl font-inter">
      <div className="container mx-auto px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/ar-logo.png" alt="AR Industries Logo" className="h-10" />
        </Link>

        {/* Main Menu */}
        <div className="flex items-center space-x-12 text-base font-medium">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.to}
                className="flex items-center hover:text-slate-300 transition space-x-1 font-inter"
              >
                <span>{item.label}</span>
                {item.dropdown && (
                  <FaAngleDown
                    className={
                      "ml-2 transition" + (openDropdown === item.label ? " rotate-180" : "")
                    }
                  />
                )}
              </Link>
              {openDropdown === item.label && item.dropdown && (
                <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <div className="py-3 px-6 grid grid-cols-1 gap-2">
                    {item.dropdown.map((menu) => (
                      <Link
                        key={menu.label}
                        to={menu.to}
                        className="block py-2 hover:bg-gray-100 rounded font-inter"
                      >
                        {menu.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Us CTA */}
        <div>
          <Link
            to="/contact"
            className="flex items-center space-x-2 border-2 border-white text-white py-2 px-6 rounded-lg text-base font-semibold hover:bg-white hover:text-[#232f3e] transition-all duration-300 font-inter"
          >
            <span>Contact Us</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
