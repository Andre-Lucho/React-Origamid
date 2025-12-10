import React from 'react';

const Buttom = ({ label, ...props }) => {
  return (
    <button
      className="
    min-w-25 py-3 px-5 mb-4 bg-[#aac03eff] text-ligth rounded-md cursor-pointer transition-shadow duration-100 hover:outline-0 hover:shadow-[0_0_0_2px_#f2ffb8,0_0_0_3px_#afbe63] focus:outline-0 focus:shadow-[0_0_0_2px_#f2ffb8,0_0_0_3px_#afbe63] disabled:opacity-25"
      {...props}
    >
      {label}
    </button>
  );
};

export default Buttom;
