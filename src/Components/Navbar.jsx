import { useState } from "react";
import { CiHome } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";
import { RiTimeLine } from "react-icons/ri";
import { NavLink } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-md transition ${
      isActive
        ? "bg-[#244D3F] text-white"
        : "text-[#64748B] hover:text-black"
    }`;

  return (
    <div className="w-full bg-[#E9E9E9]">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">

       
        <h1 className="text-[20px] md:text-[24px] font-semibold text-black">
          Keen<span className="text-[#244D3F]">Keeper</span>
        </h1>

        
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={linkClass}>
            <CiHome /> Home
          </NavLink>

          <NavLink to="/timeline" className={linkClass}>
            <RiTimeLine /> Timeline
          </NavLink>

          <NavLink to="/stats" className={linkClass}>
            <ImStatsDots /> Stats
          </NavLink>
        </div>

        
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

    
      {open && (
        <div className="md:hidden flex flex-col gap-2 px-4 pb-4 bg-[#E9E9E9]">
          <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>
            <CiHome /> Home
          </NavLink>

          <NavLink
            to="/timeline"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            <RiTimeLine /> Timeline
          </NavLink>

          <NavLink
            to="/stats"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            <ImStatsDots /> Stats
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;