import { Icon } from "@iconify/react";
const Header = () => {
  return (
    <div className=" flex w-[100vw] ">
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

      <div></div>
    </div>
  );
};
export default Header;
