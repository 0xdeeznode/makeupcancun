import Image from 'next/image'
import React from 'react'

const Portada = () => {
  return (
    <>
      <div className="relative hidden sm:flex flex-col gap-4 justify-start items-center bg-cover h-screen PortadaBG lg:pt-36 border-2 border-gray-400 z-0">
        <div className='absolute w-[250px] md:w-[300px] lg:w-[500px] right-[1%] bottom-[0%] z-10'>
          <Image
            src='/MClogo.png'
            width={500}
            height={500}
            alt='Makeup In Cancun Logo'
           />
        </div>
      </div>
      <div className="relative flex sm:hidden flex-col gap-4 justify-start items-center bg-cover h-screen PortadaBG2 lg:pt-36 border-2 border-gray-400 z-0">
        <div className='absolute w-[450px] right-5 left-0 top-[10%] z-10'>
          <Image
            src='/MClogo.png'
            width={500}
            height={500}
            alt='Makeup In Cancun Logo'
           />
        </div>
      </div>
    </>
  )
}

export default Portada