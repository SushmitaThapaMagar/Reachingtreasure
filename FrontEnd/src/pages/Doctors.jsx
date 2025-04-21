import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
const {speciality} = useParams()
const {doctors} = useContext(AppContext)

  return (
    <div>
      <p>Select through the doctors specialist</p>
      <div>
        <div>
          <p>General Physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
        </div>
      </div>
    </div>
  )
}

export default Doctors
