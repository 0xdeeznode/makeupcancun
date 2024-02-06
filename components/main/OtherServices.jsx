import Image from 'next/image'
import React from 'react'

const OtherServices = () => {
  return (
    <>
        <section className='w-full px-2 md:px-4 lg:px-10 my-8 md:my-12 lg:my-16'>
            <div className='flex flex-col gap-16'>

                <div className='flex flex-row justify-center items-center gap-5 md:gap-16 lg:gap-28'>
                    <div className='border-4 overflow-hidden rounded-full border-rojo'>
                        <video className="w-[260px] object-cover transition-transform hover:scale-110 ease-in-out duration-500" playsInline autoPlay muted loop>
                            <source src="/BridalMakeup.mp4" type="video/mp4" />
                        </video>
                    </div> 
                    <h4 className='text-rojo text-2xl md:text-4xl lg:text-5xl font-playFair'>~Bridal Makeup</h4>
                </div>       

                <div className='flex flex-row justify-center items-center gap-5 md:gap-16 lg:gap-28'>
                    <h4 className='text-rojo text-2xl md:text-4xl lg:text-5xl font-playFair'>Bridal Hairstyle~</h4>
                    <div className='border-4 overflow-hidden rounded-full border-rojo'>
                        <video className="w-[260px] object-cover transition-transform hover:scale-110 ease-in-out duration-500" playsInline autoPlay muted loop>
                            <source src="/BridalHairstyle.mp4" type="video/mp4" />
                        </video>
                    </div> 
                </div>       
                
                <div className='flex flex-row justify-center items-center gap-5 md:gap-16 lg:gap-28'>
                    <div className='border-4 overflow-hidden rounded-full border-rojo'>
                        <video className="w-[260px] object-cover transition-transform hover:scale-110 ease-in-out duration-500" playsInline autoPlay muted loop>
                            <source src="/SocialMakeup.mp4" type="video/mp4" />
                        </video>
                    </div> 
                    <h4 className='text-rojo text-2xl md:text-4xl lg:text-5xl font-playFair'>~Social Makeup & Hairstyle</h4>
                </div>

                <div className='flex flex-row justify-center items-center gap-4 md:gap-16 lg:gap-28'>
                    <h4 className='text-rojo text-2xl md:text-4xl lg:text-5xl font-playFair'>Editorial Makeup~</h4>
                    <div className='border-4 overflow-hidden rounded-full border-rojo'>
                        <video className="w-[260px] object-cover transition-transform hover:scale-110 ease-in-out duration-500" playsInline autoPlay muted loop>
                            <source src="/EditorialMakeup.mp4" type="video/mp4" />
                        </video>
                    </div> 
                </div>                         

                <div className='flex flex-row justify-center items-center gap-5 md:gap-16 lg:gap-28'>
                    <div className='border-4 overflow-hidden rounded-full border-rojo'>
                        <video className="w-[260px] object-cover transition-transform hover:scale-110 ease-in-out duration-500" playsInline autoPlay muted loop>
                            <source src="/FantasyMakeup.mp4" type="video/mp4" />
                        </video>
                    </div> 
                    <h4 className='text-rojo text-2xl md:text-4xl lg:text-5xl font-playFair'>~Fantasy Makeup</h4>
                </div>     

                <div className='flex flex-row justify-center items-center gap-5 md:gap-16 lg:gap-28'>
                    <h4 className='text-rojo text-2xl md:text-4xl lg:text-5xl font-playFair'>Courses~</h4>
                    <div className='border-4 overflow-hidden rounded-full border-rojo'>
                        <video className="w-[260px] object-cover transition-transform hover:scale-110 ease-in-out duration-500" playsInline autoPlay muted loop>
                            <source src="/Course.mp4" type="video/mp4" />
                        </video>
                    </div> 
                </div> 

            </div>
        </section>        
    </>
  )
}


export default OtherServices