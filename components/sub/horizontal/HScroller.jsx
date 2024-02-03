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
        duration: 3,
        ease: "none",
      })

    }, componentH)

    return () => ctx.revert()  // Clean up
  }, [races])

  return (
    <>
      <div className="h-[50vh]" />

      <div ref={componentH}>
        <div id="races-wrapper">
          <div id='races' className="flex w-fit flex-nowrap">
            <About />
            <About2 />
            <About3 />
          </div>
        </div>
      </div>
      
      <div className="h-[100vh]" />
    </>
  )
}

const About3 = () => {

  return (
    <>
      <div className='grid grid-cols-3 grid-rows-3 gap-y-0 sm:gap-y-14 h-screen m-0 py-5 w-[100vw] bg-rojo'>
        <div className='col-span-3 row-span-2 sm:col-span-2 sm:row-span-1 flex items-end h-full sm:h-fit gap-5 text-blanco pl-5 font-playFair'>
          <p className='text-xl sm:text-2xl'>{AboutText.second.main}</p>
          <p className='text-xl'>{AboutText.second.sub}</p>
        </div>
        <div className='hidden sm:flex col-span-1 row-span-3'>
          <div className='w-[470px] h-[562px]'>
            <Image
              src='/about2d2.jpg'
              width={640}
              height={800}
              alt='Fashion week ny model makeup'
            />
          </div>
        </div>
        <div className='col-span-3 row-span-1 sm:col-span-2 sm:row-span-2 flex justify-center items-end h-full'>
          <div className='w-[642px] h-[321px]'>
            <Image
              src='/about2d3.jpg'
              width={640}
              height={319}
              alt='Fashion week ny model makeup'
            />
          </div>
        </div>
      </div>
    </>
  )
}

const About2 = () => {

  return (
    <>
      <div className='grid grid-cols-3 grid-rows-4 h-screen m-0 py-5 w-[100vw] bg-rojo border-2'>

        <div className='col-span-3 row-span-2 sm:col-span-2 sm:row-span-2 flex h-full sm:h-fit gap-5 text-blanco px-4 font-playFair border border-green-700'>
          <p className='text-xl sm:text-2xl'>{AboutText.second.main}</p>
          <p className='text-lg sm:text-2xl'>{AboutText.second.sub}</p>
        </div>

        <div className='hidden sm:flex col-span-1 row-span-4 h-full border border-blue-700'>
          <div className='w-[470px] h-[562px]'>
            <Image
              src='/about2d2.jpg'
              width={640}
              height={800}
              alt='Fashion Week NY 2023 kids makeup'
            />
          </div>
        </div>
        
        <div className='col-span-3 row-span-2 sm:col-span-2 sm:row-span-2 flex justify-center h-full pt-5 sm:pt-0 border border-blue-700'>
          <div className='sm:w-[545px] h-[321px] my-auto'>
            <Image
              src='/about2d3.jpg'
              width={640}
              height={319}
              alt='Fashion Week NY 2023 model makeup'
            />
          </div>
        </div>

      </div>
    </>
  )
}

const About = () => {

  return (
    <>
      <div className='grid grid-cols-3 grid-rows-3 sm:gap-x-4 h-screen py-5 w-[100vw] bg-rojo'>

        <div className='col-span-3 row-span-1 sm:col-span-1 sm:row-span-3 pl-2 sm:pl-6 sm:pt-6 flex sm:justify-center sm:items-center text-blanco font-playFair'>
          <ul className='w-full'>
            <li className='text-6xl sm:text-8xl'>About</li>
            <li className='text-6xl sm:text-7xl'>Maria Fernanda </li>
            <li className='text-6xl sm:text-7xl'>Montealegre</li>
          </ul>
        </div>
        

        <div className='col-span-3 row-span-2 sm:col-span-1 sm:row-span-3 flex flex-col gap-5 items-center'>
          <p className='text-xl sm:text-3xl text-center text-blanco font-playFair'>{AboutText.firts.main}</p>
          <div className='w-[400px] h-[400px] mx-auto'>
            <Image
            src='/mfmAbout.jpg'
            alt='Makeup artist Mafer Montealegre picture two'
            width={400}
            height={400}
            />
          </div>
        </div>

        <div className='hidden sm:flex col-span-1 row-span-3'>
          <div className='w-[430px] h-[573px]'>
            <Image
            src='/mfmAbout2.png'
            alt='Makeup artist Mafer Montealegre picture'
            width={640}
            height={853}
            />
          </div>
        </div>
      </div>
    </>
  )
}


export default HScroller