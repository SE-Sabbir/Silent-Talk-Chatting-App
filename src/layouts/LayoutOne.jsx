
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import ChatUserList from '../components/ChatUserList'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import UserInbox from '../components/UserInbox'

const LayoutOne = () => {

  const userInfo = useSelector((state)=> state.currentUserInfo.value )
  const navigate = useNavigate()

  useEffect(()=>{
    if(userInfo === null) return navigate('/login')
  },[])

  return (
    <>
    <div className='flex lg:flex-nowrap flex-wrap'>
    <div className='lg:block hidden'>
    <Navbar />
    </div>
    <div className='lg:block hidden'>
    <ChatUserList />
    </div>
    <UserInbox />
    </div>
    <Outlet />
    </>
  )
}

export default LayoutOne