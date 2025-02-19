import { useDispatch, useSelector } from "react-redux";
import { X } from "lucide-react";
import { useEffect } from "react";
import { hideAlert } from "../../../store/alertSlice";

export default function Alert() {
  const dispatch = useDispatch();
  const { message, text, type, visible } = useSelector((state) => state.alert);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => dispatch(hideAlert()), 3000); // Auto hide alert
      return () => clearTimeout(timer);
    }
  }, [visible, dispatch]);

  if (!visible) return null;

  const alertStyles = {
    success: "bg-green-100 border-green-500 text-green-800",
    error: "bg-red-100 border-red-500 text-red-800",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-800",
    info: "bg-blue-100 border-blue-500 text-blue-800",
  };

  return (
    <div className={`fixed top-4 right-4 p-4 border-1 w-64 md:w-96 rounded-md shadow-md flex items-center justify-between ${alertStyles[type]}`}>
        <div className="flex flex-col">
            <span className="font-semibold">{message}</span>
            <span className="text-sm">{text}</span>
        </div>
      <button onClick={() => dispatch(hideAlert())} className="ml-3 text-gray-600 hover:text-gray-800">
        <X size={18} />
      </button>
    </div>
  );
}
