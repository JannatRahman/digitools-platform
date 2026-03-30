import React from 'react';
import userImg from '../assets/user.png'
import packageImg from '../assets/package.png'
import rocketImg from '../assets/rocket.png'

const Setup = () => {
  return (
    <div className='bg-gray-200  mb-30 p-25'>
      <div className='mx-auto text-center space-y-2 mb-10'>
        <h2 className='text-4xl font-bold '>Get Started in 3 Steps</h2>
        <p>Start using premium digital tools in minutes, not hours.</p>
      </div>

     <div className='grid  md:grid-cols-2 md:gap-4 lg:grid-cols-3 gap-6 lg:gap-none justify-items-center'>

      <div className='bg-white w-full max-w-sm h-80 rounded-lg p-5 items-center  justify-items-center relative'>
        <p className='absolute top-2 right-2 rounded-full p-2 text-sm text-white  bg-gradient-to-r from-blue-600 to-purple-600'>01</p>
       <div className='pt-10 pb-5'> 
        <img className='bg-gray-200 p-5 rounded-full' src={userImg} alt="" /></div>
        
        <div className='text-center space-y-2'>
          <h2 className='text-2xl font-bold'>Create Account</h2>
        <p className='text-sm text-gray-600'>Sign up for free in seconds. No credit card required to get started.</p>

        </div>
      </div>

      <div className='bg-white w-full max-w-sm h-80 rounded-lg p-5 items-center  justify-items-center relative'>
        <p className='absolute top-2 right-2 rounded-full p-2 text-sm text-white  bg-gradient-to-r from-blue-600 to-purple-600'>02</p>
       <div className='pt-10 pb-5'>
         <img className='bg-gray-200 p-5 rounded-full' src={packageImg} alt="" />
       </div>
        
        <div className='text-center space-y-2'>
          <h2 className='text-2xl font-bold'>Choose Products</h2>
        <p className='text-sm text-gray-600'>Browse our catalog and select the tools that fit your needs.</p>
        </div>
      </div>

      <div className='bg-white w-full max-w-sm h-80 rounded-lg p-5 items-center  justify-items-center relative'>
        <p className='absolute top-2 right-2 rounded-full p-2 text-sm text-white  bg-gradient-to-r from-blue-700 to-purple-700 '>03</p>
       <div className='pt-10 pb-5'>
         <img className='bg-gray-200 p-5 rounded-full ' src={rocketImg} alt="" />
       </div>

        <div className='text-center space-y-2'>
          <h2 className='text-2xl font-bold'>Start Creating</h2>
        <p className='text-sm text-gray-600'>Download and start using your premium  tools immediately.</p>
        </div>
      </div>

     </div>
    </div>
  );
};

export default Setup;