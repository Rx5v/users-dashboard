/* eslint-disable react/prop-types */
import { EllipsisVertical, Trash2Icon, UserRoundPen } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const MenuButton = ({onEdit, onDelete}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleEdit = () => {
    onEdit()
  }
  const handleDelete = () => {
    onDelete()
  }

  useEffect(() => {
    // handle click outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cear listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Tombol menu */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="p-2 text-zinc-600 rounded-lg hover:bg-zinc-200"
      >
        <EllipsisVertical size={16} />
      </button>

      {/* Menu dropdown */}
      {(
        <div
          ref={menuRef}
          className={`absolute right-0 mt-2 px-1 py-2 w-48 bg-white border border-gray-300 rounded-xl shadow-lg transition-all ease-in-out duration-100 ${isOpen ? "transform translate-y-0 opacity-100 z-1" : "transform translate-y-5 opacity-50 -z-2 sr-only"}`}
        >
          <ul>
            <li>
              <button onClick={() => handleEdit()} className="w-full px-4 py-2 text-zinc-500 hover:text-zinc-800 hover:bg-gray-100 font-medium rounded-lg cursor-pointer flex items-center gap-2">
                <UserRoundPen  size={14} strokeWidth={3}/> Edit User
              </button>
            </li>
            <li>
              <button onClick={() => handleDelete()} className="w-full px-4 py-2 text-zinc-500 hover:text-zinc-800 hover:bg-gray-100 font-medium rounded-lg cursor-pointer flex items-center gap-2">
                <Trash2Icon size={14} strokeWidth={3}/> Delete User
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
