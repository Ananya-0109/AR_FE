import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";

const NAV_ITEMS = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about",
    dropdown: [
      { label: "Company Background", to: "/about#background" },
      { label: "Vision/Mission", to: "/about#vision" },
      { label: "Timeline", to: "/about#timeline" },
      { label: "Factory Gallery", to: "/about#factory-gallery" },
    ],
  },
  {
    label: "Factory & Capabilities",
    to: "/factory",
    dropdown: [
      { label: "OH Cranes", to: "/factory#ohcranes" },
      { label: "Plasma", to: "/factory#plasma" },
      { label: "Paint Booth", to: "/factory#paintbooth" },
    ],
  },
  {
    label: "Products",
    to: "/products",
    dropdown: [
      { label: "Hoppers", to: "/products/hoppers" },
      { label: "Sub-frames", to: "/products/subframes" },
      { label: "Torque-frame", to: "/products/torqueframe" },
      { label: "Bin frame", to: "/products/binframe" },
      { label: "Jig assembly", to: "/products/jigassembly" },
      { label: "Hydro project", to: "/products/hydroproject" },
    ],
  },
  {
    label: "Clients",
    to: "/clients",
    dropdown: [
      { label: "Industries Served", to: "/clients#industries" },
      { label: "Testimonials", to: "/clients#testimonials" },
    ],
  },
  {
    label: "Certification",
    to: "/certifications",
    dropdown: [{ label: "ISO", to: "/certifications#iso" }],
  },
  {
    label: "Career",
    to: "/career",
    dropdown: [
      
      { label: "Work Culture", to: "/career#work-culture" },
      
      { label: " Job Openings", to: "/career#openings" }, // <-- UPDATED THIS LINE
      { label: "Apply Now", to: "/career#application-form" },
    ],
  },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Smooth scroll with offset
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const yOffset = -80; // adjust based on navbar height
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  const handleDropdownClick = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".navbar-item")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#232f3e] text-white shadow-xl font-inter">
      <div className="container mx-auto px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/ar-logo.png" alt="AR Industries Logo" className="h-10" />
        </Link>

        {/* Nav Items */}
        <div className="flex items-center space-x-12 text-base font-medium">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative navbar-item">
              <button
                onClick={() => {
                  handleDropdownClick(item.label);
                  navigate(item.to);
                }}
                className="flex items-center hover:text-slate-300 transition space-x-1 font-inter focus:outline-none"
              >
                <span>{item.label}</span>
                {item.dropdown && (
                  <FaAngleDown
                    className={
                      "ml-2 transition" +
                      (openDropdown === item.label ? " rotate-180" : "")
                    }
                  />
                )}
              </button>

              {openDropdown === item.label && item.dropdown && (
                <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden z-50">
                  <div className="py-3 px-6 grid grid-cols-1 gap-2">
                    {item.dropdown.map((menu) => (
                      <Link
                        key={menu.label}
                        to={menu.to}
                        onClick={() => setOpenDropdown(null)}
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

        {/* Contact Button */}
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