import { useState } from "react";
import { FakeData } from "../FakeData";
import FeaturedPost from "./FeaturedPost";

const FeaturedPosts=()=>{
   const [featuredPostData,setFeaturedPostData]=useState(FakeData.featuredPosts)
    return (
        <div className=" flex flex-col gap-14 items-center justify-center my-40">
              <div className="flex flex-col gap-3 items-center py-8 ">
                <p className="text-[#23A6F0] text-xl">Practice Advice</p>
                <p className=" font-bold text-[#252B42] text-4xl">Featured Posts</p>
            </div>
            <div className=" flex gap-2 w-[90%]">
              {featuredPostData.map((item)=>{
                return <FeaturedPost item={item}/>
              })}
            </div>

        </div>
    )
}
export default FeaturedPosts;