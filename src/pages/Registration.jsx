import React, { useState } from 'react'
import silentTalklogo1 from '../assets/images/SilentTalk logo 1.png'
import silentTalklogo2 from '../assets/images/SilentTalk logo 2.png'
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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Slide, toast, Zoom } from 'react-toastify';
import { PropagateLoader } from 'react-spinners';
import { sendEmailVerification } from 'firebase/auth/web-extension';



const Registration = () => {
    // ----------------Input field--------------

    const [showPass , setshowPass] = useState( false )
    const [showConPass , setshowConPass] = useState( false )

    const [userName , setUserName] = useState('')
    const [userNameError , setUserNameError] = useState('')

    const [userEmail , setUserEmail] = useState('')
    const [userEmailError , setUserEmailError] = useState('')

    // const [userPhone , setUserPhone] = useState('')
    // const [userPhoneError , setUserPhoneError] = useState('[#9A9AAF]')

    const [userPassword , setUserPassword] = useState('')
    const [userPasswordError , setUserPasswordError] = useState('')

    const [userConPassword , setUserConPassword] = useState('')
    const [userConPasswordError , setUserConPasswordError] = useState('')
    const [passwordMatch , setPasswordMatch] = useState ('')

    const [showLoading , setShowLoading] = useState(false)


    const auth = getAuth();

    const handelSubmit=(e)=>{
        e.preventDefault()
        // ------------ Input validation-----------------
        if(!userName) return        setUserNameError       ('! Please Enter Your Name')
        if(!userEmail) return       setUserEmailError      ('! Please Enter Your Email')
        // if(!userPhone) return       setUserPhoneError      ('')
        if(!userPassword) return    setUserPasswordError   ('! Please Set a Password')
        if(!userConPassword) return setUserConPasswordError('! Please Set a Confirm Password')
        if(userPassword != userConPassword) return setPasswordMatch ('! Password & Confirm password not match')

        setShowLoading(true)

        // -----------Firebase Auth part-----------------
        
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
        const user = userCredential.user;

        setShowLoading(false)

        toast.success('Registration Successful', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });
        // --------Send Email otp----------
        sendEmailVerification(auth.currentUser)
        .then(() => {
            // ------Send Otp toast----
            toast.info('Send a Confirmation Otp on your Email', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom,
            });
            console.log('Otp Send Successful')
        
        });

        console.log(userCredential)
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode == 'auth/email-already-in-use'){
            setShowLoading(false)

            // --------Error toast----------
            toast.error('This email is already used', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
                });
        }

        console.log(error)
        });
        



    }

  return (
    <>
    <section id='registration' className='w-full h-screen bg-[#000000] '>
        <div className="container w-full h-screen flex justify-center items-center ">        
            <div className=' w-full h-[90%] flex justify-around items-center rounded-4xl bg-[#ececec]'>
                  <div className='silentTalk_logo'>
                <img src={silentTalklogo1} alt="silent Talk logo" />
            </div>
            <div className="full_form flex-col justify-items-center p-[40px] rounded-[16px] bg-[#FFFFFF] shadow-2xl ">
                <div className="form_header text-center ">
                    <h1 className=' font-poppins font-bold text-[24px] text-primary '>Create an account</h1>
                    <h2 className=' font-poppins font-normal text-[14px] text-[#7E7E8F] '>You are welcome!</h2>
                </div>
                <form onSubmit={handelSubmit}>
                    {/* -----------Name------------ */}
                    <div className='w-full flex-col justify-center pt-[30px]'>
                        <h2 className=' font-poppins font-normal text-[14px] text-primary mb-[8px] '>Your name</h2>
                        <p className=' font-poppins font-light text-[12px] text-[#FF0000] pb-1 '>{userNameError}</p>
                        <div className='first_name w-[360px] h-[48px] font-poppins font-normal text-[14px] border border-[#E8EDF2] rounded-[15px] px-4 
                        flex justify-between items-center '>
                        <input onChange={(e)=>{setUserName(e.target.value), setUserNameError('')}} className=' w-full outline-none' type="text" placeholder="User name" />
                            <div className='text-[18px] text-iconcolor' ><RiUserLine/></div>
                        </div>
                    </div>
                    {/* -----------Email------------ */}
                    <div className='w-full flex-col justify-center pt-[20px] '>
                        <h2 className=' font-poppins font-normal text-[14px] text-primary mb-[8px] '>E-mail</h2>
                        <p className=' font-poppins font-light text-[12px] text-[#FF0000] pb-1 '>{userEmailError}</p>
                        <div className='first_name w-[360px] h-[48px] font-poppins font-normal text-[14px] border border-[#E8EDF2] rounded-[15px] px-4 
                        flex justify-between items-center '>
                            <input onChange={(e)=>{setUserEmail(e.target.value), setUserEmailError('')}} className=' w-full outline-none' type='email' placeholder='Email' />
                            <div className='text-[18px] text-iconcolor' ><TbMail/></div>
                        </div>
                    </div>
                    {/* -----------Phone------------ */}
                    {/* <div className='w-full flex-col justify-center pt-[20px] '>
                        <h2 className=' font-poppins font-normal text-[14px] text-primary mb-[8px] '>Phone</h2>
                        <div className='first_name w-[360px] h-[48px] font-poppins font-normal text-[14px] border border-[#E8EDF2] rounded-[15px] px-4 
                        flex justify-between items-center '>
                            <input onChange={(e)=>{setUserPhone(e.target.value),setUserPhoneError('[#9A9AAF]')}} className=' w-full outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type="number" placeholder='(+880)' />
                            <div className='text-[18px] text-iconcolor' ><FiPhone/></div>
                        </div>
                    </div> */}
                    {/* -----------Password------------ */}
                    <div className='w-full flex-col justify-center pt-[20px] '>
                        <h2 className=' font-poppins font-normal text-[14px] text-primary mb-[8px] '>Password</h2>
                        <p className=' font-poppins font-light text-[12px] text-[#FF0000] pb-1 '>{userPasswordError}</p>
                        <div className='first_name w-[360px] h-[48px] font-poppins font-normal text-[14px] border border-[#E8EDF2] rounded-[15px] px-4 
                        flex justify-between items-center '>
                            <input onChange={(e)=>{setUserPassword(e.target.value), setUserPasswordError('')}} className=' w-full outline-none' type={showPass? "text":"password"} placeholder='Password' />
                            <div className='text-[18px] text-iconcolor' >
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
                        <p className=' font-poppins font-light text-[12px] text-[#FF0000] pb-1 '>{userConPasswordError} , {passwordMatch}</p>
                        <div className='first_name w-[360px] h-[48px] font-poppins font-normal text-[14px] border border-[#E8EDF2] rounded-[15px] px-4 
                        flex justify-between items-center '>
                            <input onChange={(e)=>{setUserConPassword(e.target.value), setUserConPasswordError(''), setPasswordMatch ('')}} className=' w-full outline-none' type={showConPass? "text":"password"} placeholder='Confirm password' />
                            <div className='text-[18px] text-iconcolor' >
                                {showConPass?
                                <FaRegEyeSlash onClick={()=>setshowConPass(!showConPass)}/>
                                :
                                <FaRegEye onClick={()=>setshowConPass(!showConPass)}/>
                                }
                            </div>
                        </div>
                    </div>
                    {/* ----------Sign Up Button-------------- */}
                    {
                        showLoading?

                    <button className='mt-[20px] w-[360px] h-[52px] flex justify-center items-center pb-3  bg-[#7364DB] rounded-[8px] hover:bg-[#5C529F] '>
                        <PropagateLoader color={'#FFF'} />
                    </button> 
                        :
                    <button className='mt-[20px] w-[360px] h-[52px] font-poppins font-semibold text-[16px] text-[#FFFFFF]  bg-[#7364DB] rounded-[8px] hover:bg-[#5C529F] '>
                        Register
                    </button> 
                    }
                    {/* ------------Bottom Part------------ */}
                    {/* <div className='w-full flex items-center gap-2 pt-[20px] '>
                        <input className='w-[18px] h-[18px] ' type="checkbox" />
                        <p className=' font-poppins font-normal text-[12px] text-iconcolor '>I agree with terms & conditions</p>
                    </div> */}
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
                </form>
                    <div className='w-full flex justify-center pt-[20px]'>
                        <h2 className=' font-poppins font-normal text-[14px] text[#7A828A] '>Already have an account?<Link className=' text-[#7364DB] pl-1 ' to={'/login'}>Sign in</Link></h2>
                    </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Registration