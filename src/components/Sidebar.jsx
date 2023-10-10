import React, { useState } from 'react'
import SidebarItem from './SidebarItem'
import DashboardIcon from '../assets/dashboard_icon.svg'
import TransactionIcon from '../assets/transaction_icon.svg'
import ScheduleIcon from "../assets/schedule_icon.svg"
import UserIcon from "../assets/user_icon.svg"
import SettingIcon from "../assets/setting_icon.svg"
import useViewport from '../viewport/useViewport'

const SidebarList = [
  {
    icon: DashboardIcon,
    name: "Dashboard"
  },
  {
    icon: TransactionIcon,
    name: "Transactions"
  },
  {
    icon: ScheduleIcon,
    name: "Schedules"
  },
  {
    icon: UserIcon,
    name: "User"
  },
  {
    icon: SettingIcon,
    name: "Settings"
  }
]


const Sidebar = (props) => {
  const [selected, setSelected] = useState("Dashboard");
  const { width } = useViewport();
  const {isOpen, setIsOpen} = props
  return (
    <div className={
      (width > 1350) ?
        'h-full w-[280px] bg-gradient-to-b from-[#4285F4] to-[#3C83F9] rounded-[20px] p-[50px]'
        :
        'absolute z-20 left-[0px] top-[0px] h-full w-[280px] bg-gradient-to-b from-[#4285F4] to-[#3C83F9] rounded-[20px] p-[50px]'
    }>
      <h1 className='text-white font-["Montserrat"] text-[36px] font-bold mt-[10px]' >Board.</h1>
      <div className='mt-[60px] w-full flex flex-wrap gap-[40px]'>
        {
          SidebarList.map((item, index) => {
            return (
              <SidebarItem setIsOpen={setIsOpen} selected={selected} setSelected={setSelected} name={item.name} icon={item.icon} key={index} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Sidebar