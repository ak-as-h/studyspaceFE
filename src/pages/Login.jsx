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
    <div className="min-h-screen bg-linear-to-br from-[#F5F5F1] via-[#EAF1FA] to-[#FAFAF8] px-5 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
       
        <div className="hidden lg:block">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-4 py-2 text-sm font-semibold text-blue-600">
            <FaBookOpen />
            Welcome Back to StudySpace
          </span>

          <h1 className="mt-7 text-5xl font-bold leading-tight text-slate-900">
            Your Next
            <span className="text-blue-600"> Productive </span>
            Session Starts Here.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-gray-500">
            Sign in to discover peaceful study spaces, manage your bookings and
            make every study session count.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/70 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
              alt="Modern study workspace"
              className="w-full object-cover"
            />
          </div>
        </div>

        
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-white/70 bg-white/50 p-7 shadow-2xl backdrop-blur-2xl sm:p-10">
            
            <Link to="/" className="mb-8 flex items-center gap-2">
              <div className="rounded-xl bg-blue-600 p-3 text-white">
                <FaBookOpen className="text-xl" />
              </div>

              <span className="text-2xl font-bold text-slate-900">
                Study<span className="text-blue-600">Space</span>
              </span>
            </Link>

            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">
                Welcome Back!
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Sign in to continue your study journey.
              </p>
            </div>

            
            <form className="space-y-6">
              
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/60 px-4 py-3 transition focus-within:border-blue-500">
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
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/60 px-4 py-3 transition focus-within:border-blue-500">
                  <FaLock className="text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-gray-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 transition hover:text-blue-600"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              
              <div className="flex flex-wrap items-center justify-between gap-3">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="h-4 w-4 accent-blue-600" />
                  Remember me
                </label>
              </div>

              
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:bg-blue-700"
              >
                Sign In
                <FaArrowRight />
              </button>
            </form>

            
            <div className="mt-8 border-t border-gray-200/70 pt-6 text-center">
              <p className="text-sm text-gray-500">
                Don't have an account?
                <Link
                  to="/register"
                  className="ml-1 font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  Create Account
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

export default Login;
