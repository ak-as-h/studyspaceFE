import React from "react";
import {
  FaUserTie,
  FaShieldAlt,
  FaSearch,
  FaStore,
  FaUserCheck,
  FaUserClock,
  FaUserTimes,
  FaExclamationCircle,
  FaFilter,
  FaArrowRight,
  FaFileAlt,
  FaIdCard,
  FaBuilding,
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
      description:
        "Review the owner's identity and submitted contact information.",
      icon: <FaIdCard />,
    },
    {
      number: "02",
      title: "Business Information",
      description:
        "Examine business details and the information provided by the owner.",
      icon: <FaStore />,
    },
    {
      number: "03",
      title: "Property Ownership",
      description:
        "Review property ownership details and supporting documents.",
      icon: <FaFileAlt />,
    },
  ];

  const owners = [];

  return (
    <div className="min-h-screen bg-[#F1F3F6] p-4 md:p-7 lg:p-9">

      
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-400">
            <span>Administration</span>
            <span>/</span>
            <span className="text-indigo-600">Owners</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#202938] md:text-3xl">
            Owner Management
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Review space-owner accounts and maintain a trusted provider network.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start rounded-xl border border-gray-200 bg-white px-4 py-2.5 md:self-auto">
          <FaShieldAlt className="text-indigo-600" />
          <span className="text-xs font-semibold text-gray-600">
            Owner Administration
          </span>
        </div>
      </div>

      
      <section className="mb-7 overflow-hidden rounded-2xl border border-indigo-100 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]">
          <div className="p-6 md:p-8">
            <div className="inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 text-xs font-bold tracking-wide text-indigo-600">
              <FaUserTie />
              SPACE PARTNER MANAGEMENT
            </div>

            <h2 className="mt-5 text-2xl font-bold tracking-tight text-[#202938] md:text-3xl">
              Manage your space partners.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
              Review owner applications, verify business information and
              maintain a reliable network of study-space providers.
            </p>
          </div>

          <div className="flex items-center justify-center border-t border-gray-100 bg-[#F8F9FC] px-10 py-7 lg:border-l lg:border-t-0">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-indigo-100 text-4xl text-indigo-600">
              <FaBuilding />
            </div>
          </div>
        </div>
      </section>

      
      <section className="mb-7">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-[#202938]">
              Owner Statistics
            </h2>
            <p className="mt-1 text-xs text-gray-400">
              Overview of registered space providers
            </p>
          </div>
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
              Owner Verification Process
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              Important checks before approving an owner account.
            </p>
          </div>

          <span className="w-fit rounded-lg bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-600">
            Verification Checklist
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {verificationSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-gray-100 bg-[#F8F9FB] p-5 transition-colors hover:border-indigo-100"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg text-indigo-600 shadow-sm">
                  {step.icon}
                </div>

                <span className="text-2xl font-extrabold text-gray-200">
                  {step.number}
                </span>
              </div>

              <h3 className="text-sm font-bold text-[#202938]">
                {step.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="overflow-hidden rounded-xl border border-gray-200 bg-white">

       
        <div className="flex flex-col justify-between gap-4 border-b border-gray-100 p-5 md:flex-row md:items-center md:p-6">
          <div>
            <h2 className="text-sm font-bold text-[#202938]">
              Registered Space Owners
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              View owner profiles and verification status.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-lg bg-indigo-50 px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold text-indigo-600">
              0 Registered Owners
            </span>
          </div>
        </div>

        
        <div className="grid grid-cols-1 gap-3 border-b border-gray-100 p-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-gray-400" />

            <input
              readOnly
              type="text"
              placeholder="Search owner or business..."
              className="w-full rounded-lg border border-gray-200 bg-[#FAFBFD] py-3 pl-10 pr-4 text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <select
              defaultValue="all"
              className="rounded-lg border border-gray-200 bg-white px-3 py-3 text-xs text-gray-600 outline-none"
            >
              <option value="all">All Owners</option>
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>

            <select
              defaultValue="newest"
              className="rounded-lg border border-gray-200 bg-white px-3 py-3 text-xs text-gray-600 outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name A-Z</option>
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
          <table className="w-full text-left" style={{ minWidth: "900px" }}>
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
              {owners.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-6 py-16">
                    <div className="mx-auto flex max-w-sm flex-col items-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-2xl text-indigo-500">
                        <FaStore />
                      </div>

                      <h3 className="mt-5 text-base font-bold text-[#202938]">
                        No Registered Owners
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-400">
                        New space-owner registrations will appear here
                        when accounts are available.
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
            Showing 0 of 0 owners
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
          <FaExclamationCircle className="mt-0.5 shrink-0 text-amber-600" />

          <div>
            <h3 className="text-sm font-bold text-amber-800">
              Owner Approval Guidelines
            </h3>

            <p className="mt-2 text-xs leading-5 text-amber-700">
              Review identity information, business details and property
              ownership documents before approving new space owners.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-5 text-xs text-gray-400">
        <p>StudySpace Administration</p>
        <p>Owner Management Console</p>
      </footer>
    </div>
  );
};

export default ManageOwners;
