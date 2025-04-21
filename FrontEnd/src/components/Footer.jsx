import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-9'>
     <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-35 text-sm'>

        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>A digital platform designed to streamline and modernize the process of booking, managing, and attending medical consultations.</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>

        </div>

        <div>
            <p className='text-xl font-medium mb-5'>Get In Touch</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>9810336942</li>
                <li>Reachingtreasure@gmail.com</li>
            </ul>

        </div>
     </div>

     <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ReachingTreasure - All Right Reserved.</p>
     </div>
    </div>
  )
}

export default Footer
