import React, { useState, useMemo } from 'react'
import TopCard from '../components/TopCard'
import TotalRevenueIcon from '../assets/icons/TotalRevenueIcon'
import TotalTransactionsIcon from '../assets/icons/TotalTransactionsIcon'
import TotalLikesIcon from '../assets/icons/TotalLikesIcon'
import TotalUsersIcon from '../assets/icons/TotalUsersIcon'
import ChartComponent from '../components/ChartComponent'
import Paper from '../components/Paper'
import PieChart from '../components/PieChart'
import AddIcon from "../assets/add_profile_icon.svg"
import InputModal from '../components/InputModal'
import useViewport from '../viewport/useViewport'

import UserInfoTitle from '../components/UserInfoTitle'

const TopCardData = [
  {
    icon: <TotalRevenueIcon />,
    name: "Total Revenue",
    value: "$ 2,129,430",
    percentageChange: "+2.5",
    color: "#7FCD93"
  },
  {
    icon: <TotalTransactionsIcon />,
    name: "Total Transaction",
    value: "1,520",
    percentageChange: "+1.7",
    color: "#DEBF85"
  },
  {
    icon: <TotalLikesIcon />,
    name: "Total Likes",
    value: "9,721",
    percentageChange: "+1.4",
    color: "#ECA4A4"
  },
  {
    icon: <TotalUsersIcon />,
    name: "Total Users",
    value: "9,721",
    percentageChange: "+4.2",
    color: "#A9B0E5"
  },
]

const Dashboard = (props) => {

  const [inputModalOpen, setInputModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [insta, setInsta] = useState("");
  const [youtube, setYoutube] = useState("");
  const [userData, setUserData] = useState([])
  const {data} = props
  const {width} = useViewport()

  const MemoizedChart = useMemo(() => {
    return <ChartComponent data={data} />
  }, [width, data])

  return (
    <div>
      <div className='
      vsm:grid vsm:grid-cols-1 vsm:gap-[20px]  
      sm:grid sm:grid-cols-2 sm:gap-[20px]  
      w1080px:flex w1080px:flex-row w1080px:justify-between mt-[36.5px]
      flex justify-items-center
      '>
        {
          TopCardData.map((item, index) => {
            return (
              <TopCard key={index} {...item} />
            )
          })
        }
      </div>
      {MemoizedChart}
      <div className='vsm:justify-center vsm:flex vsm:flex-col items-center vsm:gap-[20px] mt-[40px] sm:justify-center sm:flex sm:flex-wrap sm:flex-row w1080px:justify-between'>
        <Paper classnames="vsm:w-[90vw] sm:w-[490px] h-[256px] drop-shadow-4xl vsm:p-[10px] vsm:pt-[20px] sm:py-[30px] sm:px-[40px]">
          <div className='flex flex-row justify-between items-center'>
            <h1 className='font-["Montserrat"] text-[18px] font-bold text-[#000]'>Top Product</h1>
            <h1 className='font-["Montserrat"] text-[12px] font-normal text-[#858585]' >May - June 2021</h1>
          </div>
          <PieChart />
        </Paper>
        <Paper classnames={`vsm:w-[90vw] sm:w-[490px] min-h-[256px] ${userData.length === 0 ? "justify-center items-center" : ""} drop-shadow-4xl flex flex-col py-[50px] px-[40px]`}>
          {
            userData.length === 0 ?
              <button onClick={() => setInputModalOpen(true)}>
                <div className='w-[77px] h-[77px] bg-[#f5f5f5] rounded-full flex justify-center items-center'>
                  <img src={AddIcon} alt="add profile" />
                </div>
                <h1 className='font-["figtree] text-[16px] font-semibold text-[#858585] mt-[16px]'>
                  Add Profile
                </h1>
              </button>
              :
              <>
                <div className='w-fit h-fit'>
                  <h1 className='font-["Figtree"] text-[#231F20] text-[24px] font-bold' >John Doe</h1>
                </div>
                <div className='flex flex-row flex-wrap justify-start mt-[30px] gap-x-[96px] gap-y-[26px]'>
                  {
                    userData.map((item, index) => {
                      if (item.value === "") {
                        return null
                      }
                      else {
                        return (
                          <UserInfoTitle key={index} image={item.image} value={item.value} color={item.color} />
                        )
                      }

                    })
                  }
                </div>
              </>}
        </Paper>
      </div>
      {
        inputModalOpen && <InputModal
          setUserData={setUserData}
          name={name} mail={mail} phone={phone} youtube={youtube} insta={insta}
          setName={setName}
          setInsta={setInsta}
          setMail={setMail}
          setYoutube={setYoutube}
          setPhone={setPhone}
          setInputModalOpen={setInputModalOpen}
        />
      }
    </div>
  )
}

export default Dashboard