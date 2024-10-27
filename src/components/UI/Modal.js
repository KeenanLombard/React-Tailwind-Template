import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white w-full max-w-md rounded-lg shadow-lg overflow-hidden'>
        <div className='flex justify-between items-center p-4 border-b border-gray-200'>
          <h3 className='text-lg font-semibold'>{title}</h3>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'>
            ×
          </button>
        </div>
        <div className='p-4'>{children}</div>
        <div className='p-4 border-t border-gray-200 flex justify-end'>
          <button
            onClick={onClose}
            className='bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded'>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
