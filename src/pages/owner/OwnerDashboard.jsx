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
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Total Bookings",
      value: "0",
      change: "All reservations",
      icon: <FaCalendarCheck />,
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "Active Spaces",
      value: "0",
      change: "Listed properties",
      icon: <FaBuilding />,
      color: "text-green-600 bg-green-50",
    },
    {
      title: "Pending Requests",
      value: "0",
      change: "Awaiting confirmation",
      icon: <FaClock />,
      color: "text-amber-600 bg-amber-50",
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
    <div className="px-5 py-8 md:px-8 lg:px-10">

    
      <div className="mb-8">
        <p className="text-sm text-slate-500">Workspace / Dashboard</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
          Business Overview
        </h1>
      </div>

      
      <section className="relative mb-8 overflow-hidden rounded-3xl bg-linear-to-r from-[#14264B] via-[#1E3A70] to-[#2563EB] p-7 text-white shadow-xl md:p-10">
        <div className="relative z-10 max-w-xl">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-blue-100">
            OWNER WORKSPACE
          </span>

          <h2 className="mt-5 text-2xl font-bold md:text-3xl">
            Manage Your Spaces.
            <br />
            Grow Your Business.
          </h2>

          <p className="mt-3 text-sm leading-6 text-blue-100">
            Keep track of your properties, manage reservations and monitor
            your business performance in one place.
          </p>

          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
          >
            <FaPlus />
            List a New Space
          </button>
        </div>

        <div className="absolute -right-10 -top-20 h-72 w-72 rounded-full border border-white/10 bg-white/5" />
        <div className="absolute -bottom-32 right-32 h-72 w-72 rounded-full border border-white/10 bg-white/5" />

        <FaBuilding className="absolute bottom-8 right-12 hidden text-8xl text-white/10 md:block" />
      </section>

      
      <section className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${stat.color}`}
              >
                {stat.icon}
              </div>

              <FaEllipsisH className="text-slate-300" />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              {stat.title}
            </p>

            <h3 className="mt-1 text-2xl font-bold text-slate-900">
              {stat.value}
            </h3>

            <p className="mt-2 text-xs text-slate-400">{stat.change}</p>
          </div>
        ))}
      </section>

      
      <section className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Booking Activity Chart */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Booking Activity
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Weekly reservation overview
              </p>
            </div>

            <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
              This Week
            </span>
          </div>

          <div className="flex h-48 items-end justify-between gap-3 border-b border-l border-slate-100 px-3 pb-0">
            {days.map((item) => (
              <div
                key={item.day}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <div
                  className={`w-full max-w-12 rounded-t-lg bg-linear-to-t from-blue-600 to-blue-400 ${item.height}`}
                />
                <span className="mb-2 text-xs text-slate-400">
                  {item.day}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-xs text-slate-400">
            Illustrative chart layout – booking data not connected.
          </p>
        </div>

        
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Revenue Overview
            </h2>
            <FaWallet className="text-xl text-blue-600" />
          </div>

          <p className="mt-7 text-sm text-slate-500">Total Earnings</p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">₹0</h3>

          <div className="mt-5 flex items-center gap-2 rounded-xl bg-green-50 p-3 text-sm text-green-700">
            <FaArrowUp />
            Revenue summary
          </div>

          <div className="mt-7 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">This Month</span>
              <span className="font-semibold text-slate-800">₹0</span>
            </div>

            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-2 w-0 rounded-full bg-blue-600" />
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Previous Month</span>
              <span className="font-semibold text-slate-800">₹0</span>
            </div>
          </div>
        </div>
      </section>

      
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        {/* My Properties */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                My Properties
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Your listed study spaces
              </p>
            </div>

            <FaBuilding className="text-xl text-blue-600" />
          </div>

          <div className="flex min-h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-6 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <FaBuilding size={23} />
            </div>

            <h3 className="font-semibold text-slate-800">
              No Properties Listed
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              Your listed libraries, reading rooms and study spaces will
              appear here.
            </p>
          </div>
        </div>

       
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Recent Reservations
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Latest customer bookings
              </p>
            </div>

            <FaCalendarCheck className="text-xl text-blue-600" />
          </div>

          <div className="flex min-h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-6 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
              <FaUsers size={23} />
            </div>

            <h3 className="font-semibold text-slate-800">
              No Reservations Yet
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              Customer reservation details will appear here.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OwnerDashboard;
