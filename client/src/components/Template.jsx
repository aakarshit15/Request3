import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Template = () => {
  return (
    <>
        <Navbar />
        {/* <div className='w-full h-full bg-black'>dkfljsf</div> */}
        <Outlet /> 
    </>
  )
}

export default Template
