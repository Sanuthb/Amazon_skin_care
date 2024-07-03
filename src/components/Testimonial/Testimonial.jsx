import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import Testimonialhero from '../../Assets/testimonialHero.png'
import { TestimonialsData } from '../../Data/testimonial'
export default function Testimonial() {
    return (
        <div className='Testimonial_container'>
            <div className="testi_top_container">
                <div className="container1">
                    <span>TOP RATED</span>
                    <div>
                        <p>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN REJOICED.</p>
                    </div>
                </div>
                <div className="container2">
                    <img src={Testimonialhero} alt="testimonial" />
                </div>
                <div className="container3">
                    <span>100K</span>
                    <p>HAPPY CUSTOMERS WITH US</p>
                </div>
            </div>
            <div className="testi_bottom_container">
                <div className="container_name">
                    <span>REVIEWS</span>
                    <div className="testi_slider">
                        <Swiper
                            slidesPerView={1}
                            className='tcarousle'
                            slidesPerGroup={1}
                            spaceBetween={30}
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
                            {TestimonialsData.map((testimonial) =>
                                <SwiperSlide>
                                    <div className="testimonial">
                                        <img src={testimonial.image} alt="profile_image" />
                                        <span>{testimonial.comment}</span>
                                        <span></span>
                                        <span>{testimonial.name}</span>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
