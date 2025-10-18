import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import './slider.css'

import slide1 from "../../assets/sliderImages/1.webp"
import slide2 from "../../assets/sliderImages/2.webp"
import slide3 from "../../assets/sliderImages/3.webp"
import slide4 from "../../assets/sliderImages/4.avif"
import slide5 from "../../assets/sliderImages/5.avif"
import slide6 from "../../assets/sliderImages/6.avif"
import slide7 from "../../assets/sliderImages/7.avif"
import slide8 from "../../assets/sliderImages/8.webp"
//import slide9 from "../../assets/sliderImages/9.avif"

const slidesData = [
    { imgSrc: slide1 },
    { imgSrc: slide2 },
    { imgSrc: slide3 },
    { imgSrc: slide4 },
    { imgSrc: slide5 },
    { imgSrc: slide6 },
    { imgSrc: slide7 },
    { imgSrc: slide8 },

]

const Slider = () => {
    const swiperWrappedRef = useRef(null)
    const adjustMargin = () => {
        const screenWidth = window.innerWidth
        if (swiperWrappedRef.current) {
            swiperWrappedRef.current.style.marginLeft =
                screenWidth <= 520 ? '0px' : screenWidth <= 650 ? '-50px' : screenWidth <= 800 ? '-100px' : '-150px'
        }
    }

    useEffect(() => {
        adjustMargin()
        window.addEventListener('resize', adjustMargin)
        return () => window.removeEventListener('resize', adjustMargin)
    }, [])

    return (
        <main>
            <div className="container">
                <Swiper
                    modules={[Pagination]}
                    grabCursor
                    initialSlide={2}
                    centeredSlides
                    slidesPerView="auto"
                    speed={800}
                    slideToClickedSlide
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { spaceBetween: 40 },
                        650: { spaceBetween: 30 },
                        1000: { spaceBetween: 20 }
                    }}
                    onSwiper={(swiper) => {
                        swiperWrappedRef.current = swiper.wrapperEl
                    }}>
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide.imgSrc} alt={slide.title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </main>
    )
}


export default Slider