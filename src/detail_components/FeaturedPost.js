
import { Icon } from '@iconify/react';
const FeaturedPost = (props) => {
    const { item } = props;

    return (
        <div className=" relative flex ozel:flex-col ozel:justify-center ozel:items-center">
            <img className=" w-[40%] ozel:w-[85%] ozel:h-[30rem]" src={item.img} />
            <div className=" flex flex-col gap-3 w-[60%] ozel:w-[90%]  px-12 justify-start py-6">
                <p className=" text-[#23A6F0] font-bold">{item.title1}</p>
                <p className=" text-lg font-extrabold">{item.title2}</p>
                <p className="text-[#737373]">{item.about1}</p>
                <div className=" flex gap-1 items-center">
                    <Icon icon="material-symbols:download" />
                    <p className=" text-[#737373] font-bold"> 15 Sales</p>
                </div>
                <div className=' flex gap-2'>
                    <p className='text-[#BDBDBD]'>{item.price1}</p>
                    <p className='text-[#23856D] font-bold'>{item.price1}</p>
                </div>
                <img className=' w-24' src={item.productColor} />
                <div className=' flex gap-2 ozel3:flex-col ozel:flex-col ozel:w-[25%] ozel:justify-start ozel:items-start  '>

                    <div className="  flex gap-1 flex-1 items-center justify-center">
                        <Icon className='text-[#23A6F0] font-bold' icon="lets-icons:clock" />
                        <p className=" text-[#737373] font-bold"> 22hour..</p>
                    </div>

                    <div className="  flex gap-1 flex-1 items-center justify-center">
                        <Icon className='text-[#E77C40] font-bold' icon="gravity-ui:chart-line" />
                        <p className=" text-[#737373] font-bold">64lesson</p>
                    </div>

                    <div className="  flex gap-1 flex-1 items-center justify-center">
                        <Icon className='text-[#23856D] font-bold' icon="ooui:chart" />
                        <p className=" text-[#737373] font-bold">Progress</p>
                    </div>

                </div>

                <button className=" w-[70%] ozel:w-[90%] font-bold mt-7 hover:opacity-50 py-3 px-8 text-[#23A6F0] border-solid rounded-3xl border-2 border-[#23A6F0] ozel:text-sm">LOAD MORE  </button>
            </div>
        </div>
    )
}
export default FeaturedPost;