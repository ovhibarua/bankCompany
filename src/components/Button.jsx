import React from "react";
import { motion } from "motion/react";
function Button({ addText, addClass, clickFunc }) {
  return (
    <motion.button
      onClick={clickFunc}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      className={`py-3.5 rounded-full cursor-pointer ${addClass}`}
    >
      {addText}
    </motion.button>
  );
}

export default Button;
