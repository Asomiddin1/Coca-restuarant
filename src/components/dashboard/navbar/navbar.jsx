import React from 'react'

const Navbar = () => {
  return (
    <div className="w-[1440px] h-[78px] px-6 py-4 bg-white border-b border-neutral-200 justify-between items-center gap-[422px] inline-flex">
    <div className="justify-start items-center gap-6 flex">
      <div className="justify-start items-start flex">
        <div className="p-2 rounded-[58px] border border-neutral-200 justify-center items-center gap-2 flex">
        <i className="fa-sharp fa-solid fa-left-long "></i>
        </div>
      </div>
      <div className="w-11 h-[0px] origin-top-left rotate-90 border border-neutral-200"></div>
      <img src={require('../../../layout/Vector.png')} alt="" />
      <div className="w-[165px] flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="self-stretch text-zinc-900 text-base font-semibold leading-normal">Walk-In</div>
        <div className="self-stretch text-zinc-500 text-sm font-normal leading-tight">Coca coffeetalk</div>
      </div>
    </div>
    <div className="justify-start items-center gap-8 flex">
      <div className="justify-start items-start gap-8 flex">
        <div className="justify-start items-center gap-2 flex">
        <i className="fa-sharp fa-solid fa-house text-[#FF5C00]"></i>
          <div className="text-orange-600 text-base font-medium leading-normal">Home</div>
        </div>
        <div className="justify-start items-center gap-2 flex">
        <i className="fa-thin fa-notes text-[#f94f4f]"></i>
          <div className="text-zinc-500 text-base font-normal leading-normal">Order</div>
        </div>
        <div className="justify-start items-center gap-2 flex">
        <i className="fa-solid fa-clock-rotate-left text-zinc-500"></i>
          <div className="text-zinc-500 text-base font-normal leading-normal">History</div>
        </div>
        <div className="justify-start items-center gap-2 flex">
        <i className="fa-sharp fa-solid fa-file-invoice text-zinc-500"></i>
          <div className="text-zinc-500 text-base font-normal leading-normal">Bills</div>
        </div>
      </div>
      <div className="justify-start items-center gap-4 flex">
        <div className="h-9 justify-start items-start flex">
          <div className="grow shrink basis-0 h-10 p-2 bg-orange-100 rounded-[58px] justify-center items-center gap-2 flex">
            <button className="text-orange-600  px-6 py-2 text-sm font-semibold leading-tight">Dinning option</button>
          </div>
        </div>
        <div className="px-5 py-2 bg-slate-50 rounded-[40px] justify-start items-start gap-2.5 flex">
          <div className="text-zinc-900 text-sm font-normal leading-tight">10:53:00  26/02/2023</div>
        </div>
        <img className="w-11 h-11 rounded-full" src="https://via.placeholder.com/44x44" />
      </div>
    </div>
  </div>
  )
}

export default Navbar