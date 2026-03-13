import React,{useEffect} from 'react'
import aboutimg1 from '../assets/aboutimg1.jpg'
import aboutimg2 from '../assets/aboutimg2.jpg'
import { FaGlobeAmericas } from 'react-icons/fa'
import { IoIosPricetag } from 'react-icons/io'
import AOS from 'aos'
import 'aos/dist/aos.css'


export function About() {

  useEffect(() =>{
      AOS.init({
        duration: 800,
        delay: 200,
        once: false,
      });
  
      AOS.refresh();
    },[]);


  return (

    //about us box
    <div id='about' className='flex lg:flex-row flex-col  justify-between items-center gap-15 lg:px-22 px-5
     lg:py-22 p-20 '>

      {/* image-box */}
      <div className='flex flex-col justify-center items-start  '>
        <img data-aos="zoom-in" data-aos-delay="100" src={aboutimg1} className='rounded-md lg:w-[1000px] w-auto'/>
        <img data-aos="zoom-in" data-aos-delay="200" src={aboutimg2} className='rounded-md w-[40%] border-10 border-white -mt-[120px] -ml-[20px] -rotate-2'/>
      </div>

      {/* content-box */}
      <div className='flex flex-col gap-5 mb-12'>
        <h1 data-aos="zoom-in" data-aos-delay="300" className='text-lg text-gray-600 '>About us</h1>
        <h1 data-aos="zoom-in" data-aos-delay="400" className='lg:text-5xl text-3xl font-semibold text-black'>Embark on a journey of discovery with our travel professionals</h1>
        <p data-aos="zoom-in" data-aos-delay="500" className='text-gray-700 font-semibold'>Explore breathtaking destinations, enjoy seamless travel planning, and create memories that last a lifetime.</p>
        <p data-aos="zoom-in" data-aos-delay="500" className='text-gray-500'>From relaxing beach vacations to thrilling mountain adventures, we create personalized travel experiences that help you explore stunning destinations, discover new cultures, and create unforgettable experiences.</p>
        <hr  className='w-full border-t border-gray-300'/>


        {/* buttons-box */}
        <div data-aos="zoom-in" data-aos-delay="600" id='iconbox' className='w-full grid lg:grid-cols-2 grid-cols-1 justify-between items-center lg:gap-5 gap-10' >

            {/* best-destination section */}
            <div id='left' className='flex lg:flex-row flex-col justify-between lg:items-center items-start gap-4'>

              <div id='icon' className='w-[20%] flex justify-center items-center bg-orange-600 hover:bg-black cursor-pointer p-4 rounded-md'><FaGlobeAmericas className='text-3xl text-white'/></div>

              <div className='w-[80%] flex flex-col justify-center items-start gap-1'>
                <h1 className='text-black text-xl font-medium'>Best Destination</h1>
                <p className='text-sm text-gray-500 '>Start your journey to amazing destinations.</p>
              </div>
              
              </div>
            
            {/* affordable-price section */}
           <div id='right' className='flex lg:flex-row flex-col justify-between lg:items-center items-start gap-4'>

              <div id='icon' className='w-[20%] flex justify-center items-center bg-orange-600 hover:bg-black cursor-pointer p-4 rounded-md'><IoIosPricetag className='text-3xl text-white'/></div>

              <div className='w-[80%] flex flex-col justify-center items-start gap-1'>
                <h1 className='text-black text-xl font-medium'>Affordable Price</h1>
                <p className='text-sm text-gray-500 '>Amazing journeys at budget-friendly prices.</p>
              </div>
              
              </div>
        </div>
      </div>
    </div>
  )
}

