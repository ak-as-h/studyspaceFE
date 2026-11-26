import React from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaUsers,
  FaWallet,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaClipboardList,
  FaFilter,
  FaArrowRight,
  FaChartLine,
  FaRegCalendarCheck,
} from "react-icons/fa";

const ManageBookings = () => {
  const stats = [
    {
      title: "Total Bookings",
      value: "0",
      description: "All reservations received",
      icon: <FaClipboardList />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]",
    },
    {
      title: "Confirmed",
      value: "0",
      description: "Approved reservations",
      icon: <FaCheckCircle />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#A09A93]",
    },
    {
      title: "Pending",
      value: "0",
      description: "Awaiting confirmation",
      icon: <FaClock />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#A09A93]",
    },
    {
      title: "Cancelled",
      value: "0",
      description: "Cancelled reservations",
      icon: <FaTimesCircle />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#A09A93]",
    },
  ];

  const bookings = [];

  return (
    <div className="min-h-screen bg-[#F5F0E8] p-4 md:p-8 lg:p-10">

      {/* Page Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-[#A09A93]">
            <span>Owner Portal</span>
            <span>/</span>
            <span className="text-[#C17A56]">Bookings</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-[#1C1917] md:text-3xl" style={{ fontFamily: "'Georgia', serif" }}>
            Booking Management
          </h1>

          <p className="mt-2 text-sm text-[#7C6F60]">
            Oversee reservations and keep your space schedule organized.
          </p>
        </div>

        <div className="flex items-center gap-2 border border-[#EDE8DF] bg-white px-4 py-3">
          <FaCalendarAlt className="text-[#C17A56]" />
          <span className="text-sm font-medium text-[#7C6F60]">
            Reservation Overview
          </span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative mb-8 overflow-hidden bg-[#1C1917] p-7 text-white md:p-9">
        <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#C17A56]" />
              <div className="inline-flex items-center gap-2 border border-[#C17A56]/30 bg-[#C17A56]/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-[#C17A56]">
                <FaRegCalendarCheck />
                BOOKING OVERVIEW
              </div>
            </div>

            <h2
              className="text-2xl font-bold leading-tight text-white md:text-3xl"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Every reservation, <br className="hidden sm:block" />
              in one place.
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-[#A09A93]">
              Keep track of incoming reservations, review booking statuses
              and stay organized as your study space business grows.
            </p>
          </div>

          <div className="flex h-24 w-24 shrink-0 items-center justify-center border border-[#C17A56]/20 bg-white/5 text-4xl text-[#C17A56]">
            <FaCalendarAlt />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="border border-[#EDE8DF] bg-white p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-[#7C6F60]">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#1C1917]">
                  {stat.value}
                </h2>
              </div>

              <div className={`p-3 text-xl ${stat.color}`}>
                {stat.icon}
              </div>
            </div>

            <p className="mt-3 text-xs text-[#A09A93]">
              {stat.description}
            </p>
          </div>
        ))}
      </section>

      {/* Table Section */}
      <section className="overflow-hidden border border-[#EDE8DF] bg-white">

        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-[#EDE8DF] p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#1C1917]">
              Reservation Directory
            </h2>

            <p className="mt-1 text-sm text-[#7C6F60]">
              View and organize reservations for your properties.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="border border-[#EDE8DF] bg-[#F5F0E8] px-3 py-2 text-xs font-semibold text-[#C17A56]">
              Total: 0
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-7 overflow-x-auto border-b border-[#EDE8DF] px-6">
          <button className="whitespace-nowrap border-b-2 border-[#C17A56] py-4 text-sm font-semibold text-[#1C1917]">
            All Bookings
          </button>

          <button className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-[#A09A93]">
            Confirmed
          </button>

          <button className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-[#A09A93]">
            Pending
          </button>

          <button className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-[#A09A93]">
            Cancelled
          </button>
        </div>

        {/* Search & Filter */}
        <div className="grid grid-cols-1 gap-3 border-b border-[#EDE8DF] p-5 md:grid-cols-[1fr_220px_auto]">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A09A93]" />

            <input
              readOnly
              type="text"
              placeholder="Search by student or booking ID..."
              className="w-full border border-[#D4C5A9] bg-[#F5F0E8] py-3 pl-11 pr-4 text-sm outline-none placeholder:text-[#A09A93]"
            />
          </div>

          <select
            defaultValue="all"
            className="border border-[#D4C5A9] bg-[#F5F0E8] px-4 py-3 text-sm text-[#1C1917] outline-none"
          >
            <option value="all">All Study Spaces</option>
          </select>

          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-[#D4C5A9] px-5 py-3 text-sm font-medium text-[#7C6F60]"
          >
            <FaFilter />
            Filters
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left" style={{ minWidth: "850px" }}>
            <thead className="bg-[#F5F0E8] text-xs uppercase tracking-wider text-[#A09A93]">
              <tr>
                <th className="px-6 py-4 font-semibold">Student</th>
                <th className="px-6 py-4 font-semibold">Study Space</th>
                <th className="px-6 py-4 font-semibold">Booking Date</th>
                <th className="px-6 py-4 font-semibold">Amount</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-6 py-16">
                    <div className="mx-auto flex max-w-md flex-col items-center text-center">
                      <div className="flex h-20 w-20 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-3xl text-[#C17A56]">
                        <FaClipboardList />
                      </div>

                      <h3
                        className="mt-6 text-xl font-bold text-[#1C1917]"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        No Reservations Available
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#7C6F60]">
                        Reservations will appear here when students book
                        one of your listed study spaces.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Info Cards */}
      <section className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">

        <div className="border border-[#EDE8DF] bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#F5F0E8] border border-[#EDE8DF] p-3 text-[#C17A56]">
              <FaUsers />
            </div>

            <div>
              <h3 className="font-bold text-[#1C1917]">
                Student Reservations
              </h3>
              <p className="mt-1 text-xs text-[#A09A93]">
                Reservation management
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-[#7C6F60]">
            Keep reservation details organized and provide students
            with a smooth booking experience.
          </p>
        </div>

        <div className="border border-[#EDE8DF] bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#F5F0E8] border border-[#EDE8DF] p-3 text-[#C17A56]">
              <FaChartLine />
            </div>

            <div>
              <h3 className="font-bold text-[#1C1917]">
                Booking Revenue
              </h3>
              <p className="mt-1 text-xs text-[#A09A93]">
                Financial overview
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-[#7C6F60]">
            Keep an overview of reservation-related revenue from
            your study space business.
          </p>
        </div>

      </section>
    </div>
  );
};

export default ManageBookings;
