import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaHome,
  FaPlus,
  FaClipboardList,
  FaWallet,
  FaBell,
  FaChartLine,
  FaEllipsisH,
} from "react-icons/fa";

const OwnerLayout = () => {
  const navItems = [
    { to: "/owner/dashboard", icon: <FaHome />, label: "Dashboard" },
    { to: "/owner/spaces", icon: <FaBuilding />, label: "My Spaces" },
    { to: "/owner/add-space", icon: <FaPlus />, label: "Add New Space" },
    { to: "/owner/bookings", icon: <FaClipboardList />, label: "Bookings" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6FA] lg:flex">
      
      <aside className="hidden w-64 shrink-0 flex-col bg-[#101B35] px-5 py-8 text-white lg:flex lg:fixed lg:inset-y-0 lg:left-0">
        
        <div className="mb-12 flex items-center gap-3 px-2">
          <div className="rounded-xl bg-blue-600 p-3">
            <FaBuilding size={21} />
          </div>
          <div>
            <h2 className="text-xl font-bold">StudySpace</h2>
            <p className="text-xs text-slate-400">Owner Portal</p>
          </div>
        </div>

        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Workspace
        </p>

        
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        
        <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
            <FaChartLine />
          </div>
          <h3 className="font-semibold">Grow Your Business</h3>
          <p className="mt-2 text-xs leading-5 text-slate-400">
            List your study spaces and reach more students.
          </p>
        </div>

        
        <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold">
            O
          </div>
          <div>
            <p className="text-sm font-semibold">Space Owner</p>
            <p className="text-xs text-slate-400">Owner Account</p>
          </div>
          <FaEllipsisH className="ml-auto text-slate-400" />
        </div>
      </aside>

      
      <div className="flex min-w-0 flex-1 flex-col lg:ml-64">
        
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-slate-200 bg-[#F4F6FA] px-5 py-4 md:px-8 lg:px-10">
          <div className="lg:hidden">
            
            <span className="text-lg font-bold text-[#101B35]">
              Study<span className="text-blue-600">Space</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              type="button"
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm"
            >
              <FaBell />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <NavLink
              to="/owner/add-space"
              className="hidden items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 sm:flex"
            >
              <FaPlus />
              Add New Space
            </NavLink>
          </div>
        </header>

        <nav className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around border-t border-slate-200 bg-[#101B35] px-4 py-2 lg:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-3 py-1 text-xs font-medium transition ${isActive ? "text-blue-400" : "text-slate-400"
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

export default OwnerLayout;
