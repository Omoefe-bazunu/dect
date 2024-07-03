// import React from 'react'
import {createBrowserRouter, createRoutesFromElements, 
Route, RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import UserRegistration from './components/UserRegistration'

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route >
      <Route path='/' element={<RootLayout />} />
      <Route path='/user' element={<UserRegistration />} />
    </Route>
  )
)

const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>

  )
}

export default App