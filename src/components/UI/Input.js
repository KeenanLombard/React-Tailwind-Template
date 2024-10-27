import React from "react";

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  error = "",
  type = "text",
}) => {
  return (
    <div className='mb-4'>
      {label && (
        <label className='block text-sm font-medium text-gray-700'>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50 ${
          error
            ? "border-red-500 focus:ring-red-300"
            : "border-gray-300 focus:ring-blue-300"
        }`}
      />
      {error && <p className='text-xs text-red-500 mt-1'>{error}</p>}
    </div>
  );
};

export default Input;
