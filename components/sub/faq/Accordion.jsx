'use client'
import React, { useState } from 'react'

const Accordion = ({ title, content }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className='flex flex-col gap-2 items-center w-full mx-auto py-2 px-2 border-b border-slate-700/70 rounded-lg'>
        <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex w-full items-center px-4'>
            <span className='font-playFair font-bold mx-auto text-lg lg:text-xl text-rojo'>{title}</span>
            <svg className="fill-rojo shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`}/>
                <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`}/>
            </svg>
        </button>
        <div className={`grid w-full overflow-hidden transition-all duration-300 ease-in-out bg-slate-100 rounded-lg ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className='overflow-hidden p-2 text-black'>
                {content}
            </div>
        </div>
    </div>
  )
}

export default Accordion