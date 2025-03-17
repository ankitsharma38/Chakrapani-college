import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6"; // Import icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h6 className="text-lg font-semibold border-b-2 border-white inline-block mb-2">
              Quick Links
            </h6>
            <ul className="space-y-1">
              <li>
                <Link to="/courses" className="hover:text-orange-500">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500">
                  Admissions
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Connect With Us */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h6 className="text-lg font-semibold border-b-2 border-white inline-block mb-2">
              Connect With Us
            </h6>
            <div className="flex space-x-4 mt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-xl">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-xl">
                <FaXTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 text-xl">
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h6 className="text-lg font-semibold border-b-2 border-white inline-block mb-2">
              Contact Us
            </h6>
            <p className="flex items-center gap-2">
              📞 9890101609 / 7796187169
            </p>
            <p className="flex items-center gap-2 mt-1">
              📧 <a href="mailto:chakrapani615@gmail.com" className="hover:text-orange-500">chakrapani615@gmail.com</a>
            </p>
          </motion.div>

          {/* Address */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h6 className="text-lg font-semibold border-b-2 border-white inline-block mb-2">
              Address
            </h6>
            <p>28, Central Railway Colony, Onkar Nagar Road, Nagpur-440027</p>
          </motion.div>

        </div>

        {/* Footer Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 pt-4 border-t border-gray-700 text-center"
        >
          <p className="text-sm">
            © 2024 Chakrapani Panchakarma Yoga Nisargopchar Mahavidyalaya
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
