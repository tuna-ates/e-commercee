import { Icon } from "@iconify/react";
const TeamCard = (props) => {
    const { card } = props;
    return (
        <div className=" flex flex-col gap-3 cursor-pointer hover:scale-[.95] ">
            <img src={card.img} />
            <div className=" flex gap-2 flex-col items-center justify-center">
                <p className=" text-[#252B42] font-bold">{card.userName}</p>
                <p className="text-[#737373] text-sm">{card.level}</p>
                <div className=" flex gap-2">
                    <Icon
                        icon="ic:outline-facebook"
                        className=" text-2xl cursor-pointer  text-[#23A6F0]" 
                    />
                    <Icon
                        icon="ri:instagram-line"
                        className=" text-2xl cursor-pointer  text-[#23A6F0]"
                    />
                    <Icon
                        icon="mingcute:twitter-fill"
                        className=" text-2xl cursor-pointer  text-[#23A6F0]"
                    />
                </div>
            </div>
        </div>
    )
}
export default TeamCard;