import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminPin = (e) => {
    const navigate = useNavigate()
    const [num, setNum] = useState('')
    const numppp = (number) => {
        setNum(e => e + number)

    }

    const deletNum = () => {
        setNum((e) => {

        })
    }
    const clearNum = () => {
        setNum('')
    }

<<<<<<< HEAD

   
=======
>>>>>>> bf0273b8c0eacad499841e940537fe67b6cac529
    const regAdmin = () => {
        if (num === '1234') {
            navigate('/admin-dashboard')
        }
<<<<<<< HEAD

=======
>>>>>>> bf0273b8c0eacad499841e940537fe67b6cac529
    }
    return (
        <div className='flex justify-center items-center h-full admin_images'>
            <div>
                <div className='w-[300px]'>
                    {/*  as*/}
                    <div className='flex w-[300px]  flex-col justify-center  items-center'>
                        <img width={120} className='rounded-full' src={require('../admin-page/Screenshot_6.png')} alt="" />
                        <p className='text-white'>Nirmala Azalea</p>
                    </div>
                </div>
                <div className='w-[300px]'>
                    <div className='py-6 flex justify-center'>
                        <input className='text-white text-[22px] text-center outline-none bg-transparent' type="text" value={num ? num : ''} placeholder='Enter your PIN' />
                    </div>

                    <div className='flex flex-wrap justify-center gap-[20px] w-[300px]  py-3'>
                        <p onClick={() => {
                            numppp(1)
                        }} className='py-1 px-7 text-[20px] text-white num_btn  backdrop-blur '>1</p>
                        <p onClick={() => {
                            numppp(2)
                        }} className='py-1 px-7 text-[20px] text-white num_btn backdrop-blur '>2</p>
                        <p onClick={() => {
                            numppp(3)
                        }} className='py-1 px-7 text-[20px] text-white num_btn backdrop-blur '>3</p>
                        <p onClick={() => {
                            numppp(4)
                        }} className='py-1 px-7 text-[20px] text-white num_btn backdrop-blur '>4</p>
                        <p onClick={() => {
                            numppp(5)
                        }} className='py-1 px-7 text-[20px] text-white num_btn backdrop-blur '>5</p>
                        <p onClick={() => {
                            numppp(6)
                        }} className='py-1 px-7 text-[20px] text-white num_btn backdrop-blur '>6</p>
                        <p onClick={() => {
                            numppp(7)
                        }} className='py-1 px-7 text-[20px] text-white num_btn backdrop-blur '>7</p>
                        <p onClick={() => {
                            numppp(8)
                        }} className='py-1 px-7 text-[20px] text-white num_btn backdrop-blur '>8</p>
                        <p onClick={() => {
                            numppp(9)
                        }} className='py-1 px-7 text-[20px] text-white num_btn backdrop-blur '>9</p>
                        <p onClick={clearNum} className='py-1 px-7 text-[20px] text-white num_btn backdrop-blur '>C</p>
                        <p onClick={() => {
                            numppp(0)
                        }} className='py-1 px-7 text-[20px] text-white num_btn backdrop-blur '>0</p>
                        <p onClick={deletNum} className='py-1 px-7 text-[20px] text-white num_btn backdrop-blur '>#</p>
                    </div>
                    <div className='w-[260px] flex flex-col items-center mx-auto justify-center'>
                        <button onClick={regAdmin} className='text-[15px] mt-6 py-[8px] rounded-[25px]  text-white  bg-[#FF5C00] w-full'>Unlock</button>
                        <p className='text-white text-center mt-[30px] '>Clock in / Clock out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPin