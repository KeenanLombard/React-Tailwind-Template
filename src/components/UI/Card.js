import React from "react";

const Card = ({ children, title, footer }) => {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden'>
      {title && (
        <div className='p-4 border-b border-gray-200 font-semibold text-lg'>
          {title}
        </div>
      )}
      <div className='p-4'>{children}</div>
      {footer && <div className='p-4 border-t border-gray-200'>{footer}</div>}
    </div>
  );
};

export default Card;
