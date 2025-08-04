import React, { useState } from 'react'
import { RiUserLine } from "react-icons/ri";
import { RiUserUnfollowLine } from "react-icons/ri";
import { RiUserFollowLine } from "react-icons/ri";
import { TbMail } from "react-icons/tb";
import { TbMailExclamation } from "react-icons/tb";
import { TbMailCheck } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { FiPhoneMissed } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router';
import googleLogo from '../assets/images/google_logo.png'
import facebookLogo from '../assets/images/fb_logo.png'



const Registration = () => {
    // ----------------Input field--------------

    const [showPass , setshowPass] = useState( false )
    const [showConPass , setshowConPass] = useState( false )

    const [userName , setUserName] = useState('')
    const [userNameError , setUserNameError] = useState('[#9A9AAF]')

    const [userEmail , setUserEmail] = useState('')
    const [userEmailError , setUserEmailError] = useState('[#9A9AAF]')

    const [userPhone , setUserPhone] = useState('')
    const [userPhoneError , setUserPhoneError] = useState('[#9A9AAF]')

    const [userPassword , setUserPassword] = useState('')
    const [userPasswordError , setUserPasswordError] = useState('[#9A9AAF]')

    const [userConPassword , setUserConPassword] = useState('')
    const [userConPasswordError , setUserConPasswordError] = useState('[#9A9AAF]')
    const handelSubmit=(e)=>{
        e.preventDefault()
        console.log(userName)
        console.log(userEmail)
        console.log(userPhone)
        console.log(userPassword)
        console.log(userConPassword)
        if(!userName) return        setUserNameError       ('[#FFFF00]')
        if(!userEmail) return       setUserEmailError      ('[#FFFF00]')
        if(!userPhone) return       setUserPhoneError      ('[#FFFF00]')
        if(!userPassword) return    setUserPasswordError   ('[#FFFF00]')
        if(!userConPassword) return setUserConPasswordError('[#FFFF00]')
    }

  return (
    <>
    <section id='registration' className='w-full h-screen bg-[#d1d1d1] pt-10'>
        <div className="container flex justify-center ">
            <div className="full_form p-[40px] rounded-[16px] bg-[#FFFFFF] flex-col justify-items-center ">
                <div className="form_header text-center ">
                    <h1 className=' font-poppins font-bold text-[24px] text-primary '>Create an account</h1>
                    <h2 className=' font-poppins font-normal text-[14px] text-[#7E7E8F] '>You are welcome!</h2>
                </div>
                <form onSubmit={handelSubmit} action="">
                    {/* -----------Name------------ */}
                    <div className='w-full flex-col justify-center pt-[30px]'>
                        <h2 className=' font-poppins font-normal text-[14px] text-primary mb-[8px] '>Your name</h2>
                        <div className='first_name w-[360px] h-[48px] font-poppins font-normal text-[14px] border border-[#E8EDF2] rounded-[15px] px-4 
                        flex justify-between items-center '>
                        <input onChange={(e)=>{setUserName(e.target.value), setUserNameError('[#9A9AAF]')}} className=' w-full outline-none' type="text" placeholder="User name" />
                            <div className={`text-[18px] text-${userNameError}`}><RiUserLine/></div>
                        </div>
                    </div>
                    {/* -----------Email------------ */}
                    <div className='w-full flex-col justify-center pt-[20px] '>
                        <h2 className=' font-poppins font-normal text-[14px] text-primary mb-[8px] '>E-mail</h2>
                        <div className='first_name w-[360px] h-[48px] font-poppins font-normal text-[14px] border border-[#E8EDF2] rounded-[15px] px-4 
                        flex justify-between items-center '>
                            <input onChange={(e)=>{setUserEmail(e.target.value), setUserEmailError('[#9A9AAF]')}} className=' w-full outline-none' type='email' placeholder='Email' />
                            <div className={` text-[18px] text-${userEmailError}`}><TbMail/></div>
                        </div>
                    </div>
                    {/* -----------Phone------------ */}
                    <div className='w-full flex-col justify-center pt-[20px] '>
                        <h2 className=' font-poppins font-normal text-[14px] text-primary mb-[8px] '>Phone</h2>
                        <div className='first_name w-[360px] h-[48px] font-poppins font-normal text-[14px] border border-[#E8EDF2] rounded-[15px] px-4 
                        flex justify-between items-center '>
                            <input onChange={(e)=>{setUserPhone(e.target.value),setUserPhoneError('[#9A9AAF]')}} className=' w-full outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type="number" placeholder='(+880)' />
                            <div className={`text-[18px] text-${userPhoneError}`}><FiPhone/></div>
                        </div>
                    </div>
                    {/* -----------Password------------ */}
                    <div className='w-full flex-col justify-center pt-[20px] '>
                        <h2 className=' font-poppins font-normal text-[14px] text-primary mb-[8px] '>Password</h2>
                        <div className='first_name w-[360px] h-[48px] font-poppins font-normal text-[14px] border border-[#E8EDF2] rounded-[15px] px-4 
                        flex justify-between items-center '>
                            <input onChange={(e)=>{setUserPassword(e.target.value), setUserPasswordError('[#9A9AAF]')}} className=' w-full outline-none' type={showPass? "text":"password"} placeholder='Password' />
                            <div className={`text-[18px] text-${userPasswordError}`}>
                                {showPass?
                                <FaRegEyeSlash onClick={()=>setshowPass(!showPass)}/>
                                :
                                <FaRegEye onClick={()=>setshowPass(!showPass)}/>
                                }
                            </div>
                        </div>
                    </div>
                    {/* -----------Confirm Password------------ */}
                    <div className='w-full flex-col justify-center pt-[20px] '>
                        <h2 className=' font-poppins font-normal text-[14px] text-primary mb-[8px] '>Confirm password</h2>
                        <div className='first_name w-[360px] h-[48px] font-poppins font-normal text-[14px] border border-[#E8EDF2] rounded-[15px] px-4 
                        flex justify-between items-center '>
                            <input onChange={(e)=>{setUserConPassword(e.target.value), setUserConPasswordError('[#9A9AAF]')}} className=' w-full outline-none' type={showConPass? "text":"password"} placeholder='Confirm password' />
                            <div className={`text-[18px] text-${userConPasswordError}`}>
                                {showConPass?
                                <FaRegEyeSlash onClick={()=>setshowConPass(!showConPass)}/>
                                :
                                <FaRegEye onClick={()=>setshowConPass(!showConPass)}/>
                                }
                            </div>
                        </div>
                    </div>
                    {/* ----------Sign Up Button-------------- */}
                    <button className='mt-[20px] w-[360px] h-[52px] font-poppins font-semibold text-[16px] text-[#FFFFFF]  bg-[#7364DB] rounded-[8px] hover:bg-[#5C529F] '>
                        Register
                    </button> 
                    {/* ------------Bottom Part------------ */}
                    <div className='w-full flex items-center gap-2 pt-[20px] '>
                        <input className='w-[18px] h-[18px] ' type="checkbox" />
                        <p className=' font-poppins font-normal text-[12px] text-iconcolor '>I agree with terms & conditions</p>
                    </div>
                    {/* ---------Social Link---------- */}
                    <div className='w-full flex justify-between pt-[20px] '>
                        <div className=' w-[170px] h-[50px] flex justify-center items-center border border-[#E8EDF2] rounded-[8px] '>
                            <Link className=' font-poppins font-normal text-[12px] text-primary flex items-center gap-2 '>
                            <div className='w-[20px] h-[20px] '>
                            <img className=' w-full bg-cover ' src={googleLogo} alt="google logo" />
                            </div> Google account</Link>
                        </div>
                        <div className=' w-[170px] h-[50px] flex justify-center items-center border border-[#E8EDF2] rounded-[8px] '>
                        <Link className=' font-poppins font-normal text-[12px] text-primary flex items-center gap-2 '>
                            <div className='w-[20px] h-[20px] '>
                            <img className=' w-full bg-cover ' src={facebookLogo} alt="google logo" />
                            </div> Google account</Link>
                        </div>
                    </div>
                    {/* --------Have Account-------- */}
                    <div className='pt-[20px]'>
                        <h2 className=' font-poppins font-normal text-[14px] text[#7A828A] '>Already have an account?<Link className=' text-[#7364DB] pl-1 ' to={'#'}>Sign in</Link></h2>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default Registration