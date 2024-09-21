import React from 'react'
import logo from "../../assets/logo.png";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
       <nav className='flex justify-between px-28 items-center bg-gradient-to-r from-[#343843] via-[#343843] via-[34%] to-[#838D89] to-[100%]'>
            <Link to="/home"><img src={logo} className='w-44' /></Link>
            <div className="tabs flex justify-between gap-12">
                <NavLink to="/team/spidey_squad" className='tab flex justify-center items-center min-w-40 text-2xl px-2'>Spider-Man</NavLink>
                <NavLink to="/team/tony_techies" className='tab flex justify-center items-center min-w-40 text-2xl px-2'>Iron Man</NavLink>
                <NavLink to="/team/cap_crusader" className='tab flex justify-center items-center min-w-44 text-2xl px-2'>Captain America</NavLink>
                <NavLink to="/team/odinson_olympians" className='tab flex justify-center items-center min-w-40 text-2xl px-2'>Thor</NavLink>
            </div>
            <div className="tp"></div>
       </nav>
    </>
  )
}

export default Navbar
