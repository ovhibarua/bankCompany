import React from "react";
import Button from "../Button";
import CountUp from "react-countup";

const CaseContent = ({ title, text, subText1, subText2, subText3 }) => {
  return (
    <div className="w-full xl:w-1/2">
      <h3 className="mb-3.5 text-center sm:text-start">{title}</h3>
      <p className="mb-14 text-center sm:text-start">{text}</p>
      <div className="mb-14 flex flex-col sm:flex-row items-center gap-12">
        <div>
          <h1 className="text-green-60 text-center sm:text-start">
            <CountUp end={78} duration={10} />%
          </h1>
          <p>{subText1}</p>
        </div>
        <div>
          <h1 className="text-green-60 text-center sm:text-start">
            <CountUp end={63} duration={10} />%
          </h1>
          <p>{subText2}</p>
        </div>
        <div>
          <h1 className="text-green-60 text-center sm:text-start">
            <CountUp end={91} duration={10} />%
          </h1>
          <p className="text-center sm:text-start">{subText3}</p>
        </div>
      </div>
      <div className="flex justify-center sm:justify-start">
        <Button
          addText={`Learn More`}
          addClass={`px-6 bg-grey-11 border-[1px] border-grey-15 text-white`}
        />
      </div>
    </div>
  );
};

export default CaseContent;
