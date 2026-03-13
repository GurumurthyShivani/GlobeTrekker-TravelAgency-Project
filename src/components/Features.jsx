import React,{useEffect} from 'react'
import {features} from '../export'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Features() {
  useEffect(() =>{
      AOS.init({
        duration:800,
        delay:200,
        once: false,
      })
    },[]);




  return (
    //features section
    <div id='whyus' className='w-full lg:px-22 px-5 lg:pt-22 pt-20 pb-45 flex flex-col justify-between items-center gap-5'>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='lg:text-5xl text-3xl font-semibold text-black text-center' >Why Should You Travel With Us</h1>
      <p data-aos="zoom-in" data-aos-delay="200" className='text-gray-500 text-center lg:w-[60%] w-full'>Experience seamless travel planning, affordable packages, and unforgettable journeys crafted by our travel experts.</p>
      <div data-aos="zoom-in" data-aos-delay="300" className=' w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-5 mt-5' >
        {features.map((item,index)=>(
            <div key={index} className='flex flex-col justify-center items-center gap-5 bg-gray-200 rounded-md lg:p-10 p-6 '>
              <span className='bg-orange-600 hover:bg-black cursor-pointer p-4 rounded-md text-white'><item.icon className='text-3xl' /></span>
              <h1 className='text-xl text-center font-semibold text-black'>{item.name}</h1>
              <p className='text-gray-500 text-center'>{item.about}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

