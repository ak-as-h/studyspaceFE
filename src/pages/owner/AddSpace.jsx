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
    <div className="p-4 md:p-8 lg:p-10">

     
      <div className="mb-8">
        <p className="text-sm text-gray-500">Owner Portal / My Spaces</p>
        <h1 className="mt-1 text-2xl font-bold text-[#101B35] md:text-3xl">
          Create a Listing
        </h1>
      </div>

      
      <section className="relative mb-8 overflow-hidden rounded-3xl bg-[#14294C] p-7 text-white md:p-10">
        <div className="relative z-10 max-w-xl">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-blue-100">
            NEW PROPERTY LISTING
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
            Bring your space
            <br />
            to the right audience.
          </h2>

          <p className="mt-4 max-w-md text-sm leading-6 text-blue-100">
            Showcase your property, highlight its best features and make it
            easier for students to discover their ideal study environment.
          </p>
        </div>

        <div
          className="pointer-events-none absolute -right-10 -top-16 hidden h-80 w-80 rounded-full border-white/5 md:block"
          style={{ border: "35px" }}
        />
        <div className="pointer-events-none absolute bottom-0 right-10 hidden h-48 w-48 rounded-full bg-blue-500/20 blur-3xl md:block" />
      </section>

      
      <section className="mb-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-[#101B35]">Listing Progress</h3>
            <p className="mt-1 text-sm text-gray-500">
              Complete the sections below to prepare your listing.
            </p>
          </div>
          <span className="text-sm font-semibold text-blue-600">01 / 05</span>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-gray-100">
          <div className="h-full w-1/5 rounded-full bg-blue-600" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {index === 0 ? <FaCheck /> : index + 1}
              </div>
              <span
                className={`text-xs font-medium ${
                  index === 0 ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </section>

     
      <div className="grid grid-cols-1 items-start gap-7 xl:grid-cols-3">

        
        <div className="space-y-7 xl:col-span-2">

          
          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <FaBuilding size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#101B35]">
                  Tell us about your space
                </h2>
                <p className="text-sm text-gray-500">
                  Start with the essential property information.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Property Name
                </label>
                <input
                  readOnly
                  placeholder="e.g. The Reading Lounge"
                  className="w-full rounded-xl border border-gray-200 bg-[#F9FAFC] px-4 py-3.5 text-sm outline-none placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Property Type
                  </label>
                  <select
                    defaultValue=""
                    className="w-full rounded-xl border border-gray-200 bg-[#F9FAFC] px-4 py-3.5 text-sm text-gray-500 outline-none"
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
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Seating Capacity
                  </label>
                  <input
                    readOnly
                    type="number"
                    placeholder="Total seats"
                    className="w-full rounded-xl border border-gray-200 bg-[#F9FAFC] px-4 py-3.5 text-sm outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  About Your Space
                </label>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Describe the atmosphere, seating arrangements and what makes your space special..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-[#F9FAFC] px-4 py-3.5 text-sm outline-none placeholder:text-gray-400"
                />
              </div>
            </div>
          </section>

          
          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#101B35]">
                  Where is your space located?
                </h2>
                <p className="text-sm text-gray-500">
                  Help students find you easily.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Address
                </label>
                <input
                  readOnly
                  placeholder="Street name, building and landmark"
                  className="w-full rounded-xl border border-gray-200 bg-[#F9FAFC] px-4 py-3.5 text-sm outline-none placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {["City", "State", "PIN Code"].map((item) => (
                  <div key={item}>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      {item}
                    </label>
                    <input
                      readOnly
                      placeholder={`Enter ${item.toLowerCase()}`}
                      className="w-full rounded-xl border border-gray-200 bg-[#F9FAFC] px-4 py-3.5 text-sm outline-none placeholder:text-gray-400"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          
          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-[#101B35]">
                What does your space offer?
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Highlight the facilities available to visitors.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {facilities.map((facility) => (
                <label
                  key={facility.name}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/40"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-blue-600"
                  />
                  <span className="text-lg text-blue-600">
                    {facility.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {facility.name}
                  </span>
                </label>
              ))}
            </div>
          </section>

          
          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <FaRupeeSign size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#101B35]">
                  Set your pricing
                </h2>
                <p className="text-sm text-gray-500">
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
                  className="rounded-2xl border border-gray-200 bg-[#F9FAFC] p-4"
                >
                  <p className="text-sm font-semibold text-gray-700">
                    {price.title}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-lg font-semibold text-gray-400">
                      ₹
                    </span>
                    <input
                      readOnly
                      type="number"
                      placeholder="0"
                      className="w-full min-w-0 bg-transparent text-xl font-bold text-[#101B35] outline-none placeholder:text-gray-300"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-400">{price.hint}</p>
                </div>
              ))}
            </div>
          </section>

         
          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                <FaImage size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#101B35]">
                  Make a great first impression
                </h2>
                <p className="text-sm text-gray-500">
                  Add photos that showcase your property.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/40 px-5 py-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                <FaUpload size={24} />
              </div>
              <h3 className="mt-5 font-bold text-[#101B35]">
                Drop your images here
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Showcase your interiors, seating and study environment.
              </p>
              <button
                type="button"
                className="mt-5 rounded-xl bg-[#14294C] px-6 py-3 text-sm font-semibold text-white"
              >
                Browse Images
              </button>
              <p className="mt-4 text-xs text-gray-400">JPG, PNG or JPEG</p>
            </div>
          </section>

          
          <div className="flex flex-col justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
            <button
              type="button"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-500"
            >
              <FaArrowLeft />
              Back
            </button>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700"
              >
                Save Draft
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20"
              >
                Continue
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        
        <aside className="space-y-6 xl:sticky xl:top-8">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="relative h-48 bg-[#E5EAF1]">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900"
                alt="Modern workspace preview"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-700 backdrop-blur-md">
                LISTING PREVIEW
              </span>
            </div>

            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                YOUR PROPERTY
              </p>
              <h3 className="mt-2 text-xl font-bold text-[#101B35]">
                Your Space Name
              </h3>

              <p className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                <FaMapMarkerAlt />
                Your location will appear here
              </p>

              <div className="my-5 border-t border-gray-100" />

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Starting from</span>
                <span className="text-xl font-bold text-[#101B35]">₹ --</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-medium text-blue-600">
                  Space Type
                </span>
                <span className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium text-gray-500">
                  Facilities
                </span>
              </div>
            </div>
          </div>

          
          <div className="rounded-2xl bg-[#14294C] p-6 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <FaBookOpen />
              </div>
              <h3 className="font-bold">Listing Tips</h3>
            </div>

            <div className="mt-5 space-y-4 text-sm leading-6 text-blue-100">
              <p className="flex gap-3">
                <FaCheck className="mt-1 shrink-0 text-green-400" />
                Use a clear and memorable property name.
              </p>
              <p className="flex gap-3">
                <FaCheck className="mt-1 shrink-0 text-green-400" />
                Add accurate location information.
              </p>
              <p className="flex gap-3">
                <FaCheck className="mt-1 shrink-0 text-green-400" />
                Highlight all available facilities.
              </p>
              <p className="flex gap-3">
                <FaCheck className="mt-1 shrink-0 text-green-400" />
                Use attractive and clear property photos.
              </p>
            </div>
          </div>

          
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-bold text-amber-900">
              <FaCheck className="mr-2 inline" />
              Admin Verification
            </p>
            <p className="mt-2 text-sm leading-6 text-amber-800">
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
