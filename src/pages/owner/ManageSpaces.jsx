import React from "react";
import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaPlus,
  FaSearch,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaSlidersH,
  FaArrowRight,
  FaChartPie,
  FaClipboardCheck,
  FaInfoCircle,
} from "react-icons/fa";

const ManageSpaces = () => {
  const stats = [
    {
      title: "Total Properties",
      value: "0",
      subtitle: "Your listed spaces",
      icon: <FaBuilding />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Active Listings",
      value: "0",
      subtitle: "Available to students",
      icon: <FaCheckCircle />,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Pending Approval",
      value: "0",
      subtitle: "Awaiting admin review",
      icon: <FaClock />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Inactive Listings",
      value: "0",
      subtitle: "Currently unpublished",
      icon: <FaTimesCircle />,
      color: "bg-red-50 text-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6FA] p-4 md:p-8 lg:p-10">
      <div className="mx-auto max-w-[1500px]">

        {/* Page Header */}
        <div className="mb-9 overflow-hidden rounded-3xl bg-[#14294C] p-7 text-white shadow-lg md:p-9">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-blue-300">
                Owner Workspace / Properties
              </p>

              <h1 className="text-3xl font-bold md:text-4xl">
                Manage Your Spaces
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-7 text-blue-100">
                Keep your study space listings organized, monitor their
                approval status and manage your property information.
              </p>
            </div>

            <Link
              to="/owner/add-space"
              className="flex w-fit items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#14294C] transition hover:bg-blue-50"
            >
              <FaPlus />
              Add New Space
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-[#101B35]">
                    {stat.value}
                  </h2>

                  <p className="mt-2 text-xs text-gray-400">
                    {stat.subtitle}
                  </p>
                </div>

                <div className={`rounded-xl p-4 text-xl ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Listing Management */}
        <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

          {/* Section Heading */}
          <div className="flex flex-col justify-between gap-4 border-b border-gray-100 p-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <FaBuilding />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#101B35]">
                    Property Listings
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Overview of all your registered study spaces.
                  </p>
                </div>
              </div>
            </div>

            <span className="w-fit rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
              0 Properties Listed
            </span>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col gap-3 border-b border-gray-100 p-5 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                readOnly
                placeholder="Search property name or location..."
                className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] py-3 pl-11 pr-4 text-sm outline-none placeholder:text-gray-400"
              />
            </div>

            <select
              defaultValue="all"
              className="rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm text-gray-600 outline-none"
            >
              <option value="all">All Categories</option>
              <option>Libraries</option>
              <option>Reading Rooms</option>
              <option>Coworking Spaces</option>
              <option>Private Cabins</option>
            </select>

            <select
              defaultValue="all"
              className="rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm text-gray-600 outline-none"
            >
              <option value="all">All Status</option>
              <option>Approved</option>
              <option>Pending</option>
              <option>Rejected</option>
            </select>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600"
            >
              <FaSlidersH />
              Filters
            </button>
          </div>

          {/* Empty State */}
          <div className="px-6 py-20 text-center">
            <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-50 text-4xl text-blue-600">
              <FaBuilding />

              <span className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-sm text-white">
                <FaPlus />
              </span>
            </div>

            <h3 className="mt-8 text-2xl font-bold text-[#101B35]">
              Your Property Portfolio Starts Here
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-gray-500">
              You haven't added any study spaces yet. Create your first
              listing to showcase your facilities and make them discoverable
              to students.
            </p>

            <Link
              to="/owner/add-space"
              className="mt-7 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              <FaPlus />
              Add Your First Space
              <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* Bottom Information */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">

          {/* Listing Guidelines */}
          <div className="rounded-2xl bg-[#14294C] p-6 text-white lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white/10 p-3 text-blue-200">
                <FaClipboardCheck />
              </div>

              <h3 className="text-lg font-bold">
                Listing Guidelines
              </h3>
            </div>

            <p className="mt-3 text-sm leading-7 text-blue-100">
              Keep your property information accurate and complete. Include
              clear photographs, updated pricing, available facilities and
              correct location details to help students understand your space.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs font-medium text-blue-100">
              <span className="rounded-lg bg-white/10 px-3 py-2">
                Accurate Details
              </span>

              <span className="rounded-lg bg-white/10 px-3 py-2">
                Clear Photographs
              </span>

              <span className="rounded-lg bg-white/10 px-3 py-2">
                Updated Pricing
              </span>
            </div>
          </div>

          {/* Approval Information */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600">
              <FaInfoCircle className="text-xl" />
            </div>

            <h3 className="mt-4 font-bold text-blue-950">
              Listing Approval
            </h3>

            <p className="mt-3 text-sm leading-7 text-blue-800">
              New study spaces are reviewed by the administrator before
              being published and made available to students.
            </p>
          </div>
        </div>

        {/* Management Reminder */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5">
          <FaChartPie className="mt-1 text-blue-600" />

          <div>
            <h3 className="font-semibold text-[#101B35]">
              Property Management Overview
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-500">
              Your listing statistics and property information will be
              displayed here as you add spaces to your portfolio.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ManageSpaces;
