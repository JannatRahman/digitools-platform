import React from 'react';
import { BsCart2 } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      
      
    </div>
    <a className=" text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <div className='flex gap-5'>
      <p>Products</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>Testimonials</p>
        <p>FAQ</p>
    </div>
  </div>
  <div className="navbar-end gap-5">
   <BsCart2 />
    <a >Login</a>
    <button className='btn rounded-4xl bg-gradient-to-r from-blue-700 to-purple-700 p-2 text-white'>Get Started</button>
  </div>
</div>
  );
};

export default Navbar;