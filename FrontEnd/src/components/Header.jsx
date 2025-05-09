import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-secondary rounded-lg px-6 md:px-10 lg:px-20'>
    
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p  className='text-3xl md;text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
            Book Appointment <br /> With Faithful Doctors</p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-m font-light'>
                <img className='w-28' src={assets.profiles} alt="" />
                <p>Find your extensive list of trusted doctors here, <br className='hidden sm:block' />
                    schedule your appointment hassle-free.
                </p>
            </div>
            <a href="#speciality" className='flex items-center gap-2 bg-white px-4 py-2 rounded-full text-gray-600 m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                Book Appointment <img className='w-6' src={assets.Arrow} alt="" />
            </a>
      </div>
         <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-24 h-auto rounded-lg' src={assets.footerbanner} alt="" />

         </div>
    </div>
  )
}

export default Header
