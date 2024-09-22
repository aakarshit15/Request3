// import React from 'react'
// import logo from "../../assets/logo.png";
// import { Link, NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <>
//        <nav className='flex justify-between px-28 py-2 w-screen items-center bg-gradient-to-r from-[#343843] via-[#343843] via-[34%] to-[#838D89] to-[100%] border-b-2 border-b-[#FFFFFF]'>
//             <Link to="/home"><img src={logo} className='xl:w-44 lg:w-36 md:w-1/2' /></Link>
//             <div className="tabs flex justify-between gap-12">
//               <NavLink to="/team/spidey_squad" className='tab flex justify-center items-center min-w-40 xl:text-2xl px-2 lg: font-Inter opacity-65 text-white font-light'>Spider-Man</NavLink>
//               <NavLink to="/team/tony_techies" className='tab flex justify-center items-center min-w-40 xl:text-2xl px-2 font-Inter opacity-65 text-white font-light'>Iron Man</NavLink>
//               <NavLink to="/team/cap_crusader" className='tab flex justify-center items-center min-w-44 xl:text-2xl px-2 font-Inter opacity-65 text-white font-light'>Captain America</NavLink>
//               <NavLink to="/team/odinson_olympians" className='tab flex justify-center items-center min-w-40 xl:text-2xl px-2 font-Inter opacity-65 text-white font-light'>Thor</NavLink>
//             </div>
//             <div className="tp"></div>
//        </nav>
//     </>
//   )
// }

// export default Navbar

// import React from 'react';
// import logo from "../../assets/logo.png";
// import { Link, NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <>
//       <nav className='flex justify-between px-8 py-2 w-full items-center bg-gradient-to-r from-[#343843] via-[#343843] via-[34%] to-[#838D89] to-[100%] border-b-2 border-b-[#FFFFFF]'>
//         <Link to="/home">
//           <img
//             src={logo}
//             className='max-w-[11rem] w-[10rem] md:max-w-[8rem] md:w-[7rem] sm:max-w-[5rem] sm:w-[4rem] object-contain'
//             alt="Logo"
//           />
//         </Link>
//         <div className="tabs flex justify-between gap-6 xl:gap-12">
//           <NavLink to="/team/spidey_squad" className='tab flex justify-center items-center min-w-32 xl:text-2xl md:text-xl text-sm px-2 font-Inter opacity-65 text-white font-light'>Spider-Man</NavLink>
//           <NavLink to="/team/tony_techies" className='tab flex justify-center items-center min-w-32 xl:text-2xl md:text-xl text-sm px-2 font-Inter opacity-65 text-white font-light'>Iron Man</NavLink>
//           <NavLink to="/team/cap_crusader" className='tab flex justify-center items-center min-w-36 xl:text-2xl md:text-xl text-sm px-2 font-Inter opacity-65 text-white font-light'>Captain America</NavLink>
//           <NavLink to="/team/odinson_olympians" className='tab flex justify-center items-center min-w-32 xl:text-2xl md:text-xl text-sm px-2 font-Inter opacity-65 text-white font-light'>Thor</NavLink>
//         </div>
//         <div className="tp"></div>
//       </nav>
//     </>
//   )
// }

// export default Navbar;


// import React from 'react';
// import logo from "../../assets/logo.png";
// import { Link, NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <>
//       <nav className='flex justify-between px-0 md:px-12 lg:px-28 py-2 w-full items-center bg-gradient-to-r from-[#343843] via-[#343843] via-[34%] to-[#838D89] to-[100%] border-b-2 border-b-[#FFFFFF]'>
//         <Link to="/home">
//           <img
//             src={logo}
//             className='max-w-[11rem] w-[10rem] md:max-w-[8rem] md:w-[7rem] sm:max-w-[5rem] sm:w-[4rem] object-contain'
//             alt="Logo"
//           />
//         </Link>
//         <div className="tabs flex justify-between gap-6 xl:gap-12">
//           <NavLink to="/team/spidey_squad" className='tab flex justify-center items-center min-w-32 xl:text-2xl md:text-xl text-sm px- font-Inter opacity-65 text-white font-light'>Spider-Man</NavLink>
//           <NavLink to="/team/tony_techies" className='tab flex justify-center items-center min-w-32 xl:text-2xl md:text-xl text-sm px- font-Inter opacity-65 text-white font-light'>Iron Man</NavLink>
//           <NavLink to="/team/cap_crusader" className='tab flex justify-center items-center min-w-36 xl:text-2xl md:text-xl text-sm px- font-Inter opacity-65 text-white font-light'>Captain America</NavLink>
//           <NavLink to="/team/odinson_olympians" className='tab flex justify-center items-center min-w-32 xl:text-2xl md:text-xl text-sm px- font-Inter opacity-65 text-white font-light'>Thor</NavLink>
//         </div>
//         <div className="tp"></div>
//       </nav>
//     </>
//   )
// }

// export default Navbar;


import React from 'react';
import logo from "../../assets/logo.png";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='flex flex-wrap justify-between items-center py-2 px-4 md:px-8 lg:px-16 w-full min-w-full bg-gradient-to-r from-[#343843] to-[#838D89] border-b-2 border-b-[#FFFFFF]'>
        <Link to="/home">
          <img
            src={logo}
            className='w-[10rem] md:w-[8rem] sm:w-[6rem] object-contain'
            alt="Logo"
          />
        </Link>
        <div className="menu-icon-div">
          <img src="https://img.icons8.com/?size=100&id=59832&format=png&color=000000" className='w-10 sm:hidden' alt="menu icon" />
        </div>
        <div className="tabs hidden sm:flex flex-wrap justify-between gap-4 lg:gap-8">
          <NavLink to="/team/spidey_squad" className='tab flex justify-center items-center xl:text-2xl text-lg px-2 text-white font-light'>Spider-Man</NavLink>
          <NavLink to="/team/tony_techies" className='tab flex justify-center items-center xl:text-2xl text-lg px-2 text-white font-light'>Iron Man</NavLink>
          <NavLink to="/team/cap_crusader" className='tab flex justify-center items-center xl:text-2xl text-lg px-2 text-white font-light'>Captain America</NavLink>
          <NavLink to="/team/odinson_olympians" className='tab flex justify-center items-center xl:text-2xl text-lg px-2 text-white font-light'>Thor</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
