import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-xl pt-8 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span>
        </p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12 '>
        <img className='w-full md:max-w-[360px]' src={assets.banner4} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-4/4 text-sm text-gray-600'>
          <p>Reaching Treasure is an online platform designed to simplify the process of booking medical consultations for both patients and healthcare providers. Instead of relying on traditional methods like phone calls or in-person visits, patients can register, search for doctors by specialty or location, and schedule appointments in real time through an intuitive interface. This system not only streamlines the booking process but also reduces administrative workload for clinics and hospitals, making healthcare more accessible and efficiently.</p>
          <p>Key features of a doctor appointment web app typically include secure user registration, comprehensive doctor profiles, real-time scheduling with visible availability, and automated reminders to minimize missed appointments. Many apps also offer telemedicine integration for virtual consultations, electronic prescription management, and secure payment gateways for seamless transactions. These functionalities ensure that patients can easily manage their healthcare needs while doctors can better organize their schedules and access patient information quickly.</p>
          <b className='text-gray-800 '>Our Vision</b>
          <p>The vision for Reaching Treasure is to create a seamless, accessible, and efficient digital platform that transforms how patients and healthcare providers connect. The goal is to eliminate the traditional barriers of scheduling—such as long wait times, phone calls, and paperwork—by enabling patients to book, reschedule, or cancel appointments anytime, anywhere, with just a few clicks. This system aspires to empower patients with greater control over their healthcare journey while providing doctors and clinics with tools to manage their schedules, reduce no-shows, and improve operational efficiency.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'> CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 am:py-16 flex flex-col gap-5 text-[15px] hover:bg-secondary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className='text-l'>Operational Efficiency</b>
          <p>Streamlined scheduling reduces administrative errors like double bookings and misplaced paperwork through automation. Optimized resource management allows clinics to allocate staff and equipment effectively by analyzing appointment trends and peak times.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 am:py-16 flex flex-col gap-5 text-[15px] hover:bg-secondary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b className='text-l'>Patient Experience</b>
        <p>24/7 accessibility enables patients to book, reschedule, or cancel appointments anytime via web or mobile interfaces. Reduced wait times are achieved through automated gap-filling features that match available slots with patient needs.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 am:py-16 flex flex-col gap-5 text-[15px] hover:bg-secondary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b className='text-l'>Financial Benefits</b>
        <p>Increased revenue arises from higher appointment volumes—studies show a 21% boost in bookings after adopting online systems. Lower administrative costs occur by automating tasks like reminders and inquiries, reducing manual labor needs.</p>
        </div>
      </div>

    </div>
  )
} 

export default About
