import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  return (
    <div className='container mx-auto mb-30 '>
      <div className=' mx-auto text-center space-y-3 pb-5'>
        <h2 className='text-4xl font-bold '>Simple, Transparent Pricing</h2>
        <p className='text-sm text-gray-700'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

    <div className='grid  md:grid-cols-2 md:gap-4 lg:grid-cols-3 gap-6 lg:gap-none justify-items-center'>
  <div className='bg-gray-200 w-full max-w-md h-90 rounded-lg p-5 mt-10  space-y-3'>
        <div className=' '>
         <h2 className='font-bold text-2xl pt-3'>Starter</h2>
          Perfect for getting started
        </div>
        <div className='flex items-center'>
          <p className='font-bold text-2xl'>$0</p>
          <p>/Month</p>
        </div> 
        <div>
          <div className='flex gap-2 items-center'>
         <p className='text-green-500 text-sm'><FaCheck /></p>
         <p>Access to 10 free tools</p>
        </div>
        <div className='flex gap-2 items-center'>
          <p className='text-green-500 text-sm'><FaCheck /></p>
         <p>Basic templates</p>
        </div>
        <div className='flex gap-2 items-center'>
         <p className='text-green-500 text-sm'><FaCheck /></p>
         <p>Community support</p>
        </div>
        <div className='flex gap-2 items-center'>
         <p className='text-green-500 text-sm'><FaCheck /></p>
         <p>1 project per month</p>
        </div>
          <div>
            <button className=' btn rounded-4xl w-full bg-gradient-to-r from-blue-700 to-purple-700  text-white text-sm mt-12'>Explore Products</button>
          </div>
        </div>
      </div>


      <div className='bg-gradient-to-r from-blue-700 to-purple-700 w-full max-w-sm h-90 rounded-lg p-5 mt-10 text-white space-y-3'>
        <div className=' '>
          <button className='bg-amber-300 rounded-4xl pl-2 pr-2 text-yellow-800 ml-30 relative bottom-8 '>Most Popular</button>
          <h2 className='font-bold text-2xl'>Pro</h2>
         <p className='text-gray-300'>Best for professionals</p>
        </div>

        <div className='flex items-center '>
          <p className='font-bold text-2xl'>$29</p>
          <p>/Month</p>
        </div>
        <div>
          <div className='flex gap-2 items-center'>
         <p className='text-white text-sm'><FaCheck /></p>
         <p className='text-sm'>Access to all premium tools</p>
        </div>
        <div className='flex gap-2 items-center'>
          <p className='text-white text-sm'><FaCheck /></p>
         <p className='text-sm'>Unlimited templates</p>
        </div>

        <div className='flex gap-2 items-center'>
         <p className='text-white text-sm'><FaCheck /></p>
         <p className='text-sm'>Priority support</p>
        </div>

        <div className='flex gap-2 items-center'>
         <p className='text-white text-sm'><FaCheck /></p>
         <p className='text-sm'>Unlimited projects</p>
        </div>
        <div className='flex gap-2 items-center'>
         <p className='text-white text-sm'><FaCheck /></p>
         <p className='text-sm'>Cloud sync</p>
        </div>
        <div className='flex gap-2 items-center'>
         <p className='text-white text-sm'><FaCheck /></p>
         <p className='text-sm'>Advanced analytics</p>
        </div>
       <div className='mt-3'>
         <button className=' btn w-full rounded-4xl bg-white  to-purple-700 p-2 text-purple-800'>Start Pro Trial</button>
       </div>

        </div>
      </div>




      <div className='bg-gray-200 w-full max-w-sm h-90 rounded-lg p-5 mt-10 space-y-3'>
        <div className=' '>
          <h2 className='font-bold text-2xl pt-2'>Enterprise</h2>
          <p>For teams and businesses</p>
        </div>

        <div className='flex items-center '>
          <p className='font-bold text-2xl'>$99</p>
          <p>/Month</p>
        </div>
        <div className='space-y-1'>
          <div className='flex gap-2 items-center'>
         <p className='text-green-500 text-sm'><FaCheck /></p>
         <p className='text-sm'>Everything in Pro</p>
        </div>
        <div className='flex gap-2 items-center'>
          <p className='text-green-500 text-sm'><FaCheck /></p>
         <p className='text-sm'>Team collaboration</p>
        </div>
        <div className='flex gap-2 items-center'>
         <p className='text-green-500 text-sm'><FaCheck /></p>
         <p className='text-sm'>Custom integrations</p>
        </div>
        <div className='flex gap-2 items-center'>
         <p className='text-green-500 text-sm'><FaCheck /></p>
         <p className='text-sm'>Dedicated support</p>
        </div>
        <div className='flex gap-2 items-center'>
         <p className='text-green-500 text-sm'><FaCheck /></p>
         <p className='text-sm'>SLA guarantee</p>
        </div>
        <div className='flex gap-2 items-center'>
         <p className='text-green-500 text-sm'><FaCheck /></p>
         <p className='text-sm'>Custom branding</p>
        </div>
        <button className=' btn rounded-4xl bg-gradient-to-r from-blue-700 to-purple-700 p-2 text-white w-full mt-4'>Contact Sales</button>

        </div>
      </div>

    </div>

    </div>
  );
};

export default Pricing;
