import React from "react";
import Image from "../Image";
import dot from "../../../public/assets/face/dotIcon.png";

const Coments = ({ pera, post }) => {
  return (
    <div>
      <div className="flex justify-between items-center gap-5 mb-12">
        <span className="w-[152px] h-[1px] bg-grey-15"></span>
        <Image addImg={dot} />
        <span className="w-[152px] h-[1px] bg-grey-15"></span>
      </div>
      <p className="text-center mb-12 text-white">{pera}</p>
      <p className="text-green-60 font-medium text-center">{post}</p>
    </div>
  );
};

export default Coments;
