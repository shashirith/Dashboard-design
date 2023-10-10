import React from 'react'

const Input = (props) => {
    const {name, placeholder, required} = props;
    return (
        <div>
            <div className='w-fit relative flex flex-row justify-center items-center'>
                <h1 className='font-["Figtree"] text-[#231F20] text-[16px] font-normal leading-[24px]'>{name} </h1>
                <h1 className='text-[#999CA0] ml-[10px] font-["Figtree"] text-[16px] font-normal leading-[24px]'>(Optional)</h1> 
                {required && <p className='absolute top-[0px] right-[-10px] font-["Figtree"] text-[#231F20] text-[16px] font-normal leading-[24px]'>*</p>}
            </div>
            <div className='mt-[8px] py-[12px] px-[16px] border-[#f2f2f2] border-[1px] rounded-[8px] flex justify-center items-center'>
                <input {...props} placeholder={placeholder}className='w-[100%] text-[#999CA0] font-["Figtree"] text-[16px] font-normal outline-none ' />
            </div>
        </div>
    )
}

export default Input