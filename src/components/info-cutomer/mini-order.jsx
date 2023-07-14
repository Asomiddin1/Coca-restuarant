import React from 'react'

const MiniOrder = () => {
    return (
        <div className='flex gap-1'>
            <div >
                <img className='rounded-[15px]' width={60} src={require('../dashboard/images/Placeholder.png')} alt="" />
            </div>
            <div>
                <p>Rice</p>
                <p>$ 140</p>
            </div>
            <div className='w-[60%] flex items-center justify-end'>
                <div className='flex justify-center items-center '>
                    <div className='w-[30px] h-[29px] flex justify-center items-end rounded-full text-[22px] bg-[#a9a0a0]'>
                        <button className=''>-</button>
                    </div>
                    <p className='mx-[5px]'>1</p>
                    <div className='w-[30px] h-[29px] flex justify-center items-end rounded-full text-[22px] bg-[#a9a0a0]'>
                        <button className='w-[30px] bg-[black]  h-[29px] flex justify-center items-end rounded-full text-white'>+</button> </div>
                </div>
            </div>
        </div>
    )
}

export default MiniOrder