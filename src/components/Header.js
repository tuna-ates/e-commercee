import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import MainDropdown from "../detail_components/MainDropdown";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../store/store";
import { FetchStates } from "../store/reducers/globalReducer";
import Gravatar from "react-gravatar";


const Header = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const email = useSelector(store => store.user.email)
  const fetchStatus = useSelector(store => store.user.fetchState)
  const history = useHistory();

  const pushSignup = () => {
    history.push("/signup");
  }

  const pushLogin = () => {
    history.push("/login")
  }

  return (
    <div className=" flex  flex-col " >
      <div className=" md:hidden darkHeader bg-[#252B42]  w-[100%] py-3 flex justify-between px-8">

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

      {/* <div className="flex w-[100%] justify-between items-center py-4 px-8 " >
        <div className="flex justify-start "><p className="text-[#252B42] text-2xl font-bold w-[20%] ">Bandage</p></div>
        <div className="flex justify-between w-[80%]  ">
          <div className="flex gap-4 text-sm  text-[#737373] font-bold items-center lg:hidden  ">
            <a ><NavLink className="nav-link" to="/" exact>Home</NavLink></a>
            <a className="flex items-center gap-1">
              <NavLink className="nav-link" to="/productList" exact>Shop</NavLink>

              <div className="dropdown flex flex-col">
                <MainDropdown show={show} setShow={setShow} show1={show1} setShow1={setShow1} />

              </div>
            </a>
            <a><NavLink className="nav-link" to="/about" exact>About</NavLink></a>
            <a>Blog</a>
            <a><NavLink className="nav-link" to="/contact" exact>Contact</NavLink></a>
            <a><NavLink className="nav-link" to="/team" exact>Team</NavLink></a>
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
      </div> */}

      <div className="flex w-[100%] justify-between gap-8 items-center py-4 px-8 md:flex-col ozel2:gap-4 " >
        <div className="flex justify-between items-center ozel:w-[50%] ozel:mt-6 ozel:gap-8 ozel:items-center ">
          <p className="text-[#252B42] text-2xl font-bold ozel:text-3xl  ">Bandage</p>
          <div className=" hidden ozel:flex ozel:gap-4">
            <div>
              <Icon icon="material-symbols:search" className=" text-2xl hover:text-xl cursor-pointer" />
            </div>
            <div className="">
              <Icon icon="simple-line-icons:basket" className=" text-2xl hover:text-xl cursor-pointer" />
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className=" text-2xl" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="black" d="M3 4h18v2H3zm6 7h12v2H9zm-6 7h18v2H3z"></path></svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between ozel:my-6   ">
          <div className="flex gap-6 ozel3:gap-2 ozel3:text-base ozel:text-2xl text-lg  text-[#737373] font-bold items-center md:flex-col md:items-center md:justify-center    ">
            <a ><NavLink className="nav-link" to="/" exact>Home</NavLink></a>
            <a className="flex items-center gap-1">
              <NavLink className="nav-link" to="/productList" exact>Shop</NavLink>

              <div className="dropdown flex flex-col md:hidden">
                <MainDropdown show={show} setShow={setShow} show1={show1} setShow1={setShow1} />

              </div>
            </a>
            <a><NavLink className="nav-link" to="/about" exact>About</NavLink></a>
            <a>Blog</a>
            <a><NavLink className="nav-link" to="/contact" exact>Contact</NavLink></a>
            <a><NavLink className="nav-link" to="/team" exact>Team</NavLink></a>
          </div>
        </div>
        <div className="flex justify-end gap-6 md:hidden ozel3:gap-1 ">
          <div className="flex items-center text-[#23A6F0] text-sm font-bold gap-1">
            {fetchStatus == FetchStates.fetched ? <><p className="cursor-pointer hover:scale-[0.9] text-[#3079a3] text-base ozel3:text-sm mr-3">{email}</p> <Gravatar className="rounded-lg mr-10" email={email} size={30} /> </> : <>
              <Icon icon="mdi:person-outline" />
              <p className="cursor-pointer hover:scale-[0.9] text-base ozel3:text-sm" onClick={pushLogin}>Login</p>
              /
              <p className="cursor-pointer hover:scale-[0.9] text-base ozel3:text-sm " onClick={pushSignup} >Register</p>
            </>}

          </div>
          <div className="flex gap-5 items-center text-[#23A6F0] ozel3:gap-3   font-bold ">
            <div>
              <Icon icon="material-symbols:search" className=" text-lg hover:text-xl cursor-pointer" />
            </div>
            <div className="flex items-center text-sm gap-1">
              <Icon icon="simple-line-icons:basket" className=" text-lg hover:text-xl cursor-pointer" />
              0
            </div>
            <div className="flex items-center text-sm gap-1">
              <Icon icon="material-symbols:favorite-outline" className=" text-lg hover:text-xl cursor-pointer" />
              0
            </div>

          </div>
        </div>
      </div>







      <div className="w-[100%] flex flex-col justify-center items-center sm:visible">

      </div>
    </div>
  );
};
export default Header;
