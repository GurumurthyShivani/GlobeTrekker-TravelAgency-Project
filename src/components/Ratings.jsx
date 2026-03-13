import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Ratings() {

  useEffect(() =>{
      AOS.init({
        duration:800,
        delay:200,
        once: false,
      })
    },[]);

  return (

    //ratings box
    <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-6 pl-20 pr-20 place-items-center '>

      <div className=' flex flex-col justify-center items-center lg:w-[100%] lg:h-[150px]  p-3 m-3'>
        <span  data-aos="zoom-in" data-aos-delay="100" className='text-orange-600 font-bold text-6xl'>27k+</span>
        <p  data-aos="zoom-in" data-aos-delay="200" className='text-xl font-bold'>Happy Travelers</p>
      </div>

      <div className=' flex flex-col justify-center items-center lg:w-[100%] lg:h-[150px]  p-3 m-3'>
        <span  data-aos="zoom-in" data-aos-delay="100" className='text-orange-600 font-bold text-6xl'>50+</span>
        <p  data-aos="zoom-in" data-aos-delay="200" className='text-xl font-bold'>To Destinations</p>
      </div>

      <div className=' flex flex-col justify-center items-center lg:w-[100%] lg:h-[150px]  p-3 m-3'>
        <span  data-aos="zoom-in" data-aos-delay="100" className='text-orange-600 font-bold text-6xl'>4.5/5</span>
        <p  data-aos="zoom-in" data-aos-delay="200" className='text-xl font-bold'>Customer Reviews</p>
      </div>

      <div className=' flex flex-col justify-center items-center lg:w-[100%] lg:h-[150px]  p-3 m-3'>
        <span  data-aos="zoom-in" data-aos-delay="100" className='text-orange-600 font-bold text-6xl'>30+</span>
        <p  data-aos="zoom-in" data-aos-delay="200" className='text-xl font-bold'>Country Places</p>
      </div>

    </div>
  )
}

