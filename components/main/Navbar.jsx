'use client';

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react";
import { gsap } from 'gsap';

const Navbar = () => {
    
    const [navBar, setNavBar] = useState(false);
    const handleNav = () => {
      setNavBar(!navBar)
        if (navBar) {
          gsap.to('.menu',{y:-210, duration:1.2, display:'hidden', ease:"bounce"})
        } else {
          gsap.to('.menu',{y:65, duration:1.2, display:'flex', ease:"bounce"})
        }
    }

  return (
    <>
        <nav className="fixed flex items-center w-full h-auto bg-blanco px-2 z-50">
          {/* Desktop Nav */}
          <div className="w-full flex items-center justify-between py-4 px-3">
            <Link className="hidden sm:flex" href='/'>
                <div className="text-rojo">HOME</div>
            </Link>
            <div>
                <Image
                src='/MClogoSimple500.svg'
                width={40}
                height={18}
                alt="Fernanda Makeup logo"
                />
            </div>
            <Link className='hidden sm:flex' href='#contact'>
                <div className="text-rojo">BOOK CONSULTATION +</div>
            </Link>
          </div>
          
          {/* MOBILE BUTTON */}
          <div onClick={handleNav} className="sm:hidden text-rojo cursor-pointer">
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

          {/* Mobile Menu */}
          <div id='menu' className="hidden">
              <Link className="" href='/'>
                  <div className="text-rojo">Home</div>
              </Link>
              <Link className="" href='/contact'>
                  <div className="text-rojo">Book Consultation +</div>
              </Link>
          </div>
        </nav>
    </>
  )
}

export default Navbar