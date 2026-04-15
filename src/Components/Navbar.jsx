import { NavLink } from "react-router";

const Navbar = () => {
  return (
    
        <nav className="bg-gray-200 px-6 py-3 flex items-center justify-between">
      
      {/* Logo */}
      <h1 className="text-xl font-semibold text-gray-800">
        Keen<span className="text-green-600">Keeper</span>
      </h1>

      {/* Menu */}
      <div className="flex items-center gap-6">

        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-md ${
              isActive
                ? "bg-green-700 text-white"
                : "text-gray-600 hover:text-black"
            }`
          }
        >
          🏠 Home
        </NavLink>

        {/* Timeline */}
        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive
                ? "text-green-700 font-semibold"
                : "text-gray-600 hover:text-black"
            }`
          }
        >
          ⏱️ Timeline
        </NavLink>

        {/* Stats */}
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive
                ? "text-green-700 font-semibold"
                : "text-gray-600 hover:text-black"
            }`
          }
        >
          📊 Stats
        </NavLink>

      </div>
    </nav>
   
  );
};

export default Navbar;