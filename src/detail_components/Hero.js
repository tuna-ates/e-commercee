
import { useHistory } from "react-router-dom";
const Hero = () => {
   
    const history=useHistory();

    const push=()=>{
        history.push("/productList")
    }

    return (
        <div className=" w-[100%] flex items-center justify-center px-6">
            <div className=" overflow-visible  relative flex  bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] w-[95%] rounded-xl items-center justify-center  ">

                <div className="flex flex-col flex-1 pl-[50px] gap-4">
                    <p className="text-[#2A7CC7] font-extrabold text-xl">SUMMER 2020</p>
                    <p className=" text-[#252B42] font-[900] text-[64px]">NEW COLLECTION</p>
                    <p className="text-[#737373] w-[55%] font-[500]" >We know how large objects will act,but things on a small scale.</p>
                    <button onClick={push} className=" hover:bg-[#4faee5] hover:scale-[.9] bg-[#23A6F0] font-extrabold rounded-lg py-3  text-lg w-[40%] text-white   ">SHOP NOW</button>
                </div>

                <div className="  flex-1 z-10 overflow-visible mr-[-50px] " >
                    <img className=" w-[100%] h-[100%]" src={`./img/technology1.png`} />
                </div>


                <img src={`./img/Ellipse26.png`} className=" w-[35%] absolute top-[-20px] right-0 " />
            </div>
        </div>
    )

}
export default Hero;