import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavbarMob from "./NavbarMob";
import Logo from "../assets/lotus_logo.png";
import "./Header.style.css";

function Header() {
  const [header, setHeader] = useState(false);
  return (
    <>
      <header
        className={`${
          header ? "top-0" : "top-9"
        } fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px] 
        mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all 
        duration-500 flex items-center justify-between`}
      >
        <div className="flex items-center">
          <a href="#" className={"flex items-center"}>
            <img src={Logo} alt="logo" className="logo_png" />
            <h2 className="logo_name">EasyMind.</h2>
          </a>
          <div className="hidden lg:flex">
            <Navbar />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex gap-x-4 lg:gap-x-9">
            <button className="text-heading font-medium 
            text-sm lg:text-base hover:text-orange transition">
              btn1
            </button>
            <button className="btn btn-md lg:px-[30px] bg-orange-100 
            border border-orange text-orange font-medium text-sm lg:text-base hover:bg">
              btn2
            </button>
          </div>
          <NavbarMob />
        </div>
      </header>
    </>
  );
}

export default Header;
