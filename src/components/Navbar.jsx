import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-[#f5f7f6] border-b">
      {/* Logo */}
      <h1 className="font-bold text-xl text-gray-800">
        Keen<span className="text-green-700">Keeper</span>
      </h1>

      {/* Nav Links */}
      <div className="flex items-center gap-6 text-gray-600">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg ${
              isActive ? "bg-green-700 text-white" : "hover:bg-gray-200"
            }`
          }
        >
          <FaHome />
          Home
        </NavLink>

        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg ${
              isActive ? "bg-green-700 text-white" : "hover:bg-gray-200"
            }`
          }
        >
          <FaClock />
          Timeline
        </NavLink>

        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg ${
              isActive ? "bg-green-700 text-white" : "hover:bg-gray-200"
            }`
          }
        >
          <FaChartBar />
          Stats
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
