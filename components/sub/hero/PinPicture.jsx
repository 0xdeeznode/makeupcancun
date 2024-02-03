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
          trigger: "#ad",
        },
      });
      tl.from('#bus', {scale:2.2})
    }, component)

    return () => ctx.revert()//Clean up
  }, [])

  return (
    <>
      <div ref={component} className="flex z-20">
        <div id="ad" className="flex relative justify-center w-screen">
          <div id="mask" className="w-[307px] h-[307px] sm:w-[400px] sm:h-[517px] overflow-hidden">
            <Image
              className="overflow-hidden"
              src="/mfmain.png"
              width={758}
              height={666}
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