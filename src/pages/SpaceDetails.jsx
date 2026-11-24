import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaWifi,
  FaSnowflake,
  FaCar,
  FaBookOpen,
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaChair,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

const SpaceDetails = () => {
  const facilities = [
    { icon: <FaWifi />, name: "High-Speed Wi-Fi" },
    { icon: <FaSnowflake />, name: "Air Conditioning" },
    { icon: <FaCar />, name: "Parking" },
    { icon: <FaBookOpen />, name: "Reading Area" },
    { icon: <FaUsers />, name: "Group Study Area" },
    { icon: <FaChair />, name: "Comfortable Seating" },
  ];

  const pricingPlans = [
    {
      name: "Hourly",
      description: "For short study sessions",
      price: "₹50",
      duration: "/ hour",
    },
    {
      name: "Daily",
      description: "For a full day of studying",
      price: "₹100",
      duration: "/ day",
    },
    {
      name: "Monthly",
      description: "For regular learners",
      price: "₹500",
      duration: "/ month",
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F6F3]">
      <div className="mx-auto  px-5 py-8 md:px-10"style={{maxWidth:"1400px"}}>

        {/* Back Navigation */}
        <Link
          to="/explore"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
        >
          <FaArrowLeft />
          Back to Explore
        </Link>

        {/* Page Heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-blue-600">
              Explore StudySpace
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-[#14213D] md:text-5xl">
              Discover Your Perfect
              <span className="block text-blue-600">Study Environment</span>
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>Location details</span>
              <span className="mx-1">•</span>
              <span>Study Space</span>
            </div>
          </div>

          <div className="w-fit rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            Space Details
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid gap-3 overflow-hidden rounded-3xl md:h-[480px] md:grid-cols-3">
          <div className=" overflow-hidden md:col-span-2 md:h-full"style={{height:"280px"}}>
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
              alt="Study space interior"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
            <div className=" overflow-hidden md:h-full"style={{height:"160px"}}>
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
                alt="Workspace interior"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className=" overflow-hidden md:h-full"style={{height:"160px"}}>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                alt="Study room"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          {/* Left Content */}
          <div className="space-y-8 lg:col-span-2">

            {/* About */}
            <section className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl md:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-blue-600">
                About the Space
              </p>

              <h2 className="text-2xl font-bold text-[#14213D]">
                A Better Place to Focus and Learn
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Find a comfortable and peaceful environment designed for
                focused learning. Whether you are preparing for examinations,
                completing assignments, or working on projects, choose a
                study environment that suits your needs.
              </p>
            </section>

            {/* Facilities */}
            <section className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl md:p-8">
              <div className="mb-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-blue-600">
                  What's Included
                </p>

                <h2 className="text-2xl font-bold text-[#14213D]">
                  Facilities & Amenities
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
                {facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white/60 p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg text-blue-600">
                      {facility.icon}
                    </div>

                    <span className="text-sm font-medium text-slate-700">
                      {facility.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Space Information */}
            <section className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl md:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-blue-600">
                Space Information
              </p>

              <h2 className="mb-6 text-2xl font-bold text-[#14213D]">
                Everything You Need to Know
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <FaClock />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Operating Hours
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Contact the space owner for timings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <FaUsers />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Space Capacity
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Capacity information provided by the owner.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <FaChair />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Seating Arrangement
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Seating details available from the space owner.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Location
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Full address details.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seat Availability Information */}
            <section className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl md:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <FaChair className="text-xl" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[2px] text-blue-600">
                    Seating Information
                  </p>

                  <h2 className="text-2xl font-bold text-[#14213D]">
                    Seat Availability
                  </h2>
                </div>
              </div>

              <p className="mt-5 leading-7 text-slate-500">
                Seat availability and occupancy information can be displayed
                here once provided by the space owner.
              </p>

              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                <FaCheckCircle className="mt-1 shrink-0 text-blue-600" />

                <p className="text-sm leading-6 text-slate-600">
                  Contact the space owner to confirm available seats before
                  making a reservation.
                </p>
              </div>
            </section>
          </div>

          {/* Right Booking Sidebar */}
          <aside className="h-fit space-y-6 lg:sticky lg:top-8">

            {/* Pricing Card */}
            <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[2px] text-blue-600">
                Reservation Options
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#14213D]">
                Choose Your Plan
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Select a reservation duration that suits your study schedule.
              </p>

              <div className="mt-6 space-y-3">
                {pricingPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative rounded-2xl border p-4 ${
                      plan.popular
                        ? "border-blue-500 bg-blue-50/70"
                        : "border-slate-200 bg-white/60"
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 right-4 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                        Popular
                      </span>
                    )}

                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-slate-800">
                          {plan.name}
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                          {plan.description}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-xl font-bold text-[#14213D]">
                          {plan.price}
                        </p>

                        <p className="text-xs text-slate-500">
                          {plan.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-400">
                Pricing is illustrative UI content. Actual prices depend on
                the space owner's listing.
              </p>

              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Continue to Booking
                <FaArrowRight />
              </button>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500">
                <FaShieldAlt className="text-green-600" />
                Booking and payment are not connected
              </div>
            </div>

            {/* Help Card */}
            <div className="rounded-3xl bg-[#14213D] p-6 text-white">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl">
                <FaUsers />
              </div>

              <h3 className="text-xl font-bold">
                Need More Information?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Get in touch with the space owner for information about
                facilities, timings, seating and pricing.
              </p>

              <button
                type="button"
                className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-300"
              >
                Contact Information
                <FaArrowRight />
              </button>
            </div>
          </aside>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            Find a space that makes every study session productive.
          </p>

          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Explore More Spaces
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetails;
