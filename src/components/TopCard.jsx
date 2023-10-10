import React from 'react'
import Paper from './Paper'
import TotalRevenueIcon from '../assets/icons/TotalRevenueIcon'

const TopCard = (props) => {

    const {icon, name, value, percentageChange, color} = props;

    return (
        <Paper classnames={"drop-shadow-3xl vsm:w-[90vw] sm:w-[237px] h-[120px] py-[18.5px] pl-[27px] pr-[21px] flex flex-col justify-between"}>
            <div className={`w-[32px] h-[32px] rounded-full flex justify-center align-middle items-center`} style={{backgroundColor: color}}>
               {icon}
            </div>
            <div className='' >
                <h1 className='font-["Lato"] text-[11px]'>
                    {name}
                </h1>
                <div className='flex flex-row justify-between items-center mt-[2px]'>
                    <h1 className='font-["Open Sans] text-[21px] font-bold leading-[21px]'>
                        {value}
                    </h1>
                    <div className='flex flex-row items-center justify-center rounded-[34px] w-[47px] h-[24px] px-[8px] py-[4px] bg-[#e9f9eb]'>
                        <h1 className='flex flex-row  font-semibold text-[10px] font-["Figtree"] text-[#4AD15F]'>
                            {percentageChange}
                        </h1>
                    </div>
                </div>
            </div>
        </Paper>
    )
}

export default TopCard