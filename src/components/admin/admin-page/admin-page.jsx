import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminPage = () => {
const navigate = useNavigate()
    const addPin =()=>{
      navigate('/admin-pin')
    }
  return (
    <div className='flex justify-center items-center h-full admin_images'>
        <div className='pt-[5%] flex flex-col items-center'>
            <div className='flex justify-center gap-[30px]'>
              
                <div className='flex  flex-col'>
                    <img  width={120} className='rounded-full' src={require('./Screenshot_6.png')} alt="" />
                    <p className='text-white'>Nirmala Azalea</p>
                </div>

                <div className='flex  flex-col'>
                    <img  width={150} className='rounded-full' src={require('./Screenshot_6.png')} alt="" />
                    <p className='text-white'>Nirmala Azalea</p>
                </div>

                <div className='flex  flex-col'>
                    <img  width={120} className='rounded-full' src={require('./Screenshot_6.png')} alt="" />
                    <p className='text-white'>Nirmala Azalea</p>
                </div>
            </div>
            <div className='w-[320px]'>
                <div  className='pt-6 flex gap-4'>
                    <button className='px-[40px] py-2 text-[18px] text-white rounded-[25px] bg-[#FF5C00]'>Clock in</button>
                    <button className='px-[40px] py-2 text-[18px] rounded-[25px]  bg-white text-[#FF5C00]'>Clock out</button>
                </div>
                <button onClick={addPin} className='text-[18px] mt-6 py-[8px] rounded-[25px] login_btn  backdrop-blur text-[#FF5C00] w-full'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default AdminPage