import React from 'react'
import silentTalklogo1 from '../assets/images/SilentTalk logo 1.png'
import { TbMail } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router';

const Login = () => {
  return (
    <>
    <section id='login' className='w-full h-screen bg-[#000000]'>
        <div className="container w-full h-screen flex justify-center items-center">
            <div className='w-full h-[90%] flex justify-around items-center rounded-4xl bg-[#ececec]'>
                <div>
                    <img src={silentTalklogo1} alt="Logo" />
                </div>
                <div className='flex-col justify-items-center p-[40px] rounded-[16px] bg-[#eeeeee] shadow-2xl'>
                    <div className='form_header text-center'>
                        <h1 className='font-poppins font-bold text-[24px] text-primary'>Login</h1>
                        <h2 className='font-poppins font-normal text-[14px] text-[#7E7E8F]'>You are welcome!</h2>
                    </div>
                <form action="">
                    <div className='w-full flex-col justify-center pt-[20px] '>
                        <h2 className='font-poppins font-normal text-[14px] text-primary mb-[8px]'>E-mail</h2>
                        <div className='first_name w-[360px] h-[48px] font-poppins font-normal text-[14px] border border-[#E8EDF2] rounded-[15px] px-4 
                        flex justify-between items-center'>
                            <input type="text" placeholder='Email' className='w-full outline-none' />
                            <div></div>
                        </div>
                    </div>
                    <div className='w-full flex-col justify-center pt-[20px]'>
                        <h2 className='font-poppins font-normal text-[14px] text-primary mb-[8px]'>Password</h2>
                        <div className='first_name w-[360px] h-[48px] font-poppins font-normal text-[14px] border border-[#E8EDF2] rounded-[15px] px-4 
                        flex justify-between items-center'>
                            <input type="text" placeholder='Password' className='w-full outline-none'/>
                            <div></div>
                        </div>
                    </div>
                    {/* --------Sign Up Button--------- */}
                    <button className='mt-[20px] w-[360px] h-[52px] font-poppins font-semibold text-[16px] text-[#FFFFFF]  bg-[#7364DB] rounded-[8px] hover:bg-[#5C529F]'>Login</button>
                </form>
                <div className='w-full flex justify-center pt-[20px]'>
                    <h2 className='font-poppins font-normal text-[14px] text[#7A828A]'>Not Registered <Link className='text-[#7364DB] pl-1 ' to={'/register'}>Create an Account</Link></h2>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login