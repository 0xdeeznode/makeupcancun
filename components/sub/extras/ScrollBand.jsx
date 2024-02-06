'use client'

import React, { useEffect, useRef } from 'react'
import Link from "next/link"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollBand = ({ text, refe='' }) => {

    gsap.registerPlugin(ScrollTrigger);
    const component = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: component.current,
                    start:'top bottom',
                    end:'bottom top',
                    scrub:3,
                },
            });

            tl.fromTo('#band', {x: gsap.utils.random(400, 200)}, {x: gsap.utils.random(-400, -200), ease: "power1.inOut",});

        }, component)

        return () => ctx.revert(); // Clean up
    }, [])


  return (
    <>
        <div ref={component} className='overflow-hidden w-full my-8'>
            <div id='band' className="flex w-full items-center justify-center gap-4">
                {Array.from({ length: 14 }, (_, index) => (
                    <React.Fragment key={index}>
                        <Link href={refe} >
                            <span className="text-rojo text-xs md:text-sm lg:text-lg text-nowrap uppercase font-playFair">
                                <p>{text}</p>
                            </span>
                        </Link>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 text-rojo">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                            </svg>
                        </span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    </>
  )
}

export default ScrollBand