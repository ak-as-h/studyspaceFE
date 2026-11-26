import React from "react";
import {
  FaBuilding,
  FaPlus,
  FaArrowLeft,
  FaArrowRight,
  FaMapMarkerAlt,
  FaWifi,
  FaSnowflake,
  FaCar,
  FaUsers,
  FaBook,
  FaImage,
  FaUpload,
  FaCheck,
  FaRupeeSign,
  FaBookOpen,
} from "react-icons/fa";

const AddSpace = () => {
  const facilities = [
    { name: "High-speed Wi-Fi", icon: <FaWifi /> },
    { name: "Air Conditioning", icon: <FaSnowflake /> },
    { name: "Parking", icon: <FaCar /> },
    { name: "Group Study", icon: <FaUsers /> },
    { name: "Library", icon: <FaBook /> },
  ];

  const steps = [
    "Basic Details",
    "Location",
    "Facilities",
    "Pricing",
    "Photos",
  ];

  return (
    <div className="p-4 md:p-8 lg:p-10 bg-[#F5F0E8] min-h-screen">

      {/* Page Header */}
      <div className="mb-8">
        <p className="text-sm text-[#7C6F60]">Owner Portal / My Spaces</p>
        <h1
          className="mt-1 text-2xl font-bold text-[#1C1917] md:text-3xl"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Create a Listing
        </h1>
      </div>

      {/* Hero Banner */}
      <section className="relative mb-8 overflow-hidden bg-[#1C1917] p-7 text-white md:p-10">
        <div className="relative z-10 max-w-xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#C17A56]" />
            <span className="border border-[#C17A56]/30 bg-[#C17A56]/10 px-4 py-2 text-xs font-medium text-[#C17A56]">
              NEW PROPERTY LISTING
            </span>
          </div>

          <h2
            className="mt-6 text-3xl font-bold leading-tight md:text-4xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Bring your space
            <br />
            to the right audience.
          </h2>

          <p className="mt-4 max-w-md text-sm leading-6 text-[#A09A93]">
            Showcase your property, highlight its best features and make it
            easier for students to discover their ideal study environment.
          </p>
        </div>
      </section>

      {/* Progress */}
      <section className="mb-8 border border-[#EDE8DF] bg-white p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-[#1C1917]">Listing Progress</h3>
            <p className="mt-1 text-sm text-[#7C6F60]">
              Complete the sections below to prepare your listing.
            </p>
          </div>
          <span className="text-sm font-semibold text-[#C17A56]">01 / 05</span>
        </div>

        <div className="mb-5 h-2 overflow-hidden bg-[#EDE8DF]">
          <div className="h-full w-1/5 bg-[#C17A56]" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center text-xs font-bold ${
                  index === 0
                    ? "bg-[#1C1917] text-white"
                    : "bg-[#EDE8DF] text-[#A09A93]"
                }`}
              >
                {index === 0 ? <FaCheck /> : index + 1}
              </div>
              <span
                className={`text-xs font-medium ${
                  index === 0 ? "text-[#1C1917]" : "text-[#A09A93]"
                }`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 items-start gap-7 xl:grid-cols-3">

        {/* Form sections */}
        <div className="space-y-7 xl:col-span-2">

          {/* Basic Details */}
          <section className="border border-[#EDE8DF] bg-white p-6 md:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]">
                <FaBuilding size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#1C1917]">
                  Tell us about your space
                </h2>
                <p className="text-sm text-[#7C6F60]">
                  Start with the essential property information.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                  Property Name
                </label>
                <input
                  readOnly
                  placeholder="e.g. The Reading Lounge"
                  className="w-full border border-[#D4C5A9] bg-white px-4 py-3.5 text-sm outline-none placeholder:text-[#C5B9AB] focus:border-[#1C1917]"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                    Property Type
                  </label>
                  <select
                    defaultValue=""
                    className="w-full border border-[#D4C5A9] bg-white px-4 py-3.5 text-sm text-[#7C6F60] outline-none"
                  >
                    <option value="" disabled>
                      Select space type
                    </option>
                    <option>Library</option>
                    <option>Reading Room</option>
                    <option>Coworking Space</option>
                    <option>Private Cabin</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                    Seating Capacity
                  </label>
                  <input
                    readOnly
                    type="number"
                    placeholder="Total seats"
                    className="w-full border border-[#D4C5A9] bg-white px-4 py-3.5 text-sm outline-none placeholder:text-[#C5B9AB] focus:border-[#1C1917]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                  About Your Space
                </label>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Describe the atmosphere, seating arrangements and what makes your space special..."
                  className="w-full resize-none border border-[#D4C5A9] bg-white px-4 py-3.5 text-sm outline-none placeholder:text-[#C5B9AB] focus:border-[#1C1917]"
                />
              </div>
            </div>
          </section>

          {/* Location */}
          <section className="border border-[#EDE8DF] bg-white p-6 md:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#1C1917]">
                  Where is your space located?
                </h2>
                <p className="text-sm text-[#7C6F60]">
                  Help students find you easily.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                  Full Address
                </label>
                <input
                  readOnly
                  placeholder="Street name, building and landmark"
                  className="w-full border border-[#D4C5A9] bg-white px-4 py-3.5 text-sm outline-none placeholder:text-[#C5B9AB] focus:border-[#1C1917]"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {["City", "State", "PIN Code"].map((item) => (
                  <div key={item}>
                    <label className="mb-2 block text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                      {item}
                    </label>
                    <input
                      readOnly
                      placeholder={`Enter ${item.toLowerCase()}`}
                      className="w-full border border-[#D4C5A9] bg-white px-4 py-3.5 text-sm outline-none placeholder:text-[#C5B9AB] focus:border-[#1C1917]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Facilities */}
          <section className="border border-[#EDE8DF] bg-white p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-[#1C1917]">
                What does your space offer?
              </h2>
              <p className="mt-1 text-sm text-[#7C6F60]">
                Highlight the facilities available to visitors.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {facilities.map((facility) => (
                <label
                  key={facility.name}
                  className="flex items-center gap-3 border border-[#D4C5A9] p-4 transition hover:border-[#C17A56] hover:bg-[#F5F0E8]"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-[#1C1917]"
                  />
                  <span className="text-lg text-[#C17A56]">
                    {facility.icon}
                  </span>
                  <span className="text-sm font-medium text-[#1C1917]">
                    {facility.name}
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section className="border border-[#EDE8DF] bg-white p-6 md:p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-[#A09A93]">
                <FaRupeeSign size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#1C1917]">
                  Set your pricing
                </h2>
                <p className="text-sm text-[#7C6F60]">
                  Choose suitable rates for your visitors.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { title: "Hourly Rate", hint: "Per hour" },
                { title: "Daily Rate", hint: "Per day" },
                { title: "Monthly Rate", hint: "Per month" },
              ].map((price) => (
                <div
                  key={price.title}
                  className="border border-[#D4C5A9] bg-[#F5F0E8] p-4"
                >
                  <p className="text-xs font-bold tracking-[0.08em] uppercase text-[#1C1917]">
                    {price.title}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-lg font-semibold text-[#A09A93]">
                      ₹
                    </span>
                    <input
                      readOnly
                      type="number"
                      placeholder="0"
                      className="w-full min-w-0 bg-transparent text-xl font-bold text-[#1C1917] outline-none placeholder:text-[#C5B9AB]"
                    />
                  </div>
                  <p className="mt-2 text-xs text-[#A09A93]">{price.hint}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Photos */}
          <section className="border border-[#EDE8DF] bg-white p-6 md:p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]">
                <FaImage size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#1C1917]">
                  Make a great first impression
                </h2>
                <p className="text-sm text-[#7C6F60]">
                  Add photos that showcase your property.
                </p>
              </div>
            </div>

            <div className="border-2 border-dashed border-[#D4C5A9] bg-[#F5F0E8] px-5 py-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#EDE8DF] bg-white text-[#C17A56]">
                <FaUpload size={24} />
              </div>
              <h3 className="mt-5 font-bold text-[#1C1917]">
                Drop your images here
              </h3>
              <p className="mt-2 text-sm text-[#7C6F60]">
                Showcase your interiors, seating and study environment.
              </p>
              <button
                type="button"
                className="mt-5 bg-[#1C1917] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C17A56]"
              >
                Browse Images
              </button>
              <p className="mt-4 text-xs text-[#A09A93]">JPG, PNG or JPEG</p>
            </div>
          </section>

          {/* Actions */}
          <div className="flex flex-col justify-between gap-4 border border-[#EDE8DF] bg-white p-5 sm:flex-row sm:items-center">
            <button
              type="button"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-[#7C6F60]"
            >
              <FaArrowLeft />
              Back
            </button>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="border border-[#D4C5A9] px-6 py-3 text-sm font-semibold text-[#1C1917]"
              >
                Save Draft
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-[#1C1917] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C17A56]"
              >
                Continue
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Aside */}
        <aside className="space-y-6 xl:sticky xl:top-8">

          {/* Preview */}
          <div className="overflow-hidden border border-[#EDE8DF] bg-white">
            <div className="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900"
                alt="Modern workspace preview"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 bg-white px-3 py-1.5 text-xs font-semibold text-[#1C1917]">
                LISTING PREVIEW
              </span>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-3">
                <span className="w-4 h-px bg-[#C17A56]" />
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                  YOUR PROPERTY
                </p>
              </div>
              <h3 className="mt-2 text-xl font-bold text-[#1C1917]" style={{ fontFamily: "'Georgia', serif" }}>
                Your Space Name
              </h3>

              <p className="mt-2 flex items-center gap-2 text-sm text-[#A09A93]">
                <FaMapMarkerAlt />
                Your location will appear here
              </p>

              <div className="my-5 border-t border-[#EDE8DF]" />

              <div className="flex items-center justify-between">
                <span className="text-sm text-[#7C6F60]">Starting from</span>
                <span className="text-xl font-bold text-[#1C1917]">₹ --</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="border border-[#EDE8DF] bg-[#F5F0E8] px-3 py-2 text-xs font-medium text-[#1C1917]">
                  Space Type
                </span>
                <span className="border border-[#EDE8DF] bg-[#F5F0E8] px-3 py-2 text-xs font-medium text-[#7C6F60]">
                  Facilities
                </span>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-[#1C1917] p-6 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-white/10 border border-white/10">
                <FaBookOpen />
              </div>
              <h3 className="font-bold">Listing Tips</h3>
            </div>

            <div className="mt-5 space-y-4 text-sm leading-6 text-[#A09A93]">
              <p className="flex gap-3">
                <FaCheck className="mt-1 shrink-0 text-[#C17A56]" />
                Use a clear and memorable property name.
              </p>
              <p className="flex gap-3">
                <FaCheck className="mt-1 shrink-0 text-[#C17A56]" />
                Add accurate location information.
              </p>
              <p className="flex gap-3">
                <FaCheck className="mt-1 shrink-0 text-[#C17A56]" />
                Highlight all available facilities.
              </p>
              <p className="flex gap-3">
                <FaCheck className="mt-1 shrink-0 text-[#C17A56]" />
                Use attractive and clear property photos.
              </p>
            </div>
          </div>

          {/* Admin note */}
          <div className="border border-[#EDE8DF] bg-[#F5F0E8] p-5">
            <p className="text-sm font-bold text-[#1C1917]">
              <FaCheck className="mr-2 inline text-[#C17A56]" />
              Admin Verification
            </p>
            <p className="mt-2 text-sm leading-6 text-[#7C6F60]">
              Your property listing will be reviewed by the administrator
              before being published.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AddSpace;
