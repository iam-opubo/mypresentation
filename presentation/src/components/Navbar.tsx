import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="w-full px-4 md:px-10 lg:px-20 xl:px-32 py-4 flex justify-between items-center bg-white md:ml-30">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 ml-5">
          <div className="bg-blue-500 text-white flex items-center justify-center rounded-full w-12 h-12">
            <h1 className="text-2xl font-bold ">T</h1>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Trifalgar</h1>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium text-base md:mr-45">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Find a doctor</li>
          <li className="hover:text-blue-500 cursor-pointer">Apps</li>
          <li className="hover:text-blue-500 cursor-pointer">Testimonials</li>
          <li className="hover:text-blue-500 cursor-pointer">About Us</li>
        </ul>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 bg-white shadow-lg">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Find a doctor</li>
            <li className="hover:text-blue-500 cursor-pointer">Apps</li>
            <li className="hover:text-blue-500 cursor-pointer">Testimonials</li>
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
          </ul>
        </div>
      )}
    </div>
  );
}





       {/* <img
          src="img/logo.jpg"
          alt="Trifalgar logo"
          className="h-[60px] w-[190px]"
        /> */}



        
  //   <nav className="w-full  px-60 py-3 flex justify-between items-center bg-white  ">

  //   {/* Logo Section */}
  //   <div className="flex items-center space-x-3 ">

  //     <div className="bg-blue-500 text-white p-1 rounded-full w-17 h-17 ">
  //         <h1 className=" text-[40px] ml-5 mt-[-2%]">
  //             T
  //         </h1>
  //     </div>

  //     <h1 className="text-xl font-bold text-gray-750 text-[40px]">Trifalgar</h1>

  //   </div>

  //   {/* Navigation Links */}
  //   <ul className="hidden md:flex space-x-15 text-gray-400 font-medium">
  //     <li className="text-black hover:text-blue-500 cursor-pointer">Home</li>
  //     <li className="hover:text-blue-500 cursor-pointer">Find a doctor</li>
  //     <li className="hover:text-blue-500 cursor-pointer">Apps</li>
  //     <li className="hover:text-blue-500 cursor-pointer">Testimonials</li>
  //     <li className="hover:text-blue-500 cursor-pointer">About Us</li>
  //   </ul>
  // </nav>






