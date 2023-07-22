import React from 'react'

const OrderDetails = () => {
  return (
    <div className='flex  items-center gap-1'>
    <img width={90}  className='h-[70px]' src={require('../dashboard/images/Image.png')} alt="" />
    <div>
      <p className='text-[18px ] font-semibold'>Steak sapi bakar</p>
      <p className='text-[#7f7c7c] text-[15px]'> Price</p>
      <h1 className='text-[20px] text-[#ff7c35]'>$ 25.12</h1>
    </div>
    <div className='flex justify-center items-center '>
      <div className='w-[30px] h-[29px] flex justify-center items-end rounded-full text-[22px] bg-[#a9a0a0]'>
        <button className=''>-</button>
      </div>
      <p className='mx-[5px]'>1</p>
      <div className='w-[30px]  h-[29px] bg-[black] flex justify-center items-end rounded-full text-[22px] '>
        <button className=' text-white pt-6'>+</button> </div>
    </div>
  </div>
  )
}

export default OrderDetails