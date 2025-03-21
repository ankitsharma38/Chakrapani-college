import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed w-full bg-gray-900 shadow-xl z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-white transition-all duration-300 ease-in-out transform hover:text-green-500 hover:scale-105 hover:drop-shadow-md"
        >
          Chakrapani Yoga
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none transition-all duration-300 ease-in-out p-1 rounded-full hover:bg-green-500/20"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FiX className="animate-spinOnce" />
            ) : (
              <FiMenu className="hover:scale-125 transition-transform duration-200" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex md:items-center md:space-x-8 ${
            menuOpen ? "block animate-slideInFromRight" : "hidden"
          } md:block fixed md:static top-0 right-0 w-3/4 md:w-auto h-full md:h-auto bg-gray-900/98 md:bg-transparent p-8 md:p-0 shadow-2xl md:shadow-none transition-all duration-300 ease-in-out`}
        >
          {/* Close Button Inside Menu (Mobile) */}
          {menuOpen && (
            <button
              onClick={toggleMenu}
              className="md:hidden text-white text-3xl absolute top-6 right-6 hover:text-green-500 transition-colors duration-200"
            >
              <FiX />
            </button>
          )}

          {["Home", "About", "Courses", "Blogs", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block py-4 md:py-0 text-lg text-gray-200 hover:text-green-500 transition-all duration-300 ease-in-out relative group font-medium tracking-wide"
            >
              {item}
              <span className="absolute left-0 -bottom-1 md:bottom-0 w-0 h-[3px] bg-gradient-to-r from-green-500 to-teal-400 transition-all duration-500 ease-in-out group-hover:w-full rounded-full md:rounded-none"></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx global>{`
        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes spinOnce {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(180deg);
          }
        }
        .animate-slideInFromRight {
          animation: slideInFromRight 0.4s ease-in-out forwards;
        }
        .animate-spinOnce {
          animation: spinOnce 0.3s ease-in-out forwards;
        }
      `}</style>
    </nav>
  );
}