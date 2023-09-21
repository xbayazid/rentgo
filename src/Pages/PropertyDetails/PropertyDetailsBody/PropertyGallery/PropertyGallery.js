import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from "swiper/modules";

const PropertyGallery = ({ gallery }) => {
    return (
        <div className='bg-white shadow-md rounded p-5 mt-8'>
            <h2 className="text-2xl font-semibold">Gallery</h2>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                effect={"fade"}

                modules={[EffectFade, Autoplay]}
                className="mySwiper mt-5"
            >

                {
                    gallery.map((image, idx) => <SwiperSlide
                        key={idx}
                    >
                        <img src={image} alt="images" className='w-full' />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default PropertyGallery;