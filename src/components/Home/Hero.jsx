import React from "react";
import Image from "../Image";
import check from "../../../public/assets/checkIcon.png";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="w-1/2">
      <div className="flex items-center gap-1.5 pl-3 pr-6 py-2.5 rounded-full mb-4 bg-grey-15 w-fit">
        <div>
          <Image addImg={check} />
        </div>
        <p>No LLC Required, No Credit Check.</p>
      </div>
      <h2 className="mb-3.5">
        Welcome to YourBank Empowering Your{" "}
        <span className="text-green-60">Financial Journey</span>
      </h2>
      <p className="mb-12">
        At YourBank, our mission is to provide comprehensive banking solutions
        that empower individuals and businesses to achieve their financial
        goals. We are committed to delivering personalized and innovative
        services that prioritize our customers' needs.
      </p>
      <Button addText={`Open Account`} />
    </div>
  );
};

export default Hero;
