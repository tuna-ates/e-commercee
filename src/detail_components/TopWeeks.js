
const TopWeeks = () => {

    return (
        <div className="w-[100%] flex items-center justify-center h-[70vh] " >
            <div className=" flex gap-3 w-[80%] h-[100%]  ">
                <div className=" flex-1 flex items-end justify-start  " style={{ backgroundImage: "url(" + "./img/topWeek1.jpg" + ")" }}>
                    <div className=" py-5  flex items-center justify-center  flex-col gap-2 bg-[#2D8BC0BF]  w-[60%] h-[40%] hover:w-[100%] hover:h-[100%]">
                        <p className="w-[60%] font-bold text-white mr-3">Top Product Of the Week </p>
                        <button className=" w-[60%] border-solid font-bold mr-3 text-white rounded-md px-4 py-2 border-white border-2 ">EXPLORE ITEMS</button>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-3">
                <div className=" flex-1 flex items-end justify-start  " style={{ backgroundImage: "url(" + "./img/topWeek3.jpg" + ")" }}>
                    <div className=" py-5  flex items-center justify-center  flex-col gap-2 bg-[#2D8BC0BF]  w-[60%] h-[50%] hover:w-[100%] hover:h-[100%]">
                        <p className="w-[60%] font-bold text-white mr-3">Top Product Of the Week </p>
                        <button className=" w-[60%] border-solid font-bold mr-3 text-white rounded-md px-4 py-2 border-white border-2 ">EXPLORE ITEMS</button>
                    </div>
                </div>
                <div className=" flex-1 flex items-end justify-start  " style={{ backgroundImage: "url(" + "./img/topWeek2.jpg" + ")" }}>
                    <div className=" py-5  flex items-center justify-center  flex-col gap-2 bg-[#2D8BC0BF]  w-[60%] h-[55%] hover:w-[100%] hover:h-[100%]">
                        <p className="w-[60%] font-bold text-white mr-3">Top Product Of the Week </p>
                        <button className=" w-[60%] border-solid font-bold mr-3 text-white rounded-md px-4 py-2 border-white border-2 ">EXPLORE ITEMS</button>
                    </div>
                </div>
              
                </div>

            </div>
        </div>

    )

}
export default TopWeeks;