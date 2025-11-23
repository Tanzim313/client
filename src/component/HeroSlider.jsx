// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';
import img8 from '../assets/img8.jpeg';
import img7 from '../assets/img7.jpeg';
import { Link } from 'react-router';



export default () => {


   const slides = [
      {img:img12,title:"AC Repair & Maintenance",text:"Fast • Trusted • Affordable"},
      {img:img11,title:"Electrical Repair",text:"Quality Work You Can Rely On"},
      {img:img7,title:"Plumbing Services",text:"Professional Service Anytime"},
      {img:img8,title:"Office Cleaning",text:"We’re Here When You Need Us Most"}
   ]

   


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
   {slides.map((slide,index)=>(
      <SwiperSlide key={index}>
         <div
            className="relative w-full h-[650px] lg:h-[1000px] bg-cover bg-center"
            style={{backgroundImage:`url(${slide.img})`}}
         >
               <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent"> </div>

                  <div className="absolute inset-0 flex items-center justify-center px-5 text-center">

                     <div>
                        <h1 className="text-white font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight drop-shadow-2xl">
                           
                           {slide.title}
                        </h1>

                        <p className='text-white/90 mt-4 text-lg md:text-2xl lg:text-3xl font-light tracking-wide'>
                           {slide.text}
                        </p>

                        <Link to="/service">
                           <button
                           className="mt-8 px-10 py-3 text-lg font-bold text-black rounded-full bg-[#33ccff] shadow-xl hover:bg-white/90 hover:scale-105 transition-all duration-300"
                           >
                              Explore
                           </button>
                        </Link>
                     </div>

                  </div>


         </div>

      </SwiperSlide>
   ))}    
    </Swiper>
  );
};