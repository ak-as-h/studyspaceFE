
import React from "react";

import {
  FaSearch,
  FaMapMarkerAlt,
  FaSlidersH,
  FaWifi,
  FaSnowflake,
  FaCar,
  FaBookOpen,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

const ExploreSpaces = () => {
  const facilityOptions = [
    { name: "Wi-Fi", icon: <FaWifi /> },
    { name: "Air Conditioning", icon: <FaSnowflake /> },
    { name: "Parking", icon: <FaCar /> },
  ];

  const categories = [
    "All Spaces",
    "Libraries",
    "Reading Rooms",
    "Coworking Spaces",
    "Private Cabins",
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#F5F5F1] via-[#EAF1FA] to-[#FAFAF8]">

      
      <section className="relative overflow-hidden bg-[#F5F5F1]">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20">
          <div className="max-w-3xl">
            <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-wider text-blue-600">
              Discover Your Space
            </span>

            <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Find a Place Where
              <span className="text-blue-600"> Focus Begins.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-500 md:text-lg">
              Explore libraries, reading rooms and productive workspaces. Find
              an environment that matches your lifestyle and budget.
            </p>
          </div>

          
          <div className="mt-10 flex max-w-5xl flex-col gap-4 rounded-2xl border border-white/60 bg-white/40 p-5 shadow-xl backdrop-blur-2xl md:flex-row">
            <div className="flex flex-1 items-center gap-3 px-3">
              <FaMapMarkerAlt className="text-lg text-blue-600" />

              <input
                type="text"
                readOnly
                placeholder="Enter city or location"
                className="w-full bg-transparent py-2 text-gray-800 outline-none placeholder:text-gray-500"
              />
            </div>

            <div className="hidden w-px bg-gray-200 md:block"></div>

            <div className="flex-1 px-3">
              <select
                defaultValue="All Spaces"
                className="w-full bg-transparent py-2 text-gray-700 outline-none"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-medium text-white transition duration-300 hover:bg-blue-700"
            >
              <FaSearch />
              Search Spaces
            </button>
          </div>
        </div>
      </section>

      
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

         
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-white/70 bg-white/60 p-6 shadow-lg backdrop-blur-xl">

              <div className="mb-7 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <FaSlidersH className="text-blue-600" />
                  Filters
                </h2>

                <button
                  type="button"
                  className="text-sm font-medium text-blue-600 transition hover:text-blue-800"
                >
                  Clear All
                </button>
              </div>

             
              <div className="mb-7">
                <h3 className="mb-5 font-semibold text-slate-800">
                  Space Category
                </h3>

                <div className="space-y-4">
                  {categories.map((item, index) => (
                    <label
                      key={item}
                      className="group flex cursor-pointer items-center gap-3 text-gray-600"
                    >
                      <input
                        type="radio"
                        name="category"
                        defaultChecked={index === 0}
                        className="h-4 w-4 accent-blue-600"
                      />

                      <span className="text-sm transition group-hover:text-blue-600">
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="mb-7 border-gray-100" />

             
              <div className="mb-7">
                <h3 className="mb-5 font-semibold text-slate-800">
                  Maximum Monthly Budget
                </h3>

                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  defaultValue="1000"
                  className="w-full accent-blue-600"
                />

                <div className="mt-3 flex justify-between text-sm text-gray-400">
                  <span>₹100</span>
                  <span className="font-bold text-blue-600">₹1,000</span>
                  <span>₹5,000</span>
                </div>
              </div>

              <hr className="mb-7 border-gray-100" />

              
              <div>
                <h3 className="mb-5 font-semibold text-slate-800">
                  Facilities
                </h3>

                <div className="space-y-4">
                  {facilityOptions.map((facility) => (
                    <label
                      key={facility.name}
                      className="group flex cursor-pointer items-center gap-3 text-gray-600"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-blue-600"
                      />

                      <span className="flex items-center gap-3 text-sm transition group-hover:text-blue-600">
                        <span className="text-gray-400">
                          {facility.icon}
                        </span>

                        {facility.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          
          <div className="lg:col-span-3">

            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Explore Study Spaces
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Discover places that match your preferences.
                </p>
              </div>

              <select
                defaultValue="recommended"
                className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none"
              >
                <option value="recommended">Sort by: Recommended</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Active Filters - Static UI */}
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700">
                All Spaces
                <FaTimes size={11} />
              </span>
            </div>

         
            <div
              className="flex flex-col items-center justify-center rounded-2xl border border-white/70 bg-white/50 px-6 py-12 text-center shadow-lg backdrop-blur-xl"
              style={{ minHeight: "430px" }}
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
                <FaBookOpen className="text-3xl text-blue-600" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
                Your Next Study Space Awaits
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-gray-500">
                Study spaces will appear here once they are added to StudySpace.
                You will be able to compare facilities, explore pricing and find
                the perfect place to focus.
              </p>

              <button
                type="button"
                className="mt-7 flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
              >
                Clear All Filters
                <FaArrowRight />
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreSpaces;
