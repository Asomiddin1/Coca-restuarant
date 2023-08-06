import React from 'react'

const LeftSidebar = () => {
  return (
    <div className="w-[125px] h-full  p-6 bg-white border-r border-neutral-200 flex-col justify-start items-start gap-3 inline-flex">
  <div className="h-[78px] px-1.5 py-3 rounded-lg flex-col justify-start items-center gap-2 flex">
    <div className="w-8 h-8 relative">
      <img className=" " src="https://via.placeholder.com/20x28" />
    </div>
    <div className="self-stretch text-center text-zinc-500 text-xs font-medium leading-[13.92px]">Coffee</div>
  </div>
  <div className="h-[78px] px-1.5 py-3 rounded-lg flex-col justify-start items-center gap-2 flex">
    <div className="w-8 h-8 relative">
      <div className="w-[26px] h-7 left-[3px] top-[2px] absolute">
        <img className="w-[11.77px] h-[25.93px] left-0 top-[2.07px] absolute" src="https://via.placeholder.com/12x26" />
        <img className="w-[6.81px] h-[7.51px] left-[2.48px] top-[15.44px] absolute" src="https://via.placeholder.com/7x8" />
        <img className="w-[13.01px] h-[17.26px] left-[12.99px] top-[10.43px] absolute" src="https://via.placeholder.com/13x17" />
      </div>
    </div>
    <div className="self-stretch text-center text-zinc-500 text-xs font-medium leading-[13.92px]">Beverages</div>
  </div>
  <div className="h-[70px] px-1.5 py-2 bg-gradient-to-bl from-amber-500 to-pink-500 rounded-lg flex-col justify-start items-center gap-2 flex">
    <div className="w-8 h-8 relative">
      <div className="w-7 h-7 left-[2px] top-[2px] absolute">
        <img className="w-7 h-7 left-0 top-0 absolute" src="https://via.placeholder.com/28x28" />
        <img className="w-[6.81px] h-[6.82px] left-[7.03px] top-[13.45px] absolute" src="https://via.placeholder.com/7x7" />
        <img className="w-[19.83px] h-[21.69px] left-[3.50px] top-[3.60px] absolute" src="https://via.placeholder.com/20x22" />
      </div>
    </div>
    <div className="self-stretch text-center text-white text-xs font-medium leading-[13.92px]">Food</div>
  </div>
  <div className="h-[78px] px-1.5 py-3 rounded-lg flex-col justify-start items-center gap-2 flex">
    <div className="w-8 h-8 relative">
      <div className="w-7 h-7 left-[2px] top-[2px] absolute">
        <img className="w-7 h-[19.72px] left-0 top-[8.28px] absolute" src="https://via.placeholder.com/28x20" />
      </div>
    </div>
    <div className="self-stretch text-center text-zinc-500 text-xs font-medium leading-[13.92px]">Appetizer</div>
  </div>
  <div className="h-[78px] px-1.5 py-3 rounded-lg flex-col justify-start items-center gap-2 flex">
    <div className="w-8 h-8 relative">
      <img className="w-7 h-7 left-[2px] top-[2px] absolute" src="https://via.placeholder.com/28x28" />
    </div>
    <div className="self-stretch text-center text-zinc-500 text-xs font-medium leading-[13.92px]">Bread</div>
  </div>
  <div className="h-[78px] px-1.5 py-3 rounded-lg flex-col justify-start items-center gap-2 flex">
    <div className="w-8 h-8 relative">
      <div className="w-7 h-7 left-[2px] top-[2px] absolute">
        <img className="w-7 h-7 left-0 top-0 absolute" src="https://via.placeholder.com/28x28" />
        <img className="w-[8.42px] h-[8.42px] left-[9.60px] top-[9.62px] absolute" src="https://via.placeholder.com/8x8" />
        <img className="w-[21.06px] h-[21.25px] left-[3.72px] top-[3.29px] absolute" src="https://via.placeholder.com/21x21" />
      </div>
    </div>
    <div className="self-stretch text-center text-zinc-500 text-xs font-medium leading-[13.92px]">Snack</div>
  </div>
</div>
  )
}

export default LeftSidebar