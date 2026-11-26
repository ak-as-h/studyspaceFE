import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#1C1917] border-b border-[#2E2925]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-[68px]">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#C17A56] flex items-center justify-center">
            <span className="text-white font-black text-xs tracking-widest">SS</span>
          </div>
          <span
            className="text-white text-lg font-light tracking-[0.12em] uppercase"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.15em" }}
          >
            Study<span className="font-bold text-[#C17A56]">Space</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className="text-xs font-medium tracking-[0.1em] uppercase text-[#A09A93] hover:text-white transition-colors"
          >
            Home
          </NavLink>
          <NavLink
            to="/explore"
            className="text-xs font-medium tracking-[0.1em] uppercase text-[#A09A93] hover:text-white transition-colors"
          >
            Explore
          </NavLink>
          <a
            href="/#how-it-works"
            className="text-xs font-medium tracking-[0.1em] uppercase text-[#A09A93] hover:text-white transition-colors"
          >
            How It Works
          </a>
          <a
            href="/#about"
            className="text-xs font-medium tracking-[0.1em] uppercase text-[#A09A93] hover:text-white transition-colors"
          >
            About
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-xs font-semibold tracking-[0.08em] uppercase text-[#A09A93] hover:text-white transition-colors px-4 py-2"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="text-xs font-bold tracking-[0.08em] uppercase bg-[#C17A56] text-white px-5 py-2.5 hover:bg-[#A8663F] transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2 text-[#A09A93] hover:text-white transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1C1917] border-t border-[#2E2925] px-6 pb-6 pt-4 flex flex-col gap-1">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-xs font-medium tracking-[0.1em] uppercase text-[#A09A93] hover:text-white transition-colors border-b border-[#2E2925]"
          >
            Home
          </NavLink>
          <NavLink
            to="/explore"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-xs font-medium tracking-[0.1em] uppercase text-[#A09A93] hover:text-white transition-colors border-b border-[#2E2925]"
          >
            Explore
          </NavLink>
          <a
            href="/#how-it-works"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-xs font-medium tracking-[0.1em] uppercase text-[#A09A93] hover:text-white transition-colors border-b border-[#2E2925]"
          >
            How It Works
          </a>
          <a
            href="/#about"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-xs font-medium tracking-[0.1em] uppercase text-[#A09A93] hover:text-white transition-colors border-b border-[#2E2925]"
          >
            About
          </a>

          <div className="mt-4 flex flex-col gap-3">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block text-center py-3 text-xs font-semibold tracking-[0.08em] uppercase text-[#A09A93] border border-[#3E3832] hover:border-[#C17A56] hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="block text-center py-3 text-xs font-bold tracking-[0.08em] uppercase bg-[#C17A56] text-white hover:bg-[#A8663F] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
