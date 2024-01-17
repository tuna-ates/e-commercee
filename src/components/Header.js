import { Icon } from "@iconify/react";
import { useState } from "react";
import MainDropdown from "../auxiliary_component/MainDropdown";


const Header = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

 

  return (
    <div className=" flex w-[100vw] flex-col ">
      <div className="darkHeader bg-[#252B42] flex justify-between w-[100%] py-3 px-6">
        <div className=" text-white flex items-center gap-4  ">
          <div className=" text-white flex items-center gap-1 ">
            <div>
              <Icon icon="iconoir:phone" />
            </div>
            <p>(225) 555-0118</p>
          </div>
          <div className="flex items-center ">
            <Icon icon="uiw:mail-o" />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>
        <div className="bg-[#252B42] text-[#FFFFFF]">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className=" flex gap-2 items-center text-[#FFFFFF]  ">
          <p>Follow Us : </p>
          <Icon
            icon="ri:instagram-line"
            className=" cursor-pointer hover:text-lg"
          />
          <Icon icon="uil:youtube" className=" cursor-pointer hover:text-lg" />

          <Icon
            icon="ic:outline-facebook"
            className=" cursor-pointer hover:text-lg"
          />
          <Icon
            icon="mingcute:twitter-fill"
            className=" cursor-pointer hover:text-lg"
          />
        </div>
      </div>

      <div className="flex w-[100%] justify-between items-center py-4 px-6 ">
        <div className="flex justify-start "><p className="text-[#252B42] text-2xl font-bold w-[20%] ">Bandage</p></div>
        <div className="flex justify-between w-[80%]  ">
          <div className="flex gap-4 text-sm text-[#737373] font-bold items-center ">
            <a>Home</a>
            <a className="flex items-center gap-1">
              Shop

              <div className="dropdown flex flex-col">
              <MainDropdown show={show} setShow={setShow} show1={show1} setShow1={setShow1}/>
                
              </div>
            </a>
            <a>About</a>
            <a>Blog</a>
            <a>Contact</a>
            <a>Pages</a>
          </div>
          <div className="flex justify-end gap-4 w-[25%]">
            <div className="flex items-center text-[#23A6F0] text-sm font-bold gap-1">
              <Icon icon="mdi:person-outline" />
              <p className="cursor-pointer hover:scale-[0.9]">Login</p>
              /
              <p className="cursor-pointer hover:scale-[0.9]" >Register</p>
            </div>
            <div className="flex gap-5 items-center text-[#23A6F0]  font-bold">
              <div>
                <Icon icon="material-symbols:search" className=" hover:text-xl cursor-pointer" />
              </div>
              <div className="flex items-center text-sm gap-1">
                <Icon icon="simple-line-icons:basket" className=" hover:text-xl cursor-pointer" />
                0
              </div>
              <div className="flex items-center text-sm gap-1">
                <Icon icon="material-symbols:favorite-outline" className=" hover:text-xl cursor-pointer" />
                0
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
