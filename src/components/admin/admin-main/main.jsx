import React from 'react'
import Line from '../linechart/line'
import Cards from '../admin-sale-cards/cards'


const Main = () => {
    let date = [
        {
            text: 'Coffeetalk',
            earn: '1,432',
            percent: '3',
            color: 'border-violet-500'
        }, {
            text: 'Low n slow',
            earn: '2,124',
            percent: '5',
            color: 'border-red-500'
        }, {
            text: "Cold 'n brew",
            earn: '9,692',
            percent: '12',
            color: 'border-yellow-500'
        }, {
            text: 'Eplus space',
            earn: '0,902',
            percent: '1',
            color: 'border-lime-500'
        }, {
            text: 'Sinergy space',
            earn: '6,431',
            percent: '9',
            color: 'border-lime-400'
        },

    ]

    return (
        <div className="p-6 bg-slate-50 min-h-screen">
            <Cards/>
            <div className="p-6 w-full my-4 lg:w-2/3 bg-white rounded-xl">
                <div className="ext-zinc-900 text-base font-medium leading-normal mb-8">Selected location</div>
                <div className=" justify-start items-start gap-2 flex flex-wrap">
                    {
                        date.map(({ text, earn, percent, color }) => {
                            return (
                                <div className={`grow shrink basis-0 h-[100px] p-3 bg-white rounded-sm shadow border-t-2 ${color} flex-col justify-start items-start gap-4 inline-flex`}>
                                    <div className="self-stretch text-zinc-500 text-xs font-medium leading-[18px]">{text}</div>
                                    <div className="self-stretch justify-start items-baseline gap-1 inline-flex">
                                        <div className="text-zinc-900 text-xl font-semibold leading-[30px]">${earn}</div>
                                        <div className="grow shrink basis-0 text-lime-500 text-xs font-normal leading-[18px]">+{percent}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <Line/>
                </div>
            </div>
        </div >
    )
}

export default Main