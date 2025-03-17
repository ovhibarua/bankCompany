import React from "react";
import Image from "../Image";
import corner from "../../assets/left_design.png";

const CaseItem = ({ id, img, title }) => {
  return (
    <>
      <div
        key={id}
        className="p-8 rounded-2xl border-[1px] bg-grey-10 border-grey-15 flex flex-col items-center gap-6"
      >
        <div>
          <Image addImg={img} />
        </div>
        <h6 className="text-center">{title}</h6>
      </div>
      <div className="absolute top-0 left-0 -z-10">
        <Image addImg={corner} />
      </div>
    </>
  );
};

export default CaseItem;
