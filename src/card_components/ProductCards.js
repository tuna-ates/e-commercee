import { useState } from "react";
import {fakeData} from "../fakeData"
import ProductCard from "./ProductCard";
const ProductCards = () => {
    const [data, setData] = useState(fakeData)
    return (
        <div className="flex w-[100%] flex-col gap-10 items-center justify-center py-20">
            <div className="flex flex-col gap-3 items-center py-8 ">
                <p className="text-[#737373] text-xl">Featured Products</p>
                <p className=" font-bold text-[#252B42] text-2xl">BESTSELLER PRODUCTS</p>
                <p className="text-[#737373]">Problems trying to resolve the conflict between </p>
            </div>
            <div className="flex gap-8 flex-wrap w-[80%] justify-center">
            {data.map((item) => {
                return<>
                
                <ProductCard item={item}/>
                </>
               
            })}
            </div>
          

        </div>
    )
}
export default ProductCards;