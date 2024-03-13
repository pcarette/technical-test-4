import React, { useEffect, useState } from "react";
import Create from "../components/Create";
import SelectAvailability from "../components/SelectAvailability";
import FilterStatus from "../components/FilterStatus";
import UserCard from "../components/UserCard";
import Loader from "../../../components/loader";

import api from "../../../services/api";

const List = () => {
  const [users, setUsers] = useState(null);
  const [projects, setProjects] = useState([]);
  const [usersFiltered, setUsersFiltered] = useState(null);
  const [filter, setFilter] = useState({ status: "active", availability: "", search: "" });

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/user");
      setUsers(data);
    })();
    getProjects();
  }, []);

  async function getProjects() {
    const res = await api.get("/project");
    setProjects(res.data);
  }

  useEffect(() => {
    if (!users) return;
    setUsersFiltered(
      users
        .filter((u) => !filter?.status || u.status === filter?.status)
        .filter((u) => !filter?.contract || u.contract === filter?.contract)
        .filter((u) => !filter?.availability || u.availability === filter?.availability)
        .filter((u) => !filter?.search || u.name.toLowerCase().includes(filter?.search.toLowerCase())),
    );
  }, [users, filter]);

  if (!usersFiltered) return <Loader />;

  return (
    <div>
      {/* Container */}
      <div className="pt-6 px-2 md:px-8">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="flex gap-2 flex-wrap items-center">
            <div className="relative text-[#A0A6B1]">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" className="p-1">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="q"
                className="py-2 w-[364px] text-[14px] font-normal text-[black] rounded-[10px] bg-[#F9FBFD] border border-[#FFFFFF] pl-10"
                placeholder="Search"
                onChange={(e) => {
                  e.persist();
                  setFilter((prev) => ({ ...prev, search: e.target.value }));
                }}
              />
            </div>
            <SelectAvailability filter={filter} setFilter={setFilter} />
            <FilterStatus filter={filter} setFilter={setFilter} />
            <div>
              <span className="text-sm font-normal text-gray-500">
                <span className="text-base font-medium text-gray-700">{usersFiltered.length}</span> of {users.length}
              </span>
            </div>
          </div>
          <Create />
        </div>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6 gap-5 ">
            {usersFiltered.map((hit, idx) => {
              return <UserCard key={hit._id} idx={idx} hit={hit} projects={projects} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
