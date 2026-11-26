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
    <div className="bg-[#F5F0E8] px-5 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="w-6 h-px bg-[#C17A56]" />
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
              Student Dashboard
            </p>
          </div>
          <h1
            className="text-3xl font-bold tracking-tight text-[#1C1917] md:text-4xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            My Profile
          </h1>
          <p className="mt-2 text-[#7C6F60]">
            Manage your personal information and account settings.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Profile Card */}
          <div className="h-fit border border-[#EDE8DF] bg-white p-7 text-center">
            <div className="relative mx-auto mb-5 flex h-28 w-28 items-center justify-center bg-[#1C1917] text-white">
              <FaUser size={40} />

              <button
                type="button"
                className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center border-4 border-white bg-[#C17A56] text-white"
              >
                <FaCamera size={13} />
              </button>
            </div>

            <h2
              className="text-xl font-bold text-[#1C1917]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Student Name
            </h2>

            <p className="mt-1 text-sm text-[#7C6F60]">student@example.com</p>

            <div className="mt-5 inline-flex items-center gap-2 border border-[#EDE8DF] bg-[#F5F0E8] px-4 py-2 text-sm font-semibold text-[#1C1917]">
              <FaGraduationCap className="text-[#C17A56]" />
              Student Account
            </div>

            <div className="mt-7 border-t border-[#EDE8DF] pt-5 text-left">
              <p className="mb-3 text-sm font-semibold text-[#1C1917]">
                Account Information
              </p>

              <div className="flex items-center gap-3 text-sm text-[#7C6F60]">
                <FaLock className="text-[#C17A56]" />
                Account Security
              </div>

              <p className="mt-2 text-xs text-[#A09A93]">
                Your account information is managed securely.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="border border-[#EDE8DF] bg-white p-6 lg:col-span-2 md:p-8">
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-bold text-[#1C1917]">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm text-[#7C6F60]">
                  Update your personal details below.
                </p>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 border border-[#D4C5A9] bg-white px-4 py-2.5 text-sm font-semibold text-[#1C1917] transition hover:bg-[#F5F0E8]"
              >
                <FaEdit />
                Edit Profile
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                  Full Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A09A93]" />
                  <input
                    type="text"
                    placeholder="Student Name"
                    readOnly
                    className="w-full border border-[#D4C5A9] bg-white py-3 pl-11 pr-4 text-sm text-[#1C1917] outline-none placeholder:text-[#C5B9AB] focus:border-[#1C1917]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A09A93]" />
                  <input
                    type="email"
                    placeholder="student@example.com"
                    readOnly
                    className="w-full border border-[#D4C5A9] bg-white py-3 pl-11 pr-4 text-sm text-[#1C1917] outline-none placeholder:text-[#C5B9AB] focus:border-[#1C1917]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                  Phone Number
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A09A93]" />
                  <input
                    type="tel"
                    placeholder="Not provided"
                    readOnly
                    className="w-full border border-[#D4C5A9] bg-white py-3 pl-11 pr-4 text-sm text-[#1C1917] outline-none placeholder:text-[#C5B9AB] focus:border-[#1C1917]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                  College / Institution
                </label>
                <div className="relative">
                  <FaGraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A09A93]" />
                  <input
                    type="text"
                    placeholder="Not provided"
                    readOnly
                    className="w-full border border-[#D4C5A9] bg-white py-3 pl-11 pr-4 text-sm text-[#1C1917] outline-none placeholder:text-[#C5B9AB] focus:border-[#1C1917]"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                  Location
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A09A93]" />
                  <input
                    type="text"
                    placeholder="Not provided"
                    readOnly
                    className="w-full border border-[#D4C5A9] bg-white py-3 pl-11 pr-4 text-sm text-[#1C1917] outline-none placeholder:text-[#C5B9AB] focus:border-[#1C1917]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-end gap-3 border-t border-[#EDE8DF] pt-6">
              <button
                type="button"
                className="border border-[#D4C5A9] bg-white px-5 py-3 text-sm font-semibold text-[#7C6F60] transition hover:bg-[#F5F0E8]"
              >
                Cancel
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 bg-[#1C1917] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#C17A56]"
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
