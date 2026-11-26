import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserGraduate,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("Student");

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
                Join the Community
              </span>
            </div>

            <h1
              className="text-5xl font-bold leading-tight text-white"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Find Your Space.
              <span className="text-[#C17A56]"> Focus on Your Goals.</span>
            </h1>

            <p className="mt-7 max-w-sm text-sm leading-8 text-[#A09A93]">
              Create your StudySpace account and discover comfortable
              study environments. Whether you're a student or a space
              owner, there's a place for you here.
            </p>
          </div>

          <div className="overflow-hidden border border-[#2E2925]" style={{ height: "240px" }}>
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
              alt="Modern collaborative workspace"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
        </div>

        {/* Form Panel */}
        <div className="flex items-center justify-center px-6 py-14 bg-[#F5F0E8] overflow-y-auto">
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
            <div className="mb-9">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-5 h-px bg-[#C17A56]" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">Create Account</span>
              </div>
              <h2
                className="text-3xl font-bold text-[#1C1917]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Create Account
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#7C6F60]">
                Join us and find your perfect study environment.
              </p>
            </div>

            <form className="space-y-5">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                  Full Name
                </label>
                <div className="flex items-center gap-3 border border-[#D4C5A9] bg-white px-4 py-3.5 focus-within:border-[#1C1917] transition">
                  <FaUser className="text-[#A09A93]" size={12} />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-transparent text-sm text-[#1C1917] outline-none placeholder:text-[#C5B9AB]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                  Email Address
                </label>
                <div className="flex items-center gap-3 border border-[#D4C5A9] bg-white px-4 py-3.5 focus-within:border-[#1C1917] transition">
                  <FaEnvelope className="text-[#A09A93]" size={12} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-sm text-[#1C1917] outline-none placeholder:text-[#C5B9AB]"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                  Phone Number
                </label>
                <div className="flex items-center gap-3 border border-[#D4C5A9] bg-white px-4 py-3.5 focus-within:border-[#1C1917] transition">
                  <FaPhone className="text-[#A09A93]" size={12} />
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full bg-transparent text-sm text-[#1C1917] outline-none placeholder:text-[#C5B9AB]"
                  />
                </div>
              </div>

              {/* Role selector */}
              <div>
                <label className="mb-3 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                  Register As
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRole("Student")}
                    className={`flex items-center justify-center gap-2 border p-3 text-xs font-bold tracking-[0.06em] uppercase transition ${
                      role === "Student"
                        ? "border-[#1C1917] bg-[#1C1917] text-white"
                        : "border-[#D4C5A9] bg-white text-[#7C6F60] hover:border-[#C17A56]"
                    }`}
                  >
                    <FaUserGraduate size={11} />
                    Student
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole("Space Owner")}
                    className={`flex items-center justify-center gap-2 border p-3 text-xs font-bold tracking-[0.06em] uppercase transition ${
                      role === "Space Owner"
                        ? "border-[#1C1917] bg-[#1C1917] text-white"
                        : "border-[#D4C5A9] bg-white text-[#7C6F60] hover:border-[#C17A56]"
                    }`}
                  >
                    <FaBuilding size={11} />
                    Space Owner
                  </button>
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                  Password
                </label>
                <div className="flex items-center gap-3 border border-[#D4C5A9] bg-white px-4 py-3.5 focus-within:border-[#1C1917] transition">
                  <FaLock className="text-[#A09A93]" size={12} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="w-full bg-transparent text-sm text-[#1C1917] outline-none placeholder:text-[#C5B9AB]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[#A09A93] hover:text-[#1C1917] transition"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FaEyeSlash size={12} /> : <FaEye size={12} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                  Confirm Password
                </label>
                <div className="flex items-center gap-3 border border-[#D4C5A9] bg-white px-4 py-3.5 focus-within:border-[#1C1917] transition">
                  <FaLock className="text-[#A09A93]" size={12} />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="w-full bg-transparent text-sm text-[#1C1917] outline-none placeholder:text-[#C5B9AB]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-[#A09A93] hover:text-[#1C1917] transition"
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirmPassword ? <FaEyeSlash size={12} /> : <FaEye size={12} />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-6 text-[#7C6F60]">
                <input
                  type="checkbox"
                  className="mt-1 h-3.5 w-3.5 accent-[#1C1917]"
                />
                <span>
                  I agree to the{" "}
                  <Link to="/terms" className="font-bold text-[#1C1917] hover:text-[#C17A56]">
                    Terms & Conditions
                  </Link>
                  {" "}and{" "}
                  <Link to="/privacy" className="font-bold text-[#1C1917] hover:text-[#C17A56]">
                    Privacy Policy
                  </Link>.
                </span>
              </label>

              {/* Submit */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 bg-[#1C1917] px-5 py-4 text-sm font-bold tracking-[0.08em] uppercase text-white transition hover:bg-[#C17A56]"
              >
                Create Account
                <FaArrowRight size={12} />
              </button>
            </form>

            {/* Footer */}
            <div className="mt-7 border-t border-[#D4C5A9] pt-6 text-center">
              <p className="text-xs text-[#7C6F60]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-bold text-[#1C1917] transition hover:text-[#C17A56]"
                >
                  Sign In
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

export default Register;
