import React from "react";
import subContainer from "../../../public/assets/SubContainer.png";
import Button from "../Button";
import Image from "../Image";
import india from "../../../public/assets/india_cur.png";
import usa from "../../../public/assets/usa_cur.png";
import arrow from "../../../public/assets/AbstractDesign.png";
import dollar from "../../../public/assets/dollar.png";
import euro from "../../../public/assets/euro.png";
import bitCoin from "../../../public/assets/bitCoin.png";
import bit from "../../../public/assets/bit.png";
import { motion } from "motion/react";

const cur = [dollar, euro, bitCoin, bit];

const HeroBnnr = () => {
  return (
    <div className="flex flex-col items-center w-1/2 relative z-40">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="p-8 relative z-0 rounded-[10px] border-[1px] border-grey-15 bgClr mb-4 bg-grey-10"
      >
        <p className="text-white mb-4 font-medium">Your Transactions</p>
        <div className="relative z-0 h-46 mb-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex z-10 items-center bg-grey-11 justify-between w-96 p-3 rounded-xl border-[1px] border-grey-15"
          >
            <div className="flex items-center gap-2">
              <Image addImg={subContainer} />
              <div className="flex flex-col">
                <span className="text-[16px]">Transaction</span>
                <p className="text-white">Joel Kenley</p>
              </div>
            </div>
            <h6>-$68.00</h6>
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex -z-10 top-13 scale-90 bg-grey-11 opacity-40 absolute items-center justify-between w-96 p-3 rounded-xl border-[1px] border-grey-15"
          >
            <div className="flex items-center gap-2">
              <Image addImg={subContainer} />
              <div className="flex flex-col">
                <span className="text-[16px]">Transaction</span>
                <p className="text-white">Mark Smith</p>
              </div>
            </div>
            <h6>-$68.00</h6>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex -z-20 top-25 scale-80 bg-grey-11 opacity-30 absolute items-center justify-between w-96 p-3 rounded-xl border-[1px] border-grey-15"
          >
            <div className="flex items-center gap-2">
              <Image addImg={subContainer} />
              <div className="flex flex-col">
                <span className="text-[16px]">Transaction</span>
                <p className="text-white">Lenen Roy</p>
              </div>
            </div>
            <h6>-$68.00</h6>
          </motion.div>
        </div>
        <p className="text-white mb-4 font-medium">Money Exchange</p>
        <div className="border-[1px] border-grey-15 rounded-xl mb-6">
          <div className="flex items-center">
            <div className="border-r-[1px] w-1/2 border-b-[1px] border-grey-15 p-5">
              <div className="flex items-center gap-3 mb-2">
                <div>
                  <Image addImg={india} />
                </div>
                <span className="text-[15px] font-normal">INR</span>
              </div>
              <span className="text-[14px] font-light text-grey-75 ">
                Indian Rupees
              </span>
            </div>
            <div className=" w-1/2 border-b-[1px] border-grey-15 p-5">
              <div className="flex items-center gap-3 mb-2">
                <div>
                  <Image addImg={usa} />
                </div>
                <span className="text-[15px] font-normal">USD</span>
              </div>
              <span className="text-[14px] font-light text-grey-75">
                United States Dollar
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="border-r-[1px] w-1/2 border-grey-15 p-5">
              <input
                className="focus:outline-0 text-[18px] font-medium placeholder:text-[18px]"
                placeholder="Currency..."
                type="text"
                name="text"
                id="text"
              />
              {/* <span className="text-[18px] font-medium">5,0000</span> */}
            </div>
            <div className=" w-1/2 p-5">
              <span className="text-[18px] font-medium">12.00</span>
            </div>
          </div>
        </div>
        <div>
          <Button
            addText={`Exchange`}
            addClass={`text-green-65 text-[16px] bg-[#22251B] w-full py-2 hover:bg-green-65 hover:text-[#22251B] duration-100`}
          />
        </div>
      </motion.div>
      <div className="bg-[#22251B] rounded-full pl-5 pr-2 py-2 flex items-center gap-3">
        <span className="text-[16px] font-normal">Supported Currency</span>
        <div className="rounded-full bg-grey-10 p-2 flex items-center gap-1.5">
          {cur.map((item, id) => (
            <div
              className="hover:border-[1px] hover:border-green-60 border-[1px] border-grey-10 cursor-pointer rounded-full"
              key={id}
            >
              <Image addImg={item} />
            </div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute -top-12 left-24 w-fit flex z-10 items-center bg-[#22251B] justify-between p-3 rounded-xl border-[1px] border-grey-15"
      >
        <div className="flex items-center gap-3">
          <Image addImg={subContainer} />
          <div className="flex flex-col">
            <p className="text-white">+$5000,00</p>
            <span className="text-[14px]">Monthly Income</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -200, y: 200, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 3 }}
        className="absolute -right-4 top-0 -z-10"
      >
        <Image addClass={`w-[350px] h-350px`} addImg={arrow} />
      </motion.div>
    </div>
  );
};

export default HeroBnnr;
