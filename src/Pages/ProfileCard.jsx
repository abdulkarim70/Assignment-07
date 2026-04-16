import React from "react";

const ProfileCard = () => {
  return (
    <div className="w-64 p-6 bg-gray-100 rounded-2xl shadow-md text-center">
      <img
        src="https://via.placeholder.com/100"
        alt="profile"
        className="w-20 h-20 mx-auto rounded-full object-cover mb-3"
      />

      <h2 className="text-lg font-semibold text-gray-800">David Kim</h2>
      <p className="text-sm text-gray-500 mt-1">62d ago</p>

      <div className="mt-3 flex flex-col items-center gap-2">
        <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-200 rounded-full">
          WORK
        </span>
        <span className="px-3 py-1 text-xs font-medium text-yellow-800 bg-yellow-300 rounded-full">
          Almost Due
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;

