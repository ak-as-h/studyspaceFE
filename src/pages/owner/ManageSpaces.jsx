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
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]",
    },
    {
      title: "Active Listings",
      value: "0",
      subtitle: "Available to students",
      icon: <FaCheckCircle />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#A09A93]",
    },
    {
      title: "Pending Approval",
      value: "0",
      subtitle: "Awaiting admin review",
      icon: <FaClock />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#A09A93]",
    },
    {
      title: "Inactive Listings",
      value: "0",
      subtitle: "Currently unpublished",
      icon: <FaTimesCircle />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#A09A93]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E8] p-4 md:p-8 lg:p-10">
      <div className="mx-auto" style={{ maxWidth: "1500px" }}>

        {/* Hero Banner */}
        <div className="mb-9 overflow-hidden bg-[#1C1917] p-7 text-white md:p-9">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="w-6 h-px bg-[#C17A56]" />
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                  Owner Workspace / Properties
                </p>
              </div>

              <h1
                className="text-3xl font-bold text-white md:text-4xl"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Manage Your Spaces
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#A09A93]">
                Keep your study space listings organized, monitor their
                approval status and manage your property information.
              </p>
            </div>

            <Link
              to=""
              className="flex w-fit items-center gap-3 bg-white px-6 py-4 text-sm font-bold text-[#1C1917] transition hover:bg-[#F5F0E8]"
            >
              <FaPlus />
              Add New Space
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="border border-[#EDE8DF] bg-white p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-[#7C6F60]">
                    {stat.title}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-[#1C1917]">
                    {stat.value}
                  </h2>

                  <p className="mt-2 text-xs text-[#A09A93]">
                    {stat.subtitle}
                  </p>
                </div>

                <div className={`p-4 text-xl ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table Section */}
        <section className="overflow-hidden border border-[#D4C5A9] bg-white">

          {/* Header */}
          <div className="flex flex-col justify-between gap-4 border-b border-[#EDE8DF] p-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="bg-[#F5F0E8] border border-[#EDE8DF] p-3 text-[#C17A56]">
                  <FaBuilding />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#1C1917]">
                    Property Listings
                  </h2>

                  <p className="mt-1 text-sm text-[#7C6F60]">
                    Overview of all your registered study spaces.
                  </p>
                </div>
              </div>
            </div>

            <span className="w-fit border border-[#EDE8DF] bg-[#F5F0E8] px-4 py-2 text-xs font-bold text-[#C17A56]">
              0 Properties Listed
            </span>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col gap-3 border-b border-[#EDE8DF] p-5 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A09A93]" />

              <input
                type="text"
                readOnly
                placeholder="Search property name or location..."
                className="w-full border border-[#D4C5A9] bg-[#F5F0E8] py-3 pl-11 pr-4 text-sm outline-none placeholder:text-[#A09A93]"
              />
            </div>

            <select
              defaultValue="all"
              className="border border-[#D4C5A9] bg-[#F5F0E8] px-4 py-3 text-sm text-[#1C1917] outline-none"
            >
              <option value="all">All Categories</option>
              <option>Libraries</option>
              <option>Reading Rooms</option>
              <option>Coworking Spaces</option>
              <option>Private Cabins</option>
            </select>

            <select
              defaultValue="all"
              className="border border-[#D4C5A9] bg-[#F5F0E8] px-4 py-3 text-sm text-[#1C1917] outline-none"
            >
              <option value="all">All Status</option>
              <option>Approved</option>
              <option>Pending</option>
              <option>Rejected</option>
            </select>

            <button
              type="button"
              className="flex items-center justify-center gap-2 border border-[#D4C5A9] px-5 py-3 text-sm font-semibold text-[#7C6F60]"
            >
              <FaSlidersH />
              Filters
            </button>
          </div>

          {/* Empty State */}
          <div className="px-6 py-20 text-center">
            <div className="relative mx-auto flex h-24 w-24 items-center justify-center bg-[#F5F0E8] text-4xl text-[#C17A56]">
              <FaBuilding />

              <span className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center border-4 border-white bg-[#1C1917] text-sm text-white">
                <FaPlus />
              </span>
            </div>

            <h3
              className="mt-8 text-2xl font-bold text-[#1C1917]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Your Property Portfolio Starts Here
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#7C6F60]">
              You haven't added any study spaces yet. Create your first
              listing to showcase your facilities and make them discoverable
              to students.
            </p>

            <Link
              to=""
              className="mt-7 inline-flex items-center gap-3 bg-[#1C1917] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#C17A56]"
            >
              <FaPlus />
              Add Your First Space
              <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* Bottom Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">

          {/* Guidelines Banner */}
          <div className="bg-[#1C1917] p-6 text-white lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 border border-white/10 p-3 text-[#C17A56]">
                <FaClipboardCheck />
              </div>

              <h3 className="text-lg font-bold">
                Listing Guidelines
              </h3>
            </div>

            <p className="mt-3 text-sm leading-7 text-[#A09A93]">
              Keep your property information accurate and complete. Include
              clear photographs, updated pricing, available facilities and
              correct location details to help students understand your space.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs font-medium text-[#A09A93]">
              <span className="border border-white/10 bg-white/10 px-3 py-2">
                Accurate Details
              </span>

              <span className="border border-white/10 bg-white/10 px-3 py-2">
                Clear Photographs
              </span>

              <span className="border border-white/10 bg-white/10 px-3 py-2">
                Updated Pricing
              </span>
            </div>
          </div>

          {/* Info Box */}
          <div className="border border-[#D4C5A9] bg-[#F5F0E8] p-6">
            <div className="flex h-11 w-11 items-center justify-center border border-[#EDE8DF] bg-white text-[#C17A56]">
              <FaInfoCircle className="text-xl" />
            </div>

            <h3 className="mt-4 font-bold text-[#1C1917]">
              Listing Approval
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#7C6F60]">
              New study spaces are reviewed by the administrator before
              being published and made available to students.
            </p>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-6 flex items-start gap-3 border border-[#EDE8DF] bg-white p-5">
          <FaChartPie className="mt-1 text-[#C17A56]" />

          <div>
            <h3 className="font-semibold text-[#1C1917]">
              Property Management Overview
            </h3>

            <p className="mt-1 text-sm leading-6 text-[#7C6F60]">
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
