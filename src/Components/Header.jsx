import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/Images/logo.png";
import { HiOutlineSearch, HiMoon, HiSun } from "react-icons/hi";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
    const [toggle,setToggle]= useState(true);
    const {theme,setTheme}=useContext(ThemeContext);
    useEffect(()=>{
        console.log("the theme is ",theme)

    })

    
  return (
    <>
      <div className="flex items-center p-3">
        <img src={logo} alt="" width={60} height={60} />
        <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
          <HiOutlineSearch />
          <input type="text" className="bg-transparent outline-none mx-5" placeholder="Search Games" />
        </div>
        {theme=='light' ?<HiMoon className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer" onClick={()=>{setTheme('dark');localStorage.setItem('theme','dark')}} /> :<HiSun className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer" onClick={()=>{setTheme('light');localStorage.setItem('theme','light')}}/> }
        
        
      </div>
    </>
  );
}

export default Header;
