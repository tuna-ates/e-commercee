import TeamCards from "../card_components/TeamCards";
import Brands from "../detail_components/Brands";
import Hero from "../detail_components/Hero";

const AboutPage = () => {
    return (
        <div className=" flex w-[100%] flex-col justify-center items-center ">
            <div className=" w-[100%] flex items-center justify-center my-5 px-6">
                <div className=" overflow-visible  relative flex   w-[95%] rounded-xl items-center justify-center  ">

                    <div className="flex flex-col flex-1 pl-[50px] gap-4">
                        <p className="text-[#252B42] font-extrabold text-xl">ABOUT COMPANY</p>
                        <p className=" text-[#252B42] font-[900] text-[64px]">ABOUT US</p>
                        <p className="text-[#737373] w-[55%] font-[500]" >We know how large objects will act,but things on a small scale.</p>
                        <button className=" hover:bg-[#4faee5] hover:scale-[.9] bg-[#23A6F0] font-extrabold rounded-lg py-3  text-md w-[30%] text-white   ">Get Quote Now </button>
                    </div>

                    <div className="  flex-1 z-10 overflow-visible mr-[-50px] " >
                        <img className=" w-[90%] " src={`./img/none.png`} />
                    </div>



                </div>
            </div>

            <div className=" flex gap-3 w-[82%] my-24">
                <div className=" flex flex-col flex-1 gap-4">
                    <p className="text-[#E74040]">Problems trying</p>
                    <p className=" font-bold text-[#252B42] w-[67%] text-2xl">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
                </div>
                <div className=" flex items-center flex-1">
                    <p className=" text-[#737373] text-sm">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>

            <div className=" flex w-[75%] my-10 ">
                <div className=" flex flex-col gap-2 flex-1 items-center justify-center">
                    <p className=" font-bold text-[#252B42] text-[58px]">15K</p>
                    <p className="text-[#737373]">Happy Customers</p>
                </div>
                <div className=" flex flex-col gap-2 flex-1 items-center justify-center">
                    <p className=" font-bold text-[#252B42] text-[58px]">150K</p>
                    <p className="text-[#737373]">Monthly Visitors</p>
                </div>
                <div className=" flex flex-col gap-2 flex-1 items-center justify-center">
                    <p className=" font-bold text-[#252B42] text-[58px]">15</p>
                    <p className="text-[#737373]">Countries  Worldwide</p>
                </div>
                <div className=" flex flex-col gap-2 flex-1 items-center justify-center">
                    <p className=" font-bold text-[#252B42] text-[58px]">100+</p>
                    <p className="text-[#737373]">Top Partners</p>
                </div>
            </div>
            <div className=" relative flex w-[80%] my-10  items-center justify-center">
                <img className=" rounded-2xl" src="./img/unsplash1.png" />
                <button className=" hover:scale-[.95] absolute top[50%] left-[46%] rounded-[100%] bg-[#23A6F0] w-[7%] h-[14%] flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="2em" viewBox="0 0 24 24" ><path fill="white" d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886"></path></svg></button>
            </div>

            <div className=" flex flex-col w-[80%] my-10  items-center justify-center ">
                <div className=" flex flex-col gap-3 items-center justify-center">
                    <p className=" text-[40px] font-bold text-[#252B42] ">Meet Our Team</p>
                    <div className=" flex gap-1 flex-col items-center justify-center">
                        <p className=" text-sm text-[#737373] ">Problems trying to resolve the conflict between</p>
                        <p className=" text-sm text-[#737373]">the two major realms of Classical physics: Newtonian mechanics</p>
                    </div>

                </div>
                <div className=" flex gap-3 my-14">
                    <TeamCards />

                </div>

            </div>
            <div className=" flex w-[100%] flex-col bg-[#FAFAFA] items-center justify-center pt-20">
                <div className=" flex flex-col gap-3 items-center justify-center w-[80%]">
                    <p className=" text-[40px] font-bold text-[#252B42] ">Big Companies Are Here</p>
                    <div className=" flex gap-1 flex-col items-center justify-center">
                        <p className=" text-sm text-[#737373] ">Problems trying to resolve the conflict between</p>
                        <p className=" text-sm text-[#737373]">the two major realms of Classical physics: Newtonian mechanics</p>
                    </div>

                </div>
                <div className="w-[80%]">
                    <Brands />
                </div>

            </div>

            <div className="w-[100%] flex">
                <div className="w-[60%] flex items-center justify-center bg-[#2A7CC7]">
                    <div className=" flex gap-4 flex-col w-[50%]">
                        <p className=" text-white font-bold">WORK WITH US</p>
                        <p className=" text-white font-bold text-[40px]">Now Let’s grow Yours</p>
                        <p className=" text-white font-bold text-sm">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                        <button className=" hover:scale-[.95] text-white py-2 border-2 border-solid border-white rounded-md w-[30%]">Button</button>
                    </div>
                </div>
                <div className="w-[40%]">
                    <img className="w-[100%]" src="./img/unsplash2.png"/>
                </div>
            </div>
        </div>

    )
}
export default AboutPage;