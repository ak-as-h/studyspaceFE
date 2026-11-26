import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
  FaStar,
  FaLock,
  FaExclamationTriangle,
} from "react-icons/fa";
import { getClosures, checkSpaceAvailability, SAMPLE_SPACES } from "../utils/closureStore";

const SpaceDetails = () => {
  const { id } = useParams();
  const [closures, setClosures] = useState([]);
  const [bookingDate, setBookingDate] = useState("");
  const [dateAvail, setDateAvail] = useState(null); // null | { available, reason }

  useEffect(() => {
    setClosures(getClosures());
  }, []);

  // Find the space (from sample data or use a default demo space)
  const space = SAMPLE_SPACES.find((s) => s.id === id) || SAMPLE_SPACES[0];

  // Active closure for this space today
  const today = new Date().toISOString().split("T")[0];
  const activeClosure = closures.find((c) => {
    if (c.spaceId !== space.id) return false;
    if (c.status === "resolved") return false;
    const start = new Date(c.startDate);
    const todayD = new Date(today);
    if (c.type === "permanent") return todayD >= start;
    return todayD >= start && todayD <= new Date(c.endDate);
  }) || null;

  function handleDateChange(e) {
    const d = e.target.value;
    setBookingDate(d);
    if (d) {
      setDateAvail(checkSpaceAvailability(space.id, d, closures));
    } else {
      setDateAvail(null);
    }
  }

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

  const card = "border border-[#EDE8DF] bg-white shadow-sm";

  return (
    <div className="relative min-h-screen bg-[#F5F0E8]">
      <div
        className="relative mx-auto px-5 py-8 md:px-10"
        style={{ maxWidth: "1400px" }}
      >
        <Link
          to="/explore"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[#7C6F60] transition hover:text-[#1C1917]"
        >
          <FaArrowLeft />
          Back to Explore
        </Link>

        {/* Closure Banner */}
        {activeClosure && (
          <div
            className={`mb-6 flex items-start gap-3 px-5 py-4 ${
              activeClosure.type === "permanent"
                ? "bg-[#1C1917] text-white"
                : "border border-amber-200 bg-amber-50 text-amber-800"
            }`}
          >
            {activeClosure.type === "permanent" ? (
              <FaLock className="mt-0.5 shrink-0 text-[#C17A56]" size={14} />
            ) : (
              <FaExclamationTriangle className="mt-0.5 shrink-0 text-amber-500" size={14} />
            )}
            <div>
              <p className="font-semibold">
                {activeClosure.type === "permanent"
                  ? "This space is permanently closed."
                  : `This space is temporarily closed until ${new Date(activeClosure.endDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}.`}
              </p>
              <p className="mt-0.5 text-sm opacity-80">Reason: {activeClosure.reason}</p>
            </div>
          </div>
        )}

        {/* Hero Header */}
        <div className="mb-8 bg-[#1C1917] px-7 py-8 md:px-10 md:py-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="w-6 h-px bg-[#C17A56]" />
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                  Explore StudySpace
                </p>
              </div>

              <h1
                className="text-3xl font-bold tracking-tight text-white md:text-5xl"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Discover Your Perfect
                <span className="block text-[#C17A56]">Study Environment</span>
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-[#A09A93]">
                <FaMapMarkerAlt className="text-[#C17A56]" />
                <span>Location details</span>
                <span className="mx-1">•</span>
                <span>Study Space</span>
              </div>
            </div>

            <div className="w-fit border border-[#D4C5A9]/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              Space Details
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid gap-3 overflow-hidden border border-[#D4C5A9] md:h-120 md:grid-cols-3">
          <div
            className="overflow-hidden md:col-span-2 md:h-full"
            style={{ height: "280px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
              alt="Study space interior"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
            <div
              className="overflow-hidden md:h-full"
              style={{ height: "160px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
                alt="Workspace interior"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div
              className="overflow-hidden md:h-full"
              style={{ height: "160px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                alt="Study room"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">

            {/* About */}
            <section className={`${card} p-6 md:p-8`}>
              <div className="mb-3 flex items-center gap-3">
                <span className="w-6 h-px bg-[#C17A56]" />
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                  About the Space
                </p>
              </div>

              <h2 className="text-2xl font-bold text-[#1C1917]" style={{ fontFamily: "'Georgia', serif" }}>
                A Better Place to Focus and Learn
              </h2>

              <p className="mt-4 leading-8 text-[#7C6F60]">
                Find a comfortable and peaceful environment designed for focused
                learning. Whether you are preparing for examinations, completing
                assignments, or working on projects, choose a study environment
                that suits your needs.
              </p>
            </section>

            {/* Facilities */}
            <section className={`${card} p-6 md:p-8`}>
              <div className="mb-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="w-6 h-px bg-[#C17A56]" />
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                    What's Included
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-[#1C1917]" style={{ fontFamily: "'Georgia', serif" }}>
                  Facilities &amp; Amenities
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
                {facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 border border-[#D4C5A9] bg-[#F5F0E8] p-4 transition hover:bg-[#EDE8DF]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D4C5A9] bg-white text-lg text-[#C17A56]">
                      {facility.icon}
                    </div>

                    <span className="text-sm font-medium text-[#1C1917]">
                      {facility.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Info */}
            <section className={`${card} p-6 md:p-8`}>
              <div className="mb-3 flex items-center gap-3">
                <span className="w-6 h-px bg-[#C17A56]" />
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                  Space Information
                </p>
              </div>

              <h2 className="mb-6 text-2xl font-bold text-[#1C1917]" style={{ fontFamily: "'Georgia', serif" }}>
                Everything You Need to Know
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    icon: <FaClock />,
                    title: "Operating Hours",
                    description: "Contact the space owner for timings.",
                  },
                  {
                    icon: <FaUsers />,
                    title: "Space Capacity",
                    description: "Capacity information provided by the owner.",
                  },
                  {
                    icon: <FaChair />,
                    title: "Seating Arrangement",
                    description:
                      "Seating details available from the space owner.",
                  },
                  {
                    icon: <FaMapMarkerAlt />,
                    title: "Location",
                    description: "Full address details.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="border border-[#EDE8DF] bg-[#F5F0E8] p-3 text-[#1C1917]">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#1C1917]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#7C6F60]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Seat Availability */}
            <section className={`${card} p-6 md:p-8`}>
              <div className="flex items-center gap-3">
                <div className="border border-[#EDE8DF] bg-[#F5F0E8] p-3 text-[#C17A56]">
                  <FaChair className="text-xl" />
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-px bg-[#C17A56]" />
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                      Seating Information
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-[#1C1917]" style={{ fontFamily: "'Georgia', serif" }}>
                    Seat Availability
                  </h2>
                </div>
              </div>

              <p className="mt-5 leading-7 text-[#7C6F60]">
                Seat availability and occupancy information can be displayed
                here once provided by the space owner.
              </p>

              <div className="mt-5 flex items-start gap-3 border border-[#EDE8DF] bg-[#F5F0E8] p-4">
                <FaCheckCircle className="mt-1 shrink-0 text-[#C17A56]" />

                <p className="text-sm leading-6 text-[#1C1917]">
                  Contact the space owner to confirm available seats before
                  making a reservation.
                </p>
              </div>
            </section>

            {/* Reviews */}
            <section className={`${card} p-6 md:p-8`}>
              <div className="mb-3 flex items-center gap-3">
                <span className="w-6 h-px bg-[#C17A56]" />
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                  Community Feedback
                </p>
              </div>

              <h2 className="text-2xl font-bold text-[#1C1917]" style={{ fontFamily: "'Georgia', serif" }}>
                Reviews &amp; Ratings
              </h2>

              <p className="mt-4 leading-7 text-[#7C6F60]">
                Reviews and ratings from visitors can be displayed here.
              </p>

              <div className="mt-5 border border-dashed border-[#D4C5A9] bg-[#F5F0E8] p-6 text-center">
                <FaStar className="mx-auto text-3xl text-amber-400" />
                <p className="mt-3 font-semibold text-[#1C1917]">
                  No reviews to display
                </p>
                <p className="mt-1 text-sm text-[#7C6F60]">
                  Reviews will appear here when available.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="h-fit space-y-6 lg:sticky lg:top-8">

            {/* Pricing Card */}
            <div className="border border-[#EDE8DF] bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="w-6 h-px bg-[#C17A56]" />
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                  Reservation Options
                </p>
              </div>

              <h2 className="mt-3 text-2xl font-bold text-[#1C1917]" style={{ fontFamily: "'Georgia', serif" }}>
                Choose Your Plan
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#7C6F60]">
                Select a reservation duration that suits your study schedule.
              </p>

              <div className="mt-6 space-y-3">
                {pricingPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative border p-4 ${
                      plan.popular
                        ? "border-l-4 border-l-[#C17A56] border-t-[#EDE8DF] border-r-[#EDE8DF] border-b-[#EDE8DF] bg-[#F5F0E8]"
                        : "border-[#EDE8DF] bg-white"
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 right-4 bg-[#1C1917] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                        Popular
                      </span>
                    )}

                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-[#1C1917]">
                          {plan.name}
                        </h3>

                        <p className="mt-1 text-xs text-[#7C6F60]">
                          {plan.description}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-xl font-bold text-[#1C1917]">
                          {plan.price}
                        </p>

                        <p className="text-xs text-[#A09A93]">
                          {plan.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs leading-5 text-[#A09A93]">
                Pricing is illustrative UI content. Actual prices depend on the
                space owner's listing.
              </p>

              {/* Date availability check */}
              <div className="mt-5">
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#7C6F60]">
                  Check Date Availability
                </label>
                <input
                  type="date"
                  value={bookingDate}
                  min={today}
                  onChange={handleDateChange}
                  className="w-full border border-[#D4C5A9] bg-white px-4 py-2.5 text-sm text-[#1C1917] outline-none focus:border-[#C17A56]"
                />
                {dateAvail && !dateAvail.available && (
                  <div className="mt-2 flex items-start gap-2 border border-red-200 bg-red-50 p-3 text-xs text-red-700">
                    <FaExclamationTriangle className="mt-0.5 shrink-0" size={11} />
                    {dateAvail.reason}
                  </div>
                )}
                {dateAvail && dateAvail.available && (
                  <div className="mt-2 flex items-center gap-2 border border-green-200 bg-green-50 p-3 text-xs text-green-700">
                    <FaCheckCircle className="shrink-0" size={11} />
                    This date is available for booking.
                  </div>
                )}
              </div>

              {activeClosure ? (
                <div className="mt-6 flex w-full items-center justify-center gap-2 border border-[#D4C5A9] bg-[#F5F0E8] px-5 py-4 font-semibold text-[#A09A93]">
                  <FaLock size={13} />
                  Not Available
                </div>
              ) : (
                <button
                  type="button"
                  disabled={dateAvail !== null && !dateAvail.available}
                  className="mt-6 flex w-full items-center justify-center gap-2 bg-[#1C1917] px-5 py-4 font-semibold text-white transition hover:bg-[#C17A56] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Booking
                  <FaArrowRight />
                </button>
              )}

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-[#7C6F60]">
                <FaShieldAlt className="text-[#C17A56]" />
                Booking and payment are not connected
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[#1C1917] p-6 text-white">
              <div className="mb-4 flex h-12 w-12 items-center justify-center border border-white/10 bg-white/10 text-xl">
                <FaUsers />
              </div>

              <h3 className="text-xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>Need More Information?</h3>

              <p className="mt-3 text-sm leading-7 text-[#A09A93]">
                Get in touch with the space owner for information about
                facilities, timings, seating and pricing.
              </p>

              <button
                type="button"
                className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#C17A56]"
              >
                Contact Information
                <FaArrowRight />
              </button>
            </div>
          </aside>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col justify-between gap-4 border border-[#EDE8DF] bg-white p-5 sm:flex-row sm:items-center">
          <p className="text-sm text-[#7C6F60]">
            Find a space that makes every study session productive.
          </p>

          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C1917] hover:text-[#C17A56]"
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
