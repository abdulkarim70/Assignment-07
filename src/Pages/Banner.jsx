import React from 'react';

const Banner = () => {
    return (
        <div className=' max-w-6xl mx-auto mt-18 '>
            <h2 className='text-4xl font-semibold text-[#1F2937] text-center'>Friends to keep close in your life</h2>
            <p className='text-[#64748B] text-[16px] mt-[10px] text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the</p>
            <p className='text-[#64748B] text-[16px] mt-[10px] text-center'>relationships that matter most.</p>
            
                <button className='w-33 h-9.5 bg-[#244D3F] text-[#FFFFFF] text-[16px] mt-8 mx-auto block'>+ Add Friend</button>
            
        </div>
    );
};

export default Banner;