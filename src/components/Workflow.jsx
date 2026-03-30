import React from 'react';

const Workflow = () => {
  return (
    <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center p-15 space-y-7'>
      <div className='space-y-3'>
        <h2 className='text-4xl font-bold'>Ready to Transform Your Workflow?</h2> 
        <p>Join thousands of professionals who are already using Digitools to  work <br /> smarter. Start your free trial today.</p>
        </div>

        <div className='flex justify-center gap-5 '>
          <button className='btn rounded-4xl'>Explore Products</button>
          <button className='btn bg-transparent text-white rounded-4xl'>View Pricing</button>
        </div>

        <div>
          <p className='text-sm text-gray-300'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    </div>
  );
};

export default Workflow;