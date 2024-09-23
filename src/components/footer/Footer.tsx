import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a0391] text-white py-10 px-6 sm:px-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-300 leading-relaxed">
            INFOSEC Learning is designed to provide high-quality education and
            help you improve your cyber security skills. We offer various
            courses to advance your knowledge.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className="text-gray-300 hover:text-[#ff6f61] transition-colors duration-200"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className="text-gray-300 hover:text-[#ff6f61] transition-colors duration-200"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-job"
                className="text-gray-300 hover:text-[#ff6f61] transition-colors duration-200"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300">123 Learning St, Colombo, Sri Lanka</p>
          <p className="text-gray-300 mt-2">Phone: +94 123 456 789</p>
          <p className="text-gray-300 mt-2">Email: info@lms.com</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-400 text-sm">
          &copy; 2024 INFOSEC Learning System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
