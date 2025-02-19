/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const SidebarLink = ({ to, icon, label }) => {
    const baseClasses = "block flex items-center gap-4 p-3 text-gray-800 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700";
    const activeClasses = "font-semibold bg-gray-200 dark:bg-gray-700";
  
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? `${baseClasses} ${activeClasses}` : baseClasses
        }
      >
        {icon} {label}
      </NavLink>
    );
  };

  export default SidebarLink;
  