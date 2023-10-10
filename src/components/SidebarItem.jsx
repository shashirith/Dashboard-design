import React from 'react'
import DashboardIcon from '../assets/icons/DashboardIcon'

const SidebarItem = (props) => {

    const {icon, name, selected, setSelected, setIsOpen} = props;

    return (
        <div onClick={() => {setSelected(name); setIsOpen(false); localStorage.setItem("selected", name)}} className='cursor-pointer w-[220px] flex flex-row items-center gap-[20px]'>
            <img src={icon} alt="icon"/>
            <h1 className={localStorage.getItem("selected") === name ? 'font-["Montserrat"] text-white text-[18px] font-bold' : 'font-["Montserrat"] text-white text-[18px]'}>{name}</h1>
        </div>
    )
}

export default SidebarItem