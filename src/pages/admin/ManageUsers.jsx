
import React from "react";
import {
  FaUsers,
  FaEllipsisH,
  FaSearch,
  FaShieldAlt,
  FaUserGraduate,
  FaUserCheck,
  FaUserClock,
  FaUserSlash,
  FaDownload,
  FaFilter,
} from "react-icons/fa";

const ManageUsers = () => {
  const statistics = [
    {
      title: "Total Students",
      value: "0",
      description: "All registered students",
      icon: <FaUserGraduate />,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Active Accounts",
      value: "0",
      description: "Currently active users",
      icon: <FaUserCheck />,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Pending Accounts",
      value: "0",
      description: "Awaiting verification",
      icon: <FaUserClock />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Suspended Accounts",
      value: "0",
      description: "Restricted accounts",
      icon: <FaUserSlash />,
      color: "bg-rose-50 text-rose-600",
    },
  ];

  const users = [];

  return (
    <div className="p-5 lg:p-8">

      
      <div className="mb-8">
        <p className="text-xs font-medium text-gray-400">
          Workspace / Users
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
          User Management
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          View and manage student accounts across the platform.
        </p>
      </div>

      
      <section className="mb-7 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <FaUsers size={25} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Student Directory
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Manage student profiles, account status and access.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600"
        >
          <FaDownload />
          Export Users
        </button>
      </section>

      
      <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
      </section>

      
      <section className="overflow-hidden rounded-xl border border-gray-200 bg-white">

        
        <div className="border-b border-gray-100 p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-gray-900">
                All Students
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                Browse and review registered student accounts.
              </p>
            </div>

            <span className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
              0 Users
            </span>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

            
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 lg:w-80">
              <FaSearch className="text-xs text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or email..."
                readOnly
                className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-gray-400 focus:ring-0"
              />
            </div>

           
            <div className="flex flex-wrap gap-3">
              <select
                defaultValue="all"
                className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-600 outline-none"
              >
                <option value="all">All Accounts</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="suspended">Suspended</option>
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
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Joined Date</th>
                <th className="px-6 py-4">Bookings</th>
                <th className="px-6 py-4">Account Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-16 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 text-indigo-400">
                      <FaUserGraduate size={27} />
                    </div>

                    <h4 className="font-semibold text-gray-800">
                      No Students Found
                    </h4>

                    <p className="mt-2 text-sm text-gray-400">
                      Registered student accounts will appear here.
                    </p>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 px-6 py-4">
          <p className="text-xs text-gray-400">
            Showing 0 of 0 students
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

      
      <section className="mt-7 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
          <div className="mb-3 flex items-center gap-2 text-indigo-700">
            <FaShieldAlt />
            <h4 className="text-sm font-bold">Account Security</h4>
          </div>
          <p className="text-xs leading-5 text-indigo-600">
            Review account activity and ensure students follow platform
            guidelines.
          </p>
        </div>

        <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-5">
          <div className="mb-3 flex items-center gap-2 text-emerald-700">
            <FaUserCheck />
            <h4 className="text-sm font-bold">User Verification</h4>
          </div>
          <p className="text-xs leading-5 text-emerald-700">
            Maintain accurate student profiles and a trusted community.
          </p>
        </div>
      </section>

      <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
        <p>© 2026 StudySpace Admin Console</p>
        <p>User Management</p>
      </footer>
    </div>
  );
};

export default ManageUsers;
