import React from 'react';
import bannerImg from '../assets/banner.png'
import img from '../assets/react.svg'
import { CiPlay1 } from 'react-icons/ci';
import { WiDirectionRight } from 'react-icons/wi';
const Banner = () => {
  return (
    <div className='container mx-auto flex items-center justify-around my-10'>

     <div className='space-y-4 '>
      <div className='flex gap-1 items-center bg-purple-200 rounded-4xl w-65 pl-3 p-1'>
        <img className='w-5 h-5' src={img} alt="" />
        <p className='text-sm text-purple-800'> New: AI-Powered Tools Available</p>

      </div>
      <h2 className='text-5xl font-bold'>Supercharge Your <br /> Digital Workflow</h2>
      <p className='text-gray-700'>Access premium AI tools, design assets, templates, and productivity <br />
       software—all in one place. Start creating faster today.
       Explore Products</p>
       <div className='flex gap-6'>
        <button className=' btn rounded-4xl bg-gradient-to-r from-blue-700 to-purple-700 p-3 text-white'>Explore Products <WiDirectionRight /></button>
        <button className='btn border-purple-900 rounded-4xl text-purple-800 hover:bg-gradient-to-r from-blue-700 to-purple-700 '><CiPlay1 /> Watch Demo</button>
       </div>
     </div>

     <div>
      <img src={bannerImg} alt="" />
     </div>


    
    </div>
  );
};

export default Banner;