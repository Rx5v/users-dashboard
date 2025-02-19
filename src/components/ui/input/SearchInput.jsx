import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 text-sm pr-1 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-200"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search size={16} className="text-gray-400"/>
      </div>
    </div>
  );
};

export default SearchInput;