import { Home } from 'lucide-react'
import React from 'react'
import { Outlet } from 'react-router'
import SilentTalkLogo from '../assets/images/SilentTalk logo 1.png'
import ChatUserInbox from '../components/ChatUserInbox'
import ChatUserList from '../components/ChatUserList'

const LayoutOne = () => {
  return (
    <>
    {/* <ChatUserInbox /> */}
    <ChatUserList/>
    <Outlet />
    </>
  )
}

export default LayoutOne