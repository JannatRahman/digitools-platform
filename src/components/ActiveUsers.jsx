import React from 'react';

const ActiveUsers = () => {
  return (
    <div className='bg-gradient-to-r from-blue-700 to-purple-700 flex gap-20 justify-center text-white p-10 items-center'>
      <div className='space-y-2'>
       <h2 className='text-4xl font-bold'>50K+</h2> 
       <p className='text-sm text-gray-200'>Active Users</p>
      </div>

<div className="divider divider-horizontal "></div>

      <div className='space-y-2'>
        <h2 className='text-4xl font-bold'>200+</h2>
        <p className='text-sm text-gray-200'>Premium Tools</p>
      </div>

<div className="divider divider-horizontal "></div>
      <div className='space-y-2'>
        <h2 className='text-4xl font-bold'>4.9</h2>
        <p className='text-sm text-gray-200'>Rating</p>
      </div>
    </div>
  );
};

export default ActiveUsers;