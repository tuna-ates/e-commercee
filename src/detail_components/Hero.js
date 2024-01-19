

const Hero = () => {

    return (
        <div className=" w-[100%] flex items-center justify-center px-6">
            <div className="  relative flex  bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] w-[95%] rounded-xl items-center justify-center  ">

                <div className="flex flex-col flex-1 pl-[50px] gap-4">
                    <p className="text-[#2A7CC7]">SUMMER 2020</p>
                    <p className=" text-black font-bold text-[58px]">NEW COLLECTION</p>
                    <p className="text-[#737373] w-[70%]" >We know how large objects will act,but things on a small scale.</p>
                    <button className="bg-[#23A6F0] font-extrabold rounded-lg py-3  text-lg w-[20%] text-white   ">SHOP NOW</button>
                </div>

                <div className="  flex-1 z-10 " >
                    <img className="ml-8" src={`./img/technology1.png`} />
                </div>


                <img src={`./img/Ellipse26.png`} className=" w-[35%] absolute top-[-20px] right-0 " />
            </div>
        </div>
    )

}
export default Hero;