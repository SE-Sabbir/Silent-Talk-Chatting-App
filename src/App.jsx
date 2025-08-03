import React from 'react'
import app from './firebase.config'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layouts/LayoutOne'
import Registration from './pages/Registration'

const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>


    <Route path='/' element={<Registration/>}>
    </Route>


    </Route>
  ))
  return (
    <>
    <RouterProvider  router={myRoute}/>
    </>
  )
}

export default App