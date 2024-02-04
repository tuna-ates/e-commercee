const Services=()=>{

return(
    <div className=" flex flex-col gap-6 w-[100%] items-center justify-center my-20">
          <div className="flex flex-col gap-3 items-center py-8 ">
                <p className="text-[#737373] text-xl">Featured Products</p>
                <p className=" font-bold text-[#252B42] text-2xl">BESTSELLER PRODUCTS</p>
                <p className="text-[#737373]">Problems trying to resolve the conflict between </p>
            </div>

            <div className=" flex gap-8 w-[60%] py-6 ozel:flex-col">
                <div className=" flex flex-col gap-3 flex-1 items-center justify-start hover:scale-[1.1] cursor-pointer">
                    <img src="./img/services1.svg"/>
                    <p className=" font-black text-2xl">Easy Wins</p>
                    <p className="text-[#737373] text-center w-[80%]">Get your best looking smile now!</p>
                </div>

                <div className=" flex flex-col gap-3 flex-1 items-center justify-start hover:scale-[1.1] cursor-pointer">
                    <img src="./img/services2.svg"/>
                    <p className=" font-black text-2xl">Concrete</p>
                    <p className="text-[#737373] text-center">Defalcate is most focused in helping you discover your most beautiful smile</p>
                </div>

                <div className=" flex flex-col gap-3 flex-1 items-center justify-start hover:scale-[1.1] cursor-pointer">
                    <img src="./img/services3.svg"/>
                    <p className=" font-black text-2xl">Hack Growth</p>
                    <p className="text-[#737373] text-center">Overcame any hurdle or any other problem.</p>
                </div>
             
            </div>
    </div>

)
}
export default Services;