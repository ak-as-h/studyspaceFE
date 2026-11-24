import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaLayerGroup,
  FaThLarge,
  FaUsers,
  FaUserTie,
  FaBuilding,
  FaShieldAlt,
  FaClipboardCheck,
  FaBell,
  FaEllipsisH,
} from "react-icons/fa";

const AdminLayout = () => {
  const navItems = [
    { to: "/admin/dashboard", icon: <FaThLarge />, label: "Overview" },
    { to: "/admin/users",     icon: <FaUsers />,   label: "Users" },
    { to: "/admin/owners",    icon: <FaUserTie />, label: "Owners" },
    { to: "/admin/spaces",    icon: <FaBuilding />, label: "Study Spaces" },
  ];

  return (
    <div className="min-h-screen bg-[#F1F3F6] text-[#202938] lg:flex">

      {/* Sidebar */}
      <aside className="flex w-full flex-col border-r border-gray-200 bg-white lg:fixed lg:inset-y-0 lg:left-0 lg:w-64">

        {/* Brand */}
        <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <FaLayerGroup size={20} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight">
              StudySpace
            </h1>
            <p className="text-[10px] font-semibold uppercase tracking-[2px] text-indigo-500">
              Admin Console
            </p>
          </div>
        </div>

        {/* Navigation - UI Only */}
        <div className="px-4 pt-8">
          <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[1.8px] text-gray-400">
            Workspace
          </p>

          <nav className="space-y-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-gray-500 hover:bg-gray-50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="text-base">{item.icon}</span>
                    {item.label}
                    {isActive && (
                      <span className="ml-auto h-2 w-2 rounded-full bg-indigo-600" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        
        <div className="px-4 pt-9">
          <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[1.8px] text-gray-400">
            Administration
          </p>

          <div className="space-y-1.5">
            <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-500">
              <FaShieldAlt />
              Verification Center
            </div>

            <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-500">
              <FaClipboardCheck />
              Reports
            </div>
          </div>
        </div>

        
        <div className="mt-auto hidden p-4 lg:block">
          <div className="rounded-xl bg-[#F5F6FA] p-4">
            <div className="mb-2 flex items-center gap-2 text-indigo-600">
              <FaShieldAlt />
              <span className="text-xs font-bold">Admin Security</span>
            </div>

            <p className="text-xs leading-5 text-gray-500">
              Manage platform access and maintain a verified study-space
              community.
            </p>
          </div>

          <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
              A
            </div>

            <div>
              <p className="text-sm font-semibold">Administrator</p>
              <p className="text-xs text-gray-400">Super Admin</p>
            </div>

            <FaEllipsisH className="ml-auto text-gray-400" />
          </div>
        </div>
      </aside>

      
      <div className="flex min-w-0 flex-1 flex-col lg:ml-64">

        
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-gray-200 bg-white px-5 py-4 lg:px-8">

          <div className="lg:hidden">
            <span className="text-lg font-extrabold tracking-tight text-[#202938]">
              StudySpace
              <span className="ml-1 text-[10px] font-semibold uppercase tracking-[2px] text-indigo-500">
                Admin
              </span>
            </span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button
              type="button"
              className="relative rounded-lg border border-gray-200 bg-white p-3 text-gray-500"
            >
              <FaBell />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500" />
            </button>

            <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                A
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold">Admin</p>
                <p className="text-[11px] text-gray-400">Administrator</p>
              </div>
            </div>
          </div>
        </header>

       
        <nav className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around border-t border-gray-200 bg-white px-4 py-2 lg:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-2 py-1 text-xs font-medium transition ${
                  isActive ? "text-indigo-600" : "text-gray-400"
                }`
              }
            >
              <span className="text-base">{item.icon}</span>
              <span className="hidden sm:block">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        
        <main className="min-w-0 flex-1 pb-20 lg:pb-0">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;