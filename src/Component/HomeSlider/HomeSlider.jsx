import React from 'react'
import './homeSlider.scss'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function HomeSlider() {
  return (
    <div className='slider'>

    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={100}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide><div className='sliderimg'>
       <div>
        <span>Fixed-Height Slider</span>
       <p>Excellent bouquets for you</p>
       </div>
    </div>
    </SwiperSlide>
    <SwiperSlide><div className='sliderimg2'>
       <div>
        <span>Fixed-Height Slider</span>
       <p>Excellent bouquets for you</p>
       </div>
    </div>
    </SwiperSlide>
     <SwiperSlide><div className='sliderimg3'>
       <div>
        <span>Fixed-Height Slider</span>
       <p>Excellent bouquets for you</p>
       </div>
    </div>
    </SwiperSlide>

  </Swiper>
  </div>



  )
}

export default HomeSlider