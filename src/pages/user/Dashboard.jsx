
import React from "react";
import {
  FaBookOpen,
  FaCalendarCheck,
  FaClock,
  FaMapMarkerAlt,
  FaSearch,
  FaArrowRight,
  FaBookmark,
  FaUser,
} from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Bookings",
      value: "0",
      icon: <FaCalendarCheck />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Upcoming Bookings",
      value: "0",
      icon: <FaClock />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Completed Bookings",
      value: "0",
      icon: <FaBookOpen />,
      color: "bg-green-50 text-green-600",
    },
  ];

  const quickActions = [
    {
      title: "Explore Spaces",
      description: "Find your perfect study environment.",
      icon: <FaSearch />,
    },
    {
      title: "My Bookings",
      description: "View and manage your reservations.",
      icon: <FaCalendarCheck />,
    },
    {
      title: "My Profile",
      description: "Manage your account information.",
      icon: <FaUser />,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">

      
      <section className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Student Dashboard
          </span>

          <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Welcome Back!
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500 md:text-base">
            Manage your bookings and discover new places to study.
          </p>
        </div>
      </section>

      
      <section className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-white/70 bg-white/35 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl ${stat.color}`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </section>

      
      <section className="mb-10">
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-slate-900">
            Quick Actions
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Everything you need in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {quickActions.map((action) => (
            <div
              key={action.title}
              className="group rounded-2xl border border-white/70 bg-white/35 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/45 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100/60 text-lg text-blue-600">
                {action.icon}
              </div>

              <h3 className="font-bold text-slate-900 transition group-hover:text-blue-600">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {action.description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600">
                Explore
                <FaArrowRight className="transition group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="mb-10 rounded-2xl border border-white/70 bg-white/35 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl md:p-8">

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Recent Bookings
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Keep track of your study reservations.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
          >
            View All
            <FaArrowRight />
          </button>
        </div>

        <div className="flex min-h-56 flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100/60">
            <FaCalendarCheck className="text-2xl text-blue-600" />
          </div>

          <h3 className="font-bold text-slate-900">
            No Bookings Yet
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
            Your study-space reservations will appear here once you make
            your first booking.
          </p>

          <button
            type="button"
            className="mt-5 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
          >
            Find a Study Space
          </button>
        </div>

      </section>

      
      <section className="rounded-2xl border border-white/70 bg-white/35 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl md:p-8">

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Discover Study Spaces
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Find a comfortable place for your next study session.
            </p>
          </div>

          <FaBookmark className="text-xl text-blue-600" />
        </div>

        <div className="flex min-h-48 flex-col items-center justify-center text-center">
          <FaMapMarkerAlt className="mb-4 text-3xl text-blue-600" />

          <h3 className="font-bold text-slate-900">
            Explore New Places
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
            Browse libraries, reading rooms and coworking spaces
            to find the environment that suits you.
          </p>

          <button
            type="button"
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-600/90 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Explore Now
            <FaArrowRight />
          </button>
        </div>

      </section>

    </div>
  );
};

export default Dashboard;
