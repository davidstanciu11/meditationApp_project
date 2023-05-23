import Logo from "../assets/img/logo/lotus_logo.png";
import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="pb-[50px]">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-y-5">
          <a href="#" className="flex items-center">
            <img src={Logo} alt="logo" className="w-8 lg:mb-1 lg:w-11" />
            <h2 className="text-sm lg:text-xl ml-1">EasyMind.</h2>
          </a>
          <p>&copy; 2023. All rights reserved.</p>
          <div className="flex gap-x-4 text-orange text-lg">
            <div className="w-[50px] h-[50px] bg-white rounded-full flex 
            justify-center items-center shadow-primary hover:text-paragraph transition cursor-pointer">
              <FaYoutube />
            </div>
            <div className="w-[50px] h-[50px] bg-white rounded-full flex 
            justify-center items-center shadow-primary hover:text-paragraph cursor-pointer">
              <FaInstagram />
            </div>
            <div className="w-[50px] h-[50px] bg-white rounded-full flex 
            justify-center items-center shadow-primary hover:text-paragraph transition cursor-pointer">
              <FaGithub />
            </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
