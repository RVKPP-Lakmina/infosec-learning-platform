import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a0391] text-white py-8 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-300">
            Our INFOSEC Learning platform is designed to provide quality
            education and help you improve your skills. We offer a variety of
            Cyber security courses across different modules.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/" className="text-gray-300 hover:text-[#ff6f61]">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className="text-gray-300 hover:text-[#ff6f61]"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-job"
                className="text-gray-300 hover:text-[#ff6f61]"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300">123 Learning St, Colombo, Sri Lanka</p>
          <p className="text-gray-300 mt-2">Phone: +94 123 456 789</p>
          <p className="text-gray-300 mt-2">Email: info@lms.com</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-400">
          &copy; 2024 INFOSEC Learning System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
