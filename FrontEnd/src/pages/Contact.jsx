import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {


  return (
    <div>
      <div className='text-center text-xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.care} alt="" />
      

      <div className='flex flex-col justify-center items-start gap-4'>
        <p className='font-semibold text-medium text-gray-600'>OUR OFFICE</p>
        <p className='text-gray-500'>Texas, United States
          Suite 90, Washington
        </p>
        <p className='text-gray-500'>Tel : (+977) 9810115623</p>
        <p className='font-semibold text-lg text-gray-600'>Careers at Reaching Treasure</p>
        <p className='text-gray-500'>Learn more about our teams and job openings.</p>
        <button className='border border-black px-4 py-3 text-sm hover:bg-secondary hover:text-white translate-all duration-500'>Explore Jobs</button>
      </div>
      </div>
      
    </div>
  )
}

export default Contact
