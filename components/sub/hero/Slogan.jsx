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
            trigger: "#columns",
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
            <div id="columns" className="flex flex-col sm:flex-row relative items-center justify-between w-full overflow-hidden">
              <div id="col1" className="w-[225px] h-[337.5px] sm:w-[450px] sm:h-[675px] overflow-hidden">
                <Image
                className="overflow-hidden"
                src="/col1.png"
                width={450}
                height={675}
                alt='bridals picture'
                id="bus"
                />
              </div>
              <div id='col3' className='flex w-[420px] sm:w-[670px] h-auto items-center'>
                  <h3 className='font-playFair text-2xl font-bold sm:text-4xl text-rojo text-center p-6'>{landing.first}</h3>
              </div>
              <div id="col2" className="w-[225px] h-[337.5px] sm:w-[450px] sm:h-[675px] overflow-hidden">
                <Image
                  className="overflow-hidden"
                  src="/col2.png"
                  width={450}
                  height={675}
                  alt='bridals picture'
                  id="bus"
                />
              </div>
            </div>
        </div>
    </>
  )
}

export default Slogan