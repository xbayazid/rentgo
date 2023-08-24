import React from 'react';
import img1 from '../../../../assets/images/property_view_1.jpg'
import img2 from '../../../../assets/images/property_view_2.jpg'
import img3 from '../../../../assets/images/property_view_3.jpg'
import img4 from '../../../../assets/images/property_view_4.jpg'
import img5 from '../../../../assets/images/property_view_5.jpg'
import img6 from '../../../../assets/images/property_view_6.jpg'
import img7 from '../../../../assets/images/property_view_7.jpg'
import img8 from '../../../../assets/images/property_view_8.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import { Autoplay,EffectFade } from "swiper/modules";

const PropertyGallery = () => {
    const images = [
        {
            id: 1,
            img : img1
        },
        {
            id: 2,
            img : img2
        },
        {
            id: 3,
            img : img3
        },
        {
            id: 4,
            img : img4
        },
        {
            id: 5,
            img : img5
        },
        {
            id: 6,
            img : img6
        },
        {
            id: 7,
            img : img7
        },
        {
            id: 8,
            img : img8
        },
    ]
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
                            images.map(image => <SwiperSlide
                                key={image.id}
                            >
                                <img src={image.img} alt='' className='w-full'/>
                            </SwiperSlide>)
                        }
                      </Swiper>
        </div>
    );
};

export default PropertyGallery;