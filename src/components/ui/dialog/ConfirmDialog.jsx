const ConfirmDialog = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed backdrop-blur-sm inset-0 bg-gray-600/50 flex items-center justify-center z-2">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-96">
        {/* Dialog Title */}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {title}
        </h2>

        {/* Dialog Message */}
        <p className="text-gray-700 dark:text-gray-300 mb-6">{message}</p>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;