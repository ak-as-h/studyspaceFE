import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F5F0E8] border-t border-[#D4C5A9]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#1C1917] flex items-center justify-center">
                <span className="text-white font-black text-xs tracking-widest">SS</span>
              </div>
              <span
                className="text-[#1C1917] text-lg font-light tracking-[0.12em] uppercase"
                style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.15em" }}
              >
                Study<span className="font-bold text-[#C17A56]">Space</span>
              </span>
            </div>
            <p className="text-sm leading-7 text-[#7C6F60] max-w-xs">
              A curated platform for discovering focused study environments — 
              libraries, reading rooms, and productive workspaces near you.
            </p>
            <div className="flex gap-4 mt-7">
              {[FaFacebook, FaInstagram, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-[#D4C5A9] flex items-center justify-center text-[#7C6F60] hover:border-[#1C1917] hover:text-[#1C1917] transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1917] mb-6"
            >
              Navigate
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/explore", label: "Explore Spaces" },
                { to: "/login", label: "Sign In" },
                { to: "/register", label: "Create Account" },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm text-[#7C6F60] hover:text-[#1C1917] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* For Owners */}
          <div>
            <h3
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1917] mb-6"
            >
              Space Owners
            </h3>
            <div className="flex flex-col gap-3">
              <Link to="/register" className="text-sm text-[#7C6F60] hover:text-[#1C1917] transition-colors">
                List Your Space
              </Link>
              <Link to="/login" className="text-sm text-[#7C6F60] hover:text-[#1C1917] transition-colors">
                Owner Login
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#D4C5A9] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#A09A93] tracking-wide">
            © {new Date().getFullYear()} StudySpace. All rights reserved.
          </p>
          <p className="text-xs text-[#A09A93] tracking-wide uppercase">
            Discover · Focus · Achieve
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
