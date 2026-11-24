
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
} from "react-icons/fa";

const ManageBookings = () => {
  const stats = [
    {
      title: "Total Bookings",
      value: "0",
      icon: <FaClipboardList />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Confirmed",
      value: "0",
      icon: <FaCheckCircle />,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Pending",
      value: "0",
      icon: <FaClock />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Cancelled",
      value: "0",
      icon: <FaTimesCircle />,
      color: "bg-red-50 text-red-500",
    },
  ];

  const bookings = [];

  return (
    <div className="p-4 md:p-8 lg:p-10">

      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-500">Owner Portal / Bookings</p>
          <h1 className="mt-1 text-2xl font-bold text-[#101B35] md:text-3xl">
            Booking Management
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Track reservations and manage student bookings.
          </p>
        </div>
      </div>

      
      <section className="mb-8 flex flex-col justify-between gap-6 overflow-hidden rounded-3xl bg-[#14294C] p-7 text-white md:flex-row md:items-center md:p-9">
        <div>
          <p className="text-sm font-medium text-blue-200">
            RESERVATION OVERVIEW
          </p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            Stay on top of every booking.
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-blue-100">
            Keep track of student reservations, monitor booking statuses
            and organize your study space schedule.
          </p>
        </div>

        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl text-blue-200">
          <FaCalendarAlt />
        </div>
      </section>

      
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <h2 className="mt-3 text-3xl font-bold text-[#101B35]">
                  {stat.value}
                </h2>
              </div>

              <div className={`rounded-xl p-3 text-xl ${stat.color}`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

        <div className="flex flex-col gap-4 border-b border-gray-100 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#101B35]">
              All Reservations
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Review and manage your incoming bookings.
            </p>
          </div>

          <span className="w-fit rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600">
            0 Reservations
          </span>
        </div>

       
        <div className="flex gap-6 overflow-x-auto border-b border-gray-100 px-6">
          <button className="whitespace-nowrap border-b-2 border-blue-600 py-4 text-sm font-semibold text-blue-600">
            All Bookings
          </button>
          <button className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-gray-500">
            Confirmed
          </button>
          <button className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-gray-500">
            Pending
          </button>
          <button className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-gray-500">
            Cancelled
          </button>
        </div>

       
        <div className="flex flex-col gap-3 border-b border-gray-100 p-5 md:flex-row">
          <div className="relative flex-1">
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
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-600"
          >
            <FaFilter />
            Filters
          </button>
        </div>

        
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
                      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-blue-600">
                        <FaClipboardList size={32} />
                      </div>

                      <h3 className="mt-6 text-xl font-bold text-[#101B35]">
                        No Bookings Yet
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        Student reservations will appear here once your
                        study spaces start receiving bookings.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      
      <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-green-50 p-3 text-green-600">
              <FaUsers />
            </div>
            <h3 className="font-bold text-[#101B35]">
              Student Reservations
            </h3>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            Keep your booking information organized and provide students
            with a smooth reservation experience.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <FaWallet />
            </div>
            <h3 className="font-bold text-[#101B35]">
              Booking Revenue
            </h3>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            Monitor the revenue generated from your study space
            reservations through your owner dashboard.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ManageBookings;
