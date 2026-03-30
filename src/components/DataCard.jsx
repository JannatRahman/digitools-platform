import React from 'react';

const DataCard = () => {
  return (
    <div>
      <div className='text-center space-y-2 mb-5'>
        <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
        <p className='text-sm  text-gray-500'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        
          
<div className="tabs  justify-center ">
  <input type="radio" name="my_tabs_1" className="tab bg-gradient-to-r from-blue-700 to-purple-700 text-white rounded-l-2xl" aria-label="Products" />

  <input type="radio" name="my_tabs_1" className="tab rounded-r-2xl " aria-label="Cart (0)" defaultChecked />
  

        </div>
      </div>
    </div>
  );
};

export default DataCard;