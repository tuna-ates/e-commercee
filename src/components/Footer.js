
import { Icon } from "@iconify/react";
const Footer=()=>{
    return <div className=" flex flex-col py-7 justify-center items-center">
        <div className="w-[80%]">
        <div className="flex justify-between py-5">
          <h3 className="text-[24px] font-bold text-[#252B42]">Bandage</h3>
          <div className="flex gap-5 ">
          <Icon
            icon="ic:outline-facebook"
            className=" cursor-pointer text-[30px] hover:text-[35px] text-[#23A6F0]"
          />
           <Icon
            icon="ri:instagram-line"
            className=" cursor-pointer  text-[30px] hover:text-[35px] text-[#23A6F0]"
          />
           <Icon
            icon="mingcute:twitter-fill"
            className=" cursor-pointer  text-[30px] hover:text-[35px] text-[#23A6F0]"
          />
          </div>
        </div>
        </div>
        <div className="flex gap-8 items-center justify-between w-[80%] py-6">
            <div className="flex flex-col gap-2">
                <p className="font-bold pb-2">Company Info</p>
                <p className="text-[#737373] font-bold">About Us</p>
                <p className="text-[#737373] font-bold">Carrier</p>
                <p className="text-[#737373] font-bold">We are hiring</p>
                <p className="text-[#737373] font-bold">Blog</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-bold pb-2">Legal</p>
                <p className="text-[#737373] font-bold">About Us</p>
                <p className="text-[#737373] font-bold">Carrier</p>
                <p className="text-[#737373] font-bold">We are hiring</p>
                <p className="text-[#737373] font-bold">Blog</p>
            </div>
            <div className="flex flex-col gap-2">
            <p className="font-bold pb-2">Features</p>
                <p className="text-[#737373] font-bold">Business Marketing</p>
                <p className="text-[#737373] font-bold">User Analytic</p>
                <p className="text-[#737373] font-bold">Live Chat</p>
                <p className="text-[#737373] font-bold">Unlimited Support</p>
            </div>
            <div className="flex flex-col gap-2">
            <p className="font-bold pb-2">Resources</p>
                <p className="text-[#737373] font-bold">IOS & Android</p>
                <p className="text-[#737373] font-bold">Watch a Demo</p>
                <p className="text-[#737373] font-bold">Customers</p>
                <p className="text-[#737373] font-bold">API</p>
            </div>
            <div className="flex flex-col gap-4">
            <p className="font-bold pb-2">Get In Touch</p>
            <div className="flex">
                <input placeholder="Your Email" className=" border-solid border-2 rounded-s-lg py-4 px-2 rounded-sm border-[#a19f9f]"></input>
                <button className=" bg-[#23A6F0] text-white rounded-e-lg px-3">Subscripbe</button>
            </div>
            <div><p className="text-[#737373] font-bold">Lorem imp sum dolor Amit</p></div>
            </div>
        </div>
        <div className="w-[80%] flex justify-between items-center py-6"><p className="text-[#737373] font-bold">Made With Love By Figmaland All Right Reserved </p></div>
        
    </div>
    
    }
    export default Footer;