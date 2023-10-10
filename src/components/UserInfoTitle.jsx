import React from 'react'

const UserInfoTitle = ({image, value, color}) => {
    return (
        <div className=' flex flex-row gap-[12px] items-center w-[150px]'>
            <div style={{backgroundColor: color}} className={`w-[28px] h-[28px] flex justify-center items-center rounded-full`}>
                <img src={image} placeholder='whatsapp' className='w-[17px] h-[17px' />
            </div>
            <div>
                <h1 className='underline-offset-[2px] leading-[24px] underline font-["Figtree"] text-[14px] font-normal text-[#231f20]'>{value}</h1>
            </div>
        </div>
    )
}

export default UserInfoTitle