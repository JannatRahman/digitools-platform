import React from 'react';
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
    <div className=' p-10 border border-gray-100 shadow-2xl rounded-2xl container mx-auto mb-10'>
      <h2 className='text-3xl font-bold pb-5'>Your Cart</h2>

      {
        carts.length === 0 ? <p className='flex justify-center items-center gap-2 text-2xl p-10'>Cart is empty <span className=''><HiOutlineEmojiSad /></span></p> : <>
        <div className='space-y-5 rounded-2xl'>
      {
      carts.map(item => <div key={item.id} className='border border-gray-300 rounded-2xl bg-gray-100'>

      <div className='flex gap-5 items-center'>
        <div className='bg-gray-300 rounded-full  my-5 p-5 m-5'>
        <img className='h-10 w-10 object-contain ' src={item.image} alt="" />
      </div>

      <div className='flex w-full  items-center'>
        <div className='flex-1'>
          <h3 className='text-lg font-bold'>{item.name}</h3>
        <p className='text-gray-600'>${item.price}</p>
        </div>
        <button onClick={() => handleDelete(item)} className='text-red-600 m-8'><MdDelete />
        </button>
        
      </div>
      </div>

      </div>)
    }

    </div>
    <div className='flex justify-between mt-5 bg-gray-50 p-3 rounded-2xl items-center'>
      <p>Total</p>
      <p className='font-bold text-2xl'>${totalPrice}</p>
    </div>
    <button onClick={handleProceed} className='btn bg-gradient-to-r from-blue-700 to-purple-700 w-full text-white mt-5 rounded-3xl'>
      Proceed to Checkout
    </button>
        </>
      }

    
    </div>
  );
};

export default Cart;