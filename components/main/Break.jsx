'use client'

import Image from 'next/image'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Break = () => {
    const component = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    scrub: 3,
                    trigger: component.current,
                    end: "bottom 80%"
                }
            })
            tl.from('#item-1', {x:-300,})
            tl.from('#item-2', {x:300,}, 0)
            tl.from('#item-3', {x:-300,}, 0)

        }, component)


        return () => ctx.revert()  // Clean up
    }, [])


  return (
    <section ref={component} className='w-full flex flex-col items-center my-36 font-playFair text-black z-20'>
        <div id='item-1' className='w-[130px] lg:w-[260px]'>
            <Image 
            src='/MClogo.png'
            width={270}
            height={270}
            alt='Makeup In Cancun Logo'
            />
        </div>
        <div id='item-2' className='flex justify-center items-center text-6xl lg:text-9xl gap-5'>
            <p>THE</p>
            <div className='w-[130px] lg:w-full h-full lg:pt-2'>
                <Image
                src='/ojos.webp'
                width={225}
                height={120}
                alt='Eyes makeup'
                />
            </div>
        </div>
        <div id='item-3' className='text-6xl lg:text-9xl'>
            <p>APPLAUSE</p>
        </div>
    </section>        
  )
}

export default Break