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
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {

        },
      });
    }, component)

    return () => ctx.revert()  // Clean up
  }, [races])

  return (
    <>
      <div id="races-wrapper" className='flex w-full'>
        <div id='races' className="flex w-full">
          <div>
            <About />
            <About2 />
          </div>
        </div>
      </div>

      <div className="h-[100vh]" />
    </>
  )
}

const About2 = () => {

  return (
    <div>
      <div className='grid grid-cols-3 grid-rows-3 gap-y-0 sm:gap-y-14 h-screen my-auto py-5'>

        <div className='col-span-3 row-span-2 sm:col-span-2 sm:row-span-1 flex items-end h-full sm:h-fit gap-5 text-blanco pl-5 font-playFair'>
          <p className='text-xl sm:text-2xl'>{AboutText.second.main}</p>
          <p className='text-xl'>{AboutText.second.sub}</p>
        </div>
        <div className='hidden sm:flex col-span-1 row-span-3'>
          <Image 
            src='/about2d2.jpg'
            width={420}
            height={400}
            alt='Fashion week ny model makeup'
          />
        </div>
        <div className='col-span-3 row-span-1 sm:col-span-2 sm:row-span-2 flex justify-center items-end h-full'>
          <Image 
            src='/about2d3.jpg'
            width={620}
            height={400}
            alt='Fashion week ny model makeup'
          />
        </div>
      </div>
    </div>
  )
}


const About = () => {

  return (
    <div>
      <div className='grid grid-cols-3 grid-rows-3 sm:gap-x-4 h-screen'>
        <div className='col-span-3 sm:col-span-2 row-span-1 pl-6 pt-10 sm:pt-6 flex flex-col sm:flex-row gap-6 text-blanco font-playFair'>
          <h1 className='text-4xl sm:text-5xl'>About</h1>
          <p className='text-xl sm:text-3xl'>{AboutText.firts.main}</p>
        </div>
        <div className='col-span-3 row-span-3 p-4 sm:p-0 sm:col-span-1 sm:row-span-3'>
          <Image 
          src='/mfmAbout2.png'
          alt='Makeup artist Mafer Montealegre picture'
          width={860}
          height={450}
          />
        </div>
        <div className='col-span-2 row-span-2 hidden sm:flex justify-end'>
          <Image 
          src='/mfmAbout.jpg'
          alt='Makeup artist Mafer Montealegre picture two'
          width={400}
          height={400}
          />
        </div>
      </div>
    </div>
  )
}


export default HScroller