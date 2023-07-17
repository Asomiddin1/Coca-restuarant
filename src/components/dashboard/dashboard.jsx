import React, { useContext, useEffect, useState } from 'react'
import { SidbarLeft } from '../sidebar-left/sidbar-left'
import InfoCustomer from '../info-cutomer/info-customer'
import { Foods } from './foods'
import Modal from '../modals/modal'
import OrderDetails from '../info-cutomer/order-details'
import MiniOrder from '../info-cutomer/mini-order'
import { Context } from '../../context'

const Dashboard = () => {
  const { state, dispatch } = useContext(Context)
  const [select, setSselect] = useState(false)

  console.log(state);

  const now = new Date
  const day = now.getDate()
  const moth = now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1)
  const year = now.getFullYear()
  const hours = now.getHours()
  const minut = now.getMinutes()
  const secund = now.getSeconds()


  const addOrder = () => {
    dispatch({ type: 'SET_MODAL' })
  }
  const menus =()=>{
    dispatch({ type: 'SET_NAV' })
  }
  return (
    <div>
      <div className='flex sticky bg-white top-0 h-[10vh] items-center nav_dash'>
        <div className='pl-[30px] pr-1'>
          <div onClick={menus} className='flex-col gap-[7px] flex justify-center items-center'>
           <h1 className='w-[40px] rounded h-[5px] bg-[#ff5900]'></h1>
           <h1 className='w-[40px] rounded h-[5px] bg-[#ff5900]'></h1>
           <h1 className='w-[40px] rounded h-[5px] bg-[#ff5900]'></h1>
          </div>
        </div>
        <h1 className='w-[2px] h-[7vh] bg-[#595959] mx-[20px]'></h1>
        <div className='flex gap-8 items-center w-[30%] min-w-[189px]'>
          <img src={require('../../layout/Vector.png')} alt="" />
          <div>
            <h1 className='text-[20px] font-bold'>Walk-In</h1>
            <p className='text-[#636262]'>Coca coffeetalk</p>
          </div>
        </div>
        <div>
          <ul className='sm:flex hidden gap-[30px]'>
            <li className='flex gap-2 items-center'><img src={require('./images/Vector 179.png')} alt="" /> <span className='  font-semibold text-[#ff5900]'>Home</span></li>
            <li onClick={addOrder} className='flex gap-2 items-center'><img src={require('./images/note.png')} alt="" /> <span className=' text-[#8b8b8b] hover:font-semibold'>Order</span></li>
            <li className='flex gap-2 items-center'><img src={require('./images/clock.png')} alt="" /> <span className=' text-[#8b8b8b] hover:font-semibold'>History</span></li>
            <li className='flex gap-2 items-center'><img src={require('./images/receipt.png')} alt="" /> <span className=' text-[#8b8b8b] hover:font-semibold'>Bills</span></li>
            <li className='flex gap-2 items-center'>
              <button onClick={()=>{
                setSselect(true)
              }} className='py-2 px-8 max-h-[40px] select_btn text-[#ff5900] rounded-[20px] bg-[#ff712432]'>Dinning option</button>
           
            {select && <div className='absolute flex flex-col gap-[15px]  ml-[-50px] px-4 py-4 border border-solid rounded bg-[white] top-[70px]'>
            
            <div className='flex w-[250px] py-2 px-6 rounded-[15px] nav_dini'>
              <div className='flex gap-2 w-[50%] items-center'>
                <img src={require('./images/Icon.png')} alt="" />
                <h1>Dine in</h1>
              </div>
              <div className='w-[50%] flex justify-end'>
                  <div className='bg-[#ff5900]  flex items-center justify-center w-[20px] h-[20px] rounded-full'>
                    <img width={18} src={require('../info-cutomer/images/check.png')} alt="" />
                  </div>
              </div>
            </div>

            <div className='flex w-[250px] py-2 px-6 rounded-[15px] nav_dini'>
              <div className='flex gap-2 w-[70%] items-center'>
                <img src={require('./images/take away.png')} alt="" />
                <h1>Take away</h1>
              </div>
              <div className='w-[50%] flex justify-end'>
                  <div className='bg-[#807c7a] flex items-center justify-center w-[20px] h-[20px] rounded-full'>
                    <img width={18} src={require('../info-cutomer/images/check.png')} alt="" />
                  </div>
              </div>
            </div>


            <div className='flex w-[250px] py-2 px-6 rounded-[15px] nav_dini'>
              <div className='flex gap-2 w-[50%] items-center'>
                <img src={require('./images/delivery.png')} alt="" />
                <h1>Dine in</h1>
              </div>
              <div className='w-[50%] flex justify-end'>
                  <div className='bg-[#807c7a] flex items-center justify-center w-[20px] h-[20px] rounded-full'>
                    <img width={18} src={require('../info-cutomer/images/check.png')} alt="" />
                  </div>
              </div>
            </div>
            
            <div className='flex w-[250px] py-2 px-6 rounded-[15px] nav_dini'>
              <div className='flex gap-2 w-[50%] items-center'>
                <img src={require('./images/event.png')} alt="" />
                <h1>Reservation</h1>
              </div>
              <div className='w-[50%] flex justify-end'>
                  <div className='bg-[#807c7a] flex items-center justify-center w-[20px] h-[20px] rounded-full'>
                    <img width={18} src={require('../info-cutomer/images/check.png')} alt="" />
                  </div>
              </div>
            </div>
            
            <div>
            <button onClick={()=>{
              setSselect(false)
            }} className='px-8 rounded-[20px] text-[#f45f1a] py-2 border border-solid border-[#f45f1a]'>Cancel</button>
            <button  className=' ml-[15px] px-8 rounded-[20px] text-[white] py-2 border border-solid bg-[#f45f1a]'>Apply</button>
            </div>
         
       
             </div>}
            </li>

          </ul>

        </div>
        <div className='flex sm:flex-row flex-col items-center justify-end sm:pl-[100px] pl-6 gap-1 sm:gap-[20px]'>
          <p>{hours}:{minut}:{secund}</p>
          <p> {day}/{moth}/{year}</p>
         
        </div>
        <img className='ml-4' width={50} src={require('../admin/admin-page/Screenshot_6.png')} alt="" />
      </div>


      <div className='flex'>
        <SidbarLeft />
        <div className='w-full '>
          <div className='sticky top-[75px] bg-white'>
          <div className='nav_dash'>
            <p className='text-[#ff5900] px-4'>Dashboard/Food</p>
          </div>
          <div>
            <div className='flex items-center px-4 nav_dash'>
              <img src={require('./images/Ellipse 2832.png')} alt="" />
              <input className='px-1 sm:block hidden outline-none py-2' type="text" placeholder='Search menu' />
              <div className='sm:pl-[100px] pl-2'>
                <h1 className='h-[38px] bg-[#6e6969] w-[1px]'></h1>
              </div>
              <ul className='flex w-full overflow-scroll px-2 justify-end items-center sm:gap-[30px] gap-[5px]'>
                <li className='py-1 px-4 rounded-[20px] bg-[#ff5900]'>All</li>
                <li className='py-1 px-4  text-[#817777] rounded-[20px]'>Chicken</li>
                <li className='py-1 px-4  text-[#817777] rounded-[20px]'>Seafood</li>
                <li className='py-1 px-4  text-[#817777] rounded-[20px]'>Pasta</li>
                <li className='py-1 px-4  text-[#817777] rounded-[20px]'>Rice bowl</li>
              </ul>
            </div>
          </div>

          </div>
          <div className='w-full overflow-scroll h-[100vh] flex flex-wrap pl-6  gap-[60px] py-3'>
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
            <Foods />
            <Foods />
            <Foods />
            <Foods />
            <Foods />
            <Foods />
            <Foods />
          </div>
        </div>
      <div className='sm:block hidden'>
      <InfoCustomer />
      </div>
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

      {state.addNote && <Modal>
        <div className='w-[350px] rounded bg-[white]'>
          <div>
            <p>Add note</p>
            <p className='w-[full]'>Enter order note</p>
            <div className='w-full h-[60px]'>
            <textarea placeholder='Type your note here...' className='rounded-[50px] w-full h-[inherit]' name="" id="" cols="30" rows="5"></textarea>
          </div>
          <div>
            <button className='px-12 rounded-[20px] text-[#f45f1a] py-2 border border-solid border-[#f45f1a]'>Cancel</button>
            <button  className=' ml-[15px] px-9 rounded-[20px] text-[white] py-2 border border-solid bg-[#f45f1a]'>Add to order</button>
            </div>
          </div>
        </div>
      </Modal>}

      {state.navig && <div className='bg-white h-[100vh]  fixed w-full flex flex-col items-center  top-0  '>
        <h1 onClick={menus} className='text-end w-full pr-4'>X</h1>
        <ul className='flex flex-col items-center gap-[30px] '>
            <li className='flex  gap-2 items-center'><img src={require('./images/Vector 179.png')} alt="" /> <span className='  font-semibold text-[#ff5900]'>Home</span></li>
            <li onClick={addOrder} className='flex gap-2 items-center'><img src={require('./images/note.png')} alt="" /> <span className=' text-[#8b8b8b] hover:font-semibold'>Order</span></li>
            <li className='flex gap-2 items-center'><img src={require('./images/clock.png')} alt="" /> <span className=' text-[#8b8b8b] hover:font-semibold'>History</span></li>
            <li className='flex gap-2 items-center'><img src={require('./images/receipt.png')} alt="" /> <span className=' text-[#8b8b8b] hover:font-semibold'>Bills</span></li>
            <li className='flex gap-2 items-center'>
              <button onClick={()=>{
                setSselect(true)
              }} className='py-2 px-8 max-h-[40px] select_btn text-[#ff5900] rounded-[20px] bg-[#ff712432]'>Dinning option</button>
           
            {select && <div className='absolute flex flex-col gap-[15px]  ml-[-50px] px-4 py-4 border border-solid rounded bg-[white] items-center'>
            
            <div className='flex w-[250px] py-2 px-6 rounded-[15px] nav_dini'>
              <div className='flex gap-2 w-[50%] items-center'>
                <img src={require('./images/Icon.png')} alt="" />
                <h1>Dine in</h1>
              </div>
              <div className='w-[50%] flex justify-end'>
                  <div className='bg-[#ff5900]  flex items-center justify-center w-[20px] h-[20px] rounded-full'>
                    <img width={18} src={require('../info-cutomer/images/check.png')} alt="" />
                  </div>
              </div>
            </div>

            <div className='flex w-[250px] py-2 px-6 rounded-[15px] nav_dini'>
              <div className='flex gap-2 w-[70%] items-center'>
                <img src={require('./images/take away.png')} alt="" />
                <h1>Take away</h1>
              </div>
              <div className='w-[50%] flex justify-end'>
                  <div className='bg-[#807c7a] flex items-center justify-center w-[20px] h-[20px] rounded-full'>
                    <img width={18} src={require('../info-cutomer/images/check.png')} alt="" />
                  </div>
              </div>
            </div>


            <div className='flex w-[250px] py-2 px-6 rounded-[15px] nav_dini'>
              <div className='flex gap-2 w-[50%] items-center'>
                <img src={require('./images/delivery.png')} alt="" />
                <h1>Dine in</h1>
              </div>
              <div className='w-[50%] flex justify-end'>
                  <div className='bg-[#807c7a] flex items-center justify-center w-[20px] h-[20px] rounded-full'>
                    <img width={18} src={require('../info-cutomer/images/check.png')} alt="" />
                  </div>
              </div>
            </div>
            
            <div className='flex w-[250px] py-2 px-6 rounded-[15px] nav_dini'>
              <div className='flex gap-2 w-[50%] items-center'>
                <img src={require('./images/event.png')} alt="" />
                <h1>Reservation</h1>
              </div>
              <div className='w-[50%] flex justify-end'>
                  <div className='bg-[#807c7a] flex items-center justify-center w-[20px] h-[20px] rounded-full'>
                    <img width={18} src={require('../info-cutomer/images/check.png')} alt="" />
                  </div>
              </div>
            </div>
            
            <div>
            <button onClick={()=>{
              setSselect(false)
            }} className='px-8 rounded-[20px] text-[#f45f1a] py-2 border border-solid border-[#f45f1a]'>Cancel</button>
            <button  className=' ml-[15px] px-8 rounded-[20px] text-[white] py-2 border border-solid bg-[#f45f1a]'>Apply</button>
            </div>
         
       
             </div>}
            </li>

          </ul>
          </div>
        }
    </div>
  )
}

export default Dashboard