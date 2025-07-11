import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
    <>
    <div className='flex flex-col md:flex-row  flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white'>Booking Appointement <br />With Trusted Doctors</p>
            <div className='flex flex-col md:flex-row text-white gap-3 text-sm font-light'>
                <img src={assets.group_profiles} alt="" />
                <p>Simply browse through our extensive list of trusted doctors, <br /> I schedule your appointements hasle-free</p>
            </div>

            <a 
            className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' 
            href="#speciality">Book appointement <img className='w-3' src={assets.arrow_icon} alt="" /></a>
        </div> 

        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 rounded-lg' src={assets.header_img} alt="" />
        </div>
    </div>
    </>
  )
}

export default Header