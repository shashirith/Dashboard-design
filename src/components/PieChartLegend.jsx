import React from 'react'

const PieChartLegend = (props) => {

    const {name, color, percent} = props;

    return (
        <div className='flex flex-row h-[35px] gap-[10px]'>
            <div className={` w-[11px] h-[11px] rounded-full mt-[2px]`} style={{ backgroundColor: color }}/>
            <div>
                <h1 className='font-["Montserrat"] text-[14px] font-bold leading-[14px]'>{name}</h1>
                <h1 className='text-[#858585] font-["Lato"] text-[12px] font-normal mt-[5px]'>{percent}</h1>
            </div>
        </div>
    )
}

export default PieChartLegend