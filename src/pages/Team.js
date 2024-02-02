import { Icon } from "@iconify/react";
import TeamCards from "../card_components/TeamCards";

const Team = () => {
    return (
        <div className=" w-[100%] flex items-center justify-center flex-col py-14">
            <div className=" flex flex-col items-center justify-center gap-3">
                <p className="text-[#737373]">WHAT WE DO</p>
                <p className=" text-[#252B42] text-[58px] font-bold">Innovation tailored for you</p>
                <div className=" flex flex-col w-[100%] items-center justify-center py-10 ">
                    <div className=" flex w-[95%] items-center justify-center">
                        <div className="flex items-center ">
                            <p className="text-[#252B42] font-bold">Home</p>

                            <svg
                                className="text-[#BDBDBD]"
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="1.5em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="m10 17l5-5l-5-5"
                                ></path>
                            </svg>
                            <p className="text-[#BDBDBD]">Shop</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-[100%] flex gap-2 p-1">
                <div className=" flex-1">
                    <img className="w-[100%] hover:scale-[.98] cursor-pointer" src="./img/unsplash3.png" />
                </div>
                <div className=" flex gap-2 flex-wrap flex-1">
                    <img className=" hover:scale-[.98] cursor-pointer" src="./img/unsplash4.png" />
                    <img className=" hover:scale-[.98] cursor-pointer" src="./img/unsplash5.png" />
                    <img className=" hover:scale-[.98] cursor-pointer" src="./img/unsplash6.png" />
                    <img className=" hover:scale-[.98] cursor-pointer" src="./img/unsplash7.png" />
                </div>
            </div>
            <div className="w-[80%] flex flex-col items-center justify-center py-10">
                <p className=" text-[40px] text-[#252B42] font-bold py-20">Meet Our Team</p>
                <TeamCards />
            </div>
            <div className="w-[80%] flex justify-center items-center flex-col gap-6 py-24">
                <div className=" flex flex-col gap-5 items-center justify-center">
                    <p className=" text-[40px] font-bold text-[#252B42] ">Start your 14 days free trial</p>
                    <div className=" flex gap-1 flex-col items-center justify-center">
                        <p className=" text-sm text-[#737373] ">Met minim Mollie non desert Alamo est sit cliquey dolor </p>
                        <p className=" text-sm text-[#737373]">do met sent. RELIT official consequent.</p>
                        <button className=" mt-3 hover:bg-[#4faee5] hover:scale-[.9] bg-[#23A6F0] font-extrabold rounded-lg py-3 px-5  text-md  text-white   ">Try it free now </button>

                    </div>

                </div>
                <div className=" flex gap-6 items-center">
                    <Icon
                        icon="mingcute:twitter-fill"
                        className=" text-3xl cursor-pointer  text-[#23A6F0]"
                    />
                    <Icon
                        icon="ic:outline-facebook"
                        className=" text-3xl cursor-pointer  text-[#395185]"
                    />
                    <Icon
                        icon="ri:instagram-line"
                        className=" text-3xl cursor-pointer  text-[#000000]"
                    />
                    <svg className=" cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.8rem" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"></path><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path></svg>

                </div>
            </div>
        </div>
    )
}
export default Team;