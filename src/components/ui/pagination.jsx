/* eslint-disable react/prop-types */
const PaginatedList = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current items
  return (
    <div className="">
      {/* Pagination Controls */}
      <div className="flex justify-center gap-2">
        <button
          className="px-3 py-1 border rounded-lg disabled:opacity-50"
          onClick={() => onPageChange((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded-lg ${currentPage === i + 1 ? "bg-gray-900 text-white font-semibold" : "border "}`}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="px-3 py-1 border rounded-lg disabled:opacity-50"
          onClick={() => onPageChange((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedList;
