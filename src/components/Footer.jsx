import React from "react";

import { FaBookOpen, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div>
          <div className="flex items-center gap-2 text-white mb-5">
            <div className="bg-blue-600/20 p-2 rounded-xl">
              <FaBookOpen size={24} className="text-blue-400" />
            </div>

            <span className="text-2xl font-bold">
              Study<span className="text-blue-400">Space</span>
            </span>
          </div>

          <p className="text-sm leading-7 text-gray-400 max-w-xs">
            Find affordable, comfortable and convenient spaces to study, learn
            and focus.
          </p>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-5">Quick Links</h3>

          <div className="flex flex-col gap-3 text-sm">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>

            <Link
              to="/explore"
              className="hover:text-blue-400 transition-colors"
            >
              Explore Spaces
            </Link>

            <Link to="/login" className="hover:text-blue-400 transition-colors">
              Login
            </Link>

            <Link
              to="/register"
              className="hover:text-blue-400 transition-colors"
            >
              Register
            </Link>
          </div>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-5">For Space Owners</h3>

          <div className="flex flex-col gap-3 text-sm">
            <Link
              to="/register"
              className="hover:text-blue-400 transition-colors"
            >
              List Your Space
            </Link>

            <Link to="/login" className="hover:text-blue-400 transition-colors">
              Owner Login
            </Link>
          </div>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-5">Connect With Us</h3>

          <div className="flex gap-3 text-xl">
            <a
              href="#"
              aria-label="Facebook"
              className="p-3 rounded-xl bg-white/5 hover:bg-blue-600 hover:text-white transition-all"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="p-3 rounded-xl bg-white/5 hover:bg-blue-600 hover:text-white transition-all"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="p-3 rounded-xl bg-white/5 hover:bg-blue-600 hover:text-white transition-all"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} StudySpace. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
