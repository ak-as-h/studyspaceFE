import React from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaBookOpen,
  FaSearch,
  FaFilter,
  FaArrowRight,
  FaMapMarkerAlt,
  FaReceipt,
  FaHistory,
  FaTimesCircle,
} from "react-icons/fa";

const MyBookings = () => {
  const stats = [
    {
      title: "Total Bookings",
      value: "0",
      icon: <FaCalendarAlt />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Upcoming",
      value: "0",
      icon: <FaClock />,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Completed",
      value: "0",
      icon: <FaBookOpen />,
      color: "bg-violet-50 text-violet-600",
    },
    {
      title: "Cancelled",
      value: "0",
      icon: <FaTimesCircle />,
      color: "bg-rose-50 text-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#e8f0fa] via-[#f5f5f1] to-[#e4eaf5] px-5 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[3px] text-blue-600">
              Student Portal
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-[#14213D] md:text-4xl">
              My Bookings
            </h1>

            <p className="mt-2 text-sm text-slate-500 md:text-base">
              Manage your reservations and keep track of your study sessions.
            </p>
          </div>

          <Link
            to="/explore"
            className="flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Explore Spaces
            <FaArrowRight />
          </Link>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/70 bg-white/45 p-6 shadow-lg backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-[#14213D]">
                    {stat.value}
                  </h2>
                </div>

                <div className={`rounded-2xl p-4 text-xl ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking History */}
        <section className="overflow-hidden rounded-3xl border border-white/70 bg-white/45 shadow-xl backdrop-blur-2xl">

          {/* Section Header */}
          <div className="border-b border-white/70 p-6 md:p-8">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <FaHistory />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-[#14213D]">
                      Booking History
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      View your reservation details and booking status.
                    </p>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-white/80 bg-white/60 px-4 py-3">
                  <FaSearch className="text-slate-400" />

                  <input
                    type="text"
                    readOnly
                    placeholder="Search bookings..."
                    className="w-36 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>

                <select
                  defaultValue="all"
                  className="rounded-xl border border-white/80 bg-white/60 px-4 py-3 text-sm text-slate-700 outline-none"
                >
                  <option value="all">All Bookings</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>

                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl border border-white/80 bg-white/60 px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  <FaFilter />
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* Booking Table Structure */}
          <div className="overflow-x-auto">
            <table className="w-full  text-left"style={{minWidth:"800px"}}>
              <thead>
                <tr className="border-b border-white/70 bg-white/30 text-xs uppercase tracking-wider text-slate-500">
                  <th className="px-6 py-5 font-semibold">Study Space</th>
                  <th className="px-6 py-5 font-semibold">Booking Date</th>
                  <th className="px-6 py-5 font-semibold">Duration</th>
                  <th className="px-6 py-5 font-semibold">Amount</th>
                  <th className="px-6 py-5 font-semibold">Status</th>
                  <th className="px-6 py-5 font-semibold">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td colSpan="6" className="px-6 py-20 text-center">
                    <div className="mx-auto flex max-w-md flex-col items-center">
                      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-3xl text-blue-500">
                        <FaReceipt />
                      </div>

                      <h3 className="text-xl font-bold text-[#14213D]">
                        No Bookings Yet
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        Your reservation history will appear here once you
                        make a booking. Explore available study spaces and
                        find an environment that suits your needs.
                      </p>

                      <Link
                        to="/explore"
                        className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                      >
                        <FaSearch />
                        Discover Study Spaces
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cancellation Information */}
        <div className="mt-7 grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-white/70 bg-white/45 p-6 shadow-lg backdrop-blur-2xl">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
              <FaTimesCircle />
            </div>

            <h3 className="font-bold text-[#14213D]">
              Cancellation Information
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              Cancellation policies and applicable refund details will be
              displayed with your reservation information.
            </p>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/45 p-6 shadow-lg backdrop-blur-2xl">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FaMapMarkerAlt />
            </div>

            <h3 className="font-bold text-[#14213D]">
              Find Your Ideal Study Space
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              Explore libraries, reading rooms and coworking spaces to find
              the right environment for your learning needs.
            </p>

            <Link
              to="/explore"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Explore Spaces
              <FaArrowRight />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyBookings;
