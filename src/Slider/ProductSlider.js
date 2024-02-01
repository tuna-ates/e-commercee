import "./ProductSlider.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { useState } from 'react'
const ProductSlider = (props) => {

    const {data}=props;
    const [activeThumb, setActiveThumb] = useState()
    return <>
        <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
            className='product-images-slider m-2'
        >
            {
                data.img.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="product images" />
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation, Thumbs]}
            className='product-images-slider-thumbs'
        >
            {
                data.img.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={item} alt="product images" />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </>
}
export default ProductSlider;