import React from "react";
import Image from "../Image";
import leftDesign from "../../../public/assets/case/left_design.png";
import Button from "../Button";
const CTA = () => {
  return (
    <section className="py-24">
      <div className="p-16 border-[1px] bg-grey-11 border-grey-15 rounded-3xl relative z-10 flex items-center justify-between">
        <div className="absolute top-0 left-0 -z-10">
          <Image addImg={leftDesign} />
        </div>
        <div className="w-[70%]">
          <h3 className="mb-5 text-4xl">
            Start your financial journey with{" "}
            <span className="text-green-60">YourBank today!</span>
          </h3>
          <p>
            Ready to take control of your finances? Join YourBank now, and let
            us help you achieve your financial goals with our tailored solutions
            and exceptional customer service
          </p>
        </div>
        <Button
          addText={`Open Account`}
          addClass={`text-black bg-green-60 px-8`}
        />
      </div>
    </section>
  );
};

export default CTA;
