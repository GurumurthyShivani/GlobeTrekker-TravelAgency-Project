import React, { useEffect } from 'react'
import Heroimg from '../assets/Heroimg.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Hero() {

  useEffect(() =>{
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });

    AOS.refresh();
  },[]);


  return (
      // Background image
    <div id='hero' className=' relative w-[] lg:h-screen py-30 h-[500px] bg-cover bg-center z-20' style={{backgroundImage: `url(${Heroimg})`}}>

        {/* black-overlay */}
        <div className='absolute inset-0 bg-black/40'></div>

        {/* content-box */}
        <div className='w-full relative z-10 flex flex-col justify-center items-center h-full gap-6 text-white   px-6'>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='lg:text-7xl text-4xl capitalize text-center font-bold'>Explore the World Without Limits</h1>

            <p data-aos="zoom-in" data-aos-delay="200" className='lg:text-2xl text-lg text-center max-w-[1000px]
            mx-auto'>Experience the Joy of Traveling to Incredible Destinations with Personalized Travel Packages Designed Just for You.</p>

            <button data-aos="slide-up" data-aos-delay="300" className='bg-orange-600 hover:bg-black hover:text-white px-8 py-3 font-semibold capitalize rounded-md mt-5 cursor-pointer'>Book Now</button>
        </div>
    </div>

  )
}
