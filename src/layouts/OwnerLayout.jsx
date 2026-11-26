import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaHome,
  FaPlus,
  FaClipboardList,
  FaBell,
  FaChartLine,
  FaEllipsisH,
  FaLock,
} from "react-icons/fa";

const OwnerLayout = () => {
  const navItems = [
    { to: "/owner/dashboard", icon: <FaHome />, label: "Dashboard" },
    { to: "/owner/spaces", icon: <FaBuilding />, label: "My Spaces" },
    { to: "/owner/add-space", icon: <FaPlus />, label: "Add Space" },
    { to: "/owner/bookings", icon: <FaClipboardList />, label: "Bookings" },
    { to: "/owner/closures", icon: <FaLock />, label: "Closures" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E8] lg:flex">

      {/* Desktop Sidebar */}
      <aside className="hidden w-60 shrink-0 flex-col bg-[#1C1917] lg:flex lg:fixed lg:inset-y-0 lg:left-0">

        {/* Brand */}
        <div className="px-7 py-8 border-b border-[#2E2925]">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#C17A56] flex items-center justify-center">
              <span className="text-white font-black text-[9px] tracking-widest">SS</span>
            </div>
            <div>
              <p
                className="text-white text-sm font-light tracking-[0.1em] uppercase"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Study<span className="font-bold text-[#C17A56]">Space</span>
              </p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#7C6F60] mt-0.5">
                Owner Portal
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-5 pt-8">
          <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#7C6F60] px-2">
            Workspace
          </p>

          {/* Navigation */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 text-xs font-medium tracking-[0.06em] uppercase transition ${
                    isActive
                      ? "bg-[#C17A56] text-white"
                      : "text-[#7C6F60] hover:text-white hover:bg-[#2E2925]"
                  }`
                }
              >
                <span className="text-sm">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Grow box */}
        <div className="mx-5 mb-6 border border-[#2E2925] p-4">
          <div className="mb-3 flex h-8 w-8 items-center justify-center bg-[#7C9A92]/20 text-[#7C9A92]">
            <FaChartLine size={13} />
          </div>
          <h3 className="text-xs font-semibold text-white tracking-wide">Grow Your Business</h3>
          <p className="mt-1.5 text-[11px] leading-5 text-[#7C6F60]">
            Reach more students with your listings.
          </p>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 border-t border-[#2E2925] px-6 py-5">
          <div className="flex h-8 w-8 items-center justify-center bg-[#7C9A92] font-bold text-white text-xs">
            O
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Space Owner</p>
            <p className="text-[10px] text-[#7C6F60]">Owner Account</p>
          </div>
          <FaEllipsisH className="ml-auto text-[#7C6F60]" size={12} />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col lg:ml-60">

        {/* Header */}
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-[#D4C5A9] bg-[#EDE8DF] px-5 py-4 md:px-8 lg:px-10">
          <div className="lg:hidden">
            <span
              className="text-base font-light tracking-[0.12em] uppercase text-[#1C1917]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Study<span className="font-bold text-[#C17A56]">Space</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              type="button"
              className="relative flex h-9 w-9 items-center justify-center border border-[#D4C5A9] bg-white text-[#7C6F60]"
            >
              <FaBell size={13} />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 bg-[#C17A56]" />
            </button>

            <NavLink
              to="/owner/add-space"
              className="hidden items-center gap-2 bg-[#1C1917] px-4 py-2.5 text-xs font-bold tracking-[0.08em] uppercase text-white transition hover:bg-[#C17A56] sm:flex"
            >
              <FaPlus size={10} />
              Add Space
            </NavLink>
          </div>
        </header>

        {/* Mobile Bottom Nav */}
        <nav className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around border-t border-[#2E2925] bg-[#1C1917] px-4 py-3 lg:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-3 text-[10px] font-medium tracking-[0.06em] uppercase transition ${
                  isActive ? "text-[#C17A56]" : "text-[#7C6F60]"
                }`
              }
            >
              <span className="text-sm">{item.icon}</span>
              <span className="hidden sm:block">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Page Content */}
        <main className="min-w-0 flex-1 pb-20 lg:pb-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default OwnerLayout;
