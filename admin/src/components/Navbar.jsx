import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const {aToken, setAToken} = useContext(AdminContext)
    
    const navigate = useNavigate()

    const logout = () =>{
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')

    }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-2 border-b bg-white'>
        <div className='flex items-center gap-3 text-medium'>
            <img className='w-36 sm:w-40 cursor-pointer' src={assets.logo} alt="" />
            <p className='border px-4 py-1 rounded-full border-gray-400 text-gray-800'>{aToken ? 'Admin':'Doctor'}</p>
        </div>
        <button onClick={logout} className='bg-[#04877e] text-white text-medium px-6 py-1.5 rounded-full'>Logout</button>
      
    </div>
  )
}

export default Navbar
