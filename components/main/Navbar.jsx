'use client';

import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from "react";
import { gsap } from 'gsap';

const Navbar = () => {
    
  const [navBar, setNavBar] = useState(false);
  const handleNav = () => {
    setNavBar(!navBar)
    if (navBar) {
      gsap.to('.menu',{y:-210, duration:0.7, display:'hidden', ease:"sine.out"})
    } else {
      gsap.to('.menu',{y:65, duration:0.7, display:'flex', ease:"sine.in"})
    }
  }

  const [DesNavBar, setDesNavBar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        // Check the scroll direction
        if (currentScrollPos > prevScrollPos) {
            // Scrolling down
            setDesNavBar(false);
        } else {
            // Scrolling up
            setDesNavBar(true);
        }
        setPrevScrollPos(currentScrollPos);
    };
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <nav className={`fixed items-center h-fit w-full bg-blanco/95 top-0 z-50 ${!DesNavBar && 'hidden'}`}>
        {/* Desktop Nav */}
        <div className="w-full flex items-center justify-between py-4 px-4">
          <Link className="hidden sm:flex" href='/'>
              <div className="text-rojo font-bold">HOME</div>
          </Link>
          <Link href='/'>
            <div>
              <Image
              src='/MClogoS.png'
              width={50}
              height={50}
              alt="Fernanda Makeup logo"
              />
            </div>
          </Link>
          <Link className='hidden sm:flex' href='/services'>
            <div className="text-rojo font-bold">SERVICES +</div>
          </Link>
          <div onClick={handleNav} className="sm:hidden text-rojo cursor-pointer z-20">
            {navBar ? 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
              : 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg>          
            }
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`menu hidden absolute top-0 left-0 right-0 justify-center items-center px-4 w-full h-52 bg-rojo/80 z-50 text-center rounded-xl`}>
          <ul className="w-full">
            <li className='p-3 text-3xl text-white hover:font-bold ease-in duration-300'>
              <Link href='#about' onClick={handleNav}>About</Link>
            </li>
            <li className='p-3 text-3xl text-white hover:font-bold ease-in duration-300'>
              <Link href='/services' onClick={handleNav}>Services +</Link>
            </li>
            <li className='p-3 text-3xl text-white hover:font-bold ease-in duration-300'>
              <Link href='#contact' onClick={handleNav}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar