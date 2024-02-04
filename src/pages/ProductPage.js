
import React, { useState, Component, ReactNode } from "react";

import { FakeData } from "../FakeData";
import { Icon } from "@iconify/react";


import ProductSlider from "../Slider/ProductSlider";
import ProductCards from "../card_components/ProductCards";
import Brands from "../detail_components/Brands";

const ProductPage = (props) => {
    const [data, setData] = useState(FakeData.products[0]);


    return (
        <div className="flex flex-col w-[100%] ">
            <div className=" flex flex-col w-[100%] items-center justify-center py-10 bg-[#FAFAFA]">
                <div className=" flex w-[95%] items-center justify-start ozel:justify-center">
                    <div className="flex items-center">
                        <p className="text-[#252B42] font-bold">Home</p>

                        <svg
                            className="text-[#BDBDBD]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="2em"
                            height="1.5em"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="m10 17l5-5l-5-5"
                            ></path>
                        </svg>
                        <p className="text-[#BDBDBD]">Shop</p>
                    </div>
                </div>
            </div>

            <div className=" flex flex-col w-[100%] items-center justify-start py-10 bg-[#FAFAFA]   ">
                <div className="  flex gap-7 w-[55%] items-start justify-start ozel:flex-col ozel:justify-center   ">

                    <div className="w-[50%] ozel:w-[100%]">
                        <ProductSlider data={data} />
                    </div>

                    <div className="w-[50%] ozel:w-[100%] flex flex-col gap-6 p-2 justify-start items-start">
                        <p className=" text-[#252B42] font-bold text-xl">{data.title}</p>
                        <div className=" flex gap-2 text-[#737373] text-sm items-center">
                            <img src={data.stars} />
                            <p >10 Reviwes</p>
                        </div>
                        <div className=" flex gap-1 text-[#252B42] font-bold text-xl">
                            <p className="">{data.price1}</p>
                            <p className=" font-bold">{data.price2}</p>
                        </div>

                        <div className=" flex text-sm">
                            <p className="text-[#737373]">Availability  :</p>
                            <p className=" text-[#23A6F0] font-bold">In Stock </p>
                        </div>
                        <div className=" text-[#858585] text-sm border-b-2 pb-4">
                            {data.description}
                        </div>
                        <div>
                            <img src={data.colorProduct} />
                        </div>
                        <div className=" flex gap-6 items-center ozel:flex-col ozel:items-start">
                            <button className=" bg-[#23A6F0] rounded-[3px] text-white py-3 px-6 font-bold hover:scale-[.95]">Select Options</button>

                            <div className=" flex gap-4 text-black items-center justify-center">

                                <Icon icon="simple-line-icons:basket" className=" text-2xl hover:text-xl cursor-pointer" />

                                <Icon icon="material-symbols:favorite-outline" className=" text-2xl hover:text-xl cursor-pointer" />
                                <svg className="text-2xl hover:text-xl cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="black" d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.47 133.47 0 0 1 25 128a133.33 133.33 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.46 133.46 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></path></svg>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className=" flex flex-col w-[100%] justify-center items-center">
                <div className=" flex gap-8 items-center justify-center pt-6">
                    <p className=" text-[#737373] text-sm">Description</p>
                    <p className=" text-[#737373] text-sm">Additional Information</p>
                    <p className=" text-[#737373] text-sm">Reviews<span className="text-[#23856D]">(0)</span></p>
                </div>
                <div className=" flex w-[70%] gap-3 my-10 ozel:flex-col ozel:items-center">
                    <div className=" flex-1">
                        <img src="/img/unsplash.png " />
                    </div>

                    <div className=" flex flex-1 flex-col gap-5 ozel:text-center">
                        <p className=" font-bold text-[#252B42] text-2xl ">the quick fox jumps over </p>
                        <p className=" text-sm text-[#737373] ">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p className=" text-sm text-[#737373] ">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p className=" text-sm text-[#737373] ">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                    </div>
                    <div className=" flex flex-1 gap-7 flex-col">

                        <div className=" flex flex-col gap-2">
                            <p className=" mb-3 font-bold text-[#252B42] text-2xl">the quick fox jumps over </p>
                            <div className=" items-center flex gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m10 17l5-5l-5-5"></path></svg>
                                <p className=" text-sm text-[#737373] ">the quick fox jumps over the lazy dog</p>
                            </div>
                            <div className=" items-center flex gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m10 17l5-5l-5-5"></path></svg>
                                <p className=" text-sm text-[#737373] ">the quick fox jumps over the lazy dog</p>
                            </div>
                            <div className=" items-center flex gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m10 17l5-5l-5-5"></path></svg>
                                <p className=" text-sm text-[#737373] ">the quick fox jumps over the lazy dog</p>
                            </div>
                            <div className=" items-center flex gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m10 17l5-5l-5-5"></path></svg>
                                <p className=" text-sm text-[#737373] ">the quick fox jumps over the lazy dog</p>
                            </div>
                        </div>

                        <div className=" flex flex-col gap-2">
                            <p className=" mb-3 font-bold text-[#252B42] text-2xl">the quick fox jumps over </p>
                            <div className=" items-center flex gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m10 17l5-5l-5-5"></path></svg>
                                <p className=" text-sm text-[#737373] ">the quick fox jumps over the lazy dog</p>
                            </div>
                            <div className=" items-center flex gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m10 17l5-5l-5-5"></path></svg>
                                <p className=" text-sm text-[#737373] ">the quick fox jumps over the lazy dog</p>
                            </div>
                            <div className=" items-center flex gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m10 17l5-5l-5-5"></path></svg>
                                <p className=" text-sm text-[#737373] ">the quick fox jumps over the lazy dog</p>
                            </div>

                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="flex flex-col w-[100%] justify-center items-center gap-5 mt-10 bg-[#FAFAFA]">
                <div className="text-[#252B42] text-2xl w-[70%] border-b-2 pb-4 justify-around"><p>BESTSELLER PRODUCTS</p></div>
                <div className="flex justify-center items-center w-[80%] ">
                    <ProductCards/>
                </div>
            </div>
            <div className="flex flex-col w-[100%] justify-center items-center gap-5 bg-[#FAFAFA]">
                <div className="w-[70%]">
                    <Brands/>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
