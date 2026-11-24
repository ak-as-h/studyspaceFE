
import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaWifi,
  FaSnowflake,
  FaCar,
  FaArrowLeft,
  FaBookOpen,
  FaClock,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const SpaceDetails = () => {
  const facilities = [
    { name: "Wi-Fi", icon: <FaWifi /> },
    { name: "Air Conditioning", icon: <FaSnowflake /> },
    { name: "Parking", icon: <FaCar /> },
  ];

  const benefits = [
    "Flexible booking options",
    "Comfortable study environment",
    "Easy reservation process",
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#F5F5F1] via-[#EAF1FA] to-[#FAFAF8]">

      
      <div className="mx-auto max-w-7xl px-6 pt-8">
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-blue-600"
        >
          <FaArrowLeft />
          Back to Explore
        </Link>
      </div>

      
      <section className="mx-auto max-w-7xl px-6 py-8">

        
        <div className="mb-7">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Study Space Details
          </h1>

          <p className="mt-3 flex items-center gap-2 text-sm text-gray-500">
            <FaMapMarkerAlt className="text-blue-600" />
            Location details will appear here
          </p>
        </div>

       
        <div className="grid grid-cols-1 gap-4 overflow-hidden rounded-3xl md:grid-cols-2">

          <div className="h-72 overflow-hidden md:h-105">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
              alt="Study workspace"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 overflow-hidden md:h-52">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                alt="Workspace interior"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-32 overflow-hidden md:h-52">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
                alt="Study area"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-32 overflow-hidden md:h-52">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
                alt="Reading area"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-32 overflow-hidden md:h-52">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                alt="Private workspace"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

        </div>

        
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">

          
          <div className="space-y-8 lg:col-span-2">

            
            <div className="rounded-2xl border border-white/70 bg-white/50 p-6 shadow-lg backdrop-blur-xl">
              <h2 className="text-xl font-bold text-slate-900">
                About This Space
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Explore a comfortable and peaceful study environment
                designed to help students stay focused and productive.
                Enjoy a convenient space for individual learning and
                collaborative work.
              </p>
            </div>

            
            <div className="rounded-2xl border border-white/70 bg-white/50 p-6 shadow-lg backdrop-blur-xl">
              <h2 className="text-xl font-bold text-slate-900">
                Facilities & Amenities
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {facilities.map((facility) => (
                  <div
                    key={facility.name}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      {facility.icon}
                    </span>
                    {facility.name}
                  </div>
                ))}
              </div>
            </div>

            
            <div className="rounded-2xl border border-white/70 bg-white/50 p-6 shadow-lg backdrop-blur-xl">
              <h2 className="text-xl font-bold text-slate-900">
                Space Information
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">

                <div className="flex items-center gap-3">
                  <FaClock className="text-xl text-blue-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Operating Hours
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      8:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaUsers className="text-xl text-blue-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Capacity
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Space information available soon
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          
          <aside>
            <div className="sticky top-24 rounded-2xl border border-white/70 bg-white/60 p-6 shadow-xl backdrop-blur-2xl">

              <p className="text-sm text-gray-500">
                Starting from
              </p>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-slate-900">
                  ₹500
                </span>
                <span className="text-sm text-gray-500">
                  / month
                </span>
              </div>

              <div className="my-6 border-t border-gray-200/70" />

              <h3 className="font-semibold text-slate-900">
                Booking Benefits
              </h3>

              <div className="mt-5 space-y-4">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <FaCheckCircle className="text-green-600" />
                    {item}
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="mt-8 w-full rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Book This Space
              </button>

            </div>
          </aside>

        </div>
      </section>
    </div>
  );
};

export default SpaceDetails;
