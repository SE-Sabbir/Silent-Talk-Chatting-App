import React from 'react'
import { FaUserPlus } from "react-icons/fa6";
import { FaUserSlash } from "react-icons/fa6";
import { PiFolderUserBold } from "react-icons/pi";
import { LuNotebookPen } from "react-icons/lu";
import { MdCalculate } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentUserInfo = useSelector((state)=> state.currentUserInfo.value )
    
    const logOut = ()=>{
      localStorage.removeItem('currentUserInfo')
      dispatch(userInfo(null))
  
      navigate('/login')
    }
  
    console.log(currentUserInfo)

  return (
    <>
    <div>
        <div className="w-full h-screen flex bg-[#3e9cf3]">
        <div className="w-full py-5 flex flex-col items-center justify-between">
          <div className="flex flex-col items-center text-center">
            <Link className=" w-12 h-12 rounded-full overflow-hidden bg-white " to={'#'}> <img src={currentUserInfo?.photoURL} alt="profile photo" /> </Link>
            <h2 className="font-poppins font-light text-[16px] text-[#FFFFFF] leading-5 pt-3 ">{currentUserInfo?.displayName}</h2>
          </div>
          <div className=" w-full items-center flex flex-col justify-around pt-5 gap-5 border-t border-[#bdb8b8] ">
            <Link className=" text-[30px] text-[#FFFFFF]" to={'/userlist'}><FaUserPlus/></Link>
            <Link className=" text-[30px] text-[#FFFFFF]" to={'#'}><FaUserSlash/></Link>
            <Link className=" text-[30px] text-[#FFFFFF]" to={'#'}><PiFolderUserBold/></Link>
          </div>
          <div className=" w-full items-center flex flex-col justify-around pt-5 gap-5 border-t border-[#bdb8b8] ">
            <Link className=" text-[28px] text-[#FFFFFF]" to={'#'}><LuNotebookPen/></Link>
            <Link className=" text-[30px] text-[#FFFFFF]" to={'#'}><MdCalculate/></Link>
            <Link className=" text-[30px] text-[#FFFFFF]" to={'#'}><IoSettingsSharp/></Link>
            <button onClick={logOut} className=" w-full py-3 px-5 font-poppins font-normal text-[#FFFFFF] bg-[#f83131] active:bg-[#8d0909] ">Logout</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar