import React from "react";
import { Link } from "react-router-dom";
const ProfileCard = ({friendData}) => {
  return (
    <Link to ={`/friend/${friendData.id}`}>
      
      <div className="w-64 p-6 bg-gray-100 rounded-2xl shadow-md text-center mb-12">
        <img
          src={friendData.picture}
          alt="profile Picture"
          className="w-20 h-20 mx-auto rounded-full object-cover mb-3"
      />

      <h2 className="text-lg font-semibold text-gray-800">{friendData.name}</h2>
      <p className="text-sm text-gray-500 mt-1">62d ago</p>

      <div className="mt-3 flex flex-col items-center gap-2">
        <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-200 rounded-full">
          {friendData.interest}
        </span>
        <span className={`px-3 py-1 text-xs font-medium ${friendData.status === 'On Track' ? 'text-white bg-[#244D3F]' : friendData.status === 'Need Attention' ?'text-white bg-yellow-400':'text-white bg-red-400'} rounded-full`}>
          {friendData.status}
        </span>
      </div>
  </div>
  </Link>
  );
};

export default ProfileCard;

