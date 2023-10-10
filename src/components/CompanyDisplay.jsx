import React from 'react'
import github from '../assets/github.svg'
import discord from '../assets/discord.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'


const CompanyDisplay = () => {
    return (
        <div className='vsm:hidden w1080px:flex flex-col justify-between 
            xl:pt-[59.81px] xl:pb-[67px]  xl:pl-[72.99px] 
            md:pl-[50px] md:pb-[30px] md:pt-[30px]
            bg-gradient-to-b from-[#4285F4] to-[#3C83F9] w-[50%] h-full trapezium' >
            <h1 className='font-["Poppins"] text-[24px] font-extrabold text-white'>LOGO</h1>
            <h1 className='xl:ml-[100px] font-["Montserrat"] text-[72px] font-extrabold text-white'>Board.</h1>
            <div className='flex flex-row w-fit gap-[38.33px] 
                md: ml-[20px]
                xl:ml-[70px]'>
                <img src={github} alt="github" />
                <img src={twitter} alt="twitter" />
                <img src={linkedin} alt="linkedin" />
                <img src={discord} alt="discord" />
            </div>
        </div>
    )
}

export default CompanyDisplay