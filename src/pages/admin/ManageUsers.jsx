import React from "react";
import {
  FaUsers,
  FaSearch,
  FaShieldAlt,
  FaUserGraduate,
  FaUserCheck,
  FaUserClock,
  FaUserSlash,
  FaFilter,
  FaArrowRight,
  FaEllipsisH,
  FaUserShield,
  FaIdCard,
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
    <div className="min-h-screen bg-[#F1F3F6] p-4 md:p-7 lg:p-9">

      
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-400">
            <span>Administration</span>
            <span>/</span>
            <span className="text-indigo-600">Users</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#202938] md:text-3xl">
            User Management
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage student accounts, monitor access and maintain platform security.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start rounded-xl border border-gray-200 bg-white px-4 py-2.5 md:self-auto">
          <FaUserShield className="text-indigo-600" />
          <span className="text-xs font-semibold text-gray-600">
            Student Administration
          </span>
        </div>
      </div>

      
      <section className="mb-7 flex flex-col justify-between gap-5 rounded-2xl border border-indigo-100 bg-white p-6 md:flex-row md:items-center md:p-7">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-2xl text-indigo-600">
            <FaUsers />
          </div>

          <div>
            <p className="text-xs font-bold tracking-wider text-indigo-600">
              ACCOUNT DIRECTORY
            </p>

            <h2 className="mt-1 text-xl font-bold text-[#202938]">
              Student Accounts
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Review student profiles and account access information.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-[#F8F9FC] px-4 py-3">
          <FaIdCard className="text-indigo-500" />
          <span className="text-xs font-semibold text-gray-600">
            User Directory
          </span>
        </div>
      </section>

      
      <section className="mb-7">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#202938]">
            Account Overview
          </h2>
          <span className="text-xs text-gray-400">
            Student account metrics
          </span>
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

      
      <section className="overflow-hidden rounded-xl border border-gray-200 bg-white">

        
        <div className="flex flex-col justify-between gap-4 border-b border-gray-100 p-5 md:flex-row md:items-center md:p-6">
          <div>
            <h2 className="text-sm font-bold text-[#202938]">
              All Students
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              Browse and review registered student accounts.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-lg bg-indigo-50 px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold text-indigo-600">
              0 Registered Users
            </span>
          </div>
        </div>

        
        <div className="grid grid-cols-1 gap-3 border-b border-gray-100 p-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-gray-400" />

            <input
              readOnly
              type="text"
              placeholder="Search by student name or email..."
              className="w-full rounded-lg border border-gray-200 bg-[#FAFBFD] py-3 pl-10 pr-4 text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <select
              defaultValue="all"
              className="rounded-lg border border-gray-200 bg-white px-3 py-3 text-xs text-gray-600 outline-none"
            >
              <option value="all">All Accounts</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="suspended">Suspended</option>
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

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left" style={{ minWidth: "900px" }}>
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
              {users.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-6 py-16">
                    <div className="mx-auto flex max-w-sm flex-col items-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-2xl text-indigo-500">
                        <FaUserGraduate />
                      </div>

                      <h3 className="mt-5 text-base font-bold text-[#202938]">
                        No Student Accounts
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-400">
                        Registered student profiles will appear here when
                        accounts are available.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 px-5 py-4">
          <p className="text-xs text-gray-400">
            Showing 0 of 0 students
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

      {/* Account Guidelines */}
      <section className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">

        <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
          <div className="mb-3 flex items-center gap-2 text-indigo-700">
            <FaShieldAlt />
            <h3 className="text-sm font-bold">
              Account Security
            </h3>
          </div>

          <p className="text-xs leading-5 text-indigo-700/80">
            Maintain a secure student community by reviewing account
            access and following platform security guidelines.
          </p>
        </div>

        <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-5">
          <div className="mb-3 flex items-center gap-2 text-emerald-700">
            <FaUserCheck />
            <h3 className="text-sm font-bold">
              Account Verification
            </h3>
          </div>

          <p className="text-xs leading-5 text-emerald-700/80">
            Keep student account information organized and maintain
            a trusted environment for platform members.
          </p>
        </div>
      </section>

      
      <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-5 text-xs text-gray-400">
        <p>StudySpace Administration</p>
        <p>User Management Console</p>
      </footer>
    </div>
  );
};

export default ManageUsers;
