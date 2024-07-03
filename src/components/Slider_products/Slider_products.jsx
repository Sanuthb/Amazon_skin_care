import React from 'react'
import './Slider_products.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { SliderProducts } from '../../Data/product'


export default function Slider_products() {
    return (
        <div className='s-container'>
            <Swiper
                className='myswiper'
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation={true}
                slidesPerView={1}
                spaceBetween={10}
                slidesPerGroup={1}
                loop={true}
                breakpoints={{
                    856: {
                        slidesPerView:3
                    },
                    640: {
                        slidesPerView:1
                    },
                    0: {
                        slidesPerView:1
                    }
                }}  
            >
            {SliderProducts.map((slide, i) =>
                <SwiperSlide>
                    <div className="left-s">
                        <div className="name">
                            <span>{slide.name}</span>
                            <span>{slide.detail}</span>
                        </div>
                        <span>${slide.price}</span>
                        <div>Shop Now</div>
                    </div>
                    <img src={slide.img} alt="products" className='img-p' />
                </SwiperSlide>
            )}
        </Swiper>
        </div >
    )
}
