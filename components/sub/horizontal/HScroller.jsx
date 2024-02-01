'use client'

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

      <div id="races-wrapper" className='flex w-full border border-yellow-500'>
        <div id='races' className="flex w-full border border-blue-500">
          <div>
            <About />
          </div>
        </div>
      </div>

      <div className="h-[100vh]" />
    </>
  )
}




const About = () => {

  return (
    <div>
      <div className='grid grid-cols-3'>
        <div>
          <h1 className='text-5xl text-white p-4'>About</h1>
        </div>
        
        <div>
          <Image 
          src='/mfmAbout.png'
          alt='Makeup artist Mafer Montealegre picture'
          width={363}
          height={487}
          />
        </div>
      </div>
    </div>
  )
}


export default HScroller