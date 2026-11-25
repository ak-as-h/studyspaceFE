import React from "react";
import {
  FaBuilding,
  FaShieldAlt,
  FaSearch,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaExclamationTriangle,
  FaClipboardCheck,
  FaMapMarkerAlt,
  FaFilter,
  FaFileAlt,
  FaImage,
  FaIdCard,
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
      number: "01",
      title: "Property Information",
      description: "Check the property name, category and description.",
      icon: <FaFileAlt />,
    },
    {
      number: "02",
      title: "Location Details",
      description: "Review the submitted address and location information.",
      icon: <FaMapMarkerAlt />,
    },
    {
      number: "03",
      title: "Facilities and Images",
      description: "Inspect listed amenities and submitted property photographs.",
      icon: <FaImage />,
    },
    {
      number: "04",
      title: "Owner Information",
      description: "Confirm the associated owner's identity and details.",
      icon: <FaIdCard />,
    },
  ];

  const spaces = [];

  return (
    <div className="min-h-screen bg-[#F1F3F6] p-4 md:p-7 lg:p-9">

      {/* Page Header */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-400">
          <span>Administration</span>
          <span>/</span>
          <span className="text-indigo-600">Study Spaces</span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight text-[#202938] md:text-3xl">
          Space Verification
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Review and verify properties submitted by space owners.
        </p>
      </div>

      
      <section className="mb-7 overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]">
          <div className="p-6 md:p-8">
            <div className="inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 text-xs font-bold tracking-wide text-indigo-600">
              <FaClipboardCheck />
              LISTING QUALITY CONTROL
            </div>

            <h2 className="mt-5 text-2xl font-bold tracking-tight text-[#202938] md:text-3xl">
              Every space deserves a proper review.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
              Verify property details, facilities, location and ownership
              information before making a study space available to students.
            </p>
          </div>

          <div className="flex items-center justify-center border-t border-gray-100 bg-[#F8F9FC] px-12 py-8 lg:border-l lg:border-t-0">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-indigo-100 text-4xl text-indigo-600">
              <FaClipboardCheck />

              <span className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-emerald-100 text-sm text-emerald-600">
                <FaCheckCircle />
              </span>
            </div>
          </div>
        </div>
      </section>

      
      <section className="mb-7">
        <div className="mb-4">
          <h2 className="text-sm font-bold text-[#202938]">
            Verification Statistics
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Overview of submitted property listings
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold text-gray-500">
                    {item.title}
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold text-[#202938]">
                    {item.value}
                  </h3>
                </div>

                <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg ${item.color}`}>
                  {item.icon}
                </div>
              </div>

              <p className="mt-3 text-xs text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="mb-7 rounded-xl border border-gray-200 bg-white p-5 md:p-6">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-sm font-bold text-[#202938]">
              Property Review Checklist
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              Important details to inspect before approval
            </p>
          </div>

          <span className="w-fit rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-600">
            Quality Standards
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {reviewChecklist.map((item) => (
            <div
              key={item.number}
              className="rounded-xl border border-gray-100 bg-[#F8F9FB] p-5 transition-colors hover:border-indigo-100"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg text-indigo-600 shadow-sm">
                  {item.icon}
                </div>

                <span className="text-2xl font-extrabold text-gray-200">
                  {item.number}
                </span>
              </div>

              <h3 className="text-sm font-bold text-[#202938]">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="overflow-hidden rounded-xl border border-gray-200 bg-white">

        {/* Directory Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-gray-100 p-5 md:flex-row md:items-center md:p-6">
          <div>
            <h2 className="text-sm font-bold text-[#202938]">
              Submitted Study Spaces
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              Review property listings and their approval status.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 self-start">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold text-indigo-600">
              0 Listings
            </span>
          </div>
        </div>

       
        <div className="grid grid-cols-1 gap-3 border-b border-gray-100 p-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-gray-400" />

            <input
              readOnly
              type="text"
              placeholder="Search property or location..."
              className="w-full rounded-lg border border-gray-200 bg-[#FAFBFD] py-3 pl-10 pr-4 text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <select
              defaultValue="all"
              className="rounded-lg border border-gray-200 bg-white px-3 py-3 text-xs text-gray-600 outline-none"
            >
              <option value="all">All Categories</option>
              <option value="library">Libraries</option>
              <option value="reading">Reading Rooms</option>
              <option value="coworking">Coworking Spaces</option>
              <option value="cabin">Private Cabins</option>
            </select>

            <select
              defaultValue="pending"
              className="rounded-lg border border-gray-200 bg-white px-3 py-3 text-xs text-gray-600 outline-none"
            >
              <option value="pending">Pending Review</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="all">All Statuses</option>
            </select>

            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-3 text-xs font-semibold text-gray-600"
            >
              <FaFilter />
              Filters
            </button>
          </div>
        </div>

        
        <div className="overflow-x-auto">
          <table className="w-full text-left" style={{ minWidth: "950px" }}>
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
              {spaces.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-6 py-16">
                    <div className="mx-auto flex max-w-sm flex-col items-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-2xl text-indigo-500">
                        <FaBuilding />
                      </div>

                      <h3 className="mt-5 text-base font-bold text-[#202938]">
                        No Study Spaces Submitted
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-400">
                        New property listings submitted by owners will
                        appear here when available.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 px-5 py-4">
          <p className="text-xs text-gray-400">
            Showing 0 of 0 listings
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-400"
            >
              Previous
            </button>

            <button
              type="button"
              className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      
      <section className="mt-7 rounded-xl border border-amber-100 bg-amber-50/70 p-5">
        <div className="flex items-start gap-3">
          <FaExclamationTriangle className="mt-0.5 shrink-0 text-amber-600" />

          <div>
            <h3 className="text-sm font-bold text-amber-800">
              Important Verification Reminder
            </h3>

            <p className="mt-2 text-xs leading-5 text-amber-700">
              Check property details, location, facilities, photographs
              and owner information before approving a listing.
              Unverified properties should not be made available to students.
            </p>
          </div>
        </div>
      </section>

      
      <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-5 text-xs text-gray-400">
        <p>StudySpace Administration</p>
        <p>Space Verification Console</p>
      </footer>
    </div>
  );
};

export default VerifySpaces;
