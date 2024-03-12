import React from "react";
import { useHistory } from "react-router-dom";


const UserCard = ({ hit, projects }) => {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push(`/user/${hit._id}`)}
      className="flex flex-col bg-white hover:-translate-y-1 transition duration-100 shadow-sm ease-in cursor-pointer  relative rounded-[16px] pb-4 overflow-hidden">
      <div className="relative flex items-start justify-center pt-6 pb-2">
        <div className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden">
          <img
            src={hit.banner.startsWith("https://www.gravatar.com/avatar") ? require("../../../assets/banner-stud.png") : hit.banner}
            className="object-cover w-full h-full z-10 opacity-60 overflow-hidden"
          />
        </div>
        <div className="flex flex-col items-center z-20">
          <img src={hit.avatar} className="object-contain rounded-full w-20 h-20 " />
          <div className={`rounded-full py-1 px-3 whitespace-nowrap ${hit.availability === "available" ? "bg-[#2EC735]" : "bg-[#8A8989]"} flex items-center gap-2 -translate-y-2`}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="white" />
            </svg>
            <p className="text-white text-[12px] uppercase tracking-wider">{hit.availability}</p>
          </div>
        </div>
        <div className="absolute  right-6">
          <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.16659 2.00065L2.17492 2.00065M7.99992 2.00065L8.00825 2.00065M13.8333 2.00065L13.8416 2.00065M2.99992 2.00065C2.99992 2.22166 2.91212 2.43363 2.75584 2.58991C2.59956 2.74619 2.3876 2.83398 2.16659 2.83398C1.94557 2.83398 1.73361 2.74619 1.57733 2.58991C1.42105 2.43363 1.33325 2.22167 1.33325 2.00065C1.33325 1.77964 1.42105 1.56768 1.57733 1.4114C1.73361 1.25512 1.94557 1.16732 2.16659 1.16732C2.3876 1.16732 2.59956 1.25512 2.75584 1.4114C2.91212 1.56768 2.99992 1.77964 2.99992 2.00065ZM8.83325 2.00065C8.83325 2.22166 8.74545 2.43363 8.58917 2.58991C8.43289 2.74619 8.22093 2.83398 7.99992 2.83398C7.7789 2.83398 7.56694 2.74619 7.41066 2.58991C7.25438 2.43363 7.16659 2.22166 7.16659 2.00065C7.16659 1.77964 7.25438 1.56768 7.41066 1.4114C7.56694 1.25512 7.7789 1.16732 7.99992 1.16732C8.22093 1.16732 8.43289 1.25512 8.58917 1.4114C8.74545 1.56768 8.83325 1.77964 8.83325 2.00065ZM14.6666 2.00065C14.6666 2.22166 14.5788 2.43363 14.4225 2.58991C14.2662 2.74619 14.0543 2.83398 13.8333 2.83398C13.6122 2.83398 13.4003 2.74619 13.244 2.58991C13.0877 2.43363 12.9999 2.22166 12.9999 2.00065C12.9999 1.77964 13.0877 1.56768 13.244 1.4114C13.4003 1.25512 13.6122 1.16732 13.8333 1.16732C14.0543 1.16732 14.2662 1.25512 14.4225 1.4114C14.5788 1.56768 14.6666 1.77964 14.6666 2.00065Z"
              stroke="#212325"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {/* infos */}
      <div className="flex flex-col flex-1 justify-between">
        <div className="flex flex-col items-center text-center my-4 space-y-1">
          <p className="font-semibold text-lg">{hit.name}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
