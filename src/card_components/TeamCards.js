import { useState } from "react";
import { FakeData } from "../FakeData";
import TeamCard from "./TeamCard";

const TeamCards=()=>{
    const [data,setData]=useState(FakeData.team);
return(
    <div className="w-[100%] flex justify-center items-center">
<div className="flex justify-center items-center flex-wrap w-[100%] gap-5   ">
            {
                data.map((card)=>{
                    return <TeamCard card={card}/>
                })
            }

        </div>
    </div>
)
}
export default TeamCards;