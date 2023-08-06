import React from 'react'
import Navbar from '../navbar/navbar'
import LeftSidebar from '../leftsidebar/leftsidebar'
import Searchbar from '../searchbar/searchbar'


const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className='flex '>
        <LeftSidebar />
        <div>
        <div className="w-[923px]"><span className="text-orange-600 text-xs font-medium leading-[18px]">Dashboard / </span><span className="text-zinc-500 text-xs font-medium leading-[18px]">Food</span></div>
          {/*  */}
          <div className="w-[955px] h-[68px] pr-6 bg-white border-b border-neutral-400 justify-start items-center gap-6 inline-flex">
            <div className="grow shrink basis-0 h-[68px] px-6 py-[22px] border-r border-neutral-200 justify-start items-center gap-2.5 flex">
              <div className="w-6 h-6 relative" />
              <div className="grow shrink basis-0 text-stone-300 text-base font-normal leading-normal">Search menu...</div>
            </div>
            <div className="justify-start items-start gap-2 flex">
              <div className="px-4 py-2 bg-orange-50 rounded-[40px] border border-orange-600 justify-start items-start gap-2.5 flex">
                <div className="text-orange-600 text-sm font-semibold leading-tight">All</div>
              </div>
              <div className="px-4 py-2 bg-white rounded-[40px] border border-neutral-200 justify-start items-start gap-2.5 flex">
                <div className="text-zinc-900 text-sm font-normal leading-tight">Chicken</div>
              </div>
              <div className="px-4 py-2 bg-white rounded-[40px] border border-neutral-200 justify-start items-start gap-2.5 flex">
                <div className="text-zinc-900 text-sm font-normal leading-tight">Seafood</div>
              </div>
              <div className="px-4 py-2 bg-white rounded-[40px] border border-neutral-200 justify-start items-start gap-2.5 flex">
                <div className="text-zinc-900 text-sm font-normal leading-tight">Pasta</div>
              </div>
              <div className="px-4 py-2 bg-white rounded-[40px] border border-neutral-200 justify-start items-start gap-2.5 flex">
                <div className="text-zinc-900 text-sm font-normal leading-tight">Rice bowl</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard