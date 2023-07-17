import React, { useContext, useState } from 'react'
import { Context } from '../../../context'

const Sidebar = () => {
    let date = [
        {
            icon: 'fa-solid fa-chart-pie',
            inside: [
                {
                    icon: 'fa-solid fa-universal-access',
                    text: 'Sales',
                    active: true
                },
                {
                    icon: 'fa-solid fa-chart-simple',
                    text: 'Market',
                    active: false
                },
                {
                    icon: 'fa-solid fa-comments-dollar',
                    text: 'Business Summary',
                    active: false
                },
                {
                    icon: 'fa-regular fa-floppy-disk',
                    text: 'Saved Reports',
                    active: false
                },
                {
                    icon: 'fa-regular fa-comment-dots',
                    text: 'Feedbacks',
                    active: false
                },
            ]
        },
        {
            icon: 'fa-solid fa-mug-saucer',
            inside: [
                {
                    icon: 'fa-solid fa-universal-access',
                    text: 'Sales',
                    active: false
                },
                {
                    icon: 'fa-solid fa-chart-simple',
                    text: 'Market',
                    active: false
                },
                {
                    icon: 'fa-solid fa-comments-dollar',
                    text: 'Business Summary',
                    active: false
                },
                {
                    icon: 'fa-regular fa-floppy-disk',
                    text: 'Saved Reports',
                    active: false
                },
                {
                    icon: 'fa-regular fa-comment-dots',
                    text: 'Feedbacks',
                    active: false
                },
            ]
        },
        {
            icon: 'fa-solid fa-location-dot',
            inside: [
                {
                    icon: 'fa-solid fa-universal-access',
                    text: 'Sales',
                    active: false
                },
                {
                    icon: 'fa-solid fa-chart-simple',
                    text: 'Market',
                    active: false
                },
                {
                    icon: 'fa-solid fa-comments-dollar',
                    text: 'Business Summary',
                    active: false
                },
                {
                    icon: 'fa-regular fa-comment-dots',
                    text: 'Feedbacks',
                    active: false
                },
            ]
        },
        {
            icon: 'fa-solid fa-calendar-days',
            inside: [
                {
                    icon: 'fa-solid fa-comments-dollar',
                    text: 'Business Summary',
                    active: false
                },
                {
                    icon: 'fa-regular fa-floppy-disk',
                    text: 'Saved Reports',
                    active: false
                },
                {
                    icon: 'fa-regular fa-comment-dots',
                    text: 'Feedbacks',
                    active: false
                },
            ]
        },
        {
            icon: 'fa-solid fa-box',
            inside: [
                {
                    icon: 'fa-solid fa-universal-access',
                    text: 'Sales',
                    active: false
                },
            ]
        },
        {
            icon: 'fa-solid fa-gear',
            inside: [
                {
                    icon: 'fa-regular fa-floppy-disk',
                    text: 'Saved Reports',
                    active: false
                },
                {
                    icon: 'fa-regular fa-comment-dots',
                    text: 'Feedbacks',
                    active: false
                },
            ]
        }
    ]
    let [activeIcon, setActiveIcon] = useState('fa-solid fa-chart-pie')
    let [activeCat, setActiveCat] = useState('Sales')
    let [category, setCategory] = useState(date[0].inside)
    let { state, dispatch } = useContext(Context)
    let ClickedIcon = (iconName) => {
        if (iconName.icon === activeIcon) {
            dispatch({ type: 'SET_TOGGLE', payload: !state.toggle })
        } else {
            dispatch({ type: 'SET_TOGGLE', payload: true })
            setActiveIcon(iconName.icon)
        }
        setCategory(iconName.inside)
        setActiveCat(iconName.inside[0].text)
    }
    return (
        <div className=' h-full  z-50 fixed flex'>
            <div className="flex-col overflow-hidden md:overflow-auto justify-start items-start gap-4 flex bg-zinc-900 px-4 py-6 min-h-full">
                {
                    date.map((icon, index, active) => {
                        return (
                            <div key={index} onClick={(r) => { ClickedIcon(icon) }} className={`p-3.5 cursor-pointer ${activeIcon === icon.icon ? ' text-white bg-gradient-to-bl from-amber-500 to-pink-500' : 'text-neutral-400'}  rounded-lg flex-col hover:text-white duration-300 justify-start items-center gap-2 flex`}>
                                <i className={`${icon.icon} text-xl w-6 h-6 text-center `}></i>
                            </div>
                        )
                    })
                }
            </div>
            <div className={`w-56 ${state.toggle ? 'block' : 'hidden'} h-full overflow-hidden md:overflow-auto py-6 bg-white border-r border-neutral-200 flex-col justify-start items-start gap-4 inline-flex`}>
                {
                    category.map(({ text, icon }, index) => {
                        return (
                            <div onClick={() => {
                                setActiveCat(text)
                            }} key={index} className={`self-stretch duration-300 cursor-pointer px-[18px] ${activeCat === text ? ' bg-orange-50 bg-opacity-80 border-r-2 border-orange-600 ' : 'text-zinc-500 hover:bg-neutral-200'} py-3.5 justify-start items-center gap-3 inline-flex`}>
                                <div className={`w-6 relative ${activeCat === text ? 'text-orange-600' : 'text-zinc-500'} text-xl`} ><i className={`${icon}`}></i></div>
                                <div className={`grow shrink basis-0 ${activeCat === text ? 'text-orange-600 font-semibold' : 'text-zinc-500  font-normal'} text-sm leading-tight`}>{text}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar