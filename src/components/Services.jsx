import React,{useEffect} from 'react'
import service1 from '../assets/service1.jpg'
import service2 from '../assets/service2.jpg'
import service3 from '../assets/service3.jpg'
import service4 from '../assets/service4.jpg'
import service5 from '../assets/service5.jpg'
import service6 from '../assets/service6.jpg'
import { FaPlay } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'


export function Services() {

  useEffect(() =>{
        AOS.init({
          duration: 800,
          delay: 200,
          once: false,
        });
    
        AOS.refresh();
      },[]);

  return (

    //services-section
    <div  id='services' className='w-full bg-gray-200 lg:px-22 px-5 lg:py-22 py-20 flex flex-col justify-between lg:items-center items-left gap-5'>

      {/* heading-part */}
      <h1 data-aos="zoom-in" data-aos-delay="100" className='lg:text-5xl text-3xl  font-semibold'>Discover Your Next Dream Destination</h1>
      <p data-aos="zoom-in" data-aos-delay="200" className='text-gray-500 lg:w-[60%] w-full lg:text-center text-left lg:text-2xl' >Curated journeys to the world’s most beautiful places.</p>
      <hr data-aos="zoom-in" data-aos-delay="300" className='lg:w-[7%] w-[20%] border-2 border-orange-600'/>

      {/* first row grid */}
      <div  data-aos="zoom-in" data-aos-delay="400" id='first-row' className='w-full flex lg:flex-row flex-col  justify-between items-center gap-5 mt-5 ' >
            {/* left starts here */}
            <div id='left' className='lg:w-[50%] w-full flex lg:flex-row flex-col justify-between items-center gap-5'>

              <div style={{backgroundImage: `url(${service1})`}} className='relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center items-end'>

                {/* gradiant overlay */}
                <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
                {/* gradiant ends */}

                <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
                  <div className='lg:w-[80%] w-full'>
                    <h1 className='text-white text-2xl font-semibold '>Santorini Island</h1>
                    <p className='text-white text-lg'>Greece</p>
                  </div>
                  <div className='w-[20%] bg-white rounded-full flex justify-center items-center p-3'><FaPlay className='lg:text-2xl text-xl'/>
                  </div>
                </div>
                
              </div>

              <div style={{backgroundImage: `url(${service2})`}} className='relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center items-end'>

                {/* gradiant overlay */}
                <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
                {/* gradiant ends */}

                <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
                  <div className='lg:w-[80%] w-full'>
                    <h1 className='text-white text-2xl font-semibold '>Bali</h1>
                    <p className='text-white text-lg'>Indonesia</p>
                  </div>
                  <div className='w-[20%] bg-white rounded-full flex justify-center items-center p-3'><FaPlay className='lg:text-2xl text-xl'/>
                  </div>
                </div>
                
              </div>
            </div>
            {/* left ends here */}



        {/* right bigger image */}
        <div className='lg:w-[50%] w-full'>
          <div style={{backgroundImage: `url(${service3})`}} className='relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center items-end'>

          {/* gradiant overlay */}
          <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
          {/* gradiant ends */}

          <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
            <div className='lg:w-[80%] w-full'>
              <h1 className='text-white text-2xl font-semibold '>Paris</h1>
              <p className='text-white text-lg'>France</p>
            </div>
            <div className='lg:w-[10%] w-[20%] bg-white rounded-full flex justify-center items-center p-3'><FaPlay className='lg:text-2xl text-xl'/>
            </div>
          </div>
          
        </div>

        </div>
      </div>
      {/* first row grid ends */}





      {/* second row grid */}
      <div  data-aos="zoom-in" data-aos-delay="400" id='second-row' className='w-full flex lg:flex-row-reverse flex-col  justify-between items-center gap-5 mt-5 ' >
        {/* left starts here */}
        <div id='left' className='lg:w-[50%] w-full flex lg:flex-row flex-col justify-between items-center gap-5'>

          <div style={{backgroundImage: `url(${service4})`}} className='relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center items-end'>

            {/* gradiant overlay */}
            <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
            {/* gradiant ends */}

            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
              <div className='lg:w-[80%] w-full'>
                <h1 className='text-white text-2xl font-semibold '>Chureito Pagoda</h1>
                <p className='text-white text-lg'>Japan</p>
              </div>
              <div className='w-[20%] bg-white rounded-full flex justify-center items-center p-3'><FaPlay className='lg:text-2xl text-xl'/>
              </div>
            </div>
            
          </div>

          <div style={{backgroundImage: `url(${service5})`}} className='relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center items-end'>

            {/* gradiant overlay */}
            <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
            {/* gradiant ends */}

            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
              <div className='lg:w-[80%] w-full'>
                <h1 className='text-white text-2xl font-semibold '>Cappadocia</h1>
                <p className='text-white text-lg'>Turkey</p>
              </div>
              <div className='w-[20%] bg-white rounded-full flex justify-center items-center p-3'><FaPlay className='lg:text-2xl text-xl'/>
              </div>
            </div>
            
          </div>
        </div>
         {/* left ends here */}



        {/* right bigger image */}
        <div className='lg:w-[50%] w-full'>
          <div style={{backgroundImage: `url(${service6})`}} className='relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center items-end'>

          {/* gradiant overlay */}
          <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10'></div>
          {/* gradiant ends */}

          <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
            <div className='lg:w-[80%] w-full'>
              <h1 className='text-white text-2xl font-semibold '>Lake Como</h1>
              <p className='text-white text-lg'>Italy</p>
            </div>
            <div className='lg:w-[10%] w-[20%] bg-white rounded-full flex justify-center items-center p-3'><FaPlay className='lg:text-2xl text-xl'/>
            </div>
          </div>
          
        </div>

        </div>

      </div>
      {/* second row grid ends */} 

    </div>
  )
}

