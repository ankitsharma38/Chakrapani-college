import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white hover:text-green-400 transition duration-300">
          Chakrapani Yoga
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex md:items-center space-x-6 ${menuOpen ? "block" : "hidden"} md:block absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0`}>
          {["Home", "About", "Courses", "Blog", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="relative text-gray-300 hover:text-green-400 transition duration-300 pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
