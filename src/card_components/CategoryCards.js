import { useState } from "react";
import { FakeData } from "../FakeData";
import CategoryCard from "./CategoryCard";

const CategoryCards=()=>{
    const [data,setData]=useState(FakeData);
    return(<div className="w-[100%] flex justify-center items-center">
<div className="flex  flex-wrap w-[80%] justify-between  ">
            {
                data.categoryCards.map((card)=>{
                    return <CategoryCard card={card}/>
                })
            }

        </div>
    </div>
        
    )
}
export default CategoryCards;