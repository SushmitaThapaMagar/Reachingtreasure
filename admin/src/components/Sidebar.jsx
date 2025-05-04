import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {

  const {aToken} = useContext(AdminContext)

  return (
    <div className='min-h-screen bg-white border-zinc-500'>
      {
        aToken && <ul className='text-[#515151] mt-4'>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-6 md:min-w-60 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#04877e]' : ''}`} to ={'/admin-dashboard'}>
            <img className='w-5' src={assets.home} alt="" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-6 md:min-w-60 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#04877e]' : ''}`} to ={'/all-appointments'}>
            <img className='w-5' src={assets.appointment} alt="" />
            <p>Appointments</p>
          </NavLink>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-6 md:min-w-60 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#04877e]' : ''}`} to ={'/add-doctor'}>
            <img className='w-6' src={assets.add_doctor} alt="" />
            <p>Add Doctor</p>
          </NavLink>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-6 md:min-w-60 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#04877e]' : ''}`} to ={'/doctor-list'}>
            <img className='w-6' src={assets.doctors} alt="" />
            <p>Doctors List</p>
          </NavLink>

        </ul>
      }
    </div>
  )
}

export default Sidebar
