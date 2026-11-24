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
      color: "bg-indigo-50 text-indigo-600",
      description: "Registered student accounts",
    },
    {
      label: "Space Owners",
      value: "—",
      icon: <FaUserTie />,
      color: "bg-sky-50 text-sky-600",
      description: "Registered property owners",
    },
    {
      label: "Listed Spaces",
      value: "—",
      icon: <FaBuilding />,
      color: "bg-violet-50 text-violet-600",
      description: "Spaces across the platform",
    },
    {
      label: "Pending Reviews",
      value: "—",
      icon: <FaClipboardCheck />,
      color: "bg-amber-50 text-amber-600",
      description: "Awaiting admin verification",
    },
  ];

  const managementLinks = [
    {
      title: "Manage Users",
      description: "Review and manage student accounts.",
      icon: <FaUsers />,
      link: "/admin/users",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Manage Owners",
      description: "Review owner accounts and details.",
      icon: <FaUserTie />,
      link: "/admin/owners",
      color: "bg-sky-50 text-sky-600",
    },
    {
      title: "Verify Spaces",
      description: "Review submitted study spaces.",
      icon: <FaBuilding />,
      link: "/admin/spaces",
      color: "bg-violet-50 text-violet-600",
    },
  ];

  const healthItems = [
    "User Accounts",
    "Owner Accounts",
    "Study Space Listings",
    "Space Verification",
  ];

  return (
    <div className="min-h-screen bg-[#F1F3F6] p-4 md:p-7 lg:p-9">

      {/* Page Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-400">
            <span>Administration</span>
            <span>/</span>
            <span className="text-indigo-600">Overview</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#202938] md:text-3xl">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Monitor platform operations and manage verification activities.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start rounded-xl border border-gray-200 bg-white px-4 py-2.5 md:self-auto">
          <FaUserShield className="text-indigo-600" />
          <span className="text-xs font-semibold text-gray-600">
            Administrator
          </span>
        </div>
      </div>

      {/* Platform Summary Banner */}
      <section className="mb-7 overflow-hidden rounded-2xl border border-indigo-100 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]">
          <div className="p-6 md:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 text-xs font-bold tracking-wide text-indigo-600">
              <FaGlobe />
              PLATFORM CONTROL CENTER
            </div>

            <h2 className="text-2xl font-bold text-[#202938] md:text-3xl">
              Manage your platform
              <span className="text-indigo-600"> with clarity.</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
              Oversee users, space owners and study space verification
              from one centralized administration dashboard.
            </p>
          </div>

          <div className="flex items-center justify-center border-t border-gray-100 bg-[#F8F9FC] px-10 py-7 lg:border-l lg:border-t-0">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-indigo-100 text-4xl text-indigo-600">
              <FaShieldAlt />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="mb-7">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#202938]">
            Platform Statistics
          </h2>
          <span className="text-xs text-gray-400">
            Overview metrics
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold text-gray-500">
                    {stat.label}
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold text-[#202938]">
                    {stat.value}
                  </h3>
                </div>

                <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>

              <p className="mt-3 text-xs text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics and Platform Health */}
      <section className="mb-7 grid grid-cols-1 gap-5 xl:grid-cols-3">

        {/* Analytics */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 xl:col-span-2">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-sm font-bold text-[#202938]">
                Platform Analytics
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                User registrations and booking activity
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600">
              <FaChartLine />
              Analytics Overview
            </div>
          </div>

          <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-[#FAFBFD] px-5 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-2xl text-indigo-500">
              <FaChartLine />
            </div>

            <h4 className="mt-4 text-sm font-semibold text-gray-600">
              Analytics will appear here
            </h4>

            <p className="mt-2 max-w-sm text-xs leading-5 text-gray-400">
              Platform activity charts will be available when analytics
              information is connected.
            </p>
          </div>
        </div>

        {/* Platform Health */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-[#202938]">
                Platform Health
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                Operational overview
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <FaShieldAlt />
            </div>
          </div>

          <div className="space-y-5">
            {healthItems.map((item) => (
              <div key={item}>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-gray-600">
                    {item}
                  </span>
                  <span className="text-xs font-semibold text-gray-300">
                    —
                  </span>
                </div>

                <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100" />
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-lg border border-indigo-100 bg-indigo-50/60 p-3">
            <div className="flex gap-2">
              <FaExclamationCircle className="mt-0.5 shrink-0 text-indigo-500" />
              <p className="text-xs leading-5 text-indigo-700">
                Platform monitoring information will be displayed here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Shortcuts */}
      <section className="mb-7">
        <div className="mb-4">
          <h2 className="text-sm font-bold text-[#202938]">
            Management Center
          </h2>
          <p className="mt-1 text-xs text-gray-400">
            Access the main administration sections.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {managementLinks.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-indigo-200 hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl ${item.color}`}>
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#202938]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>

              <FaArrowRight className="shrink-0 text-sm text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
            </Link>
          ))}
        </div>
      </section>

      {/* Verification and Activity */}
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        {/* Verification Queue */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="flex items-center justify-between border-b border-gray-100 p-5">
            <div>
              <h3 className="text-sm font-bold text-[#202938]">
                Verification Queue
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                Study spaces awaiting review
              </p>
            </div>

            <Link
              to="/admin/spaces"
              className="flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
            >
              View All <FaArrowRight />
            </Link>
          </div>

          <div className="p-5">
            <div className="flex min-h-44 flex-col items-center justify-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-500">
                <FaClipboardCheck />
              </div>

              <h4 className="mt-4 text-sm font-semibold text-gray-600">
                No Pending Verifications
              </h4>

              <p className="mt-2 max-w-xs text-xs leading-5 text-gray-400">
                Submitted study spaces will appear here for administrative
                review.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="flex items-center justify-between border-b border-gray-100 p-5">
            <div>
              <h3 className="text-sm font-bold text-[#202938]">
                Recent Activity
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                Latest platform updates
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-500">
              <FaHistory />
            </div>
          </div>

          <div className="flex min-h-52 flex-col items-center justify-center px-5 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl text-gray-400">
              <FaHistory />
            </div>

            <h4 className="mt-4 text-sm font-semibold text-gray-600">
              No Recent Activity
            </h4>

            <p className="mt-2 max-w-xs text-xs leading-5 text-gray-400">
              Platform activity and administrative updates will appear here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
