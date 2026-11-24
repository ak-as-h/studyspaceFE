import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCamera,
  FaLock,
  FaEdit,
  FaSave,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="px-5 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">

        
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Student Dashboard
          </p>
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            My Profile
          </h1>
          <p className="mt-2 text-slate-500">
            Manage your personal information and account settings.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          
          <div className="h-fit rounded-3xl border border-white/70 bg-white/35 p-7 text-center shadow-xl shadow-slate-900/5 backdrop-blur-2xl">
            <div className="relative mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
              <FaUser size={40} />

              <button
                type="button"
                className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white"
              >
                <FaCamera size={13} />
              </button>
            </div>

            <h2 className="text-xl font-bold text-slate-900">Student Name</h2>

            <p className="mt-1 text-sm text-slate-500">student@example.com</p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <FaGraduationCap />
              Student Account
            </div>

            <div className="mt-7 border-t border-slate-200 pt-5 text-left">
              <p className="mb-3 text-sm font-semibold text-slate-700">
                Account Information
              </p>

              <div className="flex items-center gap-3 text-sm text-slate-500">
                <FaLock className="text-blue-600" />
                Account Security
              </div>

              <p className="mt-2 text-xs text-slate-400">
                Your account information is managed securely.
              </p>
            </div>
          </div>

          
          <div className="rounded-3xl border border-white/70 bg-white/35 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl lg:col-span-2 md:p-8">
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Update your personal details below.
                </p>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-300/40 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-lg transition hover:bg-blue-500/20"
              >
                <FaEdit />
                Edit Profile
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Student Name"
                    readOnly
                    className="w-full rounded-xl border border-white/70 bg-white/40 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none backdrop-blur-lg placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    placeholder="student@example.com"
                    readOnly
                    className="w-full rounded-xl border border-white/70 bg-white/40 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none backdrop-blur-lg placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    placeholder="Not provided"
                    readOnly
                    className="w-full rounded-xl border border-white/70 bg-white/40 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none backdrop-blur-lg placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  College / Institution
                </label>
                <div className="relative">
                  <FaGraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Not provided"
                    readOnly
                    className="w-full rounded-xl border border-white/70 bg-white/40 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none backdrop-blur-lg placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Location
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Not provided"
                    readOnly
                    className="w-full rounded-xl border border-white/70 bg-white/40 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none backdrop-blur-lg placeholder:text-slate-500"
                  />
                </div>
              </div>
            </div>

          
            <div className="mt-8 flex flex-wrap justify-end gap-3 border-t border-slate-200 pt-6">
              <button
                type="button"
                className="rounded-xl border border-white/70 bg-white/40 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-lg transition hover:bg-white/60"
              >
                Cancel
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-600/90 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 backdrop-blur-lg transition hover:bg-blue-700"
              >
                <FaSave />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
