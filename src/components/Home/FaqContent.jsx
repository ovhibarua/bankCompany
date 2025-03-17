import React from "react";
import { motion } from "motion/react";
import Image from "../Image";

const FaqContent = ({ title, content, img }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      viewport={{ once: true }}
      className="p-8 lg:p-12 border-[1px] border-grey-15 bg-grey-11 rounded-[14px]"
    >
      <div className="flex flex-col sm:flex-row items-center gap-5 pb-7 mb-7 border-b-[1px] border-grey-15">
        <div className="w-14 h-14 rounded-full overflow-hidden border-[3px] border-green-60">
          <Image addImg={img} />
        </div>
        <h6 className="w-full sm:w-[90%] text-center sm:text-start">{title}</h6>
      </div>
      <p>{content}</p>
    </motion.div>
  );
};

export default FaqContent;
