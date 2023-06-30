'use client';

import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [side, setSide] = useState(false)
  useEffect(() => {
  window.addEventListener("scroll",function(){
    if(window.scrollY >= 200){
        setScrolled(true)
    }else{
      setScrolled(false)
    }
  })
  })

  const handleScroll = (e:any) => {
      e.preventDefault();
      const href= e.currentTarget.href
      const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior:"smooth",
    })
  }
 

  return (
    <div style={{boxShadow: scrolled && "0px 8px 20px -15px gray"}} className={` px-6 py-2  flex z-[333] justify-between items-center fixed top-0 left-0 right-0 w-full transition-all ease-linear duration-300 ${scrolled ? "bg-white text-blue-700":"text-white"}`}>
        <Link href="/" className="lg:w-[20%] w-[30%]">
            <img src="/main-logo.png" alt="" className="" />
        </Link>
        <ul className="uppercase lg:w-[30%] w-[50%]   ml-auto lg:text-base lg:text-md text-sm md:flex hidden justify-between   items-center">
            <li  className=""><Link onClick={handleScroll }    scroll={true} href="#about">About Us</Link></li>
            <li className=""><Link onClick={handleScroll }   href="#services">Services</Link></li>
            <li className=""><Link onClick={handleScroll }   href="#gallery">Gallery</Link></li>
            <li className=""><Link onClick={handleScroll }   href="#contact">Contact</Link></li>
        </ul>
        <button onClick={() => setSide(!side)} type='button' className="md:hidden block z-[999]">
          <FontAwesomeIcon icon={side ? faX : faBars} /> 
        </button>
        <div className={`md:hidden pt-[100px] block h-[100vh] fixed ml-auto right-0 bottom-0 left-0 w-[80vw] duration-300 ease-linear transition-all bg-[#ffeb00] ${side ? "translate-x-0": "translate-x-[100%]"}`}>
        <ul className="uppercase w-full space-y-8 text-lg text-blue-500 flex flex-col justify-between   items-center">
            <li className=""><Link onClick={handleScroll }   href="#about">About Us</Link></li>
            <li className=""><Link onClick={handleScroll }   href="#services">Services</Link></li>
            <li className=""><Link onClick={handleScroll }   href="#gallery">Gallery</Link></li>
            <li className=""><Link onClick={handleScroll }   href="#contact">Contact</Link></li>
        </ul>
        </div>
    </div>
  )
}
