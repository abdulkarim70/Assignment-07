import React from 'react';
import {  useOutletContext } from 'react-router-dom';

const CountDashboard = () => {
    const datas=useOutletContext();
  
  const totalFriends = datas.length;
  const onTrackFriends = datas.filter(friend => friend.status === 'On Track').length;
  const attentionFriends = datas.filter(friend => friend.status === 'Need Attention').length;

    return (
        <div className="max-w-6xl mx-auto mt-10 pb-6">
  <div className="flex justify-center gap-4">
    
    <div className="w-52 h-28 bg-white flex flex-col justify-center items-center rounded-md">
      <p className="text-[#244D3F] font-semibold text-xl">{totalFriends}</p>
      <p className="text-[#64748B]">Total Friends</p>
    </div>

    <div className="w-52 h-28 bg-white flex flex-col justify-center items-center rounded-md">
      <p className="text-[#244D3F] font-semibold text-xl">{onTrackFriends}</p>
      <p className="text-[#64748B]">On Track</p>
    </div>

    <div className="w-52 h-28 bg-white flex flex-col justify-center items-center rounded-md">
      <p className="text-[#244D3F] font-semibold text-xl">{attentionFriends}</p>
      <p className="text-[#64748B]">Need Attention</p>
    </div>

    <div className="w-52 h-28 bg-white flex flex-col justify-center items-center rounded-md">
      <p className="text-[#244D3F] font-semibold text-xl">0</p>
      <p className="text-[#64748B]">Interaction this month</p>
    </div>

  </div>
</div>
    )
};

export default CountDashboard;