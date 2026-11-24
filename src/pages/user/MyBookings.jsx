
import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaBookOpen,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

const MyBookings = () => {
  const stats = [
    { title: "Total Bookings", value: "0", icon: <FaCalendarAlt />, color: "blue" },
    { title: "Upcoming", value: "0", icon: <FaClock />, color: "green" },
    { title: "Completed", value: "0", icon: <FaBookOpen />, color: "purple" },
  ];

  return (
    <div className="px-5 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">

        
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Student Portal
            </p>
            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
              My Bookings
            </h1>
            <p className="mt-2 text-slate-600">
              View and keep track of your study space reservations.
            </p>
          </div>

          <button
            type="button"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Explore Spaces
          </button>
        </div>

        
        <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/70 bg-white/40 p-6 shadow-lg backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.title}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-slate-900">
                    {stat.value}
                  </h2>
                </div>

                <div className="rounded-xl bg-blue-100 p-4 text-xl text-blue-600">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="rounded-3xl border border-white/70 bg-white/40 p-6 shadow-xl backdrop-blur-2xl md:p-8">

          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Booking History
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Your study space reservation records.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <select
                defaultValue="all"
                className="rounded-xl border border-white/70 bg-white/50 px-4 py-3 text-sm text-slate-700 outline-none"
              >
                <option value="all">All Bookings</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-white/70 bg-white/50 px-4 py-3 text-sm font-medium text-slate-700"
              >
                <FaFilter />
                Filter
              </button>
            </div>
          </div>

          
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/20 px-5 py-16 text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl text-blue-600">
              <FaCalendarAlt />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              No Bookings Yet
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
              You haven't made any reservations yet. Explore available study
              spaces and find the perfect place to focus.
            </p>

            <button
              type="button"
              className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <FaSearch />
              Discover Study Spaces
            </button>
          </div>
        </div>

        
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-200/60 bg-blue-50/50 p-5 backdrop-blur-xl">
          <FaMapMarkerAlt className="mt-1 text-blue-600" />
          <div>
            <h3 className="font-semibold text-slate-800">
              Find Your Ideal Study Space
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Browse libraries, reading rooms and coworking spaces to discover
              an environment that suits your study needs.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyBookings;
