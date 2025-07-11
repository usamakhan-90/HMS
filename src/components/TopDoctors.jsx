import React from 'react'
import { doctors } from '../assets/assets'

function TopDoctors() {
  return (
    <>
    <div className='flex flex-col items-center gap-4 py-16 text-gray-900 md:px-10'>
        <h1>Top Doctors to Book</h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>
        <div>
            {
                doctors.slice(0, 10).map((doctor, index)=>(
                    <div>
                        <img src={doctor.image} alt="" />
                        <div>
                            <p></p><p>Available</p>
                        </div>
                        <p>{doctor.name}</p>
                        <p>{doctor.speciality}</p>
                    </div>
                ))
            }
        </div>
        <button>more</button>
    </div>
    </>
  )
}

export default TopDoctors