import React from "react";
import { useOutletContext } from "react-router-dom";

const CountDashboard = () => {
  const datas = useOutletContext();

  const totalFriends = datas.length;
  const onTrackFriends = datas.filter(
    (friend) => friend.status === "On Track"
  ).length;
  const attentionFriends = datas.filter(
    (friend) => friend.status === "Need Attention"
  ).length;

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 pb-6">
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6 flex flex-col items-center">
          <p className="text-[#244D3F] font-semibold text-2xl">
            {totalFriends}
          </p>
          <p className="text-[#64748B] text-sm mt-1">Total Friends</p>
        </div>

        
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6 flex flex-col items-center">
          <p className="text-[#244D3F] font-semibold text-2xl">
            {onTrackFriends}
          </p>
          <p className="text-[#64748B] text-sm mt-1">On Track</p>
        </div>

        
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6 flex flex-col items-center">
          <p className="text-[#244D3F] font-semibold text-2xl">
            {attentionFriends}
          </p>
          <p className="text-[#64748B] text-sm mt-1">Need Attention</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6 flex flex-col items-center">
          <p className="text-[#244D3F] font-semibold text-2xl">0</p>
          <p className="text-[#64748B] text-sm mt-1">
            Interaction this month
          </p>
        </div>

      </div>
    </div>
  );
};

export default CountDashboard;