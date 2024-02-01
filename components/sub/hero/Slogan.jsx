'use client';

import Image from 'next/image'
import React from 'react'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { landing } from '@/constants';

const Slogan = () => {
    gsap.registerPlugin(ScrollTrigger);
    const component = useRef(null)
  
    useEffect(() => {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            scrub: 1,
            pin: true,
            trigger: component.current,
          },
        });
        tl.from('#col1', {y: -800})
        tl.from('#col2', {y: 800}, '<')
        tl.from('#col3', {y: 800, opacity: 0})
      }, component)
  
      return () => ctx.revert()//Clean up
    }, [])


  return (
    <>
        <div ref={component} className="flex w-full mt-24 z-20">
            <div id="columns" className="flex relative items-center justify-between w-full overflow-hidden">
                <div id="col1" className="w-[450px] overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    className="h-full w-full object-cover"
                  >
                    <source src="/bwcol1.mp4" type="video/mp4" />
                  </video>
                </div>
                <div id='col3' className='flex w-[670px] h-auto items-center'>
                    <h2 className='font-playFair text-4xl text-rojo text-center p-4'>{landing.first}</h2>
                </div>
                <div id="col2" className="w-[450px] overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    className="h-full w-full object-cover"
                  >
                    <source src="/bwcol2.mp4" type="video/mp4" />
                  </video>
                </div>
            </div>
        </div>
    </>
  )
}

export default Slogan