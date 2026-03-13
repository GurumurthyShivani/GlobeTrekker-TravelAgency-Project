import React,{useEffect} from 'react'
import cta1img from '../assets/cta1img.jpg'
import { FaPlay } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function CtaOne() {

  useEffect(() =>{
          AOS.init({
            duration: 800,
            delay: 200,
            once: false,
          });
      
          AOS.refresh();
        },[]);

  return (

    //backgound-image-part
    <div id='cta1' style={{backgroundImage: `url(${cta1img})`}} className='relative w-full lg:h-[700px] h-[400px] lg:p-22 p-10 flex flex-col justify-center items-center gap-5 bg-cover bg-center'>
      {/* black overlay */}
      <div className='absolute inset-0 bg-black/50'></div>


      {/* content part */}
      <div className='relative z-10 flex flex-col justify-center items-center gap-5'>
        <h1 data-aos="zoom-in" data-aos-delay="100" className='lg:text-6xl text-3xl font-semibold text-white lg:w-[70%] w-full text-center capitalize'>Wherever your journey begins, we take you to extraordinary destinations.</h1>
        <p data-aos="zoom-in" data-aos-delay="200"  className='text-white lg:w-[50%] w-full lg:text-xd text-lg text-center '>From stunning landscapes to vibrant cities, experience travel like never before and discover breathtaking destinations filled with adventure, culture, and unforgettable memories.</p>
        <div data-aos="zoom-in" data-aos-delay="300" className='bg-white lg:p-7 p-4 rounded-full'><FaPlay className='text-orange-600 text-4xl' /></div>
        </div>

    </div>
  )
}

