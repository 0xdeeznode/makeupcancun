'use client'

import { AboutText } from '@/constants';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';

const HScroller = () => {
  // Check if running on the client side before using document
  const races = typeof document !== 'undefined' ? document.querySelector('#races') : null;

  function getScrollAmount() {
    if (races) {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }
    return 0;
  }

  gsap.registerPlugin(ScrollTrigger);
  const componentH = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger:componentH.current,
          start:'top top',
          end: () => {`+=${getScrollAmount() * -1}`},
          pin:true,
          scrub:1,
          invalidateOnRefresh:true,
        },
      });

      tl.to('#races', {
        x: getScrollAmount,
        duration: 5,
        ease: "power1.inOut",
      })

    }, componentH)

    return () => ctx.revert()  // Clean up
  }, [races])

  return (
    <>
      <div className="h-[10vh]" />
      <div ref={componentH}>
        <div id="races-wrapper">
          <div id='races' className="flex w-fit flex-nowrap">
            <About />
            <About2 />
            <About3 />
          </div>
        </div>
      </div>
      <div className="h-[20vh]" />
    </>
  )
}

const About3 = () => {

  return (
    <>
      <div className='grid grid-cols-3 grid-rows-3 gap-y-0 sm:gap-y-14 h-screen sm:items-center m-0 py-5 w-[100vw] bg-rojo'>

        <div className='col-span-3 row-span-1 sm:col-span-1 sm:row-span-3 hidden sm:flex justify-center items-end h-full'>
          <div className='w-[400px] h-fit border-2 border-black overflow-hidden'>
            <Image className='hover:scale-105 ease-in-out duration-500' src='/bride2.PNG' width={400} height={500} alt='Wedding on the beach Mexico' />
          </div>
        </div>

        <div className='col-span-3 row-span-1 sm:col-span-1 sm:row-span-3 flex px-2 h-full sm:h-fit items-end text-blanco font-playFair'>
          <p className='text-xl lg:text-2xl text-center'>{AboutText.third.main}</p>
        </div>

        <div className='flex col-span-3 row-span-2 sm:col-span-1 sm:row-span-3 items-end justify-center'>
          <div className='w-[320px] h-fit lg:w-[400px] lg:h-[500px] border-2 border-black overflow-hidden'>
            <Image className='hover:scale-105 ease-in-out duration-500' src='/bride.JPG' width={400} height={500} alt='Bridal Makeup Mexico'/>
          </div>
        </div>

      </div>
    </>
  )
}

const About2 = () => {

  return (
    <>
      <div className='grid grid-cols-3 grid-rows-4 h-screen m-0 py-5 w-[100vw]'>

        <div className='col-span-3 row-span-2 lg:col-span-2 lg:row-span-2 flex h-full items-center sm:h-fit gap-5 text-white px-4 font-playFair'>
          <p className='text-lg lg:text-2xl'>{AboutText.second.main}</p>
          <p className='text-lg lg:text-2xl'>{AboutText.second.sub}</p>
        </div>

        <div className='hidden lg:flex col-span-1 row-span-4 h-full'>
          <div className='w-[470px] h-[562px] border-2 border-black overflow-hidden'>
            <Image className='hover:scale-105 ease-in-out duration-500' src='/about2d2.JPG' width={640} height={800} alt='Fashion Week NY 2023 kids makeup' />
          </div>
        </div>
        
        <div className='col-span-3 row-span-2 lg:col-span-2 lg:row-span-2 flex justify-center h-full w-full pt-5 sm:pt-0'>
          <div className='md:w-[445px] lg:w-[545px] h-fit my-auto border-2 border-black overflow-hidden'>
            <Image className='hover:scale-105 ease-in-out duration-500' src='/about2d3.JPG' width={640} height={319} alt='Fashion Week NY 2023 model makeup' />
          </div>
        </div>

      </div>
    </>
  )
}

const About = () => {

  return (
    <>
      <div className='grid grid-cols-3 grid-rows-3 lg:gap-x-4 h-screen py-5 w-[100vw] bg-rojo'>

        <div className='col-span-3 row-span-1 lg:col-span-1 lg:row-span-3 pl-4 lg:pl-6 lg:pt-6 flex lg:justify-center text-blanco font-playFair items-center'>
          <ul className='w-full'>
            <li className='text-5xl md:text-4xl lg:text-7xl'>About</li>
            <li className='text-5xl md:text-4xl lg:text-7xl'>Maria Fernanda </li>
            <li className='text-5xl md:text-4xl lg:text-7xl'>Montealegre</li>
          </ul>
        </div>

        <div className='col-span-3 row-span-2  flex flex-col gap-16 items-center lg:col-span-1 lg:row-span-3 md:gap-1 lg:gap-5'>
          <p className='text-xl lg:text-2xl text-start lg:text-center text-blanco font-playFair px-4'>{AboutText.firts.main}</p>
          <div className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] mx-auto border-2 border-black overflow-hidden'>
            <Image className='hover:scale-105 ease-in-out duration-500' src='/mfmAbout.JPG' alt='Makeup artist Mafer Montealegre pic' width={400} height={400} />
          </div>
        </div>

        <div className='hidden lg:flex col-span-1 row-span-3'>
          <div className='w-[430px] h-[573px] border-2 border-black overflow-hidden'>
            <Image className='hover:scale-105 ease-in-out duration-500' src='/mfmAbout2.png' alt='Makeup artist Mafer Montealegre pic2' width={640} height={853} />
          </div>
        </div>
      </div>
    </>
  )
}


export default HScroller