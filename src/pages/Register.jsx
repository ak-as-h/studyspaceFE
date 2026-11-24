
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
    <div className="min-h-screen bg-linear-to-br from-[#F5F5F1] via-[#EAF1FA] to-[#FAFAF8] px-5 py-12">

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">

        
        <div className="hidden lg:block">

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-4 py-2 text-sm font-semibold text-blue-600">
            <FaBookOpen />
            Join the StudySpace Community
          </span>

          <h1 className="mt-7 text-5xl font-bold leading-tight text-slate-900">
            Find Your Space.
            <span className="text-blue-600"> Focus on Your Goals.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-gray-500">
            Create your StudySpace account and discover comfortable
            study environments. Whether you're a student or a space
            owner, there's a place for you here.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/70 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
              alt="Modern collaborative workspace"
              className="w-full object-cover"
            />
          </div>

        </div>

        
        <div className="mx-auto w-full max-w-md">

          <div className="rounded-3xl border border-white/70 bg-white/50 p-7 shadow-2xl backdrop-blur-2xl sm:p-10">

           
            <Link to="/" className="mb-7 flex items-center gap-2">
              <div className="rounded-xl bg-blue-600 p-3 text-white">
                <FaBookOpen className="text-xl" />
              </div>

              <span className="text-2xl font-bold text-slate-900">
                Study<span className="text-blue-600">Space</span>
              </span>
            </Link>

            
            <div className="mb-7">
              <h2 className="text-3xl font-bold text-slate-900">
                Create Account
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Join us and find your perfect study environment.
              </p>
            </div>

            <form className="space-y-5">

              
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/60 px-4 py-3 focus-within:border-blue-500">
                  <FaUser className="text-gray-400" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/60 px-4 py-3 focus-within:border-blue-500">
                  <FaEnvelope className="text-gray-400" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/60 px-4 py-3 focus-within:border-blue-500">
                  <FaPhone className="text-gray-400" />

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Register As
                </label>

                <div className="grid grid-cols-2 gap-3">

                  <button
                    type="button"
                    onClick={() => setRole("Student")}
                    className={`flex items-center justify-center gap-2 rounded-xl border p-3 text-sm font-medium transition ${
                      role === "Student"
                        ? "border-blue-500 bg-blue-50/80 text-blue-700"
                        : "border-gray-200 bg-white/40 text-gray-600 hover:border-blue-300"
                    }`}
                  >
                    <FaUserGraduate />
                    Student
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole("Space Owner")}
                    className={`flex items-center justify-center gap-2 rounded-xl border p-3 text-sm font-medium transition ${
                      role === "Space Owner"
                        ? "border-blue-500 bg-blue-50/80 text-blue-700"
                        : "border-gray-200 bg-white/40 text-gray-600 hover:border-blue-300"
                    }`}
                  >
                    <FaBuilding />
                    Space Owner
                  </button>

                </div>
              </div>

              
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/60 px-4 py-3 focus-within:border-blue-500">
                  <FaLock className="text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-gray-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-blue-600"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Confirm Password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/60 px-4 py-3 focus-within:border-blue-500">
                  <FaLock className="text-gray-400" />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-gray-400"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="text-gray-400 hover:text-blue-600"
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              
              <label className="flex cursor-pointer items-start gap-2 text-sm leading-6 text-gray-500">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-blue-600"
                />
                <span>
                  I agree to the{" "}
                  <Link to="/terms" className="font-semibold text-blue-600">
                    Terms & Conditions
                  </Link>
                  {" "}and{" "}
                  <Link to="/privacy" className="font-semibold text-blue-600">
                    Privacy Policy
                  </Link>.
                </span>
              </label>

             
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:bg-blue-700"
              >
                Create Account
                <FaArrowRight />
              </button>

            </form>

            
            <div className="mt-7 border-t border-gray-200/70 pt-6 text-center">
              <p className="text-sm text-gray-500">
                Already have an account?
                <Link
                  to="/login"
                  className="ml-1 font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  Sign In
                </Link>
              </p>
            </div>

          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            © 2026 StudySpace. All rights reserved.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;
