import React from "react";
import Image from "../Image";
import { motion } from "motion/react";

const FeaturesBox = ({ title, img, content }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="p-12 rounded-xl border-[1px] border-grey-15 bg-grey-11"
    >
      <div className="flex justify-between items-center mb-7">
        <h5>{title}</h5>
        <Image addImg={img} />
      </div>
      <p>{content}</p>
    </motion.div>
  );
};

export default FeaturesBox;
