import React from "react";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 md:pt-20 text-center">
      
     
      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1F2937] leading-snug">
        Friends to keep close in your life
      </h2>

     
      <div className="mt-3 space-y-1">
        <p className="text-[#64748B] text-sm sm:text-base md:text-lg">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
        </p>

        <p className="text-[#64748B] text-sm sm:text-base md:text-lg">
          relationships that matter most.
        </p>
      </div>

    
      <button className="mt-6 sm:mt-8 md:mt-10 px-5 sm:px-6 md:px-8 py-2 sm:py-3 bg-[#244D3F] text-white text-sm sm:text-base md:text-lg rounded-md hover:bg-[#1f3f33] active:scale-95 transition transform">
        + Add Friend
      </button>

    </div>
  );
};

export default Banner;