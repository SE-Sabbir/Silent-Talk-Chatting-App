import React from 'react'
import app from './firebase.config'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layouts/LayoutOne'
import { ToastContainer } from 'react-toastify'
import Registration from './pages/Registration'
import Login from './pages/Login'

const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>


    <Route path='/register' element={<Registration />}/>
    <Route path='/login' element={<Login />}/>


    </Route>
  ))
  return (
    <>
    <ToastContainer />
    <RouterProvider  router={myRoute}/>
    </>
  )
}

export default App