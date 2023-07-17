import React, { useContext, useState } from 'react'
import OrderDetails from './order-details'
import { Context } from '../../context'
import Modal from '../modals/modal'

const InfoCustomer = () => {
  const [visa , setVisa ] = useState(false)
  const { state, dispatch } = useContext(Context)
  const addnote = (e) => {
    if (e.target.className.includes('addn')) {
      dispatch({ type: 'ADD_NOTE' })
    }

  

  }

  const visaFu =()=>{
    setVisa(prev => !prev)
  }
  return (
    <div className='w-[320px]  md:block hidden h-[680px] overflow-auto sticky top-[75px] bor_left px-3'>
      <div className='flex pt-6 gap-10'>
        <button className='py-[6px] px-[50px] rounded-[20px] cust_buy '>Buy</button>
        <button className='text-[#a19999]'>Reservation</button>
      </div>
      <h1 className='text-[22px] mt-6 font-semibold'>Customer Information</h1>
      <div className='py-4'>
        <input className='w-[100%] py-2 outline-none px-4 rounded-[20px] cust_inpt' type="text" placeholder='Customer name' />
        <br />
        <br />
        <input className='w-[100%] py-2 outline-none px-4 rounded-[20px] cust_inpt' type="text" placeholder='Select table' />
      </div>
      <button onClick={addnote} className='addn w-[100%] text-[#ff7c35] py-2 rounded-[20px] bg-[#ffecde]'>Add note</button>
      <p className='w-full h-[1px] bg-[#7f7c7c] mt-3'></p>
      <p className='text-[20px] mt-8 font-semibold '>Orders details</p>
      <div className='pt-3 flex flex-col gap-3'>
        <OrderDetails />
        <OrderDetails />
        <OrderDetails />
      </div>
      <p className='w-full h-[0.5px] bg-[#7f7c7c] mt-3'></p>
      <div className='pt-4 flex flex-col gap-2 '>
        <div className='flex w-full'>
          <p className='w-[50%] pl-4 text-[#857b7b]'>Sub Total</p>
          <p className='w-[50%] text-end pr-4'>$ 62.13</p>
        </div>
        <div className='flex w-full'>
          <p className='w-[50%] pl-4 text-[#857b7b]'>Tax(10%)</p>
          <p className='w-[50%] text-end pr-4'>$ 62.13</p>
        </div>
        <div className='flex w-full' >
          <p className='w-[50%] pl-4 text-[#857b7b]'>Sub Total</p>
          <p className='w-[50%] text-end pr-4 text-[#ff7c35] font-semibold'>$ 62.13</p>
        </div>
        <button onClick={visaFu} className='py-2 rounded-[20px] my-4 px-6 w-full text-[white] bg-[#ff5a01]'>Pay Now</button>
      </div>

      <div  onClick={e=>{
         if(e.target.className.includes('visaa')){
          setVisa(prev => !prev)
         }
      }} className={`tran visaa  ${visa ? 'fixed flex justify-end tran items-start top-0 bottom-0 right-0 left-0   bg-[#00000088]' :''}`}>
        <div className={`w-[400px] h-[100vh] tran relative ${visa ?  'right-0' :'right-[-120%]'} bg-white`}>
          <h1 className='text-[22px] pt-6 px-7 font-medium'>Order payment</h1>
          <p className='px-7'>Order #102</p>

          <div>
            <div className='w-full flex pt-6 px-10'>
              <p className='w-[50%]'>Tip Amount</p>
              <p className='w-[50%] text-end'>$ 8.12</p>
            </div>
            <div className='w-full flex pt-6 px-10'>
              <p className='w-[50%]'>Total Amount</p>
              <p className='w-[50%] text-end text-[#ff592f] font-bold text-[19px]'>$ 64.00</p>
            </div>
          </div>

          <div>
            <p className='text-[18px]  font-medium px-7'>Payment method </p>
            <div className='flex pt-7 px-5 gap-3'>
              <div className='w-[80px] h-[80px] flex justify-center items-center rounded border border-solid'>
                <img className='' src={require('./images/Logo.png')} alt="" />
              </div>

              <div className='w-[80px] h-[80px] flex justify-center items-center rounded border border-solid'>
                <img className='' src={require('./images/sdsa.png')} alt="" />
              </div>

              <div className='w-[80px] h-[80px] flex justify-center items-center rounded border border-solid'>
                <img className='' src={require('./images/ss.png')} alt="" />
              </div>

              <div className='w-[80px] h-[80px] flex justify-center items-center rounded border border-solid'>
                <img className='' src={require('./images/vxv.png')} alt="" />
              </div>
            </div>
          </div>


          {/* inpu */}
          <div>
            <p className='px-5 pt-4'>Input amount</p>
            <div className='px-6'>
               <input className='py-6  text-center px-4 w-full rounded-[40px]' type="text" placeholder='Input amount' />
           </div>

           <div className='flex  pt-2 flex-wrap px-10 gap-[15px]'>
             <p className='py-2 px-7 rounded-[20px] bg-[blue]'>1</p>
             <p className='py-2 px-7 rounded-[20px] bg-[blue]'>2</p>
             <p className='py-2 px-7 rounded-[20px] bg-[blue]'>3</p>
             <p className='py-2 px-7 rounded-[20px] bg-[blue]'>10</p>
             <p className='py-2 px-7 rounded-[20px] bg-[blue]'>4</p>
             <p className='py-2 px-7 rounded-[20px] bg-[blue]'>5</p>
             <p className='py-2 px-7 rounded-[20px] bg-[blue]'>6</p>
             <p className='py-2 px-7 rounded-[20px] bg-[blue]'>20</p>
             <p className='py-2 px-7 rounded-[20px] bg-[blue]'>7</p>
             <p className='py-2 px-7 rounded-[20px] bg-[blue]'>8</p>
             <p className='py-2 px-7 rounded-[20px] bg-[blue]'>9</p>
             <p className='py-2 px-7 rounded-[20px] bg-[blue]'>#</p>
             <p className='py-2 px-7 rounded-[20px] bg-[blue]'>C</p>
             <p className='py-2 px-7 rounded-[20px] bg-[blue]'>0</p>
             <p className='py-2 px-7 rounded-[20px] bg-[blue]'>.</p>
             <p className='py-2 px-4  bg-[blue]'>Add</p>
           </div>
          </div>

          <div className='flex justify-center items-center pt-4 gap-2'>
            <div className='w-[80px] flex flex-col justify-center items-center rounded-[10px] bg-[black] h-[80px]'>
               <img src={require('./images/money.png')} alt="" />
               <p className='text-[white] text-[10px]'>Tip amount</p>
            </div>
            <div className='w-[80px] flex flex-col justify-center items-center rounded-[10px] bg-[black] h-[80px]'>
               <img src={require('./images/printer.png')} alt="" />
               <p className='text-[white] text-[10px]'>Gift receipt</p>
            </div>
            <div className='w-[80px] flex flex-col justify-center items-center rounded-[10px] bg-[black] h-[80px]'>
               <img src={require('./images/envelope.png')} alt="" />
               <p className='text-[white] text-[10px]'>Email</p>
            </div>
            <div className='w-[80px] flex flex-col justify-center items-center rounded-[10px] sidbar_gradient_pay  h-[80px]'>
               <img src={require('./images/check.png')} alt="" />
               <p className='text-[white] text-[10px]'>Done</p>
            </div>
            
          </div>
        </div>
      </div>

      {state.orderCon && <Modal>
        <div>
            ``
        </div>
        </Modal>}
    </div>
  )
}

export default InfoCustomer