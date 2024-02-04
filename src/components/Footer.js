
import { Icon } from "@iconify/react";
const Footer=()=>{
    return <div className=" flex flex-col py-7 justify-center items-center ozel:items-center  ">
        <div className="w-[90%]">
        <div className="flex justify-between py-5 ozel:flex-col ozel:justify-center ozel:items-center ozel:gap-4">
          <h3 className="text-[24px] font-bold text-[#252B42] ozel:text-[42px]">Bandage</h3>
          <div className="flex gap-5 ">
          <Icon
            icon="ic:outline-facebook"
            className=" cursor-pointer text-[30px] hover:text-[35px] ozel:text-[40px] text-[#23A6F0]"
          />
           <Icon
            icon="ri:instagram-line"
            className=" cursor-pointer  text-[30px] hover:text-[35px] ozel:text-[40px] text-[#23A6F0]"
          />
           <Icon
            icon="mingcute:twitter-fill"
            className=" cursor-pointer  text-[30px] hover:text-[35px] ozel:text-[40px] text-[#23A6F0]"
          />
          </div>
        </div>
        </div>
        <div className="flex gap-8 items-center justify-between w-[90%] py-6 ozel:flex-col ozel:items-center ozel:justify-center">
            <div className="flex flex-col gap-2 w-[35%] ">
                <p className="font-bold pb-2 ozel:text-2xl">Company Info</p>
                <p className="text-[#737373] font-bold ozel:text-lg">About Us</p>
                <p className="text-[#737373] font-bold ozel:text-lg">Carrier</p>
                <p className="text-[#737373] font-bold ozel:text-lg">We are hiring</p>
                <p className="text-[#737373] font-bold ozel:text-lg">Blog</p>
            </div>
            <div className="flex flex-col gap-2 w-[35%] ">
                <p className="font-bold pb-2 ozel:text-2xl">Legal</p>
                <p className="text-[#737373] font-bold ozel:text-lg">About Us</p>
                <p className="text-[#737373] font-bold ozel:text-lg">Carrier</p>
                <p className="text-[#737373] font-bold ozel:text-lg">We are hiring</p>
                <p className="text-[#737373] font-bold ozel:text-lg">Blog</p>
            </div>
            <div className="flex flex-col gap-2 w-[35%] ">
            <p className="font-bold pb-2 ozel:text-2xl">Features</p>
                <p className="text-[#737373] font-bold ozel:text-lg">Business Marketing</p>
                <p className="text-[#737373] font-bold ozel:text-lg">User Analytic</p>
                <p className="text-[#737373] font-bold ozel:text-lg">Live Chat</p>
                <p className="text-[#737373] font-bold ozel:text-lg">Unlimited Support</p>
            </div>
            <div className="flex flex-col gap-2 w-[35%] ">
            <p className="font-bold pb-2 ozel:text-2xl">Resources</p>
                <p className="text-[#737373] font-bold ozel:text-lg">IOS & Android</p>
                <p className="text-[#737373] font-bold ozel:text-lg">Watch a Demo</p>
                <p className="text-[#737373] font-bold ozel:text-lg">Customers</p>
                <p className="text-[#737373] font-bold ozel:text-lg">API</p>
            </div>
            <div className="flex flex-col gap-4 w-[40%] ">
            <p className="font-bold pb-2 ozel:text-2xl">Get In Touch</p>
            <div className="flex ozel:w-[100%] ">
                <input placeholder="Your Email" className="   border-solid border-2 rounded-s-lg py-4 px-2 rounded-sm border-[#a19f9f]"></input>
                <button className="  bg-[#23A6F0] text-white rounded-e-lg px-3 ">Subscripbe</button>
            </div>
            <div><p className="text-[#737373] font-bold">Lorem imp sum dolor Amit</p></div>
            </div>
        </div>
        <div className=" w-[90%] ozel:w-[100%] ozel:px-1 flex justify-between items-center py-6 ozel:justify-end ozel:text-sm">
            <p className="text-[#737373] font-bold ">Made With Love By Figmaland All Right Reserved </p>
            </div>
        
    </div>
    
    }
    export default Footer;