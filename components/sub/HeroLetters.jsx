'use client'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

const HeroLetters = () => {
    gsap.registerPlugin(ScrollTrigger);
    const component = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    markers:true,
                    trigger:component.current,
                    start: '-20% top',
                    end: '150% top',
                    scrub:3,
                }
            });

            tl.to('.texto', {x:-500, })


        }, component)
        return () => ctx.revert() // Clean Up
    }, [])

  return (
    <div ref={component} className="w-full h-fit flex z-0 border border-black">
        <h1 className='texto ml-56 text-rojo tracking-tighter text-nowrap text-[200px]'>MAKEUP IN CANCUN</h1>
    </div>
  )
}

export default HeroLetters