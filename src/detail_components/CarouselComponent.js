
import React, { useEffect, useState } from 'react';
import { FakeData } from '../FakeData';
import { useHistory } from "react-router-dom";

const CarouselIndicators = ({ images, activeIndex, onClick }) => {
  return (
    <div className="carousel__indicators">
      {images.map((_, index) => (
        <span
          key={index}
          className={`carousel__indicator ${index === activeIndex ? 'active' : ''
            }`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};



const CarouselComponent = ({ interval = 3000 }) => {
  const [carouselImg, setCarouselImg] = useState(FakeData);
  const images = carouselImg.carouselİmages;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [interval]);

  const nextSlide = () => {

    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  const history = useHistory();

  const push = () => {
    history.push("/productList")
  }
  return (
    <div className='flex w-[100%] items-center justify-center py-5 h-[90vh]'>
      <div className="carousel relative max-w-[95%] overflow-visible h-[100%]    ">
        <div className='z-[1] absolute w-[100%] flex justify-end items-start h-[100%]  '>
          <div className=" overflow-visible  relative flex   w-[95%] rounded-xl items-center justify-center h-[100%]    ">

            <div className="flex flex-col flex-1 pl-[50px] gap-4">
              <p className="text-[#2A7CC7] font-extrabold text-xl">SUMMER 2020</p>
              <p className=" text-[#252B42] font-[900] text-[64px]">NEW COLLECTION</p>
              <p className="text-[#737373] w-[55%] font-[500]" >We know how large objects will act,but things on a small scale.</p>
              <button onClick={push} className=" hover:bg-[#4faee5] hover:scale-[.9] bg-[#23A6F0] font-extrabold rounded-lg py-3  text-lg w-[40%] text-white   ">SHOP NOW</button>
            </div>

            <div className=" h-[100%] w-[100%]  flex-1 z-10 overflow-hidden mr-[-24px]    " >
              <img className=" w-[100%] h-[100%] " src={`./img/technology1.png`} />
            </div>


            <img src={`./img/Ellipse26.png`} className=" w-[35%] absolute top-[-20px] right-0 " />
          </div>
        </div>
        <button onClick={prevSlide} className="carousel__btn carousel__btn--prev left-0 absolute top-[50%] translate-y-[-50%] bg-[rgba(0,0,0,0.5)] text-white text-[1.5rem] border-none p-[1rem] cursor-pointer z-[1] hover:bg-[rgba(0, 0, 0, 0.8)]">
          &lt;
        </button>
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className="carousel__img w-[100%] h-[100%] block ease-linear delay-1000  "
        />
        <button onClick={nextSlide} className="carousel__btn carousel__btn--next right-0  absolute top-[50%] translate-y-[-50%] bg-[rgba(0,0,0,0.5)] text-white text-[1.5rem] border-none p-[1rem] cursor-pointer z-[1] hover:bg-[rgba(0, 0, 0, 0.8)]">
          &gt;
        </button>
      </div>
    </div>
  );



}
export default CarouselComponent;