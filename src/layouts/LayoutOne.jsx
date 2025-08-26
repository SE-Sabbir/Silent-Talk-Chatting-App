import { Home } from 'lucide-react'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import ChatUserList from '../components/ChatUserList'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

const LayoutOne = () => {

  const userInfo = useSelector((state)=> state.currentUserInfo.value )
  const navigate = useNavigate()

  useEffect(()=>{
    if(userInfo === null) return navigate('/errorPage')
  },[])

  return (
    <>
    {/* <ChatUserList /> */}
    <Outlet />
    </>
  )
}

export default LayoutOne