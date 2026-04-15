import { CiHome } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";
import { RiTimeLine } from "react-icons/ri";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      
        <nav className="bg-[#E9E9E9] px-6 py-3 flex items-center justify-between">

      <h1 className="text-[24px] font-semibold text-black">
        Keen<span className="text-[#244D3F]">Keeper</span>
      </h1>

     
      <div className="flex items-center gap-6">

    
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-1 px-4 py-2 rounded-md ${
              isActive
                ? "bg-[#244D3F] text-white"
                : "text-[#64748B] hover:text-black"
            }`
          }
        >
          <CiHome/> Home
        </NavLink>


        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `flex items-center gap-1 px-4 py-2 rounded-md ${
              isActive
                ? "bg-[#244D3F] text-white"
                : "text-[#64748B] hover:text-black"
            }`
          }
        >
          <RiTimeLine/> Timeline
        </NavLink>

        {/* Stats */}
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `flex items-center gap-1 px-4 py-2 rounded-md ${
              isActive
                ? "bg-[#244D3F] text-white"
                : "text-[#64748B] hover:text-black"
            }`
          }
        >
        <ImStatsDots/> Stats
        </NavLink>

      </div>
    </nav>
    </div>
   
  );
};

export default Navbar;