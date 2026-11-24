import React from 'react'

import { Checkbox, Label, RangeSlider } from "flowbite-react";

const FilterPanel = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-900">Filters</h3>
        <button className="text-sm text-blue-600">Clear all</button>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Space Type</h4>

        <div className="space-y-3">
          {["Library", "Reading Room", "Coworking Space", "Private Cabin"].map(
            (type) => (
              <div className="flex items-center gap-2" key={type}>
                <Checkbox id={type} />
                <Label htmlFor={type}>{type}</Label>
              </div>
            )
          )}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Facilities</h4>

        <div className="space-y-3">
          {["Wi-Fi", "Air Conditioning", "Parking", "Power Backup"].map(
            (facility) => (
              <div className="flex items-center gap-2" key={facility}>
                <Checkbox id={facility} />
                <Label htmlFor={facility}>{facility}</Label>
              </div>
            )
          )}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Maximum Budget</h4>
        <RangeSlider min={0} max={1000} />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>₹0</span>
          <span>₹1000</span>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;