import { Icon } from "@iconify/react";

const ContactPage = () => {
    return (
        <div className=" w-[100%] flex flex-col justify-center items-center">
            <div className=" w-[100%] flex items-center justify-center my-5 px-6">
                <div className=" overflow-visible  relative flex   w-[95%] rounded-xl items-center justify-center ozel:flex-col ozel:w-[88%]  ">

                    <div className="flex flex-col flex-1 pl-[50px] gap-4 ozel:text-center ozel:items-center">
                        <p className="text-[#252B42] font-extrabold text-xl">CONTACT US</p>
                        <p className=" text-[#252B42] w-[70%] font-[900] text-[64px] ozel:text-[35px]">Get in touch today!</p>
                        <p className="text-[#737373] w-[55%] font-[500]" >We know how large objects will act,but things on a small scale.</p>
                        <p className=" text-2xl font-bold text-[#252B42] ">Phone ; +451 215 215 </p>
                        <p className=" text-2xl font-bold text-[#252B42] ">Fax : +451 215 215 </p>
                        <div className=" flex gap-6 items-center py-2">
                            <Icon
                                icon="mingcute:twitter-fill"
                                className=" text-3xl cursor-pointer  text-[#252B42]"
                            />
                            <Icon
                                icon="ic:outline-facebook"
                                className=" text-3xl cursor-pointer  text-[#252B42]"
                            />
                            <Icon
                                icon="ri:instagram-line"
                                className=" text-3xl cursor-pointer  text-[#252B42]"
                            />
                            <svg className=" cursor-pointer text-[#252B42]" xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.8rem" viewBox="0 0 128 128"><path fill="#252B42" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"></path><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path></svg>

                        </div>
                    </div>

                    <div className="  flex-1 z-10 overflow-visible mr-[-50px] " >
                        <img className=" w-[90%] " src={`./img/none2.png`} />
                    </div>



                </div>
            </div>
            <div className=" w-[100%] flex flex-col gap-8 justify-center items-center my-20">
                <div className=" flex flex-col gap-5 items-center justify-center w-[80%] py-20 ozel:items-center ozel:text-center">
                    <p className=" text-sm font-bold text-[#252B42] ">VISIT OUR OFFICE</p>
                    <div className=" flex gap-1 flex-col items-center justify-center">
                        <p className=" text-[40px] text-[#252B42] font-bold ">We help small businesses</p>
                        <p className=" text-[40px] text-[#252B42] font-bold">with big ideas</p>

                    </div>

                </div>
                <div className=" w-[70%] flex ozel:flex-col ">
                    <div className=" flex-1 flex flex-col gap-3 items-center justify-center py-20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" viewBox="0 0 16 16" ><path fill="none" stroke="#23A6F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M1.75 1.75c0 8.5 4 12.5 12.5 12.5v-4l-3.5-1l-1 1.5c-2 0-4.5-2.5-4.5-4.5l1.5-1l-1-3.5z"></path></svg>
                        <div className=" flex flex-col gap-1">
                            <p className=" text-sm font-bold text-[#252B42]">georgia.young@example.com</p>
                            <p className=" text-sm font-bold text-[#252B42]">georgia.young@ple.com</p>
                        </div>
                        <p className=" text-sm font-bold text-[#252B42]">Get Support</p>
                        <button className=" text-[#23A6F0] border-solid border-[#23A6F0] border-[1px] rounded-2xl py-3 px-5 cursor-pointer">Submit Request</button>
                    </div>
                    <div className=" flex-1 flex flex-col gap-3 items-center justify-center py-20 bg-[#252B42]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" viewBox="0 0 384 512" ><path fill="#23A6F0" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0M192 128a64 64 0 1 1 0 128a64 64 0 1 1 0-128"></path></svg>
                        <div className=" flex flex-col gap-1">
                            <p className="  text-sm font-bold text-white">georgia.young@example.com</p>
                            <p className="  text-sm font-bold text-white">georgia.young@ple.com</p>
                        </div>
                        <p className="  text-sm font-bold text-white">Get Support</p>
                        <button className=" text-[#23A6F0] border-solid border-[#23A6F0] border-[1px] rounded-2xl py-3 px-5 cursor-pointer">Submit Request</button>
                    </div>
                    <div className=" flex-1 flex flex-col gap-3 items-center justify-center py-20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" viewBox="0 0 20 20" ><g fill="#23A6F0" fillRule="evenodd" clipRule="evenodd"><path d="M17 3.5H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-13 11v-9h12v9z"></path><path d="m17.648 5.261l-7.045 6a1 1 0 0 1-1.301-.004l-6.955-6C1.645 4.652 2.073 3.5 3 3.5h14c.93 0 1.356 1.158.648 1.761M5.69 5.5l4.27 3.683L14.282 5.5z"></path></g></svg>
                        <div className=" flex flex-col gap-1">
                            <p className=" text-sm font-bold text-[#252B42]">georgia.young@example.com</p>
                            <p className=" text-sm font-bold text-[#252B42]">georgia.young@ple.com</p>
                        </div>
                        <p className=" text-sm font-bold text-[#252B42]">Get Support</p>
                        <button className=" text-[#23A6F0] border-solid border-[#23A6F0] border-[1px] rounded-2xl py-3 px-5 cursor-pointer">Submit Request</button>
                    </div>
                </div>

            </div>
            <div className=" flex w-[100%] justify-center items-center flex-col my-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="4rem" viewBox="0 0 14 14" ><path fill="none" stroke="#4faee5" strokeLinecap="round" strokeLinejoin="round" d="m4 6.5l3 3l3-3m-3-6v9m-3.5 4h7"></path></svg>
                <div className=" flex flex-col gap-5 items-center justify-center w-[80%] py-10">
                    <p className=" text-sm font-bold text-[#252B42] ">WE Can't WAIT TO MEET YOU</p>
                    <div className=" flex gap-3 flex-col items-center justify-center">
                        <p className=" text-[40px] text-[#252B42] font-bold ">Let’s Talk</p>
                        <button className=" hover:bg-[#4faee5] hover:scale-[.9] bg-[#23A6F0] font-extrabold rounded-lg py-3 px-5  text-md  text-white   ">Try it free now </button>


                    </div>

                </div>
            </div>
        </div>
    )
}
export default ContactPage;