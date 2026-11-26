import React, { useState, useEffect } from "react";
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
  FaLock,
} from "react-icons/fa";
import { getClosures, SAMPLE_SPACES } from "../utils/closureStore";

const ExploreSpaces = () => {
  const [closures, setClosures] = useState([]);

  useEffect(() => {
    setClosures(getClosures());
  }, []);

  function getSpaceClosure(spaceId) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return closures.find((c) => {
      if (c.spaceId !== spaceId) return false;
      if (c.status === "resolved") return false;
      const start = new Date(c.startDate);
      if (c.type === "permanent") return today >= start;
      const end = new Date(c.endDate);
      return today >= start && today <= end;
    }) || null;
  }

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
    <div className="min-h-screen bg-[#F5F0E8]">

      {/* Hero */}
      <section className="bg-[#1C1917]">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-14 pb-16">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-6 h-px bg-[#C17A56]" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
              Discover Your Space
            </span>
          </div>

          <h1
            className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Find a Place Where
            <span className="text-[#C17A56]"> Focus Begins.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-[#A09A93]">
            Explore libraries, reading rooms and productive workspaces. Find
            an environment that matches your lifestyle and budget.
          </p>

          {/* Search bar */}
          <div className="mt-10 flex max-w-4xl flex-col gap-0 border border-[#2E2925] bg-[#2E2925] md:flex-row">
            <div className="flex flex-1 items-center gap-3 px-5 py-4">
              <FaMapMarkerAlt className="text-sm text-[#C17A56]" />
              <input
                type="text"
                readOnly
                placeholder="Enter city or location"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[#7C6F60]"
              />
            </div>

            <div className="hidden w-px bg-[#3E3832] md:block" />

            <div className="flex-1 px-5">
              <select
                defaultValue="All Spaces"
                className="w-full bg-transparent py-4 text-sm text-[#A09A93] outline-none"
              >
                {categories.map((item) => (
                  <option key={item} value={item} className="bg-[#1C1917] text-white">
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-[#C17A56] px-8 py-4 text-sm font-bold tracking-[0.08em] uppercase text-white transition hover:bg-[#A8663F]"
            >
              <FaSearch size={12} />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="bg-white border-b border-[#EDE8DF]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map((cat, i) => (
              <button
                key={cat}
                type="button"
                className={`whitespace-nowrap px-5 py-4 text-xs font-bold tracking-[0.08em] uppercase transition border-b-2 ${
                  i === 0
                    ? "border-[#C17A56] text-[#1C1917]"
                    : "border-transparent text-[#A09A93] hover:text-[#1C1917]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

          {/* Filters sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white border border-[#EDE8DF] p-6">

              <div className="mb-7 flex items-center justify-between border-b border-[#EDE8DF] pb-5">
                <h2 className="flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#1C1917]">
                  <FaSlidersH className="text-[#C17A56]" size={12} />
                  Filters
                </h2>
                <button
                  type="button"
                  className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#C17A56] hover:text-[#A8663F] transition"
                >
                  Clear All
                </button>
              </div>

              {/* Category */}
              <div className="mb-7">
                <h3 className="mb-5 text-[10px] font-bold tracking-[0.15em] uppercase text-[#7C6F60]">
                  Space Category
                </h3>
                <div className="space-y-3">
                  {categories.map((item, index) => (
                    <label
                      key={item}
                      className="group flex cursor-pointer items-center gap-3 text-[#7C6F60]"
                    >
                      <input
                        type="radio"
                        name="category"
                        defaultChecked={index === 0}
                        className="h-3.5 w-3.5 accent-[#1C1917]"
                      />
                      <span className="text-xs transition group-hover:text-[#1C1917]">
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-7 h-px bg-[#EDE8DF]" />

              {/* Budget */}
              <div className="mb-7">
                <h3 className="mb-5 text-[10px] font-bold tracking-[0.15em] uppercase text-[#7C6F60]">
                  Monthly Budget
                </h3>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  defaultValue="1000"
                  className="w-full accent-[#C17A56]"
                />
                <div className="mt-3 flex justify-between text-xs text-[#A09A93]">
                  <span>₹100</span>
                  <span className="font-bold text-[#1C1917]">₹1,000</span>
                  <span>₹5,000</span>
                </div>
              </div>

              <div className="mb-7 h-px bg-[#EDE8DF]" />

              {/* Facilities */}
              <div>
                <h3 className="mb-5 text-[10px] font-bold tracking-[0.15em] uppercase text-[#7C6F60]">
                  Facilities
                </h3>
                <div className="space-y-3">
                  {facilityOptions.map((facility) => (
                    <label
                      key={facility.name}
                      className="group flex cursor-pointer items-center gap-3 text-[#7C6F60]"
                    >
                      <input
                        type="checkbox"
                        className="h-3.5 w-3.5 accent-[#1C1917]"
                      />
                      <span className="flex items-center gap-2 text-xs transition group-hover:text-[#1C1917]">
                        <span className="text-[#C17A56]">{facility.icon}</span>
                        {facility.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results area */}
          <div className="lg:col-span-3">

            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2
                  className="text-2xl font-bold text-[#1C1917]"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Explore Study Spaces
                </h2>
                <p className="mt-1 text-xs text-[#7C6F60] tracking-wide">
                  Discover places that match your preferences.
                </p>
              </div>

              <select
                defaultValue="recommended"
                className="border border-[#D4C5A9] bg-white px-4 py-3 text-xs font-medium tracking-wide text-[#7C6F60] outline-none"
              >
                <option value="recommended">Sort: Recommended</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Active Filters */}
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="flex items-center gap-2 bg-[#1C1917] text-white px-3 py-1.5 text-[10px] font-bold tracking-[0.08em] uppercase">
                All Spaces
                <FaTimes size={9} />
              </span>
            </div>

            {/* Space Cards */}
            <div className="space-y-4">
              {SAMPLE_SPACES.map((space) => {
                const closure = getSpaceClosure(space.id);
                const isClosed = !!closure;
                return (
                  <div
                    key={space.id}
                    className={`relative border bg-white transition ${
                      isClosed
                        ? "border-[#D4C5A9] opacity-80"
                        : "border-[#EDE8DF] hover:border-[#C17A56]/40"
                    }`}
                  >
                    {/* Closure banner */}
                    {closure && (
                      <div
                        className={`flex items-center gap-2 px-5 py-2 text-xs font-semibold ${
                          closure.type === "permanent"
                            ? "bg-[#1C1917] text-white"
                            : "bg-amber-50 text-amber-700 border-b border-amber-200"
                        }`}
                      >
                        <FaLock size={10} />
                        {closure.type === "permanent"
                          ? "Permanently Closed"
                          : `Temporarily Closed until ${new Date(closure.endDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}`}
                        {" · "}
                        {closure.reason}
                      </div>
                    )}

                    <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                      {/* Icon box */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]">
                        <FaBookOpen size={20} />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h3
                              className="font-bold text-[#1C1917]"
                              style={{ fontFamily: "'Georgia', serif" }}
                            >
                              {space.name}
                            </h3>
                            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-[#7C6F60]">
                              <FaMapMarkerAlt size={10} className="text-[#C17A56]" />
                              {space.location}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-[#1C1917]">
                              ₹{space.pricePerDay}
                              <span className="text-xs font-normal text-[#A09A93]">/day</span>
                            </p>
                            <p className="text-xs text-[#7C6F60]">Capacity: {space.capacity}</p>
                          </div>
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="border border-[#EDE8DF] bg-[#F5F0E8] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#7C6F60]">
                            {space.type}
                          </span>
                          {space.facilities.slice(0, 3).map((f) => (
                            <span key={f} className="text-[11px] text-[#A09A93]">
                              · {f}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                        {isClosed ? (
                          <span className="inline-flex items-center gap-2 border border-[#D4C5A9] bg-[#F5F0E8] px-4 py-2.5 text-xs font-bold tracking-[0.08em] uppercase text-[#A09A93]">
                            <FaLock size={10} />
                            Unavailable
                          </span>
                        ) : (
                          <button
                            type="button"
                            className="inline-flex items-center gap-2 bg-[#1C1917] px-4 py-2.5 text-xs font-bold tracking-[0.08em] uppercase text-white transition hover:bg-[#C17A56]"
                          >
                            View Details
                            <FaArrowRight size={10} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreSpaces;
