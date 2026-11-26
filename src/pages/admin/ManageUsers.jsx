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
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]",
    },
    {
      title: "Active Accounts",
      value: "0",
      description: "Currently active users",
      icon: <FaUserCheck />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#A09A93]",
    },
    {
      title: "Pending Accounts",
      value: "0",
      description: "Awaiting verification",
      icon: <FaUserClock />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#A09A93]",
    },
    {
      title: "Suspended Accounts",
      value: "0",
      description: "Restricted accounts",
      icon: <FaUserSlash />,
      color: "bg-[#F5F0E8] border border-[#EDE8DF] text-[#A09A93]",
    },
  ];

  const users = [];

  return (
    <div className="min-h-screen bg-[#F5F0E8] p-4 md:p-7 lg:p-9">

      {/* Page Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-[#A09A93]">
            <span>Administration</span>
            <span>/</span>
            <span className="text-[#C17A56]">Users</span>
          </div>

          <h1
            className="text-2xl font-extrabold tracking-tight text-[#1C1917] md:text-3xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            User Management
          </h1>

          <p className="mt-2 text-sm text-[#7C6F60]">
            Manage student accounts, monitor access and maintain platform security.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start border border-[#EDE8DF] bg-white px-4 py-2.5 md:self-auto">
          <FaUserShield className="text-[#C17A56]" />
          <span className="text-xs font-semibold text-[#7C6F60]">
            Student Administration
          </span>
        </div>
      </div>

      {/* Account Directory Banner */}
      <section className="mb-7 flex flex-col justify-between gap-5 border border-[#EDE8DF] bg-white p-6 md:flex-row md:items-center md:p-7">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-2xl text-[#C17A56]">
            <FaUsers />
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-px bg-[#C17A56]" />
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                ACCOUNT DIRECTORY
              </p>
            </div>

            <h2 className="mt-1 text-xl font-bold text-[#1C1917]">
              Student Accounts
            </h2>

            <p className="mt-1 text-sm text-[#7C6F60]">
              Review student profiles and account access information.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-[#F5F0E8] border border-[#EDE8DF] px-4 py-3">
          <FaIdCard className="text-[#C17A56]" />
          <span className="text-xs font-semibold text-[#7C6F60]">
            User Directory
          </span>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-7">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#1C1917]">
            Account Overview
          </h2>
          <span className="text-xs text-[#A09A93]">
            Student account metrics
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map((item) => (
            <div
              key={item.title}
              className="border border-[#EDE8DF] bg-white p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#7C6F60]">
                    {item.title}
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold text-[#1C1917]">
                    {item.value}
                  </h3>
                </div>

                <div className={`flex h-11 w-11 items-center justify-center text-lg ${item.color}`}>
                  {item.icon}
                </div>
              </div>

              <p className="mt-3 text-xs text-[#A09A93]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Table Section */}
      <section className="overflow-hidden border border-[#EDE8DF] bg-white">

        {/* Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#EDE8DF] p-5 md:flex-row md:items-center md:p-6">
          <div>
            <h2 className="text-sm font-bold text-[#1C1917]">
              All Students
            </h2>

            <p className="mt-1 text-xs text-[#A09A93]">
              Browse and review registered student accounts.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start bg-[#F5F0E8] border border-[#EDE8DF] px-3 py-2">
            <span className="h-1.5 w-1.5 bg-[#C17A56]" />
            <span className="text-xs font-semibold text-[#C17A56]">
              0 Registered Users
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 gap-3 border-b border-[#EDE8DF] p-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[#A09A93]" />

            <input
              readOnly
              type="text"
              placeholder="Search by student name or email..."
              className="w-full border border-[#D4C5A9] bg-[#F5F0E8] py-3 pl-10 pr-4 text-sm outline-none placeholder:text-[#A09A93]"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <select
              defaultValue="all"
              className="border border-[#D4C5A9] bg-white px-3 py-3 text-xs text-[#1C1917] outline-none"
            >
              <option value="all">All Accounts</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="suspended">Suspended</option>
            </select>

            <select
              defaultValue="newest"
              className="border border-[#D4C5A9] bg-white px-3 py-3 text-xs text-[#1C1917] outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name A-Z</option>
            </select>

            <button
              type="button"
              className="flex items-center gap-2 border border-[#D4C5A9] px-4 py-3 text-xs font-semibold text-[#7C6F60]"
            >
              <FaFilter />
              Filters
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left" style={{ minWidth: "900px" }}>
            <thead className="bg-[#F5F0E8]">
              <tr className="text-xs font-semibold uppercase tracking-wide text-[#A09A93]">
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
                      <div className="flex h-16 w-16 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-2xl text-[#C17A56]">
                        <FaUserGraduate />
                      </div>

                      <h3 className="mt-5 text-base font-bold text-[#1C1917]">
                        No Student Accounts
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#A09A93]">
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
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#EDE8DF] px-5 py-4">
          <p className="text-xs text-[#A09A93]">
            Showing 0 of 0 students
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="border border-[#D4C5A9] px-3 py-2 text-xs font-medium text-[#A09A93]"
            >
              Previous
            </button>

            <button
              type="button"
              className="border border-[#D4C5A9] px-3 py-2 text-xs font-medium text-[#A09A93]"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Account Guidelines */}
      <section className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">

        <div className="border border-[#EDE8DF] bg-[#F5F0E8] p-5">
          <div className="mb-3 flex items-center gap-2 text-[#C17A56]">
            <FaShieldAlt />
            <h3 className="text-sm font-bold text-[#1C1917]">
              Account Security
            </h3>
          </div>

          <p className="text-xs leading-5 text-[#7C6F60]">
            Maintain a secure student community by reviewing account
            access and following platform security guidelines.
          </p>
        </div>

        <div className="border border-[#EDE8DF] bg-[#F5F0E8] p-5">
          <div className="mb-3 flex items-center gap-2 text-[#C17A56]">
            <FaUserCheck />
            <h3 className="text-sm font-bold text-[#1C1917]">
              Account Verification
            </h3>
          </div>

          <p className="text-xs leading-5 text-[#7C6F60]">
            Keep student account information organized and maintain
            a trusted environment for platform members.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#D4C5A9] pt-5 text-xs text-[#A09A93]">
        <p>StudySpace Administration</p>
        <p>User Management Console</p>
      </footer>
    </div>
  );
};

export default ManageUsers;
