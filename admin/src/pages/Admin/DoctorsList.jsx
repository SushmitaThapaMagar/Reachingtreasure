import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {

const { doctors, aToken, getAllDoctors } = useContext(AdminContext)


useEffect((aToken)=>{
  if(aToken){
    getAllDoctors()
  }
  
}, [aToken])


  return (
    <div>
      
    </div>
  )
}

export default DoctorsList
