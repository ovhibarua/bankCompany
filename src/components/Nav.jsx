import React from "react";
import Image from "./Image";
import logo from "../../public/assets/headerLogo.png";
import Button from "./Button";
import cornerImg from "../../public/assets/bigCorner.png";

const Nav = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center px-8 mt-12 py-5 rounded-full bg-grey-11 border-[1px] border-grey-15">
        <div>
          <Image addImg={logo} />
        </div>
        <div>
          <ul className="flex items-center gap-10">
            <li className="cursor-pointer hover:text-green-60">Home</li>
            <li className="cursor-pointer hover:text-green-60">Careers</li>
            <li className="cursor-pointer hover:text-green-60">About</li>
            <li className="cursor-pointer hover:text-green-60">Security</li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <span className="cursor-pointer">Sign Up</span>
          <Button addText={`Login`} />
        </div>
        <div className="fixed top-0 left-0 -z-50">
          <Image addImg={cornerImg} />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
