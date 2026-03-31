import { BsCart2 } from 'react-icons/bs';

const Navbar = ({carts}) => {
  
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
  <div className='relative'>
    < BsCart2  className='text-2xl'/>  
     {carts.length > 0 && (
            <span className='absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full'>
              {carts.length}
            </span>
          )}
  </div>

    <button className='btn'>Login</button>
    <button className='btn rounded-4xl bg-gradient-to-r from-blue-700 to-purple-700 p-2 text-white'>Get Started</button>
  </div>
</div>
  );
};

export default Navbar;