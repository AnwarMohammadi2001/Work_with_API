import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#home" className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-300 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-300 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300 mb-2">123 Print St, Kabul, Afghanistan</p>
          <p className="text-gray-300 mb-2">Phone: +93771234567</p>
          <p className="text-gray-300 mb-2">Email: contact@printshop.com</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/printshop"
              className="text-gray-300 hover:text-white"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com/printshop"
              className="text-gray-300 hover:text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/printshop"
              className="text-gray-300 hover:text-white"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 mt-8">
        <p>&copy; 2024 Tamadon Print Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
