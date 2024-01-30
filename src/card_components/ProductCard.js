import { useState } from "react";
import { useHistory } from "react-router-dom";

const ProductCard = (props) => {
    const history=useHistory();
    const { item } = props
    const pushProduct=()=>{
        history.push(`/productList/${item.id}`)
    }
     
    
    return (
        <div onClick={pushProduct}  className=" flex flex-col gap-4 items-center justify-center hover:scale-[1.1] mt-2 cursor-pointer">
            <img src={`${item.img[0]}`} />
            <div className=" flex flex-col gap-3 items-center justify-center  ">
                <p className=" font-bold">{item.title}</p>
                <p className="text-[#737373]">{item.about}</p>
                <div className=" flex gap-1">
                    <p className="text-[#737373]">{item.price1}</p>
                    <p className="text-[#23856D] font-bold">{item.price2}</p>
                </div>
            </div>
        </div>
    )

}
export default ProductCard;