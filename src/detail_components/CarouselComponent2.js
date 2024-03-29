import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FakeData } from "../FakeData";
import { useHistory } from "react-router-dom";
const CarouselComponent2 = () => {
    const [carouselImg, setCarouselImg] = useState(FakeData);
    const images = carouselImg.carouselİmages;

    const history = useHistory();

    const push = () => {
        history.push("/productList");
    };
    const buttonStyle = {
        width: "50px",
        height: "43  px",
        background: "rgba(226, 217, 221, 0.7)",
        border: '0px',


    };

    const properties = {
        prevArrow: <button style={{ ...buttonStyle, fontWeight: "lighter", borderRadius: "25px" }}><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="1.5rem" color="rgba(0,0,0,0.6)" viewBox="0 0 15 15"><path fill="currentColor" d="M3 7.5L11 0v15z"></path></svg></button>,
        nextArrow: <button style={{ ...buttonStyle, fontWeight: "lighter", borderRadius: "25px" }}><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="1.5rem" color="rgba(0,0,0,0.6)" viewBox="0 0 15 15"><path fill="currentColor" d="M12 7.5L4 0v15z"></path></svg></button>
    }
    return (
        <div className=" w-[100%] flex justify-center items-center">
            <div className="w-[80%] ozel:w-[100%]  ">

                <Slide {...properties} >

                    <div className=" w-[100%] flex items-center justify-center my-5 px-6">
                        <div className=" overflow-visible  relative flex md:flex-col md:gap-20 bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] w-[95%] rounded-xl items-center justify-center  ">

                            <div className="flex flex-col w-[50%] md:w-[100%] md:items-center md:justify-center  pl-[50px] gap-4 my-10">
                                <p className="text-[#2A7CC7] font-extrabold text-xl">SUMMER 2020</p>
                                <p className=" text-[#252B42] ozel2:text-[1.2rem]   font-[900] text-[2rem]">NEW COLLECTION</p>
                                <p className="text-[#737373] w-[55%] md:text-center font-[500] ozel2:w-[90%]" >We know how large objects will act,but things on a small scale.</p>
                                <button onClick={push} className=" hover:bg-[#4faee5] hover:scale-[.9] bg-[#23A6F0] font-extrabold rounded-lg py-3  text-lg w-[40%] sm:w-[70%] text-white ozel2:text-base  ">SHOP NOW</button>
                            </div>

                            <div className="  w-[50%] md:w-[100%] z-10 overflow-visible mr-[-50px] ozel2:mr-[-40px] ozel2:h-[100%] " >
                                <img className=" w-[100%] h-[100%] ozel2:w-[150%]" src={`./img/technology1.png`} />
                            </div>


                            <img src={`./img/Ellipse26.png`} className=" w-[35%] absolute top-[-20px] md:top-[370px] right-0 md:right-8 md:w-[70%] sm:top-[550px] sm:w-[100%]  " />
                        </div>
                    </div>

                    <div className=" w-[100%] flex items-center justify-center my-5 px-6">
                        <div className=" overflow-visible  relative flex md:flex-col md:gap-20 bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] w-[95%] rounded-xl items-center justify-center  ">

                            <div className="flex flex-col w-[50%] md:w-[100%] md:items-center md:justify-center  pl-[50px] gap-4 my-10">
                                <p className="text-[#2A7CC7] font-extrabold text-xl">SUMMER 2020</p>
                                <p className=" text-[#252B42] ozel2:text-[1.2rem]   font-[900] text-[2rem]">NEW COLLECTION</p>
                                <p className="text-[#737373] w-[55%] md:text-center font-[500] ozel2:w-[90%]" >We know how large objects will act,but things on a small scale.</p>
                                <button onClick={push} className=" hover:bg-[#4faee5] hover:scale-[.9] bg-[#23A6F0] font-extrabold rounded-lg py-3  text-lg w-[40%] sm:w-[70%] text-white ozel2:text-base  ">SHOP NOW</button>
                            </div>

                            <div className="  w-[50%] md:w-[100%] z-10 overflow-visible mr-[-50px] ozel2:mr-[-40px] ozel2:h-[100%] " >
                                <img className=" w-[100%] h-[100%] ozel2:w-[150%]" src={`./img/technology1.png`} />
                            </div>


                            <img src={`./img/Ellipse26.png`} className=" w-[35%] absolute top-[-20px] md:top-[370px] right-0 md:right-8 md:w-[70%] sm:top-[550px] sm:w-[100%]  " />
                        </div>
                    </div>


                </Slide>
            </div>
        </div>
    );
};
export default CarouselComponent2;
