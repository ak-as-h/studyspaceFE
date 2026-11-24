import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaLayerGroup,
  FaThLarge,
  FaUsers,
  FaUserTie,
  FaBuilding,
  FaShieldAlt,
  FaBell,
  FaEllipsisH,
} from "react-icons/fa";

const AdminLayout = () => {
  const navItems = [
    {
      to: "/admin/dashboard",
      icon: <FaThLarge />,
      label: "Overview",
    },
    {
      to: "/admin/users",
      icon: <FaUsers />,
      label: "Users",
    },
    {
      to: "/admin/owners",
      icon: <FaUserTie />,
      label: "Owners",
    },
    {
      to: "/admin/spaces",
      icon: <FaBuilding />,
      label: "Study Spaces",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F1F3F6] text-[#202938] lg:flex">

      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-gray-200 bg-white lg:flex">

        {/* Brand */}
        <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
            <FaLayerGroup size={19} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-[#202938]">
              StudySpace
            </h1>

            <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[2px] text-indigo-500">
              Admin Console
            </p>
          </div>
        </div>

        {/* Main Navigation */}
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
                  `relative flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute bottom-2 left-0 top-2 w-1 rounded-r-full bg-indigo-600" />
                    )}

                    <span className="text-base">
                      {item.icon}
                    </span>

                    <span>{item.label}</span>

                    {isActive && (
                      <span className="ml-auto h-2 w-2 rounded-full bg-indigo-600" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Administration Information */}
        <div className="px-4 pt-9">
          <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[1.8px] text-gray-400">
            Administration
          </p>

          <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-4">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm">
              <FaShieldAlt />
            </div>

            <h3 className="text-xs font-bold text-gray-800">
              Platform Security
            </h3>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              Manage accounts, review space listings and maintain
              a trusted study-space community.
            </p>
          </div>
        </div>

        {/* Administrator Profile */}
        <div className="mt-auto p-4">
          <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
              A
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-gray-800">
                Administrator
              </p>

              <p className="text-xs text-gray-400">
                Super Admin
              </p>
            </div>

            <FaEllipsisH className="ml-auto shrink-0 text-gray-400" />
          </div>
        </div>
      </aside>

      {/* Main Application */}
      <div className="flex min-w-0 flex-1 flex-col lg:ml-64">

        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-gray-200 bg-white px-5 md:px-7 lg:px-9">

          {/* Mobile Brand */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <FaLayerGroup />
            </div>

            <div>
              <h1 className="text-base font-extrabold tracking-tight">
                StudySpace
              </h1>

              <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-indigo-500">
                Admin Console
              </p>
            </div>
          </div>

          {/* Header Right */}
          <div className="ml-auto flex items-center gap-3">

            <div className="hidden text-right sm:block">
              <p className="text-xs font-semibold text-gray-800">
                Administration Panel
              </p>

              <p className="mt-0.5 text-[11px] text-gray-400">
                Platform Management
              </p>
            </div>

            <div className="mx-1 hidden h-8 w-px bg-gray-200 sm:block" />

            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-50"
            >
              <FaBell />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full border border-white bg-rose-500" />
            </button>

            <div className="flex items-center gap-2.5 rounded-lg border border-gray-200 bg-white px-2 py-1.5 sm:px-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                A
              </div>

              <div className="hidden sm:block">
                <p className="text-xs font-bold text-gray-800">
                  Admin
                </p>

                <p className="text-[10px] text-gray-400">
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="min-w-0 flex-1 pb-24 lg:pb-0">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-4 border-t border-gray-200 bg-white px-2 pb-safe pt-2 lg:hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 transition-colors ${
                isActive
                  ? "text-indigo-600"
                  : "text-gray-400 hover:text-gray-600"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className={`text-lg ${isActive ? "scale-110" : ""}`}>
                  {item.icon}
                </span>

                <span className="text-[10px] font-semibold">
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default AdminLayout;
