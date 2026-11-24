
import React from "react";
import {
  FaBuilding,
  FaShieldAlt,
  FaSearch,
  FaEllipsisH,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaExclamationTriangle,
  FaClipboardCheck,
  FaMapMarkerAlt,
  FaFilter,
  FaFileAlt,
  FaImage,
} from "react-icons/fa";

const VerifySpaces = () => {
  const statistics = [
    {
      title: "Total Listings",
      value: "0",
      description: "All submitted spaces",
      icon: <FaBuilding />,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Approved",
      value: "0",
      description: "Verified properties",
      icon: <FaCheckCircle />,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Pending Review",
      value: "0",
      description: "Awaiting verification",
      icon: <FaClock />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Rejected",
      value: "0",
      description: "Unapproved listings",
      icon: <FaTimesCircle />,
      color: "bg-rose-50 text-rose-600",
    },
  ];

  const reviewChecklist = [
    {
      title: "Property Information",
      description: "Check the name, category and description.",
      icon: <FaFileAlt />,
    },
    {
      title: "Location Details",
      description: "Review the submitted address and location.",
      icon: <FaMapMarkerAlt />,
    },
    {
      title: "Facilities and Images",
      description: "Check amenities and property photographs.",
      icon: <FaImage />,
    },
    {
      title: "Owner Information",
      description: "Confirm the associated owner details.",
      icon: <FaShieldAlt />,
    },
  ];

  const spaces = [];

  return (
    <div className="p-5 lg:p-8">

      {/* Page Header */}
      <div className="mb-8">
        <p className="text-xs font-medium text-gray-400">
          Workspace / Study Spaces
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
          Space Verification
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Review and verify properties submitted by space owners.
        </p>
      </div>

      
      <section className="mb-7 grid overflow-hidden rounded-xl border border-gray-200 bg-white md:grid-cols-[1fr_250px]">
        <div className="p-6 md:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
            <FaClipboardCheck />
            Listing Quality Control
          </span>

          <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
            Every space deserves a proper review.
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
            Verify property details, facilities, location and ownership
            information before making a study space available to students.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Open Review Queue
            </button>

            <button
              type="button"
              className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-600"
            >
              Review Guidelines
            </button>
          </div>
        </div>

        <div className="hidden items-center justify-center bg-indigo-50 md:flex">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-indigo-100 bg-white text-indigo-600">
            <FaClipboardCheck size={55} />
            <span className="absolute -right-1 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <FaCheckCircle />
            </span>
          </div>
        </div>
      </section>

      
      <section className="mb-8">
        <div className="mb-5">
          <h3 className="text-base font-bold text-gray-900">
            Verification Statistics
          </h3>
          <p className="mt-1 text-xs text-gray-400">
            Overview of submitted property listings
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className={`rounded-lg p-3 ${item.color}`}>
                  {item.icon}
                </div>
                <FaEllipsisH className="text-gray-300" />
              </div>

              <p className="text-sm font-medium text-gray-500">
                {item.title}
              </p>

              <h4 className="mt-2 text-3xl font-bold text-gray-900">
                {item.value}
              </h4>

              <p className="mt-2 text-xs text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-gray-900">
              Property Review Checklist
            </h3>
            <p className="mt-1 text-xs text-gray-400">
              Important details to inspect before approval
            </p>
          </div>

          <span className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
            Quality Standards
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {reviewChecklist.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 bg-[#F8F9FB] p-5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm">
                {item.icon}
              </div>

              <h4 className="text-sm font-bold text-gray-800">
                {item.title}
              </h4>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="overflow-hidden rounded-xl border border-gray-200 bg-white">

        
        <div className="border-b border-gray-100 p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-gray-900">
                Submitted Study Spaces
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                Review property listings and approval status.
              </p>
            </div>

            <span className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
              0 Listings
            </span>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 lg:w-80">
              <FaSearch className="text-xs text-gray-400" />
              <input
                type="text"
                placeholder="Search property or location..."
                readOnly
                className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-gray-400 focus:ring-0"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <select
                defaultValue="all"
                className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-600 outline-none"
              >
                <option value="all">All Categories</option>
                <option value="library">Libraries</option>
                <option value="reading">Reading Rooms</option>
                <option value="coworking">Coworking Spaces</option>
                <option value="cabin">Private Cabins</option>
              </select>

              <select
                defaultValue="pending"
                className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-600 outline-none"
              >
                <option value="pending">Pending Review</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="all">All Statuses</option>
              </select>

              <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600"
              >
                <FaFilter />
                Filters
              </button>
            </div>
          </div>
        </div>

        
        <div className="overflow-x-auto">
          <table className="w-full min-w-200 text-left">
            <thead className="bg-[#F8F9FB]">
              <tr className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                <th className="px-6 py-4">Property</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Owner</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Review</th>
              </tr>
            </thead>

            <tbody>
              {spaces.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-16 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 text-indigo-400">
                      <FaBuilding size={27} />
                    </div>

                    <h4 className="font-semibold text-gray-800">
                      No Study Spaces Submitted
                    </h4>

                    <p className="mt-2 text-sm text-gray-400">
                      New property listings submitted by owners will appear
                      here.
                    </p>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 px-6 py-4">
          <p className="text-xs text-gray-400">
            Showing 0 of 0 listings
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-400"
            >
              Previous
            </button>

            <button
              type="button"
              className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      
      <section className="mt-7 rounded-xl border border-amber-100 bg-amber-50/70 p-5">
        <div className="flex items-start gap-3">
          <FaExclamationTriangle className="mt-0.5 text-amber-600" />
          <div>
            <h4 className="text-sm font-bold text-amber-800">
              Important Verification Reminder
            </h4>
            <p className="mt-1 text-xs leading-5 text-amber-700">
              Check property details, location, facilities, photographs
              and owner information before approving a listing. Unverified
              properties should not be made available to students.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
        <p>© 2026 StudySpace Admin Console</p>
        <p>Space Verification</p>
      </footer>
    </div>
  );
};

export default VerifySpaces;
