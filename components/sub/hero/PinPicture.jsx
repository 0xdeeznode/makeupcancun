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
          scrub: 1,
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
      <div ref={component} className="flex z-20">
        <div id="ad" className="flex relative items-center justify-center w-[400px] h-[217px] sm:w-[750px] sm:h-[560px] bg-rose-400">
          <div id="mask" className="w-[350px] h-[167px] sm:w-[700px] sm:h-[517px] overflow-hidden">
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
      </div>
    </>
  )
}

export default PinPicture