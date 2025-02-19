/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { showSidebar } from "../../../store/sidebarSlice";

const SidebarLink = ({ to, icon, label }) => {
    const baseClasses = "block flex items-center gap-4 p-3 text-gray-800 rounded-md hover:bg-gray-300";
    const activeClasses = "font-semibold bg-gray-200";
    const dispatch = useDispatch()
  
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? `${baseClasses} ${activeClasses}` : baseClasses
        }
        onClick={() => dispatch(showSidebar(false))}
      >
        {icon} {label}
      </NavLink>
    );
  };

  export default SidebarLink;
  