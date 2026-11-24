
import React from "react";
import {
  FaUsers,
  FaUserTie,
  FaShieldAlt,
  FaSearch,
  FaEllipsisH,
  FaStore,
  FaUserCheck,
  FaUserClock,
  FaUserTimes,
  FaExclamationCircle,
  FaFilter,
  FaDownload,
  FaFileAlt,
  FaArrowRight,
} from "react-icons/fa";

const ManageOwners = () => {
  const statistics = [
    {
      title: "Total Owners",
      value: "0",
      description: "Registered space owners",
      icon: <FaUserTie />,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Verified Owners",
      value: "0",
      description: "Approved accounts",
      icon: <FaUserCheck />,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Pending Verification",
      value: "0",
      description: "Awaiting approval",
      icon: <FaUserClock />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Rejected Owners",
      value: "0",
      description: "Unapproved accounts",
      icon: <FaUserTimes />,
      color: "bg-rose-50 text-rose-600",
    },
  ];

  const verificationSteps = [
    {
      number: "01",
      title: "Identity Verification",
      description: "Review owner identity and contact details.",
      icon: <FaUserCheck />,
    },
    {
      number: "02",
      title: "Business Information",
      description: "Check the submitted business information.",
      icon: <FaStore />,
    },
    {
      number: "03",
      title: "Property Ownership",
      description: "Review ownership and supporting documents.",
      icon: <FaFileAlt />,
    },
  ];

  const owners = [];

  return (
    <div className="p-5 lg:p-8">

      
      <div className="mb-8">
        <p className="text-xs font-medium text-gray-400">
          Workspace / Owners
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
          Owner Management
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Review and manage study-space owner accounts.
        </p>
      </div>

      
      <section className="mb-7 overflow-hidden rounded-xl border border-indigo-100 bg-white">
        <div className="grid md:grid-cols-[1fr_auto]">
          <div className="p-6 md:p-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
              <FaShieldAlt />
              Owner Administration
            </span>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
              Manage your space partners.
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
              Review owner applications, verify business details and
              maintain a reliable network of study-space providers.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Review Applications
              </button>

              <button
                type="button"
                className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-600"
              >
                Verification Guidelines
              </button>
            </div>
          </div>

          <div className="hidden items-center justify-center bg-indigo-50 px-12 md:flex">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm">
              <FaStore size={42} />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="mb-8">
        <div className="mb-5">
          <h3 className="text-base font-bold text-gray-900">
            Owner Statistics
          </h3>
          <p className="mt-1 text-xs text-gray-400">
            Overview of registered space providers
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
              Owner Verification Process
            </h3>
            <p className="mt-1 text-xs text-gray-400">
              Important checks before approving an owner account
            </p>
          </div>

          <span className="rounded-lg bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-600">
            Verification Checklist
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {verificationSteps.map((step, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 bg-[#F8F9FB] p-5"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm">
                  {step.icon}
                </div>
                <span className="text-2xl font-bold text-gray-200">
                  {step.number}
                </span>
              </div>

              <h4 className="text-sm font-bold text-gray-800">
                {step.title}
              </h4>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                {step.description}
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
                Registered Space Owners
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                View owner profiles and verification status.
              </p>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600"
            >
              <FaDownload />
              Export
            </button>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 lg:w-80">
              <FaSearch className="text-xs text-gray-400" />
              <input
                type="text"
                placeholder="Search owner or business..."
                readOnly
                className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-gray-400 focus:ring-0"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <select
                defaultValue="all"
                className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-600 outline-none"
              >
                <option value="all">All Owners</option>
                <option value="verified">Verified</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>

              <select
                defaultValue="newest"
                className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-600 outline-none"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name">Name A-Z</option>
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
                <th className="px-6 py-4">Owner</th>
                <th className="px-6 py-4">Business</th>
                <th className="px-6 py-4">Spaces</th>
                <th className="px-6 py-4">Registered</th>
                <th className="px-6 py-4">Verification</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {owners.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-16 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 text-indigo-400">
                      <FaStore size={27} />
                    </div>

                    <h4 className="font-semibold text-gray-800">
                      No Registered Owners
                    </h4>

                    <p className="mt-2 text-sm text-gray-400">
                      New space-owner registrations will appear here.
                    </p>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 px-6 py-4">
          <p className="text-xs text-gray-400">
            Showing 0 of 0 owners
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
          <FaExclamationCircle className="mt-0.5 text-amber-600" />
          <div>
            <h4 className="text-sm font-bold text-amber-800">
              Owner Approval Guidelines
            </h4>
            <p className="mt-1 text-xs leading-5 text-amber-700">
              Verify identity information, business details and property
              ownership documents before approving new space owners.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
        <p>© 2026 StudySpace Admin Console</p>
        <p>Owner Management</p>
      </footer>
    </div>
  );
};

export default ManageOwners;
