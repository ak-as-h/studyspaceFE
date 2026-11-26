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
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]",
    },
    {
      title: "Upcoming",
      value: "0",
      icon: <FaClock />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]",
    },
    {
      title: "Completed",
      value: "0",
      icon: <FaBookOpen />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]",
    },
    {
      title: "Cancelled",
      value: "0",
      icon: <FaTimesCircle />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#A09A93]",
    },
  ];

  return (
    <div className="bg-[#F5F0E8] px-5 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="w-6 h-px bg-[#C17A56]" />
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                Student Portal
              </p>
            </div>

            <h1
              className="text-3xl font-bold tracking-tight text-[#1C1917] md:text-4xl"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              My Bookings
            </h1>

            <p className="mt-2 text-sm text-[#7C6F60] md:text-base">
              Manage your reservations and keep track of your study sessions.
            </p>
          </div>

          <Link
            to="/explore"
            className="flex w-fit items-center gap-2 bg-[#1C1917] px-6 py-3 font-semibold text-white transition hover:bg-[#C17A56]"
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
              className="border border-[#EDE8DF] bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#7C6F60]">{stat.title}</p>
                  <h2 className="mt-3 text-3xl font-bold text-[#1C1917]">
                    {stat.value}
                  </h2>
                </div>

                <div className={`p-4 text-xl ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking History */}
        <section className="overflow-hidden border border-[#EDE8DF] bg-white">

          {/* Section Header */}
          <div className="border-b border-[#EDE8DF] bg-white p-6 md:p-8">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F5F0E8] border border-[#EDE8DF] p-3 text-[#C17A56]">
                    <FaHistory />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-[#1C1917]">
                      Booking History
                    </h2>

                    <p className="mt-1 text-sm text-[#7C6F60]">
                      View your reservation details and booking status.
                    </p>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 border border-[#D4C5A9] bg-[#F5F0E8] px-4 py-3">
                  <FaSearch className="text-[#A09A93]" />

                  <input
                    type="text"
                    readOnly
                    placeholder="Search bookings..."
                    className="w-36 bg-transparent text-sm outline-none placeholder:text-[#A09A93]"
                  />
                </div>

                <select
                  defaultValue="all"
                  className="border border-[#D4C5A9] bg-[#F5F0E8] px-4 py-3 text-sm text-[#7C6F60] outline-none"
                >
                  <option value="all">All Bookings</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>

                <button
                  type="button"
                  className="flex items-center gap-2 border border-[#D4C5A9] bg-white px-4 py-3 text-sm font-semibold text-[#7C6F60]"
                >
                  <FaFilter />
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* Booking Table Structure */}
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ minWidth: "800px" }}>
              <thead>
                <tr className="border-b border-[#EDE8DF] bg-[#F5F0E8] text-xs uppercase tracking-wider text-[#A09A93]">
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
                      <div className="mb-5 flex h-20 w-20 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-3xl text-[#C17A56]">
                        <FaReceipt />
                      </div>

                      <h3 className="text-xl font-bold text-[#1C1917]">
                        No Bookings Yet
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#7C6F60]">
                        Your reservation history will appear here once you
                        make a booking. Explore available study spaces and
                        find an environment that suits your needs.
                      </p>

                      <Link
                        to="/explore"
                        className="mt-6 flex items-center gap-2 bg-[#1C1917] px-6 py-3 font-semibold text-white transition hover:bg-[#C17A56]"
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

          <div className="border border-[#EDE8DF] bg-white p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]">
              <FaTimesCircle />
            </div>

            <h3 className="font-bold text-[#1C1917]">
              Cancellation Information
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#7C6F60]">
              Cancellation policies and applicable refund details will be
              displayed with your reservation information.
            </p>
          </div>

          <div className="border border-[#EDE8DF] bg-white p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]">
              <FaMapMarkerAlt />
            </div>

            <h3 className="font-bold text-[#1C1917]">
              Find Your Ideal Study Space
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#7C6F60]">
              Explore libraries, reading rooms and coworking spaces to find
              the right environment for your learning needs.
            </p>

            <Link
              to="/explore"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#C17A56] transition hover:text-[#1C1917]"
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
