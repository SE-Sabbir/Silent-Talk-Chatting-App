import React from 'react'
import { Link } from 'react-router'
import { IoVideocam } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import ProfileImg from '../assets/images/image1.png'
import { GrAttachment } from "react-icons/gr";
import { MdOutlineAddReaction } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";




const ChatUserInbox = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className='w-full h-screen bg-[#424242] flex-col justify-items-end px-6 '>
                <div className='w-[906px] h-screen bg-[#e2e2e2]'>

                <div className='w-[906px] h-[104px] flex justify-between items-center px-5 bg-[#7364DB] rounded-2xl '>
                    <div className='flex items-center gap-3'>
                        <div className=' flex justify-center items-center w-12 h-12 rounded-full overflow-hidden bg-[#FFFFFF] '>
                            <img src={ProfileImg} alt="profile image" />
                        </div>
                        <div>
                        <h2 className=' font-poppins font-medium text-xl text-[#FFFFFF] '>Ruhul Amin</h2>
                        <p className=' font-poppins font-light text-[14px] text-[#30d173]'>online</p>
                        </div>
                    </div>
                    <div className=' flex items-center gap-6'>
                        <Link className='text-[30px] text-[#FFFFFF]' to={'#'}><IoCall/></Link>
                        <Link className='text-[35px] text-[#FFFFFF]' to={'#'}><IoVideocam/></Link>
                        <Link className='text-[30px] text-[#FFFFFF]' to={'#'}><PiDotsThreeOutlineVerticalLight/></Link>
                    </div>
                </div>
                <div className='w-[906px] h-[75%] bg-[#e9e6e6] rounded-2xl '>

                </div>
                <div className='w-[906px] h-[104px] flex justify-around items-center px-5 bg-[#FFFFFF] rounded-2xl '>
                    <div className='flex items-center gap-5'>
                        <Link className='text-[35px] ' to={'#'}><GrAttachment/></Link>
                        <Link className='text-[35px] ' to={'#'}><MdOutlineAddReaction/></Link>
                    </div>
                    <div className=' w-[80%] h-[70px] flex items-center px-5 bg-[#f5f5f5] rounded-2xl'>
                        <input className='font-poppins font-normal text-2xl outline-none w-full' type="text" placeholder='Type a message' />
                    </div>
                    <button className='flex justify-center items-center w-12 h-12 rounded-full bg-[#7364DB] text-[30px] text-[#FFFFFF] '><RiSendPlaneFill/></button>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ChatUserInbox