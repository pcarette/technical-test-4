import React from 'react'

const FilterStatus = ({ filter, setFilter }) => {
    return (
        <div className="flex">
        <select
          className="w-[180px] bg-[#FFFFFF] text-[14px] text-[#212325] font-normal py-2 px-[14px] rounded-[10px] border-r-[16px] border-[transparent] cursor-pointer"
          value={filter.status}
          onChange={(e) => setFilter({ ...filter, status: e.target.value })}>
          <option disabled>Status</option>
          <option value={""}>All status</option>
          {[
            { value: "active", label: "Active" },
            { value: "inactive", label: "Inactive" },
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
  
export default FilterStatus