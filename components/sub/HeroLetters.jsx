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
          scrub: 5,
          pin: true,
          trigger: "#text-wrap",
          endTrigger: "body",
          start: "top top",
          end: "70% top",
          //events: onEnter(scrollS P Start) onLeave(ScrollE P End) onEnterBack(ScrollE B End) onLeaveBack(ScrollS B Start)
          toggleActions:"play reverse reverse restart"
          //options: play, pause, resume, reset, restart, complete, reverse, none   
        }
      })

      tl.to("#text-wrap", {opacity:0,})

    }, component)

    return () => ctx.revert()
  },[])


  return (
    <div ref={component} className='flex mt-14 sm:mt-2 z-0'>
      <div id='text-wrap' className="flex w-full">
          <h1 className="overflow-y-hidden text-rojo leading-none sm:leading-normal sm:text-nowrap font-playFair text-[100px] sm:text-[175px]">MAKEUP IN CANCUN</h1>
      </div>
    </div>
  )
}

export default HeroLetters