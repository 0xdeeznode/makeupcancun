'use client'

import { useEffect, useRef } from 'react'
import Image from "next/image"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const HeroServices = () => {

    gsap.registerPlugin(ScrollTrigger);
    const component = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: component.current,
                    start:'top bottom',
                    end:'85% top',
                    scrub:3,
                },
            });

            tl.from('#texto', {x: -450}, 0)
            tl.from('#texto2', {x: -500}, 0.2)
            tl.from('#texto3', {x: -400}, 0.3)
            tl.from('#logo', {x: 150}, 0)
        }, component)

        return () => ctx.revert(); // Clean up
    }, [])


  return (
    <section ref={component} className="relative pt-40 w-full my-32 overflow-hidden">
        <div className="flex flex-col justify-center items-center">
            <div id="logo" className="absolute top-[5%] z-10">
                <h1 className="text-rojo leading-none sm:leading-normal sm:text-nowrap font-playFair text-5xl sm:text-8xl">MAKEUP IN CANCUN | Services</h1>
            </div>
            <div id="foto" className="relative z-30">
                <Image 
                src='/bridals.JPG'
                width={850}
                height={566}
                alt="bridals makeup in cancun"
                />
                <span id="texto" className="bottom-[30%] left-[5%] font-playFair text-rojo text-4xl sm:text-7xl absolute ">Makeup for</span>
                <span id="texto2" className="bottom-[18%] left-[50%] font-playFair text-rojo text-4xl sm:text-7xl absolute">Any</span>
                <span id="texto3" className="bottom-[10%] right-[9%] font-playFair text-rojo text-4xl sm:text-7xl absolute">Event</span>
            </div>
        </div>
    </section>
  )
}

export default HeroServices