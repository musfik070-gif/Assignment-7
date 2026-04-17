import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-[#f5f7f6] border-b">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        {/* Logo */}
        <h1 className="font-bold text-xl sm:text-2xl text-gray-800 text-center lg:text-left">
          Keen<span className="text-green-700">Keeper</span>
        </h1>

        {/* Nav Links */}
        <div className="grid grid-cols-3 gap-2 text-sm text-gray-600 sm:flex sm:flex-wrap sm:justify-center sm:gap-3 lg:justify-end">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center justify-center gap-2 rounded-lg px-3 py-2 sm:px-4 ${
                isActive ? "bg-green-700 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <FaHome />
            <span className="hidden sm:inline">Home</span>
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              `flex items-center justify-center gap-2 rounded-lg px-3 py-2 sm:px-4 ${
                isActive ? "bg-green-700 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <FaClock />
            <span className="hidden sm:inline">Timeline</span>
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `flex items-center justify-center gap-2 rounded-lg px-3 py-2 sm:px-4 ${
                isActive ? "bg-green-700 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <FaChartBar />
            <span className="hidden sm:inline">Stats</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
