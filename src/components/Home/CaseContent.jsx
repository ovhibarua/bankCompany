import React from "react";
import Button from "../Button";
import CountUp from "react-countup";

const CaseContent = ({ title, text, subText1, subText2, subText3 }) => {
  return (
    <div className="w-1/2">
      <h3 className="mb-3.5">{title}</h3>
      <p className="mb-14">{text}</p>
      <div className="mb-14 flex items-center gap-12">
        <div>
          <h1 className="text-green-60">
            <CountUp end={78} duration={10} />%
          </h1>
          <p>{subText1}</p>
        </div>
        <div>
          <h1 className="text-green-60">
            <CountUp end={63} duration={10} />%
          </h1>
          <p>{subText2}</p>
        </div>
        <div>
          <h1 className="text-green-60">
            <CountUp end={91} duration={10} />%
          </h1>
          <p>{subText3}</p>
        </div>
      </div>
      <Button
        addText={`Learn More`}
        addClass={`px-6 bg-grey-11 border-[1px] border-grey-15 text-white`}
      />
    </div>
  );
};

export default CaseContent;
