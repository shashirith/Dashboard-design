import React, { useState } from 'react'
import SearchIcon from '../assets/icons/SearchIcon'
import NotificationIcon from '../assets/icons/NotificationIcon'
import dp from "../assets/dp_icon.svg"
import { LuGrip, LuAlignJustify } from "react-icons/lu";
import { VscChromeClose } from "react-icons/vsc";
import useViewport from '../viewport/useViewport'

const Navbar = (props) => {
    const { width } = useViewport();
    const { setIsOpen, user, setUser } = props
    const [isModalOpen, setIsModelOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    }

    return (
        <nav className='z-10 relative w-full flex justify-between items-center flex-row vsm:m-[0px] sm:mt-[30px]'>
            <div className='flex flex-row justify-center items-center gap-[20px]'>
                {width < 1350 ? <button onClick={() => { setIsOpen(true) }} ><LuGrip color='#000' className='h-[20px] w-[20px]' /></button> : null}
                <h1 className='font-["Montserrat"] text-[24px] font-bold'>Dashboard</h1>
            </div>
            {width > 560 ? <div className='flex flex-row items-center gap-[14px]'>
                <div className='flex flex-row items-center bg-white px-[15px] py-[6px] rounded-[10px]'>
                    <input className='outline-none bg-white/0 text-[14px] text-[#b0b0b0] font-["Lato"] font-normal' placeholder='Search... Logout--->' />
                    <SearchIcon />
                </div>
                <div className='cursor-pointer flex flex-row gap-[27px] items-center'>
                    <button onClick={handleLogout}><NotificationIcon /></button>
                    <img src={user.photoURL} alt="dp" className='rounded-full w-[30px] h-[30px]' />
                </div>
            </div>
                :
                <button onClick={() => { setIsModelOpen(true) }}><LuAlignJustify color='#000' className='h-[20px] w-[20px]' /></button>
            }
            {isModalOpen &&
                <div className='absolute w-full h-[50px] top-[40px] drop-shadow-sm bg-slate-400 z-10 flex items-center justify-center rounded-xl'>
                    <div className='flex flex-row items-center gap-[14px] justify-center'>
                        <div className='flex flex-row items-center bg-white px-[15px] py-[6px] rounded-[10px]'>
                            <input className='outline-none bg-white/0 text-[14px] text-[#b0b0b0] font-["Lato"] font-normal' placeholder='Search... Logout--->' />
                            <SearchIcon />
                        </div>
                        <div className='flex flex-row gap-[14px] items-center'>
                            <button onClick={handleLogout}><NotificationIcon /></button>
                            <img src={user.photoURL} alt="dp" className='rounded-full w-[30px] h-[30px]' />
                        </div>
                        <button onClick={() => { setIsModelOpen(false) }}><VscChromeClose color='#000' className='h-[20px] w-[20px]' /></button>
                    </div>
                </div>}
        </nav>
    )
}

export default Navbar