import { useState } from "react";

const ProductCard = (props) => {
    const { item } = props
    return (
        <div className=" flex flex-col gap-4 items-center justify-center hover:scale-[1.1] mt-2 cursor-pointer">
            <img src={item.img} />
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