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
    <footer className="p-14 bg-grey-11">
      <div className="container mx-auto">
        <div className="pb-12 mb-12 border-b-[1px] border-grey-15 flex flex-col justify-center items-center">
          <div className="mb-12">
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
        <div className="pb-12 mb-12 border-b-[1px] border-grey-15 flex flex-col justify-center items-center">
          <div className="flex items-center gap-4">
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
        <div className="bg-grey-10 border-[1px] border-grey-15 rounded-full pl-3 pr-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
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
          <p>YourBank All Rights Reserved</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
