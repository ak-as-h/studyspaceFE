import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaBookOpen,
  FaHome,
  FaCalendarCheck,
  FaUser,
  FaBell,
  FaSearch,
} from "react-icons/fa";

const UserLayout = () => {
  const navItems = [
    { to: "/user/dashboard", icon: <FaHome />, label: "Dashboard" },
    { to: "/user/bookings", icon: <FaCalendarCheck />, label: "My Bookings" },
    { to: "/user/profile", icon: <FaUser />, label: "My Profile" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#dce9f8] via-[#f5f5f1] to-[#dce4f5]">
      
      <header className="sticky top-0 z-40 border-b border-white/40 bg-white/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-blue-600 p-2 text-white">
              <FaBookOpen size={18} />
            </div>
            <span className="text-xl font-bold text-slate-900">
              Study<span className="text-blue-600">Space</span>
            </span>
          </div>

          
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "text-slate-600 hover:bg-white/60 hover:text-blue-600"
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </nav>

          
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Notifications"
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/70 bg-white/40 text-xl text-slate-700 shadow-lg backdrop-blur-2xl transition hover:bg-white/60"
            >
              <FaBell />
              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500" />
            </button>

            <button
              type="button"
              className="hidden items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-600/90 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 backdrop-blur-lg transition hover:bg-blue-700 sm:flex"
            >
              <FaSearch />
              Explore Spaces
            </button>

            
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white md:hidden">
              S
            </div>
          </div>
        </div>

        
        <nav className="flex items-center justify-around border-t border-white/40 px-4 py-2 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-3 py-1 text-xs font-medium transition ${isActive ? "text-blue-600" : "text-slate-500"
                }`
              }
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
