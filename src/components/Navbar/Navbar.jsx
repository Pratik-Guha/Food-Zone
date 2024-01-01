import React, { useEffect, useState } from 'react'
import { logo,lightpng,darkmodepng } from '../../assets'
import {FaCartShopping} from 'react-icons/fa6'

const DarkMode=()=>{
  const [theme, settheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light")
  const element =document.documentElement;
  useEffect(()=>{
    if(theme==="dark"){
      element.classList.add("dark")
      localStorage.setItem("theme","dark")
    }
    else{
      element.classList.remove("dark")
      localStorage.setItem("theme","light")
    }
  },[theme])
  const change_Theme=()=>{
    if (theme==="light") {
      settheme("dark")
    }
    else{
      settheme("light")
    }
  }
  return(
    <div className=' relative'>
        <img src={darkmodepng} onClick={change_Theme} alt="dark" className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme!=="dark"?"opacity-0":"opacity-100"}`} />
        <img src={lightpng} onClick={change_Theme} alt="dark" className='w-12  cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' />
    </div>
  )
}
const Navbar = () => {
  return (
    <div className=' shadow-md fixed w-full z-50 bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <div className='container py-3 sm:py-0'>
            <div className='flex justify-between items-center'>
              <div>
                <a href="#" className='flex  items-center gap-2 text-2xl sm:text-3xl font-bold'>
                  <img src={logo} alt="Food_logo" className=' w-10' />Food Zone
                </a>
              </div>
              <div className=' flex items-center gap-4'>
                <div>
                  <DarkMode/>
                </div>
                <ul className='hidden sm:flex gap-4'>
                  <li><a href="#" className='navli'>Home</a></li>
                  <li><a href="#" className='navli'>About</a></li>
                  <li><a href="#" className='navli'>Contact</a></li>
                </ul>
                <button className='flex items-center gap-2 btn'>
                  Order <FaCartShopping className=' text-xl text-white drop-shadow-sm cursor-pointer'/> 
                  </button>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar