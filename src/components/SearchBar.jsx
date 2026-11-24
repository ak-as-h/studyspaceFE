
import React from 'react'
import { Button, TextInput } from "flowbite-react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="bg-transparent rounded-2xl p-2 flex flex-col md:flex-row gap-3">
      <div className="flex-1">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">
          Location
        </label>
        <TextInput
          icon={FaMapMarkerAlt}
          className="[&_input]:bg-white/80 [&_input]:text-gray-900 [&_input]:placeholder:text-gray-500"
          placeholder="Enter city or location"
          type="text"
        />
      </div>

      <div className="flex-1">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">
          Space Type
        </label>
        <select className="w-full rounded-lg border-gray-300 bg-white/80 text-gray-600 focus:border-blue-500 focus:ring-blue-500">
          <option value="">All space types</option>
          <option value="library">Library</option>
          <option value="reading-room">Reading Room</option>
          <option value="coworking">Coworking Space</option>
          <option value="private-cabin">Private Cabin</option>
        </select>
      </div>

      <div className="flex items-end">
        <Button color="blue" className="w-full md:w-auto">
          <FaSearch className="mr-2" />
          Search Spaces
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
