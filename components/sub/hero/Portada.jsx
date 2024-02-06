import React from 'react'

const Portada = () => {
  return (
    <div className="relative flex flex-col gap-4 justify-start items-center bg-cover bg-center h-screen PortadaBG pt-24 lg:pt-36 border-2 border-gray-400 z-0">
        <div className="absolute inset-0 bg-black opacity-40" />
        <h1 className='text-8xl lg:text-9xl font-playFair text-center font-bold strokeT z-10'>Makeup in Cancun</h1>
        <h2 className='text-2xl lg:text-2xl font-playFair font-bold strokeT z-10'>By Maria Fernanda Montealegre</h2>
    </div>
  )
}

export default Portada