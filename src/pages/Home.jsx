import React from 'react'
import Navbar from '../components/Navbar'
import ChatUserList from '../components/ChatUserList'
import UserInbox from '../components/UserInbox'

const Home = () => {
  return (
    <>
    <div className='flex'>
      <Navbar />
      <ChatUserList />
      <UserInbox />
    </div>
    </>
  )
}

export default Home