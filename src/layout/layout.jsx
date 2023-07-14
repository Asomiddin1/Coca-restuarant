import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Layout = () => {
  const [name ,setName ] = useState('')
  const [pass ,serPass ] = useState('')
  const navigate = useNavigate()

  const registr = (e)=>{
    e.preventDefault()
   if(name == 'a' && pass == '1'){
   navigate('/admin-page')
   }else{
    navigate('/')
   }
 
   }

   
  return (
    <div className='layout w-full h-full flex sm:justify-start justify-center items-center sm:pl-[10%] pl-0'>

      <div className='bg-white w-[370px] py-8 px-6 rounded h-[520px]  form_reg'>

        <div>
          <div className='flex justify-center gap-[10px]  items-center'>
            <img width={38} src={require('./Vector.png')} alt="" />
            <h1 className='text-center  text-[22px] font-bold'>Coca</h1>
          </div>

          <h1 className='mt-[50px] text-center font-medium'> Login form</h1>
          <p className='text-[16px] text-[#606060]  text-center'>Lorem Ipsum has been the industry's standard dummy text ever since.</p>

          <form className='py-6 '>
            <label>
              <p className='text-[#606060]'>Username</p>
              <div className='input_layout flex gap-2 '>
                <img className='layout_user' src={require('./user.png')} alt="" />
               <input required className=' outline-none'  type="text" name="" onChange={(e)=>{
                setName(e.target.value)
               }} value={name} placeholder='Enter username' />
             </div>
            </label>
            <label>
              <p className='text-[#606060]'>Password</p>
              <div className='input_layout flex gap-2 '>
                <img src={require('./lock-close.png')} alt="" />
                <input required className=' outline-none' type="password" onChange={(e)=>{
                serPass(e.target.value)
               }} value={pass} placeholder='Enter password' />
              </div>
            </label>
            <p className='mt-3 text-[14px] font-semibold text-[#FF5C00]'>Forgot password?</p>

            <button onClick={registr}  className='w-full bg-[#FF5C00] text-white mt-6 rounded-[20px] py-[7px]'>Running order</button>
          </form>
    <p className='text-[#606060] text-[13px] text-center'>End user agreement</p>
        </div>
      </div>
     

       
        </div>
  )
}

export default Layout