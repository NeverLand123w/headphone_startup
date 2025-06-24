import React, { useState } from 'react';

const Navbar = () => {
  // State to manage the hamburger menu's open/closed status
  const [isOpen, setIsOpen] = useState(false);

  return (
    // The main navbar container
    <div className='fixed top-0 w-full font-[400] pl-10 pr-10 pt-5 pb-5 z-[999] backdrop-blur-md'>
      <div className="navbar flex justify-between items-center gap-[1.5em] font-['raleway'] z-[999]">
        <div className="logo font-bold text-xl">LOGO</div>

        {/* Desktop Menu Links - Hidden on screens smaller than 768px (md) */}
        <div className="hidden md:flex links gap-10">
          <p className='cursor-pointer hover:text-gray-300 transition-colors'>Product</p>
          <p className='cursor-pointer hover:text-gray-300 transition-colors'>New Product</p>
          <p className='cursor-pointer hover:text-gray-300 transition-colors'>Pricing</p>
          <p className='cursor-pointer hover:text-gray-300 transition-colors'>Customer</p>
        </div>

        {/* Desktop Button - Hidden on screens smaller than 768px (md) */}
        <div className="hidden md:block button">
          <button className='pt-[0.5em] pb-[0.5em] pr-[1.5em] pl-[1.5em] border rounded-[50px] cursor-pointer hover:bg-white  hover:text-black transition-colors'>
            Buy Now!
          </button>
        </div>

        {/* Hamburger Menu Button - Only visible on screens smaller than 768px (md) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-16 6h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col items-center p-4 gap-4">
            <p className='cursor-pointer w-full text-center p-2 hover:bg-gray-100 hover:text-black rounded'>Product</p>
            <p className='cursor-pointer w-full text-center p-2 hover:bg-gray-100 hover:text-black rounded'>New Product</p>
            <p className='cursor-pointer w-full text-center p-2 hover:bg-gray-100 hover:text-black rounded'>Pricing</p>
            <p className='cursor-pointer w-full text-center p-2 hover:bg-gray-100 hover:text-black rounded'>Customer</p>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;