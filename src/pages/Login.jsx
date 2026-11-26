import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
} from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch lg:grid-cols-2 min-h-screen">

        {/* Left Panel — editorial dark */}
        <div className="hidden lg:flex flex-col justify-between bg-[#1C1917] p-14">
          <div>
            <div className="flex items-center gap-3 mb-16">
              <div className="w-7 h-7 bg-[#C17A56] flex items-center justify-center">
                <span className="text-white font-black text-[9px] tracking-widest">SS</span>
              </div>
              <span
                className="text-white text-base font-light tracking-[0.12em] uppercase"
                style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.15em" }}
              >
                Study<span className="font-bold text-[#C17A56]">Space</span>
              </span>
            </div>

            <div className="flex items-center gap-3 mb-7">
              <span className="w-6 h-px bg-[#C17A56]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                Welcome Back
              </span>
            </div>

            <h1
              className="text-5xl font-bold leading-tight text-white"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Your Next
              <span className="text-[#C17A56]"> Productive </span>
              Session Starts Here.
            </h1>

            <p className="mt-7 max-w-sm text-sm leading-8 text-[#A09A93]">
              Sign in to discover peaceful study spaces, manage your bookings and
              make every study session count.
            </p>
          </div>

          <div className="overflow-hidden border border-[#2E2925]" style={{ height: "260px" }}>
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
              alt="Modern study workspace"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
        </div>

        {/* Form Panel */}
        <div className="flex items-center justify-center px-6 py-14 bg-[#F5F0E8]">
          <div className="w-full max-w-sm">

            {/* Logo — mobile only */}
            <Link to="/" className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="w-7 h-7 bg-[#1C1917] flex items-center justify-center">
                <span className="text-white font-black text-[9px]">SS</span>
              </div>
              <span
                className="text-[#1C1917] text-base font-light tracking-[0.12em] uppercase"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Study<span className="font-bold text-[#C17A56]">Space</span>
              </span>
            </Link>

            {/* Heading */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-5 h-px bg-[#C17A56]" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">Sign In</span>
              </div>
              <h2
                className="text-3xl font-bold text-[#1C1917]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Welcome Back!
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#7C6F60]">
                Sign in to continue your study journey.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5">

              {/* Email */}
              <div>
                <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                  Email Address
                </label>
                <div className="flex items-center gap-3 border border-[#D4C5A9] bg-white px-4 py-3.5 transition focus-within:border-[#1C1917]">
                  <FaEnvelope className="text-[#A09A93]" size={12} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-sm text-[#1C1917] outline-none placeholder:text-[#C5B9AB]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                  Password
                </label>
                <div className="flex items-center gap-3 border border-[#D4C5A9] bg-white px-4 py-3.5 transition focus-within:border-[#1C1917]">
                  <FaLock className="text-[#A09A93]" size={12} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full bg-transparent text-sm text-[#1C1917] outline-none placeholder:text-[#C5B9AB]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[#A09A93] transition hover:text-[#1C1917]"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FaEyeSlash size={12} /> : <FaEye size={12} />}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-xs text-[#7C6F60]">
                  <input type="checkbox" className="h-3.5 w-3.5 accent-[#1C1917]" />
                  Remember me
                </label>
              </div>

              {/* Submit */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 bg-[#1C1917] px-5 py-4 text-sm font-bold tracking-[0.08em] uppercase text-white transition hover:bg-[#C17A56]"
              >
                Sign In
                <FaArrowRight size={12} />
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-[#D4C5A9] text-center">
              <p className="text-xs text-[#7C6F60]">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-bold text-[#1C1917] transition hover:text-[#C17A56]"
                >
                  Create Account
                </Link>
              </p>
            </div>

            <p className="mt-6 text-center text-[10px] text-[#A09A93] tracking-wide">
              © 2026 StudySpace. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
