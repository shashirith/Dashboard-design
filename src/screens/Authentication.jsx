import React from 'react'
import './trapezium.css'
import SignIn from '../components/SignIn'
import CompanyDisplay from '../components/CompanyDisplay'

const Authentication = (props) => {
    const { setUser } = props;
    return (
        <div className='h-[100vh] w-[100vw] bg-[#F8FAFF] flex flex-row justify-center items-center'>
            <CompanyDisplay />
            <div className='w800px:w-[50%] w800px:px-[0px] vsm:px-[10px] vsm:w-full flex justify-center items-center'>
                <SignIn setUser={setUser} />
            </div>
        </div>
    )
}

export default Authentication