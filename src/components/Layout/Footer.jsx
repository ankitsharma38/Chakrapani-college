import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us */}
          <div>
            <h6 className="text-lg font-semibold border-b-2 border-white inline-block mb-2">
              Contact Us
            </h6>
            <p className="flex items-center gap-2">
              📞 9890101609 / 7796187169
            </p>
            <p className="flex items-center gap-2 mt-1">
              📧 <a href="mailto:chakrapani615@gmail.com" className="hover:text-orange-500">chakrapani615@gmail.com</a>
            </p>
          </div>

          {/* Address */}
          <div>
            <h6 className="text-lg font-semibold border-b-2 border-white inline-block mb-2">
              Address
            </h6>
            <p>28, Central Railway Colony, Onkar Nagar Road, Nagpur-440027</p>
          </div>

          {/* Quick Links */}
          <div>
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
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 pt-4 border-t border-gray-700 text-center">
          <p className="text-sm">
            © 2024 Chakrapani Panchakarma Yoga Nisargopchar Mahavidyalaya
          </p>
        </div>
      </div>
    </footer>
  );
}