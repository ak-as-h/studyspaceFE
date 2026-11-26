import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaHome,
  FaCalendarCheck,
  FaUser,
  FaBell,
  FaExclamationTriangle,
} from "react-icons/fa";

const UserLayout = () => {
  const navItems = [
    { to: "/user/dashboard", icon: <FaHome />, label: "Dashboard" },
    { to: "/user/bookings", icon: <FaCalendarCheck />, label: "My Bookings" },
    { to: "/user/profile", icon: <FaUser />, label: "My Profile" },
    { to: "/user/issues", icon: <FaExclamationTriangle />, label: "Issues" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E8]">

      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#1C1917] border-b border-[#2E2925]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#C17A56] flex items-center justify-center">
              <span className="text-white font-black text-[9px] tracking-widest">SS</span>
            </div>
            <span
              className="text-white text-base font-light tracking-[0.12em] uppercase"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.15em" }}
            >
              Study<span className="font-bold text-[#C17A56]">Space</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-[0.08em] uppercase transition ${
                    isActive
                      ? "text-white bg-[#C17A56]"
                      : "text-[#A09A93] hover:text-white"
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: Bell + Avatar */}
          <div className="flex items-center gap-3">
            <div
              aria-hidden="true"
              className="relative flex h-9 w-9 items-center justify-center border border-[#2E2925] bg-[#2E2925] text-[#A09A93]"
            >
              <FaBell size={13} />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 bg-[#C17A56]" />
            </div>
            <div className="flex h-8 w-8 items-center justify-center bg-[#7C9A92] font-bold text-white text-xs uppercase tracking-wider">
              S
            </div>
          </div>
        </div>

        {/* Mobile Bottom-of-header nav */}
        <nav className="flex items-center justify-around border-t border-[#2E2925] px-4 py-2 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-3 py-1 text-[10px] font-medium tracking-[0.08em] uppercase transition ${
                  isActive ? "text-[#C17A56]" : "text-[#A09A93]"
                }`
              }
            >
              <span className="text-sm">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
