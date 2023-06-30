'use client';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// Import Swiper styles
import "swiper/swiper.min.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Autoplay } from 'swiper';
import ServicesCards from './ServicesCards';


export default function Banner() {
  return (
    
    <div className="">
<Swiper
            breakpoints={
              // when window width is >= 320px
              {
                320: {
                  slidesPerView: 1,

                },
                480: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                900: {
                  slidesPerView: 1,
                },
              }
            }
            loop={true}
            speed={5500}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}

            modules={[Navigation, Autoplay]}
            className="mySwiper h-full -z-[1]"
          >
            <SwiperSlide>
                <div style={{background:"url(/b1.jpg) no-repeat", backgroundSize:"cover"}} className="max-w-full min-h-[80vh] text-white flex items-center justify-center">
                    <div className="md:w-[60%] [90%] flex flex-col items-center h-[max-content]">
                        <p className="text-[1.125rem] text-[#ffb703] font-medium text-center">WELCOME TO FM CORE</p>
                        <h1 className="lg:text-[3.8rem] text-[2rem] text-center font-semibold lg:leading-[70px] leading-[50px]"> Best Services to Our Customers</h1>
                        <button className=' px-6 py-2 mt-3 hover:bg-[#ffeb00] border mx-auto border-[#ffb703] '>Read more</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide><div style={{background:"url(/b2.jpg) no-repeat", backgroundSize:"cover"}} className="max-w-full min-h-[80vh] flex items-center justify-center text-white">
            <div className="md:w-[60%] [90%] flex flex-col items-center h-[max-content]">
                        <p className="text-[1.125rem] text-[#ffb703] font-medium text-center">WELCOME TO FM CORE</p>
                        <h1 className="lg:text-[3.8rem] text-[2rem] text-center font-semibold lg:leading-[70px] leading-[50px]"> Best Services to Our Customers</h1>
                        <button className=' px-6 py-2 mt-3 hover:bg-[#ffeb00] border mx-auto border-[#ffb703] '>Read more</button>
                    </div>
</div></SwiperSlide>
          </Swiper>
        <div className="-mt-[50px] z-[8]">
            <ServicesCards />
        </div>
    </div>
  )
}
