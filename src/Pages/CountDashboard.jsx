import React from 'react';
import {  useOutletContext } from 'react-router';

const CountDashboard = () => {
    const datas=useOutletContext();
  
  const totalFriends = datas.length;
  const onTrackFriends = datas.filter(friend => friend.status === 'on track').length;
  const attentionFriends = datas.filter(friend => friend.status === 'need attention').length;

    return (
        <div className=' flex justify-center gap-2 mt-10 pb-6 '>
            <div className='w-50 h-28 bg-[#FFFFFF] flex flex-col justify-center items-center rounded-md '><p className=' text-[#244D3F]font-semibold text-xl'>  {totalFriends}</p> <p className='text-[#64748B]'>Total Friends</p></div>
            <div className='w-50 h-28 bg-[#FFFFFF] flex flex-col justify-center items-center rounded-md '><p className='text-[#244D3F] font-semibold text-xl'>{onTrackFriends}</p> <p className='text-[#64748B]'>ontrack</p></div>
            <div className='w-50 h-28 bg-[#FFFFFF] flex flex-col justify-center items-center rounded-md '><p className='text-[#244D3F] font-semibold text-xl'>{attentionFriends}</p> <p className='text-[#64748B]'>Need Attention</p></div>
            <div className='w-50 h-28 bg-[#FFFFFF] flex flex-col justify-center items-center rounded-md '><p className='text-[#244D3F] font-semibold text-xl'>{}</p> <p className='text-[#64748B]'>unknown</p></div>
        </div>
    )
};

export default CountDashboard;