import React from 'react'
import Google from '../assets/google.svg'
import Apple from '../assets/apple.svg'
import { auth, provider } from '../Firebase.config'
import { signInWithPopup} from 'firebase/auth'

const SignIn = (props) => {

    const {setUser} = props;

    const handleSignInWithGoogle = async () => {
        try{
            const res = await signInWithPopup(auth, provider);
            const newUser = await res.user;
            localStorage.setItem("user", JSON.stringify(newUser));
            console.log(newUser);
            setUser(newUser);
        }
        catch(e){
            alert(e.message);
        }
    }

    return (
        <div>
            <div>
                <h1 className='leading-[48px] font-["Montserrat"] text-[36px] font-extrabold'>Sign In</h1>
                <h1 className='font-["Lato"] text-[16px] font-normal mt-[5.5px]'>Sign in to your account</h1>
            </div>
            <div className='mt-[28.53px] flex flex-row gap-[27.44px]'>
                <button onClick={() => {handleSignInWithGoogle()}} className='flex flex-row justify-center items-center gap-[11px] px-[20.86px] py-[8.5px] bg-[#fff] rounded-[10px]'>
                    <img src={Google} alt="google" />
                    <h1 className='font-["Montserrat"] text-[#858585] text-[12px] font-normal' >Sign in with Google</h1>
                </button>
                <button className='flex flex-row justify-center items-center gap-[11px] px-[20.86px] py-[8.5px] bg-[#fff] rounded-[10px]'>
                    <img src={Apple} alt="google" />
                    <h1 className='font-["Montserrat"] text-[#858585] text-[12px] font-normal' >Sign in with Apple</h1>
                </button>
            </div>
            <form className='p-[32.93px] bg-white rounded-[20px] mt-[27.44px] flex flex-col gap-[21.96px]'>
                <div>
                    <label className='font-["Lato"] text-[#000] text-[16px] font-normal'>Email Address </label>
                    <div className='mt-[10.98px] py-[11px] px-[16.5px] bg-[#f5f5f5] rounded-[10px] flex justify-center items-center'>
                        <input placeholder={"Enter Email"} className='w-[100%] text-[#000] bg-white/0 font-["Lato"] text-[16px] font-normal outline-none ' />
                    </div>
                </div>
                <div>
                    <label className='font-["Lato"] text-[#000] text-[16px] font-normal'>Password</label>
                    <div className='mt-[10.98px] py-[11px] px-[16.5px] bg-[#f5f5f5] rounded-[10px] flex justify-center items-center'>
                        <input placeholder={"Enter Password"} className='w-[100%] text-[#000] bg-white/0 font-["Lato"] text-[16px] font-normal outline-none ' />
                    </div>
                </div>
                <h1 className='text-[#346BD4] font-["Lato"] text-[16px] font-normal '>Forgot Password?</h1>
                <button onClick={() => { handleSignInWithGoogle() }} className='text-[#fff] font-["Montserrat"] text-[16px] font-bold py-[10px] px-[122px] bg-[#4285F4] rounded-[10px]'>Sign In</button>
            </form>
            <div className='flex flex-row justify-center items-center mt-[21.96px]'>
                <h1 className='text-[#858585] font-["Lato"] text-[16px] font-normal '>Don't have an account?</h1>
                <h1 className='text-[#346BD4] font-["Lato"] text-[16px] font-normal ml-[5px]'>Register Here</h1>
            </div>
        </div>
    )
}

export default SignIn