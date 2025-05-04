import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import {toast} from 'react-toastify'
import axios from 'axios'


const AddDoctor = () => {

  const [docImg, setDocImg]= useState(false)
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [experience, setExperience]= useState('1 Year')
  const [fees, setFees]= useState('')
  const [about, setAbout]= useState('')
  const [speciality, setSpeciality]= useState('General Physician')
  const [degree, setDegree]= useState('')
  const [address1, setAddress1]= useState('')
  const [address2, setAddress2]= useState('')


  const { backendUrl, aToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try{

      if(!docImg){
        return toast.error('Image Not Selected!')
      }

      const formData = new FormData()

      formData.append('image', docImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', Number(fees))
      formData.append('about', about)
      formData.append('speciality', speciality)
      formData.append('degree', degree)
      formData.append('address', JSON.stringify({line1:address1,line2:address2}))
      
      //console.log form data
      formData.forEach((value,key)=>{
        console.log(`${key}:${value}`);
      })


      const {data} = await axios.post(backendUrl + '/api/admin/add-doctor', formData, {headers:{aToken} })
      if(data.success){
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setPassword('')
        setEmail('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setAbout('')
        setFees('')

      }else{
        toast.error(data.message)
      }

    }catch(error){
      toast.error(error.message)
      console.log(error)

    }
  }
  

  return (
    <form onSubmit={onSubmitHandler} className='m-6 w-full'>
      <p className='mb-3 text-medium font-medium'> Add Doctor</p>

      <div className='bg-white px-8 py-8 rounded w-full max-w-7xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="doc-img">
            <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg) : assets.profile} alt="" required/>
          </label>
          <input onChange={(e)=> setDocImg(e.target.files[0])} type="file" id="doc-img" hidden/>
          <p>Upload Doctor <br /> Picture</p>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor Name</p>
              <input onChange={(e)=> setName(e.target.value)} value={name} className='w-60 border rounded px-1 py-0.5' type="text" placeholder=' Enter Your Name' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor Email</p>
              <input onChange={(e)=> setEmail(e.target.value)} value={email} className='w-60 border rounded px-1 py-0.5' type="email" placeholder=' Enter Your Email' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor Password</p>
              <input onChange={(e)=> setPassword(e.target.value)} value={password}  className='w-60 border rounded px-1 py-0.5' type="password" placeholder=' ********' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'> 
              <p>Experience</p>
              <select onChange={(e)=> setExperience(e.target.value)} value={experience}  className='w-60 border rounded px-1 py-0.5' name='' id='doctor_experience'>
                <option value="1 Year">1</option>
                <option value="2 Years">2</option>
                <option value="3 Years">3</option>
                <option value="4 Years">4</option>
                <option value="5 Years">5</option>
                <option value="6 Years">6</option>
                <option value="7 Years">7</option>
                <option value="8 Years">8</option>
                <option value="9 Years">9</option>
                <option value="10 Years">10</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Fees</p>
              <input onChange={(e)=> setFees(e.target.value)} value={fees}  className='w-60 border rounded px-1 py-0.5' type="number" placeholder=' Fees' required />
            </div>

          </div>



          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div  className='flex-1 flex flex-col gap-1'>
              <p>Speciality</p>
              <select onChange={(e)=> setSpeciality(e.target.value)} value={speciality}  className='w-60 border rounded px-1 py-0.5' name="" id="doctor_speciality">
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Education</p>
              <input onChange={(e)=> setDegree(e.target.value)} value={degree}  className='w-60 border rounded px-1 py-0.5' type="text" placeholder=' Education' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Address</p>
              <input onChange={(e)=> setAddress1(e.target.value)} value={address1}  className='w-60 border rounded px-1 py-0.5' type="text" placeholder=' address 1' required/>
              <input onChange={(e)=> setAddress2(e.target.value)} value={address2}  className='w-60 border rounded px-1 py-0.5' type="text" placeholder=' address 2' required/>
            </div>

          </div>
        </div>

        <div >
          <p className='mt-4 mb-2'>About</p>
          <textarea onChange={(e)=> setAbout(e.target.value)} value={about}  className='w-full px-4 pt-2 border rounded' type="text" placeholder=' Write about doctor' rows={5} required />
        </div>

        <button type='submit' className='bg-[#04877e] px-5 py-2 mt-4 text-white rounded-full'>Add Doctor</button>

      </div>

    
    </form>
    
  )
}

export default AddDoctor
