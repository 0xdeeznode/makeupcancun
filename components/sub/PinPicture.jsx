'use client'

import Image from "next/image"
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PinPicture = () => {
  gsap.registerPlugin(ScrollTrigger);
  const component = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          markers: true,
          scrub: 2,
          pin: true,
          trigger: component.current,
        },
      });
      tl.from('#bus', {scale:2.2})

    }, component)

    return () => ctx.revert()//Clean up
  }, [])

  return (
    <>
      <div ref={component} id="ad" className="flex items-center justify-center w-[400px] h-[217px] sm:w-[650px] sm:h-[467px] bg-rose-400 z-20">
        <div id="mask" className="w-[350px] h-[167px] sm:w-[600px] sm:h-[417px] overflow-hidden">
          <Image
            className="overflow-hidden"
            src="/bridals.JPG"
            width={900}
            height={600}
            alt='bridals picture'
            id="bus"
          />
        </div>
      </div>
    </>
  )
}

export default PinPicture