import React from "react";
import Image from "./Image";
import logo from "../../public/assets/case/headerLogo.png";
import envlop from "../../public/assets/case/envlope.png";
import phone from "../../public/assets/case/phone.png";
import location from "../../public/assets/case/location.png";
import face from "../../public/assets/case/face.png";
import twitter from "../../public/assets/case/twitter.png";
import linked from "../../public/assets/case/linked.png";

const Footer = () => {
  return (
    <footer className="p-4 py-8 lg:py-14 lg:p-14 bg-grey-11">
      <div className="container mx-auto">
        <div className="pb-8 lg:pb-12 mb-8 lg:mb-12 border-b-[1px] border-grey-15 flex flex-col justify-center items-center">
          <div className="mb-8 lg:mb-12 w-24 sm:w-32 lg:w-fit">
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
        </div>
        <div className="pb-8 lg:pb-12 mb-16 lg:mb-12 border-b-[1px] border-grey-15 flex flex-col justify-center items-center">
          <div className="flex justify-center md:justify-start items-center gap-4 flex-wrap">
            <p className="flex items-center gap-1 text-white">
              <span>
                <Image addImg={envlop} />
              </span>
              hello@skillbirdge.com
            </p>
            <p className="flex items-center gap-1 text-white">
              <span>
                <Image addImg={phone} />
              </span>
              +91 91813 23 2309
            </p>
            <p className="flex items-center gap-1 text-white">
              <span>
                <Image addImg={location} />
              </span>
              Somewhere in the World
            </p>
          </div>
        </div>
        <div className="bg-grey-10 border-[1px] border-grey-15 rounded-2xl md:rounded-full pl-8 md:pl-3 pr-8 relative py-3 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
          <div className="flex items-center gap-4 absolute md:static top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 md:-translate-y-0">
            <div className="bg-green-60 rounded-full p-3.5 w-fit">
              <Image addImg={face} />
            </div>
            <div className="bg-green-60 rounded-full p-3.5 w-fit">
              <Image addImg={twitter} />
            </div>
            <div className="bg-green-60 rounded-full p-3.5 w-fit">
              <Image addImg={linked} />
            </div>
          </div>
          <p className="mt-12 md:mt-0">YourBank All Rights Reserved</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
