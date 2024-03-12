import React from 'react'

const SelectAvailability = ({ filter, setFilter }) => {
    return (
      <div className="flex">
        <select
          className="w-[180px] bg-[#FFFFFF] text-[14px] text-[#212325] font-normal py-2 px-[14px] rounded-[10px] border-r-[16px] border-[transparent] cursor-pointer"
          value={filter.availability}
          onChange={(e) => setFilter({ ...filter, availability: e.target.value })}>
          <option disabled>Availability</option>
          <option value={""}>All availabilities</option>
          {[
            { value: "available", label: "Available" },
  
            { value: "not available", label: "Not Available" },
          ].map((e) => {
            return (
              <option key={e.value} value={e.value} label={e.label}>
                {e.label}
              </option>
            );
          })}
        </select>
      </div>
    );
};

export default SelectAvailability;