import React from 'react';
import bannerImg from '../assets/banner.png'
import playImg from '../assets/Play.png'
import img from '../assets/react.svg'
import { CiPlay1 } from 'react-icons/ci';

import { WiDirectionRight } from 'react-icons/wi';
const Banner = () => {
  return (
    <div className='container mx-auto flex flex-col-reverse md:flex-row items-center justify-between my-10 px-4 md:px-0 gap-8'>

     <div className='space-y-4 text-center md:text-left flex-1'>

      <div className='flex gap-1 items-center bg-purple-200 rounded-full w-fit px-3 py-1 mx-auto md:mx-0'>
        <img className=' w-5 h-5 md:w-6 md:h-6' src={img} alt="" />
        <p className='text-xs sm:text-sm md:text-base text-purple-800'> New: AI-Powered Tools Available</p>
      </div>

      <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug'>Supercharge Your <br className='hidden sm:block'/> Digital Workflow</h2>

      <p className='text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed'>Access premium AI tools, design assets, templates, and productivity <br />
       software—all in one place. Start creating faster today.
       Explore Products</p>

       <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start'>
        <button className='btn rounded-full bg-gradient-to-r from-blue-700 to-purple-700 px-6 py-3 text-sm sm:text-base md:text-lg text-white'>Explore Products</button>

        <button className='btn border border-purple-900 rounded-full text-purple-800 hover:bg-gradient-to-r from-blue-700 to-purple-700 px-6 py-3 text-sm sm:text-base md:text-lg flex items-center justify-center gap-2'><span><img src={playImg} alt="" className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'/></span> Watch Demo</button>
       </div>
     </div>

     <div className='w-full md:w-auto flex justify-center md:justify-end flex-1'>
      <img src={bannerImg} alt="" className='w-full sm:w-3/4 md:w-full lg:max-w-lg'/>
     </div>


    
    </div>
  );
};

export default Banner;