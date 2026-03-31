import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
const tagStyles = {
  "best seller": "bg-yellow-100 text-yellow-600",
  new: "bg-green-100 text-green-600",
  popular: "bg-purple-100 text-purple-600",
};

const DataCards = ({data, carts, setCarts }) => {
  const [isBuy, setIsBuy] = useState(false);


const handleBuyItem = () => {
  setIsBuy(true);
  setCarts([...carts, data])
}

  return (
   <div className="shadow-lg border border-gray-200 rounded-lg p-5 relative  ">
      <p className={`absolute top-3 right-3 text-xs px-2 py-2 rounded ${tagStyles[data.tagType]}`}>{data.tag}       
      </p>
      
    <div className="space-y-2 pb-7">
      <img className=" rounded-full bg-gray-200 p-3" src={data.image} alt="" />
      <h3 className="text-2xl font-bold">{data.name}</h3>
    <p className="text-sm text-gray-600">{data.description}</p>
    </div>
    
    <div className="flex ga-5 space-y-2 items-center">
      <p className="text-2xl font-bold">{data.price}</p>
      <p>/{data.period}</p>
     
    </div>

    <div className="items-center gap-3 space-y-1 pb-7">
      {data.features.map((feature, id) => (
        <li key={id} className="text-sm flex items-center gap-2 ">
         <p className="text-green-500 text-sm"><FaCheck/></p> {feature}
        </li>
      ))}
    </div>
    <div className="mb-5">
      <button onClick={handleBuyItem} className=' btn rounded-4xl bg-gradient-to-r from-blue-700 to-purple-700 p-4 text-white w-full'>{isBuy ? "Added to cart" : "Buy Now"}</button>
    </div>
</div>
  );
};

export default DataCards;
