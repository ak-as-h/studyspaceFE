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
  FaLockOpen,
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
    {
      to: "/admin/closures",
      icon: <FaLockOpen />,
      label: "Closures",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#1C1917] lg:flex">

      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col bg-white border-r border-[#EDE8DF] lg:flex">

        {/* Brand */}
        <div className="flex items-center gap-3 border-b border-[#EDE8DF] px-6 py-6">
          <div className="w-8 h-8 bg-[#1C1917] flex items-center justify-center">
            <FaLayerGroup size={13} className="text-white" />
          </div>
          <div>
            <h1
              className="text-sm font-light tracking-[0.1em] uppercase text-[#1C1917]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Study<span className="font-bold text-[#C17A56]">Space</span>
            </h1>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C17A56] mt-0.5">
              Admin Console
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-4 pt-8 flex-1">
          <p className="mb-5 px-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#A09A93]">
            Control Panel
          </p>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative flex items-center gap-3 px-4 py-3 text-xs font-medium tracking-[0.06em] uppercase transition-colors ${
                    isActive
                      ? "bg-[#1C1917] text-white"
                      : "text-[#7C6F60] hover:bg-[#F5F0E8] hover:text-[#1C1917]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 top-0 w-0.5 bg-[#C17A56]" />
                    )}
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#C17A56]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Administration Info */}
        <div className="px-5 pt-6 pb-4">
          <div className="border border-[#EDE8DF] bg-[#F5F0E8] p-4">
            <div className="mb-3 flex h-8 w-8 items-center justify-center bg-white text-[#1C1917] border border-[#EDE8DF]">
              <FaShieldAlt size={13} />
            </div>
            <h3 className="text-xs font-bold text-[#1C1917] tracking-wide">Platform Security</h3>
            <p className="mt-2 text-[11px] leading-5 text-[#7C6F60]">
              Manage accounts and maintain platform integrity.
            </p>
          </div>
        </div>

        {/* Administrator Profile */}
        <div className="p-4 border-t border-[#EDE8DF]">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#1C1917] font-bold text-white text-xs">
              A
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-[#1C1917] tracking-wide">Administrator</p>
              <p className="text-[10px] text-[#A09A93]">Super Admin</p>
            </div>
            <FaEllipsisH className="ml-auto shrink-0 text-[#A09A93]" size={11} />
          </div>
        </div>
      </aside>

      {/* Main Application */}
      <div className="flex min-w-0 flex-1 flex-col lg:ml-60">

        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-[68px] items-center justify-between border-b border-[#D4C5A9] bg-white px-5 md:px-7 lg:px-9">

          {/* Mobile Brand */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex h-8 w-8 items-center justify-center bg-[#1C1917] text-white">
              <FaLayerGroup size={12} />
            </div>
            <div>
              <h1
                className="text-sm font-light tracking-[0.1em] uppercase text-[#1C1917]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Study<span className="font-bold text-[#C17A56]">Space</span>
              </h1>
              <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#C17A56]">
                Admin Console
              </p>
            </div>
          </div>

          {/* Header Right */}
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-xs font-semibold text-[#1C1917] tracking-wide">Administration Panel</p>
              <p className="mt-0.5 text-[10px] text-[#A09A93]">Platform Management</p>
            </div>

            <div className="mx-1 hidden h-7 w-px bg-[#EDE8DF] sm:block" />

            <button
              type="button"
              className="relative flex h-9 w-9 items-center justify-center border border-[#EDE8DF] bg-white text-[#7C6F60] transition-colors hover:bg-[#F5F0E8]"
            >
              <FaBell size={13} />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 border border-white bg-[#C17A56]" />
            </button>

            <div className="flex items-center gap-2 border border-[#EDE8DF] bg-white px-2.5 py-1.5">
              <div className="flex h-7 w-7 items-center justify-center bg-[#1C1917] text-xs font-bold text-white">
                A
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-bold text-[#1C1917]">Admin</p>
                <p className="text-[10px] text-[#A09A93]">Administrator</p>
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
      <nav className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-4 border-t border-[#EDE8DF] bg-white px-2 pb-safe pt-2 lg:hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 px-1 py-2 transition-colors ${
                isActive
                  ? "text-[#C17A56]"
                  : "text-[#A09A93] hover:text-[#7C6F60]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className={`text-base ${isActive ? "scale-110" : ""}`}>
                  {item.icon}
                </span>
                <span className="text-[10px] font-semibold tracking-wide uppercase">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default AdminLayout;
