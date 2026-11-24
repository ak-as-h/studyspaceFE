import React from "react";
import {
  FaUsers,
  FaUserTie,
  FaBuilding,
  FaClipboardCheck,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const AdminDashboard = () => {
  const stats = [
    { label: "Total Users",             icon: <FaUsers />,        color: "bg-indigo-50 text-indigo-600" },
    { label: "Space Owners",            icon: <FaUserTie />,      color: "bg-blue-50 text-blue-600" },
    { label: "Listed Spaces",           icon: <FaBuilding />,     color: "bg-violet-50 text-violet-600" },
    { label: "Pending Verifications",   icon: <FaClipboardCheck />, color: "bg-amber-50 text-amber-600" },
  ];

  return (
    <div className="min-h-screen bg-[#F1F3F6] px-5 py-8 lg:px-10">

      
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-[#202938]">Admin Overview</h2>
        <p className="mt-1 text-sm text-gray-500">
          Platform health, verifications, and recent activity at a glance.
        </p>
      </div>

      
      <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">{stat.label}</p>
              <p className="text-2xl font-extrabold text-gray-300">—</p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        
        <div className="xl:col-span-2 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#202938]">Platform Analytics</h3>
              <p className="text-xs text-gray-400">User &amp; booking growth over time</p>
            </div>
            <div className="flex items-center gap-2 text-indigo-600">
              <FaChartLine />
              <span className="text-xs font-semibold">Trend</span>
            </div>
          </div>
          <div className="flex h-44 items-center justify-center rounded-xl bg-gray-50 text-sm text-gray-400">
            Chart data will appear here
          </div>
        </div>

        
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-2">
            <FaShieldAlt className="text-indigo-600" />
            <h3 className="font-bold text-[#202938]">Platform Health</h3>
          </div>
          <div className="space-y-5">
            {["Verified Spaces", "Active Owners", "Active Users"].map((label) => (
              <div key={label}>
                <div className="mb-1 flex justify-between text-xs font-medium text-gray-500">
                  <span>{label}</span>
                  <span className="text-gray-300">— / —</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div className="h-2 w-0 rounded-full bg-indigo-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">

        
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-bold text-[#202938]">Verification Queue</h3>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
                <th className="pb-3 pr-4">Space</th>
                <th className="pb-3 pr-4">Owner</th>
                <th className="pb-3 pr-4">Submitted</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="py-10 text-center text-sm text-gray-400">
                  No pending verifications
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="mb-5 font-bold text-[#202938]">Recent Activity</h3>
          <div className="flex h-40 items-center justify-center text-sm text-gray-400">
            No recent activity
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
