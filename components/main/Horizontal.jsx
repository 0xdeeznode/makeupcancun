import React from 'react'
import Portada from '../sub/horizontal/Portada'
import HScroller from '../sub/horizontal/HScroller'

const Horizontal = () => {
  return (
    <section className='flex flex-col justify-center items-center w-full h-full bg-rojo px-10 z-20'>
      <Portada />
      <HScroller />
    </section>
  )
}

export default Horizontal