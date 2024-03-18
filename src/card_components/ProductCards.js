import { useState } from "react";
import { FakeData } from "../FakeData";
import ProductCard from "./ProductCard";
const ProductCards = () => {
    const [data, setData] = useState(FakeData.products)
    return (
           
            <div className="flex gap-9 flex-wrap w-[90%] justify-center ozel:flex-col">
                {data.map((item,index) => {
                    return <>

                        <ProductCard key={index} item={item} />
                    </>

                })}
            </div>



        
    )
}
export default ProductCards;