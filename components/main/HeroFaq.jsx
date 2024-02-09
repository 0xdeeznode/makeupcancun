'use client'

import { FaqInfo } from '@/constants';
import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Accordion from '../sub/faq/Accordion';


const HeroFaq = () => {

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
            tl.from('#texto2', {x: -190}, 0.1)
        }, component)

        return () => ctx.revert(); // Clean up
    }, [])


  return (
    <section ref={component} className="flex flex-col gap-16 relative pt-40 w-full my-32 overflow-hidden px-2 lg:px-10">
        <div className="flex flex-col justify-center items-center">
            <div id="logo" className="absolute top-[5%] z-10">
                <h1 className="text-black leading-none sm:leading-normal sm:text-nowrap font-playFair text-3xl md:text-5xl lg:text-7xl">MAKEUP IN CANCUN | FAQ</h1>
            </div>
            <div id="foto" className="relative w-full h-[110px] z-30">
                <span id="texto" className="left-[12%] bottom-[50%] lg:bottom-[30%] lg:left-[5%] p-2 bg-white shadow-lg shadow-gray-500/70 font-playFair text-black text-2xl lg:text-4xl absolute">Can&apos;t find your question?</span>
                <span id="texto2" className="left-[20%] bottom-[2%] lg:bottom-[18%] lg:left-[40%] p-2 bg-white shadow-lg shadow-gray-500/70 font-playFair text-black text-2xl lg:text-4xl absolute">Write to us on WhatsApp </span>
            </div>
        </div>
        {/* ACCORDION */}
        <div className='flex flex-col mx-auto bg-gray-200 w-full rounded-lg'>
            {FaqInfo.map((item, itemIndex) => (
                <Accordion title={item.question} content={item.answer} key={itemIndex} />
            ))}
        </div>
    </section>
  )
}

export default HeroFaq