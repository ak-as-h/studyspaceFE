import React from "react";
import {
  FaUsers,
  FaUserTie,
  FaBuilding,
  FaClipboardCheck,
  FaChartLine,
  FaShieldAlt,
  FaArrowRight,
  FaExclamationCircle,
  FaCheckCircle,
  FaHistory,
  FaGlobe,
  FaUserShield,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const stats = [
    {
      label: "Total Users",
      value: "—",
      icon: <FaUsers />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]",
      description: "Registered student accounts",
    },
    {
      label: "Space Owners",
      value: "—",
      icon: <FaUserTie />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#7C9A92]",
      description: "Registered property owners",
    },
    {
      label: "Listed Spaces",
      value: "—",
      icon: <FaBuilding />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#A09A93]",
      description: "Spaces across the platform",
    },
    {
      label: "Pending Reviews",
      value: "—",
      icon: <FaClipboardCheck />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#A09A93]",
      description: "Awaiting admin verification",
    },
  ];

  const managementLinks = [
    {
      title: "Manage Users",
      description: "Review and manage student accounts.",
      icon: <FaUsers />,
      link: "/admin/users",
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]",
    },
    {
      title: "Manage Owners",
      description: "Review owner accounts and details.",
      icon: <FaUserTie />,
      link: "/admin/owners",
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]",
    },
    {
      title: "Verify Spaces",
      description: "Review submitted study spaces.",
      icon: <FaBuilding />,
      link: "/admin/spaces",
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]",
    },
  ];

  const healthItems = [
    "User Accounts",
    "Owner Accounts",
    "Study Space Listings",
    "Space Verification",
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E8] p-4 md:p-7 lg:p-9">

      {/* Page Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-[#A09A93]">
            <span>Administration</span>
            <span>/</span>
            <span className="text-[#C17A56]">Overview</span>
          </div>

          <h1
            className="text-2xl font-extrabold tracking-tight text-[#1C1917] md:text-3xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Admin Dashboard
          </h1>

          <p className="mt-2 text-sm text-[#7C6F60]">
            Monitor platform operations and manage verification activities.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start border border-[#EDE8DF] bg-white px-4 py-2.5 md:self-auto">
          <FaUserShield className="text-[#C17A56]" />
          <span className="text-xs font-semibold text-[#7C6F60]">
            Administrator
          </span>
        </div>
      </div>

      {/* Platform Control Center */}
      <section className="mb-7 overflow-hidden border border-[#EDE8DF] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]">
          <div className="p-6 md:p-8">
            <div className="mb-4 inline-flex items-center gap-2 bg-[#F5F0E8] px-3 py-2 text-xs font-bold tracking-wide text-[#C17A56]">
              <FaGlobe />
              PLATFORM CONTROL CENTER
            </div>

            <h2
              className="text-2xl font-bold text-[#1C1917] md:text-3xl"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Manage your platform
              <span className="text-[#C17A56]"> with clarity.</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#7C6F60]">
              Oversee users, space owners and study space verification
              from one centralized administration dashboard.
            </p>
          </div>

          <div className="flex items-center justify-center border-t border-[#EDE8DF] bg-[#F5F0E8] px-10 py-7 lg:border-l lg:border-t-0">
            <div className="flex h-24 w-24 items-center justify-center border border-[#D4C5A9] bg-white text-4xl text-[#1C1917]">
              <FaShieldAlt />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-7">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#1C1917]">
            Platform Statistics
          </h2>
          <span className="text-xs text-[#A09A93]">
            Overview metrics
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-[#EDE8DF] bg-white p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#7C6F60]">
                    {stat.label}
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold text-[#1C1917]">
                    {stat.value}
                  </h3>
                </div>

                <div className={`flex h-11 w-11 items-center justify-center text-lg ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>

              <p className="mt-3 text-xs text-[#A09A93]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics + Platform Health */}
      <section className="mb-7 grid grid-cols-1 gap-5 xl:grid-cols-3">

        {/* Analytics */}
        <div className="border border-[#EDE8DF] bg-white p-6 xl:col-span-2">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-sm font-bold text-[#1C1917]">
                Platform Analytics
              </h3>
              <p className="mt-1 text-xs text-[#A09A93]">
                User registrations and booking activity
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#C17A56]">
              <FaChartLine />
              Analytics Overview
            </div>
          </div>

          <div className="flex min-h-64 flex-col items-center justify-center border border-dashed border-[#D4C5A9] bg-[#F5F0E8] px-5 text-center">
            <div className="flex h-14 w-14 items-center justify-center bg-white border border-[#EDE8DF] text-2xl text-[#C17A56]">
              <FaChartLine />
            </div>

            <h4 className="mt-4 text-sm font-semibold text-[#1C1917]">
              Analytics will appear here
            </h4>

            <p className="mt-2 max-w-sm text-xs leading-5 text-[#A09A93]">
              Platform activity charts will be available when analytics
              information is connected.
            </p>
          </div>
        </div>

        {/* Platform Health */}
        <div className="border border-[#EDE8DF] bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-[#1C1917]">
                Platform Health
              </h3>
              <p className="mt-1 text-xs text-[#A09A93]">
                Operational overview
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-[#1C1917]">
              <FaShieldAlt />
            </div>
          </div>

          <div className="space-y-5">
            {healthItems.map((item) => (
              <div key={item}>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-[#7C6F60]">
                    {item}
                  </span>
                  <span className="text-xs font-semibold text-[#A09A93]">
                    —
                  </span>
                </div>

                <div className="mt-2 h-1.5 w-full bg-[#F5F0E8]" />
              </div>
            ))}
          </div>

          <div className="mt-7 border border-[#EDE8DF] bg-[#F5F0E8] p-3">
            <div className="flex gap-2">
              <FaExclamationCircle className="mt-0.5 shrink-0 text-[#C17A56]" />
              <p className="text-xs leading-5 text-[#7C6F60]">
                Platform monitoring information will be displayed here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Center */}
      <section className="mb-7">
        <div className="mb-4">
          <h2 className="text-sm font-bold text-[#1C1917]">
            Management Center
          </h2>
          <p className="mt-1 text-xs text-[#A09A93]">
            Access the main administration sections.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {managementLinks.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="group flex items-center justify-between border border-[#EDE8DF] bg-white p-5 transition-all hover:border-[#C17A56]"
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center text-xl ${item.color}`}>
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#1C1917]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#A09A93]">
                    {item.description}
                  </p>
                </div>
              </div>

              <FaArrowRight className="shrink-0 text-sm text-[#A09A93] transition-transform group-hover:translate-x-1 group-hover:text-[#C17A56]" />
            </Link>
          ))}
        </div>
      </section>

      {/* Verification Queue + Recent Activity */}
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        {/* Verification Queue */}
        <div className="overflow-hidden border border-[#EDE8DF] bg-white">
          <div className="flex items-center justify-between border-b border-[#EDE8DF] p-5">
            <div>
              <h3 className="text-sm font-bold text-[#1C1917]">
                Verification Queue
              </h3>
              <p className="mt-1 text-xs text-[#A09A93]">
                Study spaces awaiting review
              </p>
            </div>

            <Link
              to="/admin/spaces"
              className="flex items-center gap-2 text-xs font-semibold text-[#C17A56] hover:text-[#1C1917]"
            >
              View All <FaArrowRight />
            </Link>
          </div>

          <div className="p-5">
            <div className="flex min-h-44 flex-col items-center justify-center text-center">
              <div className="flex h-12 w-12 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-xl text-[#C17A56]">
                <FaClipboardCheck />
              </div>

              <h4 className="mt-4 text-sm font-semibold text-[#1C1917]">
                No Pending Verifications
              </h4>

              <p className="mt-2 max-w-xs text-xs leading-5 text-[#A09A93]">
                Submitted study spaces will appear here for administrative
                review.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="overflow-hidden border border-[#EDE8DF] bg-white">
          <div className="flex items-center justify-between border-b border-[#EDE8DF] p-5">
            <div>
              <h3 className="text-sm font-bold text-[#1C1917]">
                Recent Activity
              </h3>
              <p className="mt-1 text-xs text-[#A09A93]">
                Latest platform updates
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-[#A09A93]">
              <FaHistory />
            </div>
          </div>

          <div className="flex min-h-52 flex-col items-center justify-center px-5 text-center">
            <div className="flex h-12 w-12 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-xl text-[#A09A93]">
              <FaHistory />
            </div>

            <h4 className="mt-4 text-sm font-semibold text-[#1C1917]">
              No Recent Activity
            </h4>

            <p className="mt-2 max-w-xs text-xs leading-5 text-[#A09A93]">
              Platform activity and administrative updates will appear here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
