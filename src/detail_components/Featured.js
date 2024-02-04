import { useState } from "react";
import {FakeData} from "../FakeData"
const Featured=()=>{
const [featuredData,setFeaturedData]=useState(FakeData.featured);
    return (
        <div className="w-[100%] flex items-center justify-center py-8">
        <div className=" flex gap-16 w-[80%]  ozel:w-[70%] ozel:flex-col-reverse ">

         <div className=" flex gap-3 flex-1">
            <img className=" w-[45%]" src={featuredData.img1}/>
            <img className="w-[55%]" src={featuredData.img2}/>
         </div>
         
         <div className=" flex flex-1 flex-col gap-4 justify-center ozel:text-center">
            <p className="text-[#23A6F0] font-bold">{featuredData.title1}</p>
            <p className=" font-black text-[#252B42] text-[40px] ozel:text-[35px]">{featuredData.title2}</p>
            <p className="text-[#737373] w-[70%] ozel:w-[100%]">{featuredData.about1}</p>
            <p className="text-[#737373] w-[70%] ozel:w-[100%]">{featuredData.about2}</p>


         </div>

        </div>
        </div>
    )
}
export default Featured;