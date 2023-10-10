import React, { useState } from 'react'
import { VscChromeClose } from "react-icons/vsc";
import Input from './Input';
import Button from './Button';
import Mail from '../assets/mail.svg'
import Youtube from '../assets/youtube.svg'
import Instagram from '../assets/instagram.svg'
import Whatsapp from '../assets/whatsapp.png'

const InputModal = (props) => {
    const {
        setInputModalOpen, setInsta, setMail, setYoutube, setPhone, setName, setUserData,
        name, phone, mail, youtube, insta
    } = props

    const [selected, setSelected] = useState("Basic");

    const handleSave = () => {
        const temp = [
            {
                image: Whatsapp,
                value: phone,
                color: "#E9F9EB"
            },
            {
                image: Instagram,
                value: insta,
                color: "#FFE9EC"
            },
            {
                image: Mail,
                value: mail,
                color: "#EBE6F9"
            },
            {
                image: Youtube,
                value: youtube,
                color: "#FFE9E9"
            },
        ]

        setUserData(temp);
        setInputModalOpen(false);
    }

    function handleNext (){
        console.log(name==="", phone==="", mail==="");
        if (selected === "Basic" & name !== "" & phone !== "" & mail !== "") {
            console.log("1")
            setSelected("Contact");
        }
        else if(selected === "Basic" & (name === "" | phone === "" | mail === "")){
            console.log("2")
            alert("Enter Required Fields");
        }
        else {
            console.log("3")
            handleSave();
        }
    }

    return (
        <div className='fixed top-[0px] left-[0px] bg-black/10 w-[100%] h-[100%] flex justify-center items-center'>
            <div className='w-[553px] m-[10px] bg-white rounded-[16px] flex flex-col'>
                <div className='flex flex-row justify-between items-center h-[48px] w-full px-[24px] border-[#f2f2f2] border-b-[1px]'>
                    <h1 className='font-["Figtree"] text-[#231F20] text-[20px] font-semibold' >Add New Profile</h1>
                    <VscChromeClose onClick={() => setInputModalOpen(false)} className='cursor-pointer text-[#999CA0] w-[24px] h-[24px]' />
                </div>
                <div className='p-[24px]'>
                    <div className='flex flex-row w-[100%]'>
                        <div className='flex flex-col justify-center items-center w-[50%]'>
                            <h1 className='font-["Figtree"] text-[#231F20] text-[16px] font-semibold'>Basic</h1>
                            <div className='w-[90%] mt-[12px] h-[4px] bg-[#3f84f8] rounded-[30px]' />
                        </div>
                        <div className='flex flex-col justify-center items-center  w-[50%]'>
                            <h1 className='font-["Figtree"] text-[#231F20] text-[16px] font-semibold'>Contact</h1>
                            <div className='w-[90%] mt-[12px] h-[4px] bg-[#3f84f8] rounded-[30px]' />
                        </div>
                    </div>
                    {selected === "Basic" ? <div className='mt-[23px] flex flex-col gap-[24px]'>
                        <Input value={name} onChange={(e) => { setName(e.target.value) }} name={"Enter Name"} required={true} placeholder={"Eg. John doe"} />
                        <Input  value={mail} onChange={(e) => { setMail(e.target.value) }} name={"Enter Email"} required={true} placeholder={"Eg. John@xyz.com"} />
                        <Input  value={phone} onChange={(e) => { setPhone(e.target.value) }} name={"Enter Phone"} required={true} placeholder={"Eg. 8997865765"} />
                    </div>
                        :
                        <div className='mt-[23px] flex flex-col gap-[24px]'>
                            <Input  value={insta} onChange={(e) => { setInsta(e.target.value) }} name={"Instagram Link"} required={false} placeholder={"Eg. ..instagram.com/username"} />
                            <Input  value={youtube} onChange={(e) => { setYoutube(e.target.value) }} name={"Youtube Link"} required={false} placeholder={"Eg. ..youtebe/username"} />
                            {/* <Input name={"Enter Phone"} placeholder={"Eg. 8997865765"} /> */}
                        </div>}
                </div>
                <div className='p-[24px] border-[#f2f2f2] border-t-[1px] flex justify-end gap-[8px]'>
                    {selected !== "Basic" && <Button onClick={() => setSelected("Basic")} title={"Back"} classname="bg-white text-[#231F20] border-[#999ca0] border-[1px]" />}
                    <Button onClick={() => { handleNext() }} title={selected === "Contact" ? "Save" : "Next"} classname="bg-[#3E84F8] text-[#fff]" />
                </div>
            </div>
        </div>
    )
}

export default InputModal