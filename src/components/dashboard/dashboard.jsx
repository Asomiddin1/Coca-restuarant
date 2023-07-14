import React, { useContext, useEffect, useState } from 'react'
import { SidbarLeft } from '../sidebar-left/sidbar-left'
import InfoCustomer from '../info-cutomer/info-customer'
import { Foods } from './foods'
import Modal from '../modals/modal'
import OrderDetails from '../info-cutomer/order-details'
import MiniOrder from '../info-cutomer/mini-order'
import { Context } from '../../context'

const Dashboard = () => {
  const {state , dispatch } = useContext(Context)
  const [secuound , setSecound] = useState('00')

 
  const now = new Date
  const day = now.getDate()
  const moth = now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1)
  const year = now.getFullYear()
  const hours = now.getHours()
  const minut = now.getMinutes()
  const secund = now.getSeconds()
 



  
 

  

  

  const addOrder =()=>{
    dispatch({type:'SET_MODAL'})
  }
  return (
    <div>
      <div className='flex h-[10vh] items-center nav_dash'>
        <div className='pl-[30px]'>
            <div className='back_dash flex justify-center items-center'>
                <img width={20} src={require('./images/vvv.png')} alt="" />
            </div>
        </div>
        <h1 className='w-[2px] h-[7vh] bg-[#595959] mx-[20px]'></h1>
        <div className='flex gap-8 items-center w-[30%]'>
            <img src={require('../../layout/Vector.png')} alt="" />
          <div>
            <h1 className='text-[20px] font-bold'>Walk-In</h1>
            <p className='text-[#636262]'>Coca coffeetalk</p>
          </div>
        </div>
        <div>
           <ul className='flex gap-[30px]'>
             <li className='flex gap-2 items-center'><img src={require('./images/Vector 179.png')} alt="" /> <span className='  font-semibold text-[#ff5900]'>Home</span></li>
             <li onClick={addOrder} className='flex gap-2 items-center'><img src={require('./images/note.png')} alt="" /> <span className=' text-[#8b8b8b] hover:font-semibold'>Order</span></li>
             <li className='flex gap-2 items-center'><img src={require('./images/clock.png')} alt="" /> <span className=' text-[#8b8b8b] hover:font-semibold'>History</span></li>
             <li className='flex gap-2 items-center'><img src={require('./images/receipt.png')} alt="" /> <span className=' text-[#8b8b8b] hover:font-semibold'>Bills</span></li>
            <li className='flex gap-2 items-center'>
              <button className='py-2 px-8 text-[#ff5900] rounded-[20px] bg-[#ff712432]'>Dinning option</button>
              {/* <div className='absolute  border border-solid bg-[white] top-[60px]'>
            <h1>dcd</h1>
            <div>
              <button className='px-8 rounded-[20px] text-[#f45f1a] py-2 border border-solid border-[#f45f1a]'>Cancel</button>
              <button  className='px-8 rounded-[20px] text-[white] py-2 border border-solid bg-[#f45f1a]'>Apply</button>
            </div>
           </div> */}
              </li>
           
           </ul>
           
        </div>
        <div className='flex items-center justify-end pl-9 gap-[20px]'>
            <p>{hours}:{minut}:{secund}</p>
            <p> {day}/{moth}/{year}</p>
            <img width={50} src={require('../admin/admin-page/Screenshot_6.png')} alt="" />
        </div>
    </div>


    <div className='flex'>
      <SidbarLeft />
      <div className='w-[70%]'>
       <div className='nav_dash'>
         <p className='text-[#ff5900] px-4'>Dashboard/Food</p>
       </div>
       <div>
         <div className='flex items-center px-4 nav_dash'>
          <img src={require('./images/Ellipse 2832.png')} alt="" />
          <input className='px-1 outline-none py-2' type="text"  placeholder='Search menu'/>
          <div className='pl-[100px]'>
          <h1 className='h-[38px] bg-[#6e6969] w-[1px]'></h1>
          </div>
          <ul className='flex w-full justify-end items-center gap-[30px]'>
            <li className='py-1 px-4 rounded-[20px] bg-[#ff5900]'>All</li>
            <li className='py-1 px-4  text-[#817777] rounded-[20px]'>Chicken</li>
            <li className='py-1 px-4  text-[#817777] rounded-[20px]'>Seafood</li>
            <li className='py-1 px-4  text-[#817777] rounded-[20px]'>Pasta</li>
            <li className='py-1 px-4  text-[#817777] rounded-[20px]'>Rice bowl</li>
          </ul>
         </div>
       </div>
       <div className='w-full flex flex-wrap pl-6  gap-[60px] py-3'>
        <Foods />
        <Foods />
        <Foods />
        <Foods />
        <Foods />
        <Foods />
        <Foods />
        <Foods />
        <Foods />
        <Foods />
        <Foods />
        <Foods />
       </div>
      </div>
      <InfoCustomer />
    </div>


    {/* modals */}
   {state.modal && <Modal>
      <div className='w-[350px] rounded py-6 px-4 bg-white'>
        <div className='py-3'>
          <h1 className='font-semibold'>Add order</h1>
        </div>
        <div>
          <OrderDetails />
        </div>
        <p>Aditional</p>
        <div className='flex flex-col gap-2'>
          <MiniOrder />
          <MiniOrder />
          <MiniOrder />
        </div>
        <p>Add note</p>
        <div className='w-full h-[60px]'>
        <textarea placeholder='Type your note here...' className='rounded-[50px] w-full h-[inherit]' name="" id="" cols="30" rows="5"></textarea>
         </div>
         <div className='flex pt-4 '>
          <div className='w-[40%]'>
            <p>Total</p>
            <p>$ 26.52</p>
          </div>
          <div className='w-[60%] '>
            <button className='py-2 px-6 text-white bg-[#ff5900] rounded-[20px]'>Add to Order</button>
          </div>
         </div>
      </div>
    </Modal>}

    {state.addNote && <div>
       <div className='w-[300px]'>
        <div>
          <p>Add note</p>
          <p className='w-[full]'></p>
           
        </div>
       </div>
      </div>}
    </div>
  )
}

export default Dashboard