import React from 'react';
import bannerImg from '../assets/banner.png'
const Banner = () => {
  return (
    <div className='container mx-auto flex items-center justify-around my-10'>

     <div>
      <h2>Supercharge Your Digital Workflow</h2>
     </div>

     <div>
      <img src={bannerImg} alt="" />
     </div>
    </div>
  );
};

export default Banner;