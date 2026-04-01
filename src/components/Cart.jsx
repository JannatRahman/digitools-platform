import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { HiOutlineEmojiSad } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const Cart = ({carts, setCarts}) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0) 
  const handleProceed = () => {
    setCarts([]);
    toast.success("Successfully Purchased");
  }

const handleDelete = (item) => {
  const filterArray = carts.filter(c => c.id !== item.id)
  setCarts(filterArray)
  toast.info("Items deleted");
}

  return (
    <div className=' p-4 sm:p-6 md:p-10 border border-gray-100 shadow-xl rounded-2xl container mx-auto mb-10'>
      <h2 className='text-2xl sm:text-3xl font-bold pb-5 text-center sm:text-left'>Your Cart</h2>

      {
     carts.length === 0 ? <p className='flex justify-center items-center gap-2 text-lg sm:text-2xl p-10'>
      
      Cart is empty <span className=''><HiOutlineEmojiSad /></span></p> : <>
        <div className='space-y-4'>
      {carts.map(item => <div key={item.id} className='border border-gray-300 rounded-2xl bg-gray-100 p-3 sm:p-4'>

      <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
        <div className='bg-gray-300 rounded-full p-3 mx-auto sm:mx-0'>
        <img className='h-10 w-10 object-contain ' src={item.image} alt="" />
      </div>

      <div className='flex flex-col sm:flex-row sm:items-center w-full gap-2'>
        <div className='flex-1 text-center sm:text-left'>
          <h3 className='text-base sm:text-lg font-bold'>{item.name}</h3>

        <p className='text-gray-600 text-sm sm:text-base'>${item.price}</p>
        </div>

        <button onClick={() => handleDelete(item)} className='text-red-600 text-xl self-center sm:self-auto'><MdDelete />
        </button>
        
      </div>
      </div>

      </div>)}
    </div>

    <div className='flex justify-between mt-6 bg-gray-50 p-4 rounded-2xl items-center'>
      <p className='text-lg sm:text-base font-bold'>Total</p>
      <p className='font-bold text-xl sm:text-2xl'>${totalPrice}</p>
    </div>

    <button onClick={handleProceed} className='btn bg-gradient-to-r from-blue-700 to-purple-700 w-full text-white mt-5 rounded-3xl text-sm sm:text-base'>
      Proceed to Checkout
    </button>
        </>}

    
    </div>
  );
};

export default Cart;