import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ friendData }) => {
  return (
    <Link to={`/friend/${friendData.id}`}>
      
      <div className="w-full bg-gray-100 rounded-2xl shadow-sm hover:shadow-md transition p-5 text-center">

       
        <img
          src={friendData.picture}
          alt="profile"
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full object-cover mb-3"
        />

      
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">
          {friendData.name}
        </h2>

       
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          62d ago
        </p>

       
        <div className="mt-3 flex flex-col items-center gap-2">

          
          <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-200 rounded-full">
            {friendData.interest}
          </span>

         
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full text-white ${
              friendData.status === "On Track"
                ? "bg-[#244D3F]"
                : friendData.status === "Need Attention"
                ? "bg-yellow-400"
                : "bg-red-400"
            }`}
          >
            {friendData.status}
          </span>

        </div>

      </div>

    </Link>
  );
};

export default ProfileCard;