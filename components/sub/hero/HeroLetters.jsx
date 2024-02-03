'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroLetters = () => {
  
  gsap.registerPlugin(ScrollTrigger);
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 3,
          pin: true,
          trigger: "#text-wrap",
          start: "top 5%",
          end: "550% top", 
        }
      })

      tl.to("#text-wrap", {opacity:0})

    }, component)

    return () => ctx.revert()
  },[])


  return (
    <div ref={component} className='flex mt-16 sm:mt-2'>
      <div id='text-wrap' className="flex justify-center w-full">
          <h1 className="text-rojo leading-none sm:leading-normal sm:text-nowrap font-playFair text-[100px] sm:text-[140px]">MAKEUP IN CANCUN</h1>
      </div>
    </div>
  )
}

export default HeroLetters