
import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/Publiclayout";
import UserLayout from "./layouts/UserLayout";
import OwnerLayout from "./layouts/OwnerLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import ExploreSpaces from "./pages/ExploreSpaces";
import SpaceDetails from "./pages/SpaceDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

// User Pages
import Dashboard from "./pages/user/Dashboard";
import MyBookings from "./pages/user/MyBookings";
import Profile from "./pages/user/Profile";


import OwnerDashboard from "./pages/owner/OwnerDashboard";
import AddSpace from "./pages/owner/AddSpace";
import ManageSpaces from "./pages/owner/ManageSpaces";
import ManageBookings from "./pages/owner/ManageBookings";


import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageOwners from "./pages/admin/ManageOwners";
import VerifySpaces from "./pages/admin/VerifySpaces";

function App() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreSpaces />} />
        <Route path="/space/:id" element={<SpaceDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* User Pages */}
      <Route element={<UserLayout />}>
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/bookings" element={<MyBookings />} />
        <Route path="/user/profile" element={<Profile />} />
      </Route>

      {/* Owner Pages */}
      <Route element={<OwnerLayout />}>
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
        <Route path="/owner/add-space" element={<AddSpace />} />
        <Route path="/owner/spaces" element={<ManageSpaces />} />
        <Route path="/owner/bookings" element={<ManageBookings />} />
      </Route>

      {/* Admin Pages */}
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/owners" element={<ManageOwners />} />
        <Route path="/admin/spaces" element={<VerifySpaces />} />
      </Route>
    </Routes>
  );
}

export default App;
