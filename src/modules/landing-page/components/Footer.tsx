import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-lg">COMPANY</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>

          {/* Browse Section */}
          <div>
            <h3 className="font-semibold text-lg">BROWSE</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li><a href="#">Search</a></li>
              <li><a href="#">Jobs By Location</a></li>
              <li><a href="#">Job Title</a></li>
              <li><a href="#">Jobs By Company</a></li>
              <li><a href="#">Jobs By Category</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold text-lg">RESOURCES</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Company Reviews</a></li>
              <li><a href="#">Companies We Serve</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Share StaffMerge</a></li>
            </ul>

            {/* Social Media Icons */}
            <div className="mt-4 flex space-x-4 text-gray-600">
              <a href="#"><FaLinkedin size={20} /></a>
              <a href="#"><FaTwitter size={20} /></a>
              <a href="#"><FaFacebook size={20} /></a>
              <a href="#"><FaEnvelope size={20} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-300 w-full pt-4 text-center text-gray-500 text-sm">
          &copy; 2025 StaffMerge, Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
