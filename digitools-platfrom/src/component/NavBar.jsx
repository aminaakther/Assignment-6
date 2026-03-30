import React from 'react';

const NavBar = () => {
  return (
    <div className="navbar bg-white px-4 md:px-10 border-b border-gray-100 flex items-center justify-between py-4">

      {/* Navbar Start: Logo */}
      <div className="navbar-start flex items-center">
        <div className="text-2xl font-bold text-[#9333ea] cursor-pointer">
          DigiTools
        </div>
      </div>

      {/* Navbar Center: Horizontal Menu */}
      <div className="navbar-center hidden lg:flex flex-1 justify-center">
        <ul className="flex items-center gap-8 text-[16px] font-medium text-gray-600 list-none">
          <li className="cursor-pointer hover:text-purple-600 transition">Products</li>
          <li className="cursor-pointer hover:text-purple-600 transition">Features</li>
          <li className="cursor-pointer hover:text-purple-600 transition">Pricing</li>
          <li className="cursor-pointer hover:text-purple-600 transition">Testimonials</li>
          <li className="cursor-pointer hover:text-purple-600 transition">FAQ</li>
        </ul>
      </div>




      



      <div className="navbar-end flex items-center gap-6">
       
        <div className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-purple-600 font-medium transition-colors group">

         
          <i className="fa-solid fa-cart-shopping text-lg group-hover:scale-110 transition-transform"></i>

          <span>Login</span>
        </div> 












        <button className="bg-gradient-to-r from-[#8b2cf5] to-[#a434ff] text-white font-semibold py-[10px] px-[24px] rounded-full hover:opacity-90 transition-opacity shadow-lg active:scale-95">
          Get Started
        </button>
      </div>

    </div>
  );
};

export default NavBar;