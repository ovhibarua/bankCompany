import React from "react";
import Image from "../Image";
import corner from "../../assets/left_design.png";
import { motion } from "motion/react";

const CaseItem = ({ id, img, title }) => {
  return (
    <>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        key={id}
        className="p-6 lg:p-8 rounded-2xl border-[1px] bg-grey-10 border-grey-15 flex flex-col items-center gap-6"
      >
        <div>
          <Image addImg={img} />
        </div>
        <h6 className="text-center">{title}</h6>
      </motion.div>
      <motion.div
        initial={{ y: -30, x: -30, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 -z-10"
      >
        <Image addImg={corner} />
      </motion.div>
    </>
  );
};

export default CaseItem;
