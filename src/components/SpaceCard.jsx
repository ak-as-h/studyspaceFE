
import React from "react";

import { Badge, Button } from "flowbite-react";
import {
  FaMapMarkerAlt,
  FaWifi,
  FaSnowflake,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SpaceCard = ({ space }) => {
  if (!space) return null;

  return (
    <div className="group bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* Space Image */}
      <div className="relative h-52 overflow-hidden">

        <img
          src={space.image}
          alt={space.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {space.verified && (
          <div className="absolute top-4 left-4">
            <Badge color="success" className="shadow-sm">
              Verified
            </Badge>
          </div>
        )}

      </div>

      
      <div className="p-5 space-y-4">

        
        <div>
          <h5 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {space.name}
          </h5>

          <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
            <FaMapMarkerAlt className="text-blue-600" />
            {space.location}
          </p>
        </div>

       
        <div className="flex flex-wrap gap-2">

          {space.wifi && (
            <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-xs font-medium">
              <FaWifi />
              Wi-Fi
            </span>
          )}

          {space.ac && (
            <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-xs font-medium">
              <FaSnowflake />
              Air Conditioning
            </span>
          )}

        </div>

        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">

          <div>
            <p className="text-xl font-bold text-blue-600">
              ₹{space.price}
            </p>

            <span className="text-xs text-gray-500">
              per hour
            </span>
          </div>

          <Link to={`/space/${space._id}`}>
            <Button size="sm" color="blue" className="rounded-xl">
              View Details
              <FaArrowRight className="ml-2" />
            </Button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default SpaceCard;
