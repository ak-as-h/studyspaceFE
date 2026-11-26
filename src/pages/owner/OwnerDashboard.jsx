import React from "react";
import {
  FaBuilding,
  FaCalendarCheck,
  FaClock,
  FaPlus,
  FaArrowRight,
  FaUsers,
  FaChartLine,
  FaWallet,
  FaEllipsisH,
  FaArrowUp,
} from "react-icons/fa";

const OwnerDashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "₹0",
      change: "Revenue overview",
      icon: <FaWallet />,
      color: "text-[#C17A56] bg-[#F5F0E8] border border-[#EDE8DF]",
    },
    {
      title: "Total Bookings",
      value: "0",
      change: "All reservations",
      icon: <FaCalendarCheck />,
      color: "text-[#C17A56] bg-[#F5F0E8] border border-[#EDE8DF]",
    },
    {
      title: "Active Spaces",
      value: "0",
      change: "Listed properties",
      icon: <FaBuilding />,
      color: "text-[#A09A93] bg-[#F5F0E8] border border-[#EDE8DF]",
    },
    {
      title: "Pending Requests",
      value: "0",
      change: "Awaiting confirmation",
      icon: <FaClock />,
      color: "text-[#A09A93] bg-[#F5F0E8] border border-[#EDE8DF]",
    },
  ];

  const days = [
    { day: "Mon", height: "h-12" },
    { day: "Tue", height: "h-20" },
    { day: "Wed", height: "h-16" },
    { day: "Thu", height: "h-28" },
    { day: "Fri", height: "h-24" },
    { day: "Sat", height: "h-32" },
    { day: "Sun", height: "h-16" },
  ];

  return (
    <div className="px-5 py-8 md:px-8 lg:px-10 bg-[#F5F0E8] min-h-screen">

      {/* Page Header */}
      <div className="mb-8">
        <p className="text-sm text-[#7C6F60]">Workspace / Dashboard</p>
        <h1
          className="mt-1 text-2xl font-bold text-[#1C1917] md:text-3xl"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Business Overview
        </h1>
      </div>

      {/* Hero Banner */}
      <section className="relative mb-8 overflow-hidden bg-[#1C1917] p-7 text-white md:p-10">
        <div className="relative z-10 max-w-xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#C17A56]" />
            <span className="border border-[#C17A56]/30 bg-[#C17A56]/10 px-3 py-1 text-xs font-medium text-[#C17A56]">
              OWNER WORKSPACE
            </span>
          </div>

          <h2
            className="mt-5 text-2xl font-bold md:text-3xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Manage Your Spaces.
            <br />
            Grow Your Business.
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#A09A93]">
            Keep track of your properties, manage reservations and monitor
            your business performance in one place.
          </p>

          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 bg-[#C17A56] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#A8663F]"
          >
            <FaPlus />
            List a New Space
          </button>
        </div>

        <FaBuilding className="absolute bottom-8 right-12 hidden text-8xl text-white/5 md:block" />
      </section>

      {/* Stats */}
      <section className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="border border-[#EDE8DF] bg-white p-5 transition hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center text-xl ${stat.color}`}
              >
                {stat.icon}
              </div>

              <FaEllipsisH className="text-[#A09A93]" />
            </div>

            <p className="mt-5 text-sm font-medium text-[#7C6F60]">
              {stat.title}
            </p>

            <h3 className="mt-1 text-2xl font-bold text-[#1C1917]">
              {stat.value}
            </h3>

            <p className="mt-2 text-xs text-[#A09A93]">{stat.change}</p>
          </div>
        ))}
      </section>

      {/* Chart + Revenue */}
      <section className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Bar chart */}
        <div className="border border-[#EDE8DF] bg-white p-6 xl:col-span-2">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-[#1C1917]">
                Booking Activity
              </h2>
              <p className="mt-1 text-sm text-[#7C6F60]">
                Weekly reservation overview
              </p>
            </div>

            <span className="border border-[#EDE8DF] bg-[#F5F0E8] px-3 py-2 text-xs font-medium text-[#7C6F60]">
              This Week
            </span>
          </div>

          <div className="flex h-48 items-end justify-between gap-3 border-b border-l border-[#D4C5A9] px-3 pb-0">
            {days.map((item) => (
              <div
                key={item.day}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <div
                  className={`w-full max-w-12 bg-[#C17A56] ${item.height}`}
                />
                <span className="mb-2 text-xs text-[#A09A93]">
                  {item.day}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-xs text-[#A09A93]">
            Illustrative chart layout – booking data not connected.
          </p>
        </div>

        {/* Revenue */}
        <div className="border border-[#EDE8DF] bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#1C1917]">
              Revenue Overview
            </h2>
            <FaWallet className="text-xl text-[#C17A56]" />
          </div>

          <p className="mt-7 text-sm text-[#7C6F60]">Total Earnings</p>

          <h3 className="mt-2 text-3xl font-bold text-[#1C1917]">₹0</h3>

          <div className="mt-5 flex items-center gap-2 bg-[#F5F0E8] border border-[#EDE8DF] p-3 text-sm text-[#C17A56]">
            <FaArrowUp />
            Revenue summary
          </div>

          <div className="mt-7 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-[#7C6F60]">This Month</span>
              <span className="font-semibold text-[#1C1917]">₹0</span>
            </div>

            <div className="h-2 bg-[#EDE8DF]">
              <div className="h-2 w-0 bg-[#C17A56]" />
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-[#7C6F60]">Previous Month</span>
              <span className="font-semibold text-[#1C1917]">₹0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Properties + Reservations */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        {/* Properties */}
        <div className="border border-[#EDE8DF] bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#1C1917]">
                My Properties
              </h2>
              <p className="mt-1 text-sm text-[#7C6F60]">
                Your listed study spaces
              </p>
            </div>

            <FaBuilding className="text-xl text-[#C17A56]" />
          </div>

          <div className="flex min-h-48 flex-col items-center justify-center border border-dashed border-[#D4C5A9] bg-[#F5F0E8] p-6 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center bg-white border border-[#EDE8DF] text-[#C17A56]">
              <FaBuilding size={23} />
            </div>

            <h3 className="font-semibold text-[#1C1917]">
              No Properties Listed
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-[#7C6F60]">
              Your listed libraries, reading rooms and study spaces will
              appear here.
            </p>
          </div>
        </div>

        {/* Reservations */}
        <div className="border border-[#EDE8DF] bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#1C1917]">
                Recent Reservations
              </h2>
              <p className="mt-1 text-sm text-[#7C6F60]">
                Latest customer bookings
              </p>
            </div>

            <FaCalendarCheck className="text-xl text-[#C17A56]" />
          </div>

          <div className="flex min-h-48 flex-col items-center justify-center border border-dashed border-[#D4C5A9] bg-[#F5F0E8] p-6 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center bg-white border border-[#EDE8DF] text-[#A09A93]">
              <FaUsers size={23} />
            </div>

            <h3 className="font-semibold text-[#1C1917]">
              No Reservations Yet
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-[#7C6F60]">
              Customer reservation details will appear here.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OwnerDashboard;
