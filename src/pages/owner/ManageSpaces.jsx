
import React from "react";
import {
  FaBuilding,
  FaPlus,
  FaSearch,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaSlidersH,
} from "react-icons/fa";

const ManageSpaces = () => {
  const stats = [
    {
      title: "Total Properties",
      value: "0",
      icon: <FaBuilding />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Active Listings",
      value: "0",
      icon: <FaCheckCircle />,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Pending Approval",
      value: "0",
      icon: <FaClock />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Inactive Listings",
      value: "0",
      icon: <FaTimesCircle />,
      color: "bg-red-50 text-red-500",
    },
  ];

  const properties = [];

  return (
    <div className="p-4 md:p-8 lg:p-10">

     
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-500">Owner Portal / Properties</p>
          <h1 className="mt-1 text-2xl font-bold text-[#101B35] md:text-3xl">
            My Properties
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Manage your study spaces and keep your listings organized.
          </p>
        </div>

        <button
          type="button"
          className="flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20"
        >
          <FaPlus />
          Add New Space
        </button>
      </div>

      
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <h2 className="mt-3 text-3xl font-bold text-[#101B35]">
                  {stat.value}
                </h2>
              </div>

              <div className={`rounded-xl p-3 text-xl ${stat.color}`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

        {/* Section Header */}
        <div className="flex flex-col gap-4 border-b border-gray-100 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#101B35]">
              All Study Spaces
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              View and manage all your property listings.
            </p>
          </div>

          <span className="w-fit rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600">
            0 Properties
          </span>
        </div>

        
        <div className="flex flex-col gap-3 border-b border-gray-100 p-5 md:flex-row md:items-center">
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              readOnly
              type="text"
              placeholder="Search by property name or location..."
              className="w-full rounded-xl border border-gray-200 bg-[#F9FAFC] py-3 pl-11 pr-4 text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          <select
            defaultValue="all"
            className="rounded-xl border border-gray-200 bg-[#F9FAFC] px-4 py-3 text-sm text-gray-600 outline-none"
          >
            <option value="all">All Categories</option>
            <option>Libraries</option>
            <option>Reading Rooms</option>
            <option>Coworking Spaces</option>
            <option>Private Cabins</option>
          </select>

          <select
            defaultValue="all"
            className="rounded-xl border border-gray-200 bg-[#F9FAFC] px-4 py-3 text-sm text-gray-600 outline-none"
          >
            <option value="all">All Status</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-600"
          >
            <FaSlidersH />
            Filters
          </button>
        </div>

       
        {properties.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-blue-600">
              <FaBuilding size={32} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-[#101B35]">
              No Properties Yet
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              You haven't listed any study spaces. Add your first property
              to start showcasing your facilities to students.
            </p>

            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20"
            >
              <FaPlus />
              Add Your First Space
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 xl:grid-cols-3">
            {properties.map((property) => (
              <div
                key={property.name}
                className="overflow-hidden rounded-2xl border border-gray-200"
              >
                <div className="p-5">
                  <h3>{property.name}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    
      <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">

        <div className="rounded-2xl bg-[#14294C] p-6 text-white">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white/10 p-3">
              <FaCheckCircle />
            </div>
            <h3 className="font-bold">Keep Your Listings Updated</h3>
          </div>
          <p className="mt-3 text-sm leading-6 text-blue-100">
            Make sure your property details, pricing and facilities are
            accurate so students can make informed decisions.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h3 className="font-bold text-blue-900">
            Listing Approval
          </h3>
          <p className="mt-3 text-sm leading-6 text-blue-800">
            New properties are reviewed by the administrator before they
            are published and made available to students.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ManageSpaces;
