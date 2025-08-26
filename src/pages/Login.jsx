import React, { useState } from 'react'
import silentTalklogo1 from '../assets/images/SilentTalk logo 1.png'
import { TbMail } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { Slide, toast, Zoom } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userInfo } from '../slices/userInfoSlice';

const Login = () => {
    // ---------------Input field------------------
    const [formData , setFormData] = useState ({email:'', emailError:'', password:'', passwordError:''})
    const [ loginError , setLoginError] = useState('')

    const dispatch = useDispatch ()


    const auth = getAuth();
    const navigate = useNavigate()
    const handelLogin = (e)=>{
        e.preventDefault();
        
        if(!formData.email){
            setFormData(prev => ({...prev, emailError:'Enter your email'}))
        }
        if(!formData.password){
            setFormData(prev => ({...prev, passwordError:'Enter your password'}))
        }

        // --------Email and password valitdation------------

        signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            dispatch(userInfo(user))

            //----------Login toast----------
            if(user.emailVerified == true){
                localStorage.setItem('currentUserInfo' , JSON.stringify(user))
                dispatch(userInfo(user))

                toast.success('Login Successful', {
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
                    navigate('/')
            }
            // ------verified your email toast----
            else{
            toast.info('Please verify your email OTP Link', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom,
            });
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // --------Error toast----------
            if(errorCode=='auth/invalid-credential'){
            return setLoginError('Incorrect username or password !')
            }

            console.log(errorCode)
        });

    }

  return (
    <>
    <section id='login' className='w-full h-screen bg-[#000000]'>
        <div className="container w-full h-screen flex justify-center items-center">
            <div className='w-full h-[90%] flex justify-around items-center rounded-4xl bg-[#ececec]'>
                <div>
                    <img src={silentTalklogo1} alt="Logo" />
                </div>
                <div className='flex-col justify-items-center p-[40px] rounded-[16px] bg-[#FFFFFF] shadow-2xl'>
                    <div className='form_header text-center'>
                        <h1 className='font-poppins font-bold text-[24px] text-primary'>User Login</h1>
    {/* -------------------Login Erorr show-------------------- */}
                        <h2 className='font-poppins font-normal text-[14px] text-[#FF0000]'>{loginError}</h2>
                    </div>
                <form onSubmit={handelLogin} >
                    {/* -------------Email---------- */}
                    <div className='w-full flex-col justify-center pt-[20px] '>
                        <h2 className='font-poppins font-normal text-[14px] text-primary mb-[8px]'>E-mail</h2>
                        <p className=' font-poppins font-light text-[12px] text-[#FF0000] pb-1 '>{formData.emailError} </p>
                        <div className='userEmail w-[360px] h-[48px] font-poppins font-normal text-[14px] border border-[#E8EDF2] rounded-[15px] px-4 
                        flex justify-between items-center'>
                            <input 
                            onChange={(e)=>{setFormData((prev)=>({...prev,email:e.target.value,emailError:''}));setLoginError('')}} 
                            type="email" placeholder='Enater your E-mail' className='w-full outline-none' />
                            <div className='text-[18px] text-iconcolor'><TbMail/></div>
                        </div>
                    </div>
                    {/* ------------Password---------- */}
                    <div className='w-full flex-col justify-center pt-[20px]'>
                        <h2 className='font-poppins font-normal text-[14px] text-primary mb-[8px]'>Password</h2>
                        <p className=' font-poppins font-light text-[12px] text-[#FF0000] pb-1 '>{formData.passwordError}</p>
                        <div className='first_name w-[360px] h-[48px] font-poppins font-normal text-[14px] border border-[#E8EDF2] rounded-[15px] px-4 
                        flex justify-between items-center'>
                            <input
                            onChange={(e)=>{setFormData((prev)=>({...prev,password:e.target.value,passwordError:''}));setLoginError('')}}
                             type='password' placeholder='Password' className='w-full outline-none'/>
                            <div className='text-[18px] text-iconcolor'>
                            </div>
                        </div>
                    </div>
                    <p className='flex justify-end font-poppins font-light text-[13px] text-primary pt-2 pr-2 '><Link to={'#'}>Forgot password ?</Link></p>
                    {/* --------Sign Up Button--------- */}
                    <button className='mt-[20px] w-[360px] h-[52px] font-poppins font-semibold text-[16px] text-[#FFFFFF]  bg-[#7364DB] rounded-[8px] hover:bg-[#5C529F]'>Login</button>
                </form>
                <div className='w-full flex justify-center pt-[20px]'>
                    <h2 className='font-poppins font-normal text-[14px] text[#7A828A]'>Not Registered ?<Link className='text-[#7364DB] pl-1 ' to={'/register'}>Create an Account</Link></h2>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login