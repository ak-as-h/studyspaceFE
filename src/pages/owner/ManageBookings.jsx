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
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Confirmed",
      value: "0",
      description: "Approved reservations",
      icon: <FaCheckCircle />,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Pending",
      value: "0",
      description: "Awaiting confirmation",
      icon: <FaClock />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Cancelled",
      value: "0",
      description: "Cancelled reservations",
      icon: <FaTimesCircle />,
      color: "bg-red-50 text-red-500",
    },
  ];

  const bookings = [];

  return (
    <div className="min-h-screen bg-[#F4F6FA] p-4 md:p-8 lg:p-10">

      {/* Page Heading */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-400">
            <span>Owner Portal</span>
            <span>/</span>
            <span className="text-[#315A91]">Bookings</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-[#101B35] md:text-3xl">
            Booking Management
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Oversee reservations and keep your space schedule organized.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3">
          <FaCalendarAlt className="text-[#315A91]" />
          <span className="text-sm font-medium text-gray-600">
            Reservation Overview
          </span>
        </div>
      </div>

      {/* Owner Banner */}
      <section className="relative mb-8 overflow-hidden rounded-3xl bg-[#14294C] p-7 text-white md:p-9">
        <div className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-2 -top-16 h-52 w-52 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-28 right-40 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-blue-200">
              <FaRegCalendarCheck />
              BOOKING OVERVIEW
            </div>

            <h2 className="text-2xl font-bold leading-tight md:text-3xl">
              Every reservation, <br className="hidden sm:block" />
              in one place.
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-blue-100/80">
              Keep track of incoming reservations, review booking statuses
              and stay organized as your study space business grows.
            </p>
          </div>

          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-white/15 bg-white/10 text-4xl text-blue-200">
            <FaCalendarAlt />
          </div>
        </div>
      </section>

      {/* Booking Statistics */}
      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#101B35]">
                  {stat.value}
                </h2>
              </div>

              <div className={`rounded-xl p-3 text-xl ${stat.color}`}>
                {stat.icon}
              </div>
            </div>

            <p className="mt-3 text-xs text-gray-400">
              {stat.description}
            </p>
          </div>
        ))}
      </section>

      {/* Reservation Management */}
      <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

        {/* Section Header */}
        <div className="flex flex-col gap-4 border-b border-gray-100 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#101B35]">
              Reservation Directory
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              View and organize reservations for your properties.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-[#F1F5FA] px-3 py-2 text-xs font-semibold text-[#315A91]">
              Total: 0
            </span>
          </div>
        </div>

        {/* Booking Tabs */}
        <div className="flex gap-7 overflow-x-auto border-b border-gray-100 px-6">
          <button className="whitespace-nowrap border-b-2 border-[#315A91] py-4 text-sm font-semibold text-[#315A91]">
            All Bookings
          </button>

          <button className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-gray-400">
            Confirmed
          </button>

          <button className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-gray-400">
            Pending
          </button>

          <button className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-gray-400">
            Cancelled
          </button>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 gap-3 border-b border-gray-100 p-5 md:grid-cols-[1fr_220px_auto]">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              readOnly
              type="text"
              placeholder="Search by student or booking ID..."
              className="w-full rounded-xl border border-gray-200 bg-[#F9FAFC] py-3 pl-11 pr-4 text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          <select
            defaultValue="all"
            className="rounded-xl border border-gray-200 bg-[#F9FAFC] px-4 py-3 text-sm text-gray-600 outline-none"
          >
            <option value="all">All Study Spaces</option>
          </select>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-600"
          >
            <FaFilter />
            Filters
          </button>
        </div>

        {/* Booking Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left" style={{ minWidth: "850px" }}>
            <thead className="bg-[#F9FAFC] text-xs uppercase tracking-wider text-gray-500">
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
                      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#EEF3FA] text-3xl text-[#315A91]">
                        <FaClipboardList />
                      </div>

                      <h3 className="mt-6 text-xl font-bold text-[#101B35]">
                        No Reservations Available
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
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

      {/* Booking Information */}
      <section className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <FaUsers />
            </div>

            <div>
              <h3 className="font-bold text-[#101B35]">
                Student Reservations
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                Reservation management
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            Keep reservation details organized and provide students
            with a smooth booking experience.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
              <FaChartLine />
            </div>

            <div>
              <h3 className="font-bold text-[#101B35]">
                Booking Revenue
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                Financial overview
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            Keep an overview of reservation-related revenue from
            your study space business.
          </p>
        </div>

      </section>
    </div>
  );
};

export default ManageBookings;
