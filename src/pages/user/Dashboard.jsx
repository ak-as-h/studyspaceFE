
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
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]",
    },
    {
      title: "Upcoming Bookings",
      value: "0",
      icon: <FaClock />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]",
    },
    {
      title: "Completed Bookings",
      value: "0",
      icon: <FaBookOpen />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]",
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

      {/* Welcome Header */}
      <section className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="w-6 h-px bg-[#C17A56]" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
              Student Dashboard
            </span>
          </div>

          <h1
            className="mt-3 text-3xl font-bold tracking-tight text-[#1C1917] md:text-4xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Welcome Back!
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#7C6F60] md:text-base">
            Manage your bookings and discover new places to study.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="border border-[#EDE8DF] bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#7C6F60]">{stat.title}</p>
                <h2 className="mt-3 text-3xl font-bold text-[#1C1917]">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center text-xl ${stat.color}`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Quick Actions */}
      <section className="mb-10">
        <div className="mb-5">
          <div className="mb-3 flex items-center gap-3">
            <span className="w-6 h-px bg-[#C17A56]" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
              Navigation
            </span>
          </div>
          <h2
            className="text-2xl font-bold tracking-tight text-[#1C1917]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Quick Actions
          </h2>

          <p className="mt-2 text-sm text-[#7C6F60]">
            Everything you need in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {quickActions.map((action) => (
            <div
              key={action.title}
              className="group border border-[#EDE8DF] bg-white p-6 transition duration-300 hover:border-[#C17A56]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-lg text-[#C17A56]">
                {action.icon}
              </div>

              <h3 className="font-bold text-[#1C1917]">{action.title}</h3>

              <p className="mt-2 text-sm leading-6 text-[#7C6F60]">
                {action.description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#A09A93] transition group-hover:text-[#C17A56]">
                Explore
                <FaArrowRight className="transition group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Bookings */}
      <section className="mb-10 border border-[#EDE8DF] bg-white p-6 md:p-8">

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="w-6 h-px bg-[#C17A56]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                History
              </span>
            </div>
            <h2
              className="text-2xl font-bold tracking-tight text-[#1C1917]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Recent Bookings
            </h2>

            <p className="mt-2 text-sm text-[#7C6F60]">
              Keep track of your study reservations.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 text-sm font-semibold text-[#C17A56] transition hover:text-[#1C1917]"
          >
            View All
            <FaArrowRight />
          </button>
        </div>

        <div className="flex min-h-56 flex-col items-center justify-center border border-dashed border-[#D4C5A9] bg-[#F5F0E8] p-8 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center bg-white border border-[#EDE8DF]">
            <FaCalendarCheck className="text-2xl text-[#C17A56]" />
          </div>

          <h3 className="font-bold text-[#1C1917]">No Bookings Yet</h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-[#7C6F60]">
            Your study-space reservations will appear here once you make
            your first booking.
          </p>

          <button
            type="button"
            className="mt-5 text-sm font-semibold text-[#C17A56] transition hover:text-[#1C1917]"
          >
            Find a Study Space
          </button>
        </div>

      </section>

      {/* Discover */}
      <section className="bg-[#1C1917] p-6 md:p-8">

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="w-6 h-px bg-[#C17A56]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                Discover
              </span>
            </div>
            <h2
              className="text-2xl font-bold tracking-tight text-white"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Discover Study Spaces
            </h2>

            <p className="mt-2 text-sm text-[#A09A93]">
              Find a comfortable place for your next study session.
            </p>
          </div>

          <FaBookmark className="text-xl text-[#C17A56]" />
        </div>

        <div className="flex min-h-48 flex-col items-center justify-center text-center">
          <FaMapMarkerAlt className="mb-4 text-3xl text-[#C17A56]" />

          <h3 className="font-bold text-white">Explore New Places</h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-[#A09A93]">
            Browse libraries, reading rooms and coworking spaces
            to find the environment that suits you.
          </p>

          <button
            type="button"
            className="mt-5 inline-flex items-center gap-2 bg-[#C17A56] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A8663F]"
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
