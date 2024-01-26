import { useState } from "react";
import { FakeData } from "../FakeData";
import ProductCard from "./ProductCard";
const ProductCards = () => {
    const [data, setData] = useState(FakeData.products)
    return (
           
            <div className="flex gap-8 flex-wrap w-[90%] justify-center">
                {data.map((item) => {
                    return <>

                        <ProductCard item={item} />
                    </>

                })}
            </div>



        
    )
}
export default ProductCards;