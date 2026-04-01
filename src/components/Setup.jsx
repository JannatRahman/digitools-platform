import React from 'react';
import userImg from '../assets/user.png'
import packageImg from '../assets/package.png'
import rocketImg from '../assets/rocket.png'

const Setup = () => {
  return (
    <div className='bg-gray-200 mb-20 px-4 py-10 sm:px-6 lg:px-20'>
      <div className='mx-auto text-center space-y-2 mb-10 max-w-xl'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Get Started in 3 Steps</h2>
        <p className='text-sm sm:text-base text-gray-600'>Start using premium digital tools in minutes, not hours.</p>
      </div>

     <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mb-15'>

      <div className='bg-white w-full max-w-sm rounded-lg p-10 flex flex-col items-center text-center relative h-fll'>
        <p className='absolute top-3 right-3 rounded-full px-3 py-1 text-xs text-white bg-gradient-to-r from-blue-600 to-purple-600'>01</p>
       <div className='pt-6 pb-4'> 
        <img className='bg-gray-200 p-4 rounded-full w-16 h-16' src={userImg} alt="" /></div>
        
        <div className='text-center space-y-2'>
          <h2 className='text-lg sm:text-xl font-bold'>Create Account</h2>
        <p className='text-sm text-gray-600 mt-2 flex-1'>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
      </div>

      <div className='bg-white w-full max-w-sm rounded-lg p-6 flex flex-col items-center text-center relative h-full'>
        <p className='absolute top-3 right-3 rounded-full px-3 py-1 text-xs text-white bg-gradient-to-r from-blue-600 to-purple-600'>02</p>
       <div className='pt-6 pb-4'>
         <img className='bg-gray-200 p-4 rounded-full w-16 h-16' src={packageImg} alt="" />
       </div>
        
        <div className='text-center space-y-2'>
          <h2 className='text-lg sm:text-xl font-bold'>Choose Products</h2>
        <p className='text-sm text-gray-600 mt-2 flex-1'>Browse our catalog and select the tools that fit your needs.</p>
        </div>
      </div>

      <div className='bg-white w-full max-w-sm rounded-lg p-6 flex flex-col items-center text-center relative h-full'>
        <p className='absolute top-3 right-3 rounded-full px-3 py-1 text-xs text-white bg-gradient-to-r from-blue-700 to-purple-700'>03</p>

       <div className='pt-6 pb-4'>
         <img className='bg-gray-200 p-4 rounded-full w-16 h-16 ' src={rocketImg} alt="" />
       </div>

        <div className='text-center space-y-2'>
          <h2 className='text-lg sm:text-xl font-bold'>Start Creating</h2>
        <p className='text-sm text-gray-600 mt-2 flex-1'>Download and start using your premium  tools immediately.</p>
        </div>
      </div>

     </div>
    </div>
  );
};

export default Setup;