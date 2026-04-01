import { BsCart2 } from 'react-icons/bs';
import { IoMenu } from 'react-icons/io5';

const Navbar = ({carts}) => {
  
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-10">
  <div className="navbar-start">
    <div className="dropdown lg:hidden">
      <label tabIndex={0} className='btn btn-ghost'>
      <IoMenu />
      </label>

      <ul tabIndex={0}
  className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 space-y-2">
        <li><a>Products </a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>

    <a className=" text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">DigiTools</a>
    </div>

<div className="navbar-center hidden lg:flex">
 <div className='flex gap-5'>
  <p className='cursor-pointer hover:text-blue-600'>Products</p>
  <p className='cursor-pointer hover:text-blue-600'>Features</p>
  <p className='cursor-pointer hover:text-blue-600'>Pricing</p>
  <p className='cursor-pointer hover:text-blue-600'>Testimonials</p>
  <p className='cursor-pointer hover:text-blue-600'>FAQ</p>
</div>
  </div>

  
  
  <div className="navbar-end gap-3 sm:gap-5">
  <div className='relative'>
    < BsCart2  className='text-2xl cursor-pointer text-purple-800'/>  
     {carts.length > 0 && (
            <span className='absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full'>
              {carts.length}
            </span>)}
  </div>

    <button className='btn btn-sm sm:btn-md'>Login</button>
    <button className='btn btn-sm sm:btn-md rounded-full bg-gradient-to-r from-blue-700 to-purple-700 text-white border-none'>Get Started</button>
  </div>
</div>
  );
};

export default Navbar;