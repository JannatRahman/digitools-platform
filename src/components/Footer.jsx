import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-gray-900 text-white p-10">
  <nav>
    <h6 className="text-white text-2xl">DigiTools</h6>
    <p className='text-gray-400'>Premium digital tools for creators, <br /> professionals, and businesses. Work <br /> smarter  with our suite of powerful tools.</p>
  </nav>
  <nav>
    <h6 className="font-white text-lg">Product</h6>
    <a className="text-gray-400 link link-hover">Features</a>
    <a className="text-gray-400 link link-hover">Pricing</a>
    <a className="text-gray-400 link link-hover">Templates</a>
    <a className="text-gray-400 link link-hover">Integrations</a>
  </nav>

  <nav>
    <h6 className="font-white text-lg">Company</h6>
    <a className="text-gray-400 link link-hover">About</a>
    <a className="text-gray-400 link link-hover">Blog</a>
    <a className="text-gray-400 link link-hover">Careers</a>
    <a className="text-gray-400 link link-hover">Press</a>
  </nav>

  <nav>
    <h6 className="font-white text-lg">Resources</h6>
    <a className="text-gray-400 link link-hover">Documentation</a>
    <a className="text-gray-400 link link-hover">Help Center</a>
    <a className="text-gray-400 link link-hover">Community</a>
    <a className="text-gray-400 link link-hover">Contact</a>
  </nav>

  <nav>
    <h6 className="font-white text-lg">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <div className='flex gap-3 '>
        <p><FaInstagram /></p>
       <p> <FaFacebook /></p>
       <p> <FaXTwitter /></p>
      </div>
     
    </div>
    
  </nav>

  

</footer>

  );
};

export default Footer;