import React from "react";
import { motion } from "motion/react";

const SectionTitle = ({ addClass, title, titleClr, text }) => {
  return (
    <div className={addClass}>
      <h2 className="mb-4 flex items-center justify-center md:justify-start gap-1.5">
        {title}
        <motion.span
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-green-60"
        >
          {titleClr}
        </motion.span>
      </h2>
      <p className="w-full xl:w-[910px] text-center md:text-start">{text}</p>
    </div>
  );
};

export default SectionTitle;
