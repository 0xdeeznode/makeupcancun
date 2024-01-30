'use client'

import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";


const HeroLetters = () => {

    gsap.registerPlugin(ScrollTrigger);
    const component = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: '#text-wraper',
                  pin:true,
                  markers:true,
                  start:'top top',
                  end:'bottom 10%',
                  scrub:3,
                  //events: onEnter(scrollS P Start) onLeave(ScrollE P End) onEnterBack(ScrollE B End) onLeaveBack(ScrollS B Start)
                  toggleActions:"play pause reverse restart"
                  //options: play, pause, resume, reset, restart, complete, reverse, none          
                },
              });

              tl.fromTo('#text-wraper h1',{x:192, }, {x:-500, })
        }, component)

        return () => ctx.revert();
      }, []);

  return (
    <div ref={component} className="w-full ml-96 pl-24 justify-start border border-yellow-500">
        <div id="text-wraper" className="flex flex-col justify-start items-start w-full border border-blue-500">
            <h1 className="text-rojo overflow-y-hidden text-nowrap text-[180px] border border-red-500">MAKEUP IN CANCUN</h1>
        </div>
    </div>
  )
}

export default HeroLetters