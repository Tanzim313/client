// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import { Link } from 'react-router';



export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={{
        delay:2000,
        disableOnInteraction:false,
      }}
      //onSwiper={(swiper) => console.log(swiper)}
     // onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide className='px-4'>
    
        <div 
        className='bg-cover  relative flex flex-col justify-center items-center  w-full min-h-[600px] lg:min-h-[1100px]   bg-center bg-no-repeat'
        style={{backgroundImage: `url(${img1})`}}
        >

         <div className="shadow z-100 p-4 absolute bottom-10/100 left-10 lg:bottom-20/100 gap-y-4  flex flex-col justify-center items-center">
            <h1 className='text-black font-bold sm:text-xl md:text-2xl lg:text-4xl'>Plumbing Services</h1>
            <p className='text-black font-bold  sm:text-xl md:text-2xl lg:text-4xl'>Reliable plumbers at your doorstep.</p>
            <button className="btn bg-[#33ccff] font-bold  w-50  text-black" ><Link to="/service"> Explore Button</Link></button>
        </div>

     </div>

       
       
       
    </SwiperSlide>


       

    <SwiperSlide>

        <div 
        className='bg-cover  relative flex flex-col justify-center items-center  w-full min-h-[600px] lg:min-h-[1200px]   bg-center bg-no-repeat'
        style={{backgroundImage: `url(${img2})`}}
        >

         <div className="shadow z-100 p-4 absolute bottom-10/100 left-10 lg:bottom-20/100 gap-y-4  flex flex-col justify-center items-center">
            <h1 className='text-black font-bold sm:text-xl md:text-2xl lg:text-4xl'>Plumbing Services</h1>
            <p className='text-black font-bold  sm:text-xl md:text-2xl lg:text-4xl'>Reliable plumbers at your doorstep.</p>
            <button className="btn bg-[#33ccff] font-bold  w-50  text-black" >Explore Button</button>
        </div>

     </div>


    </SwiperSlide>
    <SwiperSlide>

         <div 
        className='bg-cover  relative flex flex-col justify-center items-center  w-full min-h-[600px] lg:min-h-[1200px]   bg-center bg-no-repeat'
        style={{backgroundImage: `url(${img3})`}}
        >

         <div className="shadow z-100 p-4 absolute bottom-10/100 left-10 lg:bottom-20/100 gap-y-4  flex flex-col justify-center items-center">
            <h1 className='text-black font-bold sm:text-xl md:text-2xl lg:text-4xl'>Plumbing Services</h1>
            <p className='text-black font-bold  sm:text-xl md:text-2xl lg:text-4xl'>Reliable plumbers at your doorstep.</p>
            <button className="btn bg-[#33ccff] font-bold  w-50  text-black" >Explore Button</button>
        </div>

     </div>

    </SwiperSlide>


    <SwiperSlide>

         <div 
        className='bg-cover  relative flex flex-col justify-center items-center  w-full min-h-[600px] lg:min-h-[1200px]   bg-center bg-no-repeat'
        style={{backgroundImage: `url(${img4})`}}
        >

         <div className="shadow z-100 p-4 absolute bottom-10/100 left-10 lg:bottom-20/100 gap-y-4  flex flex-col justify-center items-center">
            <h1 className='text-black font-bold sm:text-xl md:text-2xl lg:text-4xl'>Plumbing Services</h1>
            <p className='text-black font-bold  sm:text-xl md:text-2xl lg:text-4xl'>Reliable plumbers at your doorstep.</p>
            <button className="btn bg-[#33ccff] font-bold  w-50  text-black" >Explore Button</button>
        </div>

     </div>

    </SwiperSlide>
    
    </Swiper>
  );
};