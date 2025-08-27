import React from 'react'
import app from './firebase.config'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Registration from './pages/Registration'
import Login from './pages/Login'
import LayoutOne from './layouts/LayoutOne'
import ErrorPage from './pages/ErrorPage'
import UserList from './pages/UserList'

const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>

      <Route path='/' element={<LayoutOne />}>
      </Route>

      <Route path='userlist' element={<UserList />}/>
      <Route path='/register' element={<Registration />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='*' element={<ErrorPage />}/>
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