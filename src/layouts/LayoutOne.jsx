
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import Home from '../pages/Home'

const LayoutOne = () => {

  const userInfo = useSelector((state)=> state.currentUserInfo.value )
  const navigate = useNavigate()

  useEffect(()=>{
    if(userInfo === null) return navigate('/login')
  },[])

  return (
    <>
    <Home />
    <Outlet />
    </>
  )
}

export default LayoutOne