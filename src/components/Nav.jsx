import React, { useState } from "react";
import Image from "./Image";
import logo from "../../public/assets/case/headerLogo.png";
import hamMenu from "../../public/assets/case/hamMenu.png";
import close from "../../public/assets/case/close.png";
import Button from "./Button";
import cornerImg from "../../public/assets/bigCorner.png";
import { motion, AnimatePresence } from "motion/react";
import StaticNav from "./StaticNav";

const Nav = () => {
  const [toggle, setToggle] = useState(true);
  const humToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="container mx-auto px-4 xl:px-0">
      <nav className="relative flex justify-between items-center pl-5 pr-3 lg:px-8 mt-8 lg:mt-12 py-2.5 lg:py-5 rounded-full bg-grey-11 border-[1px] border-grey-15">
        <AnimatePresence initial={false}>
          <div
            className={`absolute ${
              toggle ? "hidden" : "block"
            } mt-3 top-full left-0 z-50 bg-grey-11 block lg:hidden p-6 w-full rounded-3xl border-[1px] border-grey-15`}
          >
            <StaticNav />
          </div>
        </AnimatePresence>
        <div className="w-24 sm:w-28 lg:w-fit">
          <Image addImg={logo} />
        </div>
        <motion.div
          onClick={humToggle}
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.8 }}
          className="block lg:hidden p-1.5 w-10 h-10 bg-green-60 rounded-full cursor-pointer"
        >
          <Image addImg={toggle ? hamMenu : close} />
        </motion.div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-10">
            <li className="cursor-pointer hover:text-green-60">Home</li>
            <li className="cursor-pointer hover:text-green-60">Careers</li>
            <li className="cursor-pointer hover:text-green-60">About</li>
            <li className="cursor-pointer hover:text-green-60">Security</li>
          </ul>
        </div>
        <div className="items-center gap-5 hidden lg:flex">
          <span className="cursor-pointer">Sign Up</span>
          <Button addClass={`px-8 bg-green-60`} addText={`Login`} />
        </div>
        <div className="fixed top-0 left-0 -z-50">
          <Image addImg={cornerImg} />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
