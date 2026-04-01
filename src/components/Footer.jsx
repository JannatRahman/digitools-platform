import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-20 py-10 ">
  <div className='grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '>
<nav className="space-y-3 max-w-xs">
    <h6 className="text-white text-3xl font-bold leading-relaxed">DigiTools</h6>
    <p className='text-gray-400'>Premium digital tools for creators, <br /> professionals, and businesses. Work <br /> smarter  with our suite of powerful tools.</p>

  </nav>
  <nav>
    <h6 className="text-lg font-semibold mb-3">Product</h6>
    <div className='flex flex-col gap-2 text-gray-400 text-sm'>
      <a className="link link-hover hover:text-white">Features</a>
    <a className="link link-hover hover:text-white">Pricing</a>
    <a className="link link-hover hover:text-white">Templates</a>
    <a className="link link-hover hover:text-white">Integrations</a>
    </div>
  </nav>

  <nav>
    <h6 className="font-white text-lg font-semibold mb-3">Company</h6>
    <div className='flex flex-col gap-2 text-gray-400 text-sm'>
      <a className="link link-hover hover:text-white">About</a>
    <a className="link link-hover hover:text-white">Blog</a>
    <a className="link link-hover hover:text-white">Careers</a>
    <a className="link link-hover hover:text-white">Press</a>
    </div>
  </nav>

  <nav>
    <h6 className="font-white text-lg font-semibold mb-3">Resources</h6>
    <div className='flex flex-col gap-2 text-gray-400 text-sm'>
      <a className="link link-hover hover:text-white">Documentation</a>
    <a className="link link-hover hover:text-white">Help Center</a>
    <a className="link link-hover hover:text-white">Community</a>
    <a className="link link-hover hover:text-white">Contact</a>
    </div>
  </nav>

  <nav>
    <h6 className="font-white text-lg font-semibold mb-3">Social</h6>
    <div className="flex gap-4 text-xl text-gray-400">
      <div className='flex gap-3 '>
        <p><FaInstagram className='hover:text-white cursor-pointer'/></p>
       <p> <FaFacebook className='hover:text-white cursor-pointer'/></p>
       <p> <FaXTwitter className='hover:text-white cursor-pointer'/></p>
      </div>
     
    </div>
    
  </nav>

  

  </div>
<div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>© 2026 DigiTools. All rights reserved.</p>
        <p className="text-center sm:text-right">Built with ❤️ for creators</p>
      </div>

</footer>

  );
};

export default Footer;