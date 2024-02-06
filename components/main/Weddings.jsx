import React from 'react'
import { WeddingsInfo } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Weddings = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-14 h-full w-full px-2 sm:px-4 lg:px-10">
        {/* Col1 */}
        <div className="flex flex-col items-center gap-20 col-span-1">
            <div className="flex flex-col gap-4 text-rojo font-playFair">
                <h4 className="text-2xl sm:text-4xl">{WeddingsInfo.first.main}</h4>
                <p className='lg:text-lg'>{WeddingsInfo.first.sub}</p>
            </div>

            <div className="h-fit w-fit border-4 border-rojo object-contain object-center overflow-hidden">
                <Image className="w-[500px] object-cover transition-transform hover:scale-110 ease-in-out duration-500" 
                src='/servicesBrides.jpg'
                alt='Wedding at the beach makeup cancun'
                width={837}
                height={559}
                />
            </div>

            <div className="flex flex-col gap-4 text-rojo font-playFair">
                <h4 className="text-2xl sm:text-4xl">{WeddingsInfo.third.main}</h4>
                <p className='lg:text-lg'>{WeddingsInfo.third.sub}</p>
            </div>
                
        </div>

        {/* Col2 */}
        <div className="flex flex-col items-center gap-20 sm:gap-16 col-span-1">

            <div className="h-fit w-fit border-4 border-rojo object-contain overflow-hidden">
                <Image className="w-[500px] object-cover transition-transform hover:scale-110 ease-in-out duration-500" 
                src='/servicesBrides2.JPG'
                alt='Wedding at the beach makeup cancun'
                width={828}
                height={551}
                /> 
            </div>

            <div className="flex flex-col gap-4 text-rojo font-playFair">
                <h4 className="text-2xl sm:text-4xl">{WeddingsInfo.second.main}</h4>
                <p className='lg:text-lg'>{WeddingsInfo.second.sub}</p>
            </div>

            <div className="h-fit w-fit border-4 border-rojo object-contain overflow-hidden">
                <Image className="w-[490px] object-cover transition-transform hover:scale-110 ease-in-out duration-500" 
                src='/aero.jpg'
                alt='Wedding at the beach makeup cancun'
                width={800}
                height={518}
                /> 
            </div>
        </div>
    </div>
  )
}

export default Weddings