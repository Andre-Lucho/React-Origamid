import React from 'react';

const Buttom = ({ label, ...props }) => {
  return (
    <button
      className="
    min-w-25 py-3 px-5 mb-4 bg-light-blue text-dark-blue rounded-md cursor-pointer transition-shadow duration-100 hover:outline-0 hover:shadow-[0_0_0_2px_#0664d8,0_0_0_4px_#0161d5] focus:outline-0 focus:shadow-[0_0_0_2px_#0664d8,0_0_0_4px_#0161d5] disabled:opacity-25"
      {...props}
    >
      {label}
    </button>
  );
};

export default Buttom;
